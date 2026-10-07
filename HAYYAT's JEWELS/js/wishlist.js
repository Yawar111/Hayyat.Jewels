/**
 * HAYYAT'S JEWELS — Wishlist Management
 */

function getWish() {
  try {
    return JSON.parse(localStorage.getItem('hayyat-wishlist') || '[]');
  } catch (e) {
    return [];
  }
}

function toggleWish(id) {
  let wish = getWish();
  if (wish.includes(id)) {
    wish = wish.filter(x => x !== id);
    toast('Removed from saved items');
  } else {
    wish = [...wish, id];
    toast('Saved to your wishlist');
  }
  localStorage.setItem('hayyat-wishlist', JSON.stringify(wish));
  updateWishlist();
}

function updateWishlist() {
  const wish = getWish();
  
  document.querySelectorAll('[data-wish-count]').forEach(el => {
    el.textContent = wish.length;
    el.hidden = wish.length === 0;
  });

  document.querySelectorAll('[data-wish-id]').forEach(el => {
    const isSaved = wish.includes(el.dataset.wishId);
    el.classList.toggle('is-saved', isSaved);
    el.innerHTML = isSaved ? '♥' : '♡';
  });
}