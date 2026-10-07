/**
 * HAYYAT'S JEWELS — Shopping Bag Management
 */

/**
 * Generate a deterministic, URL-safe cart item key
 * @param {string} productId 
 * @param {object} options 
 * @returns {string} cart key
 */
function generateCartKey(productId, options = {}) {
  const optPart = Object.entries(options || {})
    .filter(([_, v]) => v != null && v !== '')
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([k, v]) => `${k}:${v}`)
    .join('_');
  return optPart ? `${productId}__${optPart}` : `${productId}`;
}

function getCart() {
  try {
    return JSON.parse(localStorage.getItem('hayyat-cart') || '[]');
  } catch (e) {
    return [];
  }
}

function saveCart(cart) {
  localStorage.setItem('hayyat-cart', JSON.stringify(cart));
  updateCounts();
}

function addToCart(product, options = {}, qty = 1) {
  const cart = getCart();
  const key = generateCartKey(product.id, options);
  
  // Find matching line by new clean key or legacy key
  const existingLine = cart.find(x => 
    x.key === key || 
    (x.productId === product.id && JSON.stringify(x.options || {}) === JSON.stringify(options || {}))
  );

  if (existingLine) {
    existingLine.qty += qty;
    existingLine.key = key; // Normalize key
  } else {
    cart.push({
      key,
      productId: product.id,
      qty,
      options
    });
  }

  saveCart(cart);

  if (typeof toast === 'function') {
    toast(`Added ${product.name} to your bag`, { product, options });
  }
}

function removeFromCart(key) {
  if (!key) return;
  const decoded = decodeURIComponent(key);
  const cart = getCart();

  const updatedCart = cart.filter(x => {
    if (x.key === key || x.key === decoded) return false;
    const computedKey = generateCartKey(x.productId, x.options);
    if (computedKey === key || computedKey === decoded) return false;
    return true;
  });

  saveCart(updatedCart);

  // If currently on bag page, re-render immediately to refresh item list, subtotal, and total
  if (typeof renderPage === 'function' && window.currentPage === 'bag') {
    renderPage();
  }

  if (typeof toast === 'function') {
    toast('Item removed from your bag');
  }
}

function updateQty(key, qty) {
  if (!key) return;
  if (qty <= 0) {
    removeFromCart(key);
    return;
  }

  const decoded = decodeURIComponent(key);
  const cart = getCart();
  const item = cart.find(i => 
    i.key === key || 
    i.key === decoded || 
    generateCartKey(i.productId, i.options) === key ||
    generateCartKey(i.productId, i.options) === decoded
  );

  if (item) {
    item.qty = Math.max(1, qty);
    saveCart(cart);
    if (typeof renderPage === 'function' && window.currentPage === 'bag') {
      renderPage();
    }
  }
}

function cartTotal() {
  return getCart().reduce((sum, item) => {
    const product = productById(item.productId);
    return sum + (product ? product.price * item.qty : 0);
  }, 0);
}

function productById(id) {
  return PRODUCTS.find(p => p.id === id) || PRODUCTS[0];
}

function updateCounts() {
  const totalCount = getCart().reduce((sum, item) => sum + item.qty, 0);
  document.querySelectorAll('[data-bag-count]').forEach(el => {
    el.textContent = totalCount;
    el.hidden = totalCount === 0;
  });
}
