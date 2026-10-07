/**
 * HAYYAT'S JEWELS — Main Application Controller & View Renderer
 */

const page = document.getElementById('site');
const currentPage = page?.dataset.page || 'home';
window.currentPage = currentPage;

/**
 * Luxury On-Screen Notification / Toast Helper
 */
function toast(msg, options = {}) {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.append(container);
  }

  const toastItem = document.createElement('div');
  toastItem.className = 'toast show';

  if (options.product) {
    const optsText = Object.values(options.options || {}).filter(Boolean).join(' · ');
    toastItem.innerHTML = `
      <div class="toast-content">
        <div class="toast-thumb">
          <img src="${options.product.images[0]}" alt="${options.product.name}">
        </div>
        <div class="toast-text">
          <p class="toast-title">✓ Added to Your Bag</p>
          <p class="toast-subtitle">${options.product.name}</p>
          ${optsText ? `<p class="toast-opts">${optsText}</p>` : ''}
        </div>
        <a href="bag.html" class="toast-action">View Bag →</a>
        <button class="toast-close" onclick="this.closest('.toast').remove()" aria-label="Close">✕</button>
      </div>
    `;
  } else {
    toastItem.innerHTML = `
      <div class="toast-content simple">
        <span style="font-size: 16px;">✨</span>
        <span>${msg}</span>
        <button class="toast-close" onclick="this.closest('.toast').remove()" aria-label="Close">✕</button>
      </div>
    `;
  }

  container.appendChild(toastItem);

  // Animate navbar bag icon badge
  const bagIcon = document.querySelector('a[href="bag.html"]');
  if (bagIcon) {
    bagIcon.classList.add('bag-pulse');
    setTimeout(() => bagIcon.classList.remove('bag-pulse'), 800);
  }

  setTimeout(() => {
    toastItem.classList.add('toast-fadeout');
    setTimeout(() => toastItem.remove(), 400);
  }, 4500);
}

/**
 * Global Header Component
 */
function header() {
  return `
    <header class="site-nav">
      <button class="icon-btn mobile-toggle" aria-label="Open menu" onclick="document.querySelector('.mobile-drawer').classList.toggle('open')">
        <span>☰</span>
      </button>
      
      <a class="brand" href="index.html">HAYYAT's JEWELS</a>
      
      <nav class="nav-links">
        <a href="collections.html" class="${currentPage === 'collections' ? 'active' : ''}">Collections</a>
        <a href="bridal.html" class="${currentPage === 'bridal' ? 'active' : ''}">Bridal</a>
        <a href="rings.html" class="${currentPage === 'rings' ? 'active' : ''}">Rings</a>
        <a href="necklaces.html" class="${currentPage === 'necklaces' ? 'active' : ''}">Necklaces</a>
        <a href="earrings.html" class="${currentPage === 'earrings' ? 'active' : ''}">Earrings</a>
        <a href="bracelets.html" class="${currentPage === 'bracelets' ? 'active' : ''}">Bracelets</a>
        <a href="about.html" class="${currentPage === 'about' ? 'active' : ''}">The House</a>
        <a href="craftsmanship.html" class="${currentPage === 'craftsmanship' ? 'active' : ''}">Craftsmanship</a>
        <a href="journal.html" class="${currentPage === 'journal' ? 'active' : ''}">Journal</a>
        <a href="contact.html" class="${currentPage === 'contact' ? 'active' : ''}">Contact</a>
      </nav>
      
      <div class="nav-actions">
        <button class="icon-btn" aria-label="Search" onclick="openSearch()">
          <span style="font-size: 16px;">⌕</span>
        </button>
        <a class="icon-btn" href="bag.html" aria-label="Shopping bag">
          <span>🛍</span>
          <b class="counter" data-bag-count hidden>0</b>
        </a>
        <button class="icon-btn" aria-label="Toggle theme" onclick="toggleTheme()">
          <span>◐</span>
        </button>
      </div>
    </header>

    <div class="mobile-drawer">
      <a href="collections.html">Collections</a>
      <a href="bridal.html">Bridal</a>
      <a href="rings.html">Rings</a>
      <a href="necklaces.html">Necklaces</a>
      <a href="earrings.html">Earrings</a>
      <a href="bracelets.html">Bracelets</a>
      <a href="about.html">The House</a>
      <a href="craftsmanship.html">Craftsmanship</a>
      <a href="journal.html">Journal</a>
      <a href="reviews.html">Client Reviews</a>
      <a href="consultation.html">Private Consultation</a>
      <a href="contact.html">Contact</a>
    </div>

    <div class="search-panel" id="search-panel">
      <div class="container" style="position:relative;">
        <button class="icon-btn close-search" onclick="closeSearch()" aria-label="Close search">✕</button>
        <input id="search-input" placeholder="Search diamonds, 18k gold, sapphire..." oninput="renderSearch(this.value)">
        <div class="search-results" id="search-results"></div>
      </div>
    </div>
  `;
}

/**
 * Global Footer Component
 */
function footer() {
  return `
    <footer class="site-footer">
      <div class="container footer-grid">
        <div>
          <a class="brand" href="index.html">HAYYAT's JEWELS</a>
          <p class="muted" style="margin-top: 18px; max-width: 280px; line-height: 1.7;">
            Timeless pieces. Handcrafted with fine materials and made to be remembered for generations.
          </p>
          <p class="muted" style="font-size: 12px; margin-top: 14px;">
            Mayfair Atelier · London W1
          </p>
        </div>
        
        <div>
          <h4>Collections</h4>
          <a href="collections.html">All Pieces</a>
          <a href="bridal.html">Bridal & Engagement</a>
          <a href="rings.html">Fine Rings</a>
          <a href="necklaces.html">Necklaces & Pendants</a>
          <a href="earrings.html">Earrings</a>
          <a href="bracelets.html">Bracelets & Cuffs</a>
        </div>
        
        <div>
          <h4>The House</h4>
          <a href="about.html">About the Maison</a>
          <a href="craftsmanship.html">Atelier Craftsmanship</a>
          <a href="journal.html">Editorial Journal</a>
          <a href="reviews.html">Client Testimonials</a>
        </div>
        
        <div>
          <h4>Private Client Care</h4>
          <a href="consultation.html">Book Consultation</a>
          <a href="inquiry.html">WhatsApp Order Concierge</a>
          <a href="contact.html">London Atelier Boutique</a>
          <a href="faq.html">Care & Sizing Guide</a>
        </div>
      </div>
      
      <div class="container footer-bottom">
        <span>© 2026 HAYYAT's JEWELS. All rights reserved. High Jewellery & Fine Craftsmanship.</span>
        <span>Ethically Sourced Stones · 18K Solid Gold · Certified Conflict-Free</span>
      </div>
    </footer>
  `;
}

/**
 * Product Card Component
 */
function card(p) {
  const wishList = getWish();
  const isSaved = wishList.includes(p.id);

  return `
    <article class="product-card" data-reveal>
      <button class="wish ${isSaved ? 'is-saved' : ''}" data-wish-id="${p.id}" onclick="toggleWish('${p.id}')" aria-label="Save ${p.name}">
        ${isSaved ? '♥' : '♡'}
      </button>
      <a href="product.html?slug=${p.slug}">
        <div class="product-image">
          <img src="${p.images[0]}" alt="${p.name}" loading="lazy">
        </div>
        <div class="product-meta">
          <p class="product-category">${p.category} · ${p.collection}</p>
          <h3 class="product-title">${p.name}</h3>
          <div class="price">${money(p.price)}</div>
        </div>
      </a>
    </article>
  `;
}

/**
 * Product Grid Wrapper
 */
function productGrid(list = PRODUCTS) {
  if (!list.length) {
    return `<div class="empty"><h3>No pieces found in this category.</h3><p>Explore our other collections or speak with our concierge.</p></div>`;
  }
  return `<div class="product-grid">${list.map(card).join('')}</div>`;
}

/**
 * Master Page Layout Assembler
 */
function layout(content) {
  if (!page) return;
  page.innerHTML = header() + `<main class="page-enter">${content}</main>` + footer();
  updateCounts();
  updateWishlist();
  setupReveal();
  document.querySelector('.site-nav')?.classList.toggle('scrolled', window.scrollY > 15);
}

/**
 * Intersection Observer for Reveal Animation
 */
function setupReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });

  document.querySelectorAll('[data-reveal]').forEach(el => observer.observe(el));
}

/**
 * Theme Support (Light / Dark Mode)
 */
function themeInit() {
  const saved = localStorage.getItem('hayyat-theme');
  const theme = saved || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  document.documentElement.dataset.theme = theme;
  document.body.dataset.theme = theme;
}

function toggleTheme() {
  const current = document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light';
  const nextTheme = current === 'dark' ? 'light' : 'dark';
  document.documentElement.dataset.theme = nextTheme;
  document.body.dataset.theme = nextTheme;
  localStorage.setItem('hayyat-theme', nextTheme);
}

/**
 * Search Panel Handlers
 */
function openSearch() {
  const panel = document.getElementById('search-panel');
  if (panel) {
    panel.classList.add('open');
    setTimeout(() => document.getElementById('search-input')?.focus(), 100);
  }
}

function closeSearch() {
  const panel = document.getElementById('search-panel');
  if (panel) panel.classList.remove('open');
}

function renderSearch(query) {
  const results = searchProducts(query);
  const container = document.getElementById('search-results');
  if (!container) return;

  if (!query.trim()) {
    container.innerHTML = `<p class="muted" style="grid-column: 1/-1; padding: 20px 0;">Begin typing to search by gemstone (diamond, sapphire, emerald), metal (18k gold), collection or piece name.</p>`;
    return;
  }

  if (results.length) {
    container.innerHTML = results.map(item => {
      if (item.slug) {
        return card(item);
      }
      return `
        <article class="review-card" style="padding: 24px; background: var(--card); border-radius: 4px;">
          <p class="eyebrow">${item.category}</p>
          <h3 style="font-size: 1.5rem; margin: 8px 0;">${item.title}</h3>
          <p class="muted" style="font-size: 12px;">${item.date || 'Editorial Article'}</p>
          <a class="btn secondary" style="margin-top: 14px;" href="journal.html">Read Story</a>
        </article>
      `;
    }).join('');
    updateWishlist();
  } else {
    container.innerHTML = `<p class="muted" style="grid-column: 1/-1; padding: 30px 0;">No matching jewels found for "${query}". Please check spelling or contact our private atelier.</p>`;
  }
}

/**
 * Home Page View
 */
function home() {
  return `
    <section class="hero">
      <div class="container hero-content">
        <p class="eyebrow">Haute Joaillerie · Handcrafted Since 1986</p>
        <h1>Timeless Pieces.<br><em>Made to Be Remembered.</em></h1>
        <p>Discover refined fine jewellery forged in 18K solid gold and rare precious stones, crafted to celebrate moments that live forever.</p>
        <div class="hero-actions">
          <a class="btn" href="collections.html">Explore Collections</a>
          <a class="btn secondary" href="bridal.html">Discover Bridal Edit</a>
        </div>
      </div>
    </section>

    <!-- Curated Categories -->
    <section class="section">
      <div class="container">
        <div class="section-head">
          <div>
            <p class="eyebrow">The Edit</p>
            <h2>Find your<br><em>signature silhouette.</em></h2>
          </div>
          <p>Curated silhouettes for the days you mark, the milestones you hold, and the memories you keep close.</p>
        </div>
        
        <div class="collection-grid">
          ${[
            ['Bridal & Heirlooms', IMG.bridal, 'bridal.html'],
            ['Fine Rings', IMG.rings, 'rings.html'],
            ['Necklaces', IMG.necklaces, 'necklaces.html'],
            ['Earrings', IMG.earrings, 'earrings.html'],
            ['Bracelets & Cuffs', IMG.bracelets, 'bracelets.html'],
            ['Sculpted Bangles', IMG.bangles, 'collections.html']
          ].map(([title, img, url]) => `
            <a class="collection-card" href="${url}" data-reveal>
              <img src="${img}" alt="${title}" loading="lazy">
              <div class="card-overlay"></div>
              <figcaption>${title}</figcaption>
            </a>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- Signature Pieces -->
    <section class="section" style="padding-top: 20px;">
      <div class="container">
        <div class="section-head">
          <div>
            <p class="eyebrow">The Signature Collection</p>
            <h2>Quietly<br><em>iconic.</em></h2>
          </div>
          <a class="btn secondary" href="collections.html">View All Pieces</a>
        </div>
        ${productGrid(PRODUCTS.filter(p => p.featured).slice(0, 3))}
      </div>
    </section>

    <!-- Atelier Feature Split -->
    <section class="section">
      <div class="container">
        <div class="feature-split" data-reveal>
          <div class="feature-image">
            <img src="${IMG.craftsmanship}" alt="Master Goldsmith Handcrafting a Fine Gold Necklace" loading="lazy">
          </div>
          <div class="feature-copy">
            <p class="eyebrow">The Art Behind Every Piece</p>
            <h2>Made by hand.<br><em>Held by heart.</em></h2>
            <p>From the initial hand-drawn sketch to the final precision stone setting, every HAYYAT's creation passes through the hands of master goldsmiths who honor the art of fine jewellery making.</p>
            <div style="margin-top: 30px;">
              <a class="btn" href="craftsmanship.html">Discover Craftsmanship</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Jewellery Stories -->
    <section class="section">
      <div class="container">
        <div class="section-head">
          <div>
            <p class="eyebrow">Jewellery Stories</p>
            <h2>For the moments<br><em>that matter most.</em></h2>
          </div>
        </div>
        <div class="story-grid">
          <a class="story-card" href="bridal.html" data-reveal>
            <img class="story-card-bg" src="https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?auto=format&fit=crop&w=800&q=90" alt="Engagement & Wedding Edit" loading="lazy">
            <div class="story-card-overlay"></div>
            <div class="story-card-content">
              <p class="eyebrow">01 · Bridal</p>
              <h3>Engagement & Wedding Edit</h3>
              <span class="story-card-link">Discover Edit →</span>
            </div>
          </a>
          <a class="story-card" href="collections.html" data-reveal>
            <img class="story-card-bg" src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=800&q=90" alt="Everyday 18K Solid Gold" loading="lazy">
            <div class="story-card-overlay"></div>
            <div class="story-card-content">
              <p class="eyebrow">02 · Daily Luxury</p>
              <h3>Everyday 18K Solid Gold</h3>
              <span class="story-card-link">Discover Edit →</span>
            </div>
          </a>
          <a class="story-card" href="collections.html" data-reveal>
            <img class="story-card-bg" src="https://images.unsplash.com/photo-1608042314453-ae338d80c427?auto=format&fit=crop&w=800&q=90" alt="Rare Gemstone Statements" loading="lazy">
            <div class="story-card-overlay"></div>
            <div class="story-card-content">
              <p class="eyebrow">03 · High Jewellery</p>
              <h3>Rare Gemstone Statements</h3>
              <span class="story-card-link">Discover Edit →</span>
            </div>
          </a>
        </div>
      </div>
    </section>

    <!-- Consultation CTA -->
    <section class="section" style="padding-top: 10px; margin-bottom: 20px;">
      <div class="container cta-box" data-reveal>
        <p class="eyebrow">Begin Your Personal Journey</p>
        <h2>Find the piece<br><em>that becomes uniquely yours.</em></h2>
        <p class="muted" style="max-width: 480px; margin: 18px auto 28px;">
          Meet with our bespoke specialists in our Mayfair atelier or arrange a virtual private appointment.
        </p>
        <a class="btn gold" href="consultation.html">Book a Private Consultation</a>
      </div>
    </section>
  `;
}

/**
 * Product Listing View (Collections, Rings, Bridal, etc.)
 */
function listing(title, desc, filter) {
  let list = PRODUCTS;
  if (filter) {
    const f = filter.toLowerCase();
    list = PRODUCTS.filter(p => p.category.toLowerCase() === f || p.collection.toLowerCase() === f);
  }

  return `
    <section class="page-hero">
      <div class="container">
        <p class="eyebrow">HAYYAT's JEWELS · Haute Joaillerie</p>
        <h1>${title}</h1>
        <p class="muted" style="max-width: 520px; font-size: 16px; margin-top: 14px;">${desc}</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="filters">
          <a class="filter ${!filter ? 'active' : ''}" href="collections.html">All Pieces</a>
          <a class="filter ${filter === 'rings' ? 'active' : ''}" href="rings.html">Rings</a>
          <a class="filter ${filter === 'necklaces' ? 'active' : ''}" href="necklaces.html">Necklaces</a>
          <a class="filter ${filter === 'earrings' ? 'active' : ''}" href="earrings.html">Earrings</a>
          <a class="filter ${filter === 'bracelets' ? 'active' : ''}" href="bracelets.html">Bracelets</a>
          <a class="filter ${filter === 'bridal' ? 'active' : ''}" href="bridal.html">Bridal Edit</a>
        </div>
        ${productGrid(list)}
      </div>
    </section>
  `;
}

/**
 * Product Detail Page View
 */
function productPage() {
  const urlParams = new URLSearchParams(location.search);
  const p = productBySlug(urlParams.get('slug'));
  const isSaved = getWish().includes(p.id);

  return `
    <section class="section" style="padding-top: 140px;">
      <div class="container product-layout">
        <div>
          <div class="gallery-main">
            <img id="main-product-image" src="${p.images[0]}" alt="${p.name}">
          </div>
          <div class="thumbs">
            ${p.images.map((im, idx) => `
              <img 
                src="${im}" 
                class="${idx === 0 ? 'active' : ''}" 
                alt="${p.name} angle ${idx + 1}"
                onclick="
                  document.getElementById('main-product-image').src='${im}';
                  this.parentNode.querySelectorAll('img').forEach(x => x.classList.remove('active'));
                  this.classList.add('active');
                "
              >
            `).join('')}
          </div>
        </div>

        <div class="product-info">
          <p class="eyebrow">${p.collection} · ${p.category}</p>
          <h1>${p.name}</h1>
          <div class="price" style="font-size: 26px; margin: 16px 0;">${money(p.price)}</div>
          <p class="description" style="line-height: 1.7; font-size: 15px; margin-bottom: 24px;">${p.description}</p>
          
          <div class="option-group">
            <label>Precious Metal</label>
            <div class="options">
              ${p.colors.map((c, i) => `
                <button class="option ${i === 0 ? 'selected' : ''}" data-option="metal" onclick="selectOption(this)">${c}</button>
              `).join('')}
            </div>
          </div>

          <div class="option-group">
            <label>Featured Stone: <strong>${p.stone}</strong></label>
            <div class="options">
              ${['Diamond', 'Emerald', 'Sapphire', 'Pearl', 'Ruby'].map(st => `
                <button class="option ${st === p.stone ? 'selected' : ''}" data-option="stone" onclick="selectOption(this)">${st}</button>
              `).join('')}
            </div>
          </div>

          ${p.sizes.length ? `
            <div class="option-group">
              <label>Select Size</label>
              <div class="options">
                ${p.sizes.map((s, i) => `
                  <button class="option ${i === 0 ? 'selected' : ''}" data-option="size" onclick="selectOption(this)">${s}</button>
                `).join('')}
              </div>
            </div>
          ` : ''}

          <div class="field" style="margin: 24px 0;">
            <label>Custom Engraving or Atelier Note</label>
            <textarea id="custom-note" placeholder="Share specific sizing requirements, ring engravings, or bespoke requests..."></textarea>
          </div>

          <div style="display: flex; gap: 12px; flex-wrap: wrap; margin-bottom: 30px;">
            <button class="btn gold" style="flex: 1; min-width: 180px;" onclick="addProduct('${p.id}', this)">Add to Bag</button>
            <button class="btn secondary wish-action ${isSaved ? 'is-saved' : ''}" data-wish-id="${p.id}" onclick="toggleWish('${p.id}')">
              ${isSaved ? '♥ Saved' : '♡ Save'}
            </button>
            <a class="btn secondary" href="consultation.html">Book Consultation</a>
          </div>

          <div class="detail-list">
            <details open>
              <summary>Piece Specifications</summary>
              <p class="muted">
                <strong>Metal:</strong> ${p.metal} (${p.purity} Fine Hallmark)<br>
                <strong>Stone:</strong> Natural ${p.stone}<br>
                <strong>Total Weight:</strong> ${p.weight}<br>
                <strong>Dimensions:</strong> ${p.dimensions}
              </p>
            </details>
            <details>
              <summary>Materials & Atelier Care</summary>
              <p class="muted">
                Crafted exclusively in certified 18K solid gold and ethically sourced conflict-free gemstones. Includes complimentary annual ultrasonic cleaning and prong inspection at our Mayfair atelier.
              </p>
            </details>
            <details>
              <summary>Bespoke Delivery & Presentation</summary>
              <p class="muted">
                Delivered in our signature embossed presentation box with a numbered certificate of authenticity and personal guarantee. Handcrafted made-to-order pieces require 2–3 weeks.
              </p>
            </details>
          </div>
        </div>
      </div>
    </section>

    <!-- Recommendations -->
    <section class="section">
      <div class="container">
        <div class="section-head">
          <div>
            <p class="eyebrow">Complete the Suite</p>
            <h2>Pairs beautifully<br><em>with your choice.</em></h2>
          </div>
        </div>
        ${productGrid(PRODUCTS.filter(x => x.id !== p.id).slice(0, 3))}
      </div>
    </section>
  `;
}

function selectOption(el) {
  el.parentNode.querySelectorAll('.option').forEach(x => x.classList.remove('selected'));
  el.classList.add('selected');
}

function addProduct(id, btnEl) {
  const p = productById(id);
  const options = {};
  document.querySelectorAll('.option.selected').forEach(x => {
    if (x.dataset.option) {
      options[x.dataset.option] = x.textContent;
    }
  });
  const customNote = document.getElementById('custom-note')?.value || '';
  if (customNote) options.customization = customNote;
  
  addToCart(p, options);

  if (btnEl) {
    const origText = btnEl.innerHTML;
    btnEl.innerHTML = '✓ Added to Bag';
    btnEl.classList.add('btn-added');
    setTimeout(() => {
      btnEl.innerHTML = origText;
      btnEl.classList.remove('btn-added');
    }, 2200);
  }
}

/**
 * Shopping Bag View
 */
function bag() {
  const cart = getCart();

  return `
    <section class="page-hero">
      <div class="container">
        <p class="eyebrow">Your Selection</p>
        <h1>Your Shopping Bag</h1>
      </div>
    </section>

    <section class="section">
      <div class="container bag-layout">
        <div>
          ${cart.length ? cart.map(item => {
            const p = productById(item.productId);
            const optsString = Object.entries(item.options || {})
              .map(([k, v]) => `${k.toUpperCase()}: ${v}`)
              .join(' · ');

            return `
              <div class="bag-line">
                <div class="bag-thumb">
                  <img src="${p.images[0]}" alt="${p.name}">
                </div>
                <div>
                  <p class="eyebrow">${p.category} · ${p.collection}</p>
                  <h3>${p.name}</h3>
                  <p class="muted" style="font-size: 12px; margin: 4px 0 12px;">${optsString || 'Standard Specification'}</p>
                  <div style="display: flex; gap: 8px; align-items: center; flex-wrap: wrap;">
                    <button type="button" class="filter qty-btn" data-cart-qty="${encodeURIComponent(item.key)}" data-new-qty="${item.qty - 1}" onclick="updateQty('${encodeURIComponent(item.key)}', ${item.qty - 1})" aria-label="Decrease quantity">−</button>
                    <span style="padding: 0 10px; font-weight: 600; min-width: 26px; text-align: center;">${item.qty}</span>
                    <button type="button" class="filter qty-btn" data-cart-qty="${encodeURIComponent(item.key)}" data-new-qty="${item.qty + 1}" onclick="updateQty('${encodeURIComponent(item.key)}', ${item.qty + 1})" aria-label="Increase quantity">+</button>
                    <button type="button" class="filter remove-btn" data-cart-remove="${encodeURIComponent(item.key)}" onclick="removeFromCart('${encodeURIComponent(item.key)}')" aria-label="Remove item">Remove</button>
                  </div>
                </div>
                <div class="line-total">${money(p.price * item.qty)}</div>
              </div>
            `;
          }).join('') : `
            <div class="empty">
              <h2>Your bag is currently empty.</h2>
              <p class="muted" style="margin-top: 10px;">Discover timeless pieces curated with exceptional artistry.</p>
              <a class="btn gold" style="margin-top: 24px;" href="collections.html">Explore the Collection</a>
            </div>
          `}
        </div>

        ${cart.length ? `
          <aside class="summary-card">
            <p class="eyebrow">Order Summary</p>
            <div class="summary-row">
              <span>Subtotal</span>
              <strong>${money(cartTotal())}</strong>
            </div>
            <div class="summary-row">
              <span>Insured Courier Delivery</span>
              <span>Complimentary</span>
            </div>
            <div class="summary-row">
              <span>Atelier Presentation Box</span>
              <span>Included</span>
            </div>
            <div class="summary-row total">
              <span>Total Estimated</span>
              <strong>${money(cartTotal())}</strong>
            </div>
            <a class="btn gold" style="width: 100%; margin-top: 24px; text-align: center;" href="inquiry.html">
              Complete Your Inquiry
            </a>
            <p class="muted" style="font-size: 11px; text-align: center; margin-top: 14px;">
              Direct WhatsApp concierge assistance & private invoice settlement
            </p>
          </aside>
        ` : ''}
      </div>
    </section>
  `;
}

/**
 * WhatsApp Inquiry View
 */
function inquiry() {
  const cart = getCart();

  return `
    <section class="page-hero">
      <div class="container">
        <p class="eyebrow">Personal Atelier Concierge</p>
        <h1>Complete Your Inquiry</h1>
        <p class="muted" style="max-width: 500px; margin-top: 12px;">
          Share your details and our senior jewellery advisor will connect with you directly via WhatsApp with high-definition video previews and bespoke guidance.
        </p>
      </div>
    </section>

    <section class="section">
      <div class="container bag-layout">
        <form class="form-grid" onsubmit="sendInquiry(event)">
          <div class="field">
            <label>Full Name *</label>
            <input name="name" placeholder="e.g. Eleanor Vance" required>
          </div>
          <div class="field">
            <label>Phone / WhatsApp Number *</label>
            <input name="phone" placeholder="+44 7911 123456" required>
          </div>
          <div class="field">
            <label>Email Address</label>
            <input name="email" type="email" placeholder="eleanor@example.com">
          </div>
          <div class="field">
            <label>City & Country</label>
            <input name="city" placeholder="London, United Kingdom">
          </div>
          <div class="field full">
            <label>Delivery Address or Atelier Collection</label>
            <input name="address" placeholder="Street address or 'Mayfair Atelier Collection'">
          </div>
          <div class="field">
            <label>Preferred Contact Channel</label>
            <select name="contact">
              <option value="WhatsApp">WhatsApp (Fastest Response)</option>
              <option value="Phone Call">Private Phone Call</option>
              <option value="Email">Email Consultation</option>
            </select>
          </div>
          <div class="field full">
            <label>Bespoke Requirements or Notes</label>
            <textarea name="notes" placeholder="Specify any custom ring sizes, engraving text, preferred delivery dates, or gemstone preferences..."></textarea>
          </div>
          <div class="field full">
            <button class="btn gold" type="submit" style="padding: 16px 28px; font-size: 11px;">
              Send Inquiry via WhatsApp Concierge →
            </button>
          </div>
        </form>

        <aside class="summary-card">
          <p class="eyebrow">Inquiry Summary</p>
          ${cart.map(item => {
            const p = productById(item.productId);
            return `
              <div class="summary-row">
                <span>${p.name} × ${item.qty}</span>
                <strong>${money(p.price * item.qty)}</strong>
              </div>
            `;
          }).join('') || '<p class="muted">Your bag is currently empty.</p>'}
          <div class="summary-row total">
            <span>Total Value</span>
            <strong>${money(cartTotal())}</strong>
          </div>
          <div style="margin-top: 20px; font-size: 12px; color: var(--muted); line-height: 1.6;">
            🛡️ <strong>HAYYAT Guarantee:</strong> All pieces include hallmark certifications, luxury insurance transit, and lifetime craftsmanship guarantee.
          </div>
        </aside>
      </div>
    </section>
  `;
}

function sendInquiry(e) {
  e.preventDefault();
  const formData = Object.fromEntries(new FormData(e.target));
  const url = whatsappUrl(orderMessage(formData));
  window.open(url, '_blank', 'noopener');
  toast('Opening WhatsApp Concierge...');
}

/**
 * Editorial Pages (About, Craftsmanship, Bridal, Contact, FAQ, Consultation)
 */
function editorial(key) {
  const data = {
    bridal: [
      'Made for the Moment.',
      'A considered bridal edit for your most beautiful yes — Engagement rings, wedding bands, and bridal suites crafted to shine for a lifetime.',
      IMG.bridal
    ],
    about: [
      'The House of HAYYAT’s.',
      'A modern high jewellery maison rooted in timeless elegance and the enduring belief that the pieces we keep become part of our history.',
      IMG.goldTexture
    ],
    craftsmanship: [
      'The Art Behind Every Piece.',
      'Seven quiet stages of uncompromising precision. From pure bullion alloy to flawless pavé setting under stereomicroscopes.',
      IMG.craftsmanship
    ],
    contact: [
      'Visit the Mayfair Atelier.',
      'Step into the private world of HAYYAT’s JEWELS in London. Experience our creations in private comfort.',
      IMG.boutique
    ],
    consultation: [
      'A Conversation, Privately.',
      'From selecting the perfect certified diamond to forging a one-of-a-kind bespoke piece, our gemologists are here to guide you.',
      IMG.consultation
    ],
    faq: [
      'Frequently Answered Questions.',
      'Everything you need to know about bespoke commissions, conflict-free diamond certification, hallmarking, and care.',
      IMG.atelier
    ]
  };

  const [title, desc, img] = data[key] || ['HAYYAT’s Fine Jewels', 'Timeless pieces made to be remembered.', IMG.hero];

  let body = `
    <section class="page-hero">
      <div class="container">
        <p class="eyebrow">HAYYAT's JEWELS · The Maison</p>
        <h1>${title}</h1>
        <p class="muted" style="max-width: 540px; font-size: 16px; margin-top: 14px;">${desc}</p>
      </div>
    </section>

    <section class="section">
      <div class="container feature-split" data-reveal>
        <div class="feature-image">
          <img src="${img}" alt="${title}" loading="lazy">
        </div>
        <div class="feature-copy">
          <p class="eyebrow">Our Philosophy</p>
          <h2>Objects with<br><em>a point of view.</em></h2>
          <p>Every piece is conceived with an architectural sense of proportion, balanced weight, and fluid movement — then brought to life with patience and mastery.</p>
        </div>
      </div>
    </section>
  `;

  if (key === 'craftsmanship') {
    body += `
      <section class="section">
        <div class="container">
          <div class="section-head">
            <div>
              <p class="eyebrow">Our 7-Stage Process</p>
              <h2>From idea<br><em>to heirloom.</em></h2>
            </div>
          </div>
          <div class="story-grid">
            ${[
              ['1. Gouache Sketch & Concept', 'Hand-painted gouache illustrations defining scale, stone cuts, and light geometry.'],
              ['2. Precious Metal Formulation', 'Alloying 750‰ pure gold with copper and silver to achieve our signature warm gold patina.'],
              ['3. Master Casting & Forging', 'Precision investment casting followed by cold-forging to compact the metal crystalline lattice.'],
              ['4. Microscope Stone Setting', 'Individual prong and pavé seats carved under 40x magnification for flawless diamond alignment.'],
              ['5. Multi-Step Hand Polish', 'Tri-stage rouge polishing creating liquid-mirror luster without softening crisp bevel edges.'],
              ['6. London Assay Hallmarking', 'Independent verification and official British hallmark stamping for guaranteed purity.'],
              ['7. Final Gemological Audit', 'Rigorous 20-point inspection verifying stone security, symmetry, and perfection.']
            ].map(([stage, text], i) => `
              <div class="story-card stage-card" data-reveal>
                <p class="eyebrow">Stage 0${i + 1}</p>
                <h3>${stage}</h3>
                <p class="muted" style="font-size: 13px; margin-top: 8px; color: rgba(255,255,255,0.7);">${text}</p>
              </div>
            `).join('')}
          </div>
        </div>
      </section>
    `;
  }

  if (key === 'faq') {
    body += `
      <section class="section">
        <div class="container faq">
          ${[
            ['How do I determine my correct ring size?', 'We offer a complimentary sizing kit delivered to your home, or you may visit our London atelier for precision measurement. All rings include one complimentary resizing within 60 days.'],
            ['Are your diamonds and gemstones ethically sourced?', 'Yes, absolutely. We strictly adhere to the Kimberley Process and work exclusively with RJC (Responsible Jewellery Council) certified diamond cutters and mine-to-market colored gemstone suppliers.'],
            ['How long does a bespoke commission take?', 'Custom engagement rings and bespoke pieces typically take 3 to 4 weeks from 3D CAD approval to final delivery. Rush timelines can occasionally be accommodated by request.'],
            ['What is your gold quality guarantee?', 'Every HAYYAT piece is hallmarked in 18K Solid Gold (750 purity) or 950 Platinum by the UK Assay Office, ensuring international standards of metal integrity.'],
            ['Do you provide certificates of authenticity?', 'Every piece over 0.50ct includes a GIA or IGI laboratory report along with a signed HAYYAT’s JEWELS certificate of provenance.'],
            ['How should I care for my fine jewellery at home?', 'Gently cleanse gold and diamond pieces with warm water, mild dish soap, and a soft-bristle brush. Avoid wearing jewellery during rigorous exercise or exposure to chlorinated water.']
          ].map(([q, a]) => `
            <details>
              <summary>${q}</summary>
              <p class="muted" style="padding: 12px 0 20px; line-height: 1.7; font-size: 15px;">${a}</p>
            </details>
          `).join('')}
        </div>
      </section>
    `;
  }

  if (key === 'consultation') {
    body += `
      <section class="section">
        <div class="container">
          <form class="form-grid" onsubmit="sendConsult(event)" style="max-width: 800px; margin: auto;">
            <div class="field">
              <label>Your Name *</label>
              <input name="name" required placeholder="Full Name">
            </div>
            <div class="field">
              <label>WhatsApp / Phone *</label>
              <input name="phone" required placeholder="+44 7000 000000">
            </div>
            <div class="field">
              <label>Email Address *</label>
              <input name="email" type="email" required placeholder="email@domain.com">
            </div>
            <div class="field">
              <label>Preferred Date</label>
              <input name="date" type="date">
            </div>
            <div class="field">
              <label>Consultation Focus</label>
              <select name="type">
                <option>Bespoke Engagement Ring</option>
                <option>Bridal Suite & Wedding Bands</option>
                <option>Custom Heirloom Redesign</option>
                <option>Fine Jewellery Gift Selection</option>
                <option>Private Atelier Viewing (London)</option>
              </select>
            </div>
            <div class="field">
              <label>Estimated Budget (Optional)</label>
              <input name="budget" placeholder="e.g. $3,000 – $10,000+">
            </div>
            <div class="field full">
              <label>Tell Us About Your Vision</label>
              <textarea name="notes" placeholder="Describe any preferred diamond cuts, metal choices, personal milestones, or inspirations..."></textarea>
            </div>
            <div class="field full">
              <button class="btn gold" style="width: 100%; padding: 16px;">Request Private Appointment</button>
            </div>
          </form>
        </div>
      </section>
    `;
  }

  return body;
}

function sendConsult(e) {
  e.preventDefault();
  const f = Object.fromEntries(new FormData(e.target));
  const message = [
    `✨ HAYYAT'S JEWELS PRIVATE CONSULTATION REQUEST ✨`,
    ``,
    `Name: ${f.name || 'N/A'}`,
    `WhatsApp / Phone: ${f.phone || 'N/A'}`,
    `Email: ${f.email || 'N/A'}`,
    `Preferred Date: ${f.date || 'Flexible'}`,
    `Consultation Focus: ${f.type || 'General'}`,
    `Budget: ${f.budget || 'Open'}`,
    ``,
    `Client Vision / Notes:`,
    `${f.notes || 'Looking forward to consultation.'}`
  ].join('\n');

  window.open(whatsappUrl(message), '_blank');
  toast('Opening WhatsApp Concierge for Consultation...');
}

