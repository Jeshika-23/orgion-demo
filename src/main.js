
import './style.css';

// Product Data
const products = [
  {
    id: 1,
    name: 'Lavendar Bliss Soap',
    price: 12.99,
    image: 'https://images.unsplash.com/photo-1600857062241-98e5b4f90b69?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    category: 'soap'
  },
  {
    id: 2,
    name: 'Rose Hip Face Oil',
    price: 24.50,
    image: 'https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    category: 'oil'
  },
  {
    id: 3,
    name: 'Charcoal Detox Facewash',
    price: 18.00,
    image: 'https://images.unsplash.com/photo-1556228552-6c3080695b76?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    category: 'facewash'
  },
  {
    id: 4,
    name: 'Herbal Essence Shampoo',
    price: 16.75,
    image: 'https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    category: 'shampoo'
  },
  {
    id: 5,
    name: 'Oatmeal & Honey Soap',
    price: 11.50,
    image: 'https://images.unsplash.com/photo-1600857062241-98e5b4f90b69?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    category: 'soap'
  },
  {
    id: 6,
    name: 'Vitamin C Glow Oil',
    price: 28.00,
    image: 'https://images.unsplash.com/photo-1618331835717-801e976710b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    category: 'oil'
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

  // Active Link Handling
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    // Check if href matches current path (handling root / vs /index.html if needed)
    if (link.getAttribute('href') === currentPath || (currentPath === '/' && link.getAttribute('href') === '/')) {
      link.classList.add('active');
    }
  });

  // Show all products on homepage for a complete listing as requested
  if (featuredContainer) renderProducts(products, featuredContainer);

  if (shopContainer) {
    const categoryFilter = shopContainer.getAttribute('data-category');
    if (categoryFilter) {
      // Filter by category (supports multiple comma-separated)
      const categories = categoryFilter.split(',');
      const filtered = products.filter(p => categories.includes(p.category));
      renderProducts(filtered, shopContainer);
    } else {
      // Show all
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
function renderProducts(items, container) {
  if (items.length === 0) {
    container.innerHTML = '<p style="grid-column: 1/-1; text-align: center;">No products found in this category.</p>';
    return;
  }
  container.innerHTML = items.map(product => `
    <article class="product-card">
      <div class="product-image">
        <!-- Using a colored placeholder if image fails to load, but using Unsplash URLs for demo -->
        <img src="${product.image}" alt="${product.name}" style="width:100%; height:100%; object-fit:cover;">
      </div>
      <div class="product-info">
        <h3 class="product-title">${product.name}</h3>
        <span class="product-price">$${product.price.toFixed(2)}</span>
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

// Make globally available for onclick handlers
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
