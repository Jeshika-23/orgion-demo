
import './style.css';

// Product Data (Enriched for Demo)
const products = [
  {
    id: 1,
    name: 'Lavendar Bliss Soap',
    price: 12.99,
    originalPrice: 18.00,
    rating: 4.8,
    reviews: 124,
    sold: '5K+',
    image: 'https://images.unsplash.com/photo-1600857062241-98e5b4f90b69?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1600857062241-98e5b4f90b69?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1603960017154-aa64d008436b?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
      'https://plus.unsplash.com/premium_photo-1675276632490-23a31daec619?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80'
    ],
    category: 'soap',
    description: 'Relax and unwind with the soothing scent of lavender. This handcrafted soap is made with organic shea butter and essential oils to gently cleanse and moisturize your skin.'
  },
  {
    id: 2,
    name: 'Rose Hip Face Oil',
    price: 24.50,
    originalPrice: 32.00,
    rating: 4.9,
    reviews: 89,
    sold: '2.1K+',
    image: 'https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1615397349754-082807e5c531?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1618331835717-801e976710b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80'
    ],
    category: 'oil',
    description: 'Restore your skin\'s natural glow with our Rose Hip Face Oil. Rich in antioxidants and vitamins, it hydrates and repairs skin texture.'
  },
  {
    id: 3,
    name: 'Charcoal Detox Facewash',
    price: 18.00,
    originalPrice: 22.00,
    rating: 4.7,
    reviews: 210,
    sold: '8K+',
    image: 'https://images.unsplash.com/photo-1556228552-6c3080695b76?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1556228552-6c3080695b76?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1556229167-7543f61b0c06?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1571781565023-40f8d4752541?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80'
    ],
    category: 'facewash',
    description: 'Deep cleanse your pores with activated charcoal. This facewash removes impurities and excess oil without stripping your skin.'
  },
  {
    id: 4,
    name: 'Herbal Essence Shampoo',
    price: 16.75,
    originalPrice: 0,
    rating: 4.6,
    reviews: 56,
    sold: '1.2K+',
    image: 'https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1585232351009-31336c9329c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1526947425960-945c6e72858f?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80'
    ],
    category: 'shampoo',
    description: 'Revitalize your hair with nature\'s best herbs. Promotes healthy hair growth and shine with nettle, rosemary, and aloe vera.'
  },
  {
    id: 5,
    name: 'Oatmeal & Honey Soap',
    price: 11.50,
    originalPrice: 15.00,
    rating: 4.9,
    reviews: 300,
    sold: '10K+',
    image: 'https://images.unsplash.com/photo-1600857062241-98e5b4f90b69?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1600857062241-98e5b4f90b69?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1579567990520-a8dc6525164f?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80'
    ],
    category: 'soap',
    description: 'Gentle exfoliation for sensitive skin. Real oatmeal and honey soothe irritation and leave skin feeling soft and supple.'
  },
  {
    id: 6,
    name: 'Vitamin C Glow Oil',
    price: 28.00,
    originalPrice: 35.00,
    rating: 4.8,
    reviews: 150,
    sold: '3K+',
    image: 'https://images.unsplash.com/photo-1618331835717-801e976710b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1618331835717-801e976710b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80'
    ],
    category: 'oil',
    description: 'Brighten and even out your skin tone. Packed with Vitamin C and turmeric extract for a radiant complexion.'
  }
];

// Cart State
let cart = JSON.parse(localStorage.getItem('orgion-cart')) || [];

// DOM Elements
const cartCountElement = document.getElementById('cart-count');
const featuredContainer = document.getElementById('featured-products');
const shopContainer = document.getElementById('shop-products');
const cartItemsContainer = document.getElementById('cart-items');
const cartTotalElement = document.getElementById('cart-total');

// Initialization
document.addEventListener('DOMContentLoaded', () => {
  updateCartUI();

  // Handle Product Detail Page
  const productDetailContainer = document.getElementById('product-detail');
  if (productDetailContainer) {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id'));

    if (productId) {
      const product = products.find(p => p.id === productId);
      if (product) {
        renderProductDetail(product, productDetailContainer);
      } else {
        productDetailContainer.innerHTML = '<p style="text-align:center;">Product not found.</p>';
      }
    } else {
      productDetailContainer.innerHTML = '<p style="text-align:center;">Invalid product ID.</p>';
    }
  }

  // Active Link Handling
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    if (link.getAttribute('href') === currentPath || (currentPath === '/' && link.getAttribute('href') === '/')) {
      link.classList.add('active');
    }
  });

  // Shop Rendering
  if (featuredContainer) renderProducts(products, featuredContainer);

  if (shopContainer) {
    const categoryFilter = shopContainer.getAttribute('data-category');
    if (categoryFilter) {
      const categories = categoryFilter.split(',');
      const filtered = products.filter(p => categories.includes(p.category));
      renderProducts(filtered, shopContainer);
    } else {
      renderProducts(products, shopContainer);
    }
  }

  if (cartItemsContainer) renderCart();
});

// Toast Notification
function showToast(message) {
  let toast = document.getElementById('toast-notification');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast-notification';
    document.body.appendChild(toast);
  }

  toast.textContent = message;
  toast.className = 'toast show';

  setTimeout(() => {
    toast.className = toast.className.replace('show', '');
  }, 3000);
}

// Functions


// Helper for Accordion
window.toggleAccordion = function (header) {
  const content = header.nextElementSibling;
  const isOpen = content.style.maxHeight;

  // Close all others (optional, but cleaner)
  document.querySelectorAll('.accordion-content').forEach(el => el.style.maxHeight = null);

  if (isOpen) {
    content.style.maxHeight = null;
  } else {
    content.style.maxHeight = content.scrollHeight + "px";
  }
}

// Helper for Quantity
window.updateDetailQuantity = function (change) {
  const input = document.getElementById('detail-qty');
  let val = parseInt(input.value) + change;
  if (val < 1) val = 1;
  input.value = val;
}