/**
 * Editorial Journal View
 */
function journal() {
  return `
    <section class="page-hero">
      <div class="container">
        <p class="eyebrow">The Atelier Journal</p>
        <h1>Notes on<br><em>Meaningful Things.</em></h1>
        <p class="muted" style="max-width: 500px; margin-top: 14px;">
          Perspectives on gemstone provenance, gold metallurgy, styling, and timeless bridal heirlooms.
        </p>
      </div>
    </section>

    <section class="section">
      <div class="container journal-grid">
        ${JOURNAL.map(j => `
          <article class="journal-card" data-reveal>
            <div class="journal-image">
              <img src="${j.image}" alt="${j.title}" loading="lazy">
            </div>
            <div class="product-meta" style="padding-top: 18px;">
              <p class="eyebrow">${j.category} · ${j.date}</p>
              <h3 style="font-size: 1.6rem; margin: 8px 0 14px;">${j.title}</h3>
              <a class="btn secondary" href="journal.html">Read Story</a>
            </div>
          </article>
        `).join('')}
      </div>
    </section>
  `;
}

/**
 * Client Reviews View
 */
function reviews() {
  return `
    <section class="page-hero">
      <div class="container">
        <p class="eyebrow">Client Reflections</p>
        <h1>Pieces that<br><em>Stay With You.</em></h1>
        <p class="muted" style="max-width: 500px; margin-top: 14px;">
          Authentic words from patrons who have celebrated their defining milestones with HAYYAT’s JEWELS.
        </p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="review-grid">
          ${REVIEWS.map(r => `
            <article class="review-card" data-reveal>
              <div class="stars">★★★★★</div>
              <p style="font-size: 16px; font-style: italic; line-height: 1.6; margin: 14px 0;">"${r.review}"</p>
              <h3 style="font-size: 1.3rem; margin: 0;">${r.name}</h3>
              <p class="muted" style="font-size: 12px; margin-top: 4px;">Verified Owner of ${r.product} · ${r.date}</p>
            </article>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}