function renderProductDetail(product, container) {
  const discount = product.originalPrice > product.price
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) + '% off'
    : '';

  const originalPriceHtml = product.originalPrice > product.price
    ? `<span class="original-price">$${product.originalPrice.toFixed(2)}</span> <span class="discount-badge">${discount}</span>`
    : '';

  // Use gallery if available, otherwise just the main image repeatedly
  const images = product.gallery || [product.image, product.image, product.image, product.image];

  // Ensure we have at least 3 images for the grid layout
  const gridImages = [...images];
  while (gridImages.length < 3) {
    gridImages.push(gridImages[0]);
  }

  container.innerHTML = `
    <!-- Breadcrumb -->
    <div class="breadcrumb">
      <a href="/">Home</a> / <a href="/shop.html">Shop</a> / <span style="color:var(--color-primary); font-weight:500;">${product.name}</span>
    </div>

    <div class="product-detail-container">
      
      <!-- Gallery Column (Grid Layout) -->
      <div class="gallery-container">
        <div class="gallery-grid">
           <!-- Main Large Image -->
           <div class="gallery-item-main">
              <img src="${gridImages[0]}" alt="${product.name} Main">
           </div>
           <!-- Sub Images -->
           <div class="gallery-item-sub">
              <img src="${gridImages[1]}" alt="${product.name} View 2">
           </div>
           <div class="gallery-item-sub">
              <img src="${gridImages[2]}" alt="${product.name} View 3">
           </div>
        </div>
      </div>

      <!-- Info Column -->
      <div class="product-info-detail">
        <h1>${product.name}</h1>
        <p style="color:var(--color-text-light); margin-bottom:16px;">
          ${product.description.substring(0, 100)}... a lightweight, non-stripping formula that deeply cleanses without compromising your skin's natural barrier.
        </p>

        <div class="price-block">
          <span class="current-price">$${product.price.toFixed(2)} USD</span>
          ${originalPriceHtml}
        </div>

        <!-- Selectors (Mock) -->
        <div class="selector-group">
           <span class="selector-label">Volume:</span>
           <div class="selector-options">
             <button class="selector-btn active">100ml</button>
             <button class="selector-btn">250ml</button>
             <button class="selector-btn">500ml</button>
           </div>
        </div>

        <div class="selector-group">
           <span class="selector-label">Fragrance:</span>
           <div class="selector-options">
             <button class="selector-btn">Jasmine</button>
             <button class="selector-btn active">Vanilla</button>
             <button class="selector-btn">Rose</button>
           </div>
        </div>
        
        <div class="selector-group">
           <span class="selector-label">Skin Type:</span>
           <div class="selector-options">
             <button class="selector-btn">Dry</button>
             <button class="selector-btn">Normal</button>
             <button class="selector-btn active" style="background:var(--color-text); color:white; border-color:var(--color-text);">Sensitive</button>
           </div>
        </div>

        <!-- Quantity -->
        <div class="selector-group">
           <span class="selector-label">Quantity</span>
           <div class="quantity-control">
              <button class="qty-btn" onclick="updateDetailQuantity(-1)">−</button>
              <input type="number" id="detail-qty" class="qty-input" value="1" min="1" readonly>
              <button class="qty-btn" onclick="updateDetailQuantity(1)">+</button>
           </div>
        </div>

        <!-- Actions -->
        <div class="action-buttons">
          <button class="btn-buy-now" onclick="buyNow(${product.id})">Buy Now</button>
          <button class="btn-add-bag" onclick="addToCartDetail(${product.id})">Add To Cart</button>
        </div>

        <!-- Accordions -->
        <div class="accordion">
          <div class="accordion-item">
            <button class="accordion-header" onclick="toggleAccordion(this)">
               Product Highlights
               <span>+</span>
            </button>
            <div class="accordion-content">
               <ul>
                 <li>Deeply hydrating formula</li>
                 <li>All-natural ingredients</li>
                 <li>Paraben and sulfate free</li>
                 <li>Cruelty-free testing</li>
               </ul>
            </div>
          </div>
          
          <div class="accordion-item">
            <button class="accordion-header" onclick="toggleAccordion(this)">
               Key Ingredients
               <span>+</span>
            </button>
            <div class="accordion-content">
               <p>Aqua, Glycerin, Organic Aloe Vera, Essential Oils, Vitamin E, Jojoba Oil.</p>
            </div>
          </div>

          <div class="accordion-item">
            <button class="accordion-header" onclick="toggleAccordion(this)">
               Shipping Details
               <span>+</span>
            </button>
            <div class="accordion-content">
               <p>Estimated delivery: 5-7 Days from order date.</p>
               <p>Free Shipping & Returns on orders above $50.</p>
            </div>
          </div>
          
           <div class="accordion-item">
            <button class="accordion-header" onclick="toggleAccordion(this)">
               Standards & sustainability
               <span>+</span>
            </button>
            <div class="accordion-content">
               <p>We use recycled packaging materials and source our ingredients from sustainable farms.</p>
            </div>
          </div>
          
           <div class="accordion-item">
            <button class="accordion-header" onclick="toggleAccordion(this)">
               How to use
               <span>+</span>
            </button>
            <div class="accordion-content">
               <p>Apply a small amount to damp skin. Massage gently in circular motions. Rinse thoroughly with warm water.</p>
            </div>
          </div>
        </div>
        
        <!-- Payment Methods Icons (Mock) -->
        <div style="margin-top:24px; display:flex; gap:8px; opacity:0.6;">
           <span style="border:1px solid #ddd; padding:2px 6px; border-radius:4px; font-size:0.8rem;">VISA</span>
           <span style="border:1px solid #ddd; padding:2px 6px; border-radius:4px; font-size:0.8rem;">AMEX</span>
           <span style="border:1px solid #ddd; padding:2px 6px; border-radius:4px; font-size:0.8rem;">PayPal</span>
           <span style="border:1px solid #ddd; padding:2px 6px; border-radius:4px; font-size:0.8rem;">MC</span>
        </div>

      </div>
    </div>
  `;
}