/**
 * Contact & Boutique View
 */
function contact() {
  return editorial('contact') + `
    <section class="section" style="padding-top: 10px;">
      <div class="container">
        <div class="form-grid" style="align-items: start; background: var(--card); padding: 40px; border-radius: 4px;">
          <div>
            <p class="eyebrow">Atelier Coordinates</p>
            <h2>Come closer<br><em>to the craftsmanship.</em></h2>
          </div>
          <div>
            <p style="font-size: 16px; font-weight: 500; margin-bottom: 8px;">${CONTACT.address}</p>
            <p style="color: var(--muted); margin-bottom: 16px;">
              Phone: ${CONTACT.phone}<br>
              Email: ${CONTACT.email}
            </p>
            <p class="muted" style="line-height: 1.7; margin-bottom: 24px;">
              Tuesday – Saturday · 10:00 – 18:00 BST<br>
              Private champagne appointments available upon request.
            </p>
            <a class="btn" href="https://maps.google.com/?q=Mayfair+London" target="_blank" rel="noopener">
              Get Atelier Directions ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  `;
}

/**
 * Page Router & Main Bootstrapper
 */
function renderPage() {
  themeInit();

  if (currentPage === 'home') {
    layout(home());
  } else if (currentPage === 'collections') {
    layout(listing('The Complete Collection', 'A considered edit of fine jewellery, forged in 18K solid gold and brilliant gemstones.', null));
  } else if (['rings', 'necklaces', 'earrings', 'bracelets'].includes(currentPage)) {
    const title = currentPage.charAt(0).toUpperCase() + currentPage.slice(1);
    layout(listing(title, `Distinctive ${currentPage} forged with quiet architectural presence and exceptional brilliance.`, currentPage));
  } else if (currentPage === 'product') {
    layout(productPage());
  } else if (currentPage === 'bag') {
    layout(bag());
  } else if (currentPage === 'inquiry') {
    layout(inquiry());
  } else if (currentPage === 'journal') {
    layout(journal());
  } else if (currentPage === 'reviews') {
    layout(reviews());
  } else if (currentPage === 'contact') {
    layout(contact());
  } else if (currentPage === 'bridal') {
    layout(listing('Bridal & Engagement Suite', 'For your most sacred yes — engagement solitaires, eternity bands, and bridal heirloom jewels.', 'bridal'));
  } else {
    layout(editorial(currentPage));
  }
}

// Global scroll event listener for sticky navbar
if (!window._navScrollAttached) {
  window.addEventListener('scroll', () => {
    document.querySelector('.site-nav')?.classList.toggle('scrolled', window.scrollY > 15);
  }, { passive: true });
  window._navScrollAttached = true;
}

// Delegated listener for bag actions ensuring 100% click reliability
document.addEventListener('click', (e) => {
  const removeBtn = e.target.closest('[data-cart-remove]');
  if (removeBtn) {
    e.preventDefault();
    const key = removeBtn.getAttribute('data-cart-remove');
    if (key && typeof removeFromCart === 'function') {
      removeFromCart(key);
    }
  }
  const qtyBtn = e.target.closest('[data-cart-qty]');
  if (qtyBtn) {
    e.preventDefault();
    const key = qtyBtn.getAttribute('data-cart-qty');
    const newQty = parseInt(qtyBtn.getAttribute('data-new-qty'), 10);
    if (key && !isNaN(newQty) && typeof updateQty === 'function') {
      updateQty(key, newQty);
    }
  }
});

// Initialize Application
renderPage();