// Special wrapper for Buy Now on Detail page
window.buyNow = function (productId) {
  const qtyInput = document.getElementById('detail-qty');
  const quantity = parseInt(qtyInput.value) || 1;

  // Add to cart directly
  const product = products.find(p => p.id === productId);
  if (product) {
    const existing = cart.find(item => item.id === productId);
    if (existing) {
      existing.quantity += quantity;
    } else {
      cart.push({ ...product, quantity: quantity });
    }
    saveCart();
    // Redirect to checkout immediately
    window.location.href = '/checkout.html';
  }
}

// Special wrapper for Add to Cart on Detail page to respect quantity
window.addToCartDetail = function (productId) {
  const qtyInput = document.getElementById('detail-qty');
  const quantity = parseInt(qtyInput.value) || 1;
  addToCart(productId, quantity);
}

// Helper for gallery interaction (Legacy - Grid doesn't swap main image usually, but static for now)
window.changeMainImage = function (el) {
  // .. (kept for safety if old markup used, but not used in new grid)
}

function renderProducts(items, container) {
  if (items.length === 0) {
    container.innerHTML = '<p style="grid-column: 1/-1; text-align: center;">No products found in this category.</p>';
    return;
  }
  container.innerHTML = items.map(product => `
    <article class="product-card">
      <a href="/product.html?id=${product.id}" style="text-decoration:none; color:inherit; display:block;">
        <div class="product-image">
            <img src="${product.image}" alt="${product.name}" style="width:100%; height:100%; object-fit:cover;">
        </div>
        <div class="product-info">
            <h3 class="product-title">${product.name}</h3>
            <span class="product-price">$${product.price.toFixed(2)}</span>
            ${product.originalPrice > product.price ? `<span style="text-decoration:line-through; font-size:0.9rem; color:#999; margin-left:6px;">$${product.originalPrice.toFixed(2)}</span>` : ''}
        </div>
      </a>
       <div style="padding: 0 1rem 1.5rem 1rem;">
         <button class="btn-add" onclick="addToCart(${product.id})">Add to Cart</button>
      </div>
    </article>
  `).join('');
}

function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  if (product) {
    const existing = cart.find(item => item.id === productId);
    if (existing) {
      existing.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }
    saveCart();
    showToast(`${product.name} added to cart!`);
  }
}

window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
window.updateQuantity = updateQuantity;

function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  saveCart();
  renderCart();
}

function updateQuantity(productId, change) {
  const item = cart.find(item => item.id === productId);
  if (item) {
    item.quantity += change;
    if (item.quantity <= 0) {
      removeFromCart(productId);
    } else {
      saveCart();
      renderCart();
    }
  }
}

function saveCart() {
  localStorage.setItem('orgion-cart', JSON.stringify(cart));
  updateCartUI();
}

function updateCartUI() {
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);
  if (cartCountElement) cartCountElement.textContent = count;
}

function renderCart() {
  if (!cartItemsContainer) return;

  if (cart.length === 0) {
    cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
    if (cartTotalElement) cartTotalElement.textContent = '0.00';
    return;
  }

  cartItemsContainer.innerHTML = cart.map(item => `
    <div class="cart-item">
      <div>
        <h4>${item.name}</h4>
        <p>$${item.price.toFixed(2)} x ${item.quantity}</p>
      </div>
      <div>
        <button class="btn-secondary" style="padding:4px 8px;" onclick="updateQuantity(${item.id}, -1)">-</button>
        <span style="margin:0 8px;">${item.quantity}</span>
        <button class="btn-secondary" style="padding:4px 8px;" onclick="updateQuantity(${item.id}, 1)">+</button>
        <button class="btn-secondary" style="margin-left:8px; color:red; border-color:red;" onclick="removeFromCart(${item.id})">Remove</button>
      </div>
    </div>
  `).join('');

  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  if (cartTotalElement) cartTotalElement.textContent = total.toFixed(2);
}
