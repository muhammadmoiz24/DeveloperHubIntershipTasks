// Cart Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Initialize cart page
    initCartPage();
    initCartInteractions();
    initCheckout();
});

// Initialize Cart Page
function initCartPage() {
    displayCartItems();
    displaySavedItems();
    updateCartSummary();
    updateCartCount();
}

// Display Cart Items
function displayCartItems() {
    const cartItemsList = document.getElementById('cartItemsList');
    const emptyCartMessage = document.getElementById('emptyCartMessage');
    
    if (!cartItemsList) return;
    
    if (cart.length === 0) {
        cartItemsList.innerHTML = '';
        if (emptyCartMessage) emptyCartMessage.style.display = 'block';
        return;
    }
    
    if (emptyCartMessage) emptyCartMessage.style.display = 'none';
    
    let cartHTML = '';
    
    cart.forEach(item => {
        cartHTML += `
            <div class="cart-item" data-id="${item.id}">
                <div class="cart-item-image">
                    <img src="${item.image}" alt="${item.name}">
                </div>
                <div class="cart-item-content">
                    <div class="cart-item-header">
                        <h3 class="cart-item-title">${item.name}</h3>
                        <span class="cart-item-price">$${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                    <div class="cart-item-details">
                        <p>${item.details}</p>
                        <p><strong>Seller:</strong> ${item.seller}</p>
                    </div>
                    <div class="cart-item-actions">
                        <div class="quantity-control">
                            <button class="quantity-btn" onclick="updateQuantity(${item.id}, ${item.quantity - 1})">
                                <i class="fas fa-minus"></i>
                            </button>
                            <input type="number" class="quantity-input" value="${item.quantity}" min="1" 
                                   onchange="updateQuantity(${item.id}, this.value)">
                            <button class="quantity-btn" onclick="updateQuantity(${item.id}, ${item.quantity + 1})">
                                <i class="fas fa-plus"></i>
                            </button>
                        </div>
                        <button class="remove-btn" onclick="removeFromCart(${item.id})">
                            <i class="fas fa-trash"></i> Remove
                        </button>
                        <button class="save-btn" onclick="saveForLater(${item.id})">
                            <i class="fas fa-heart"></i> Save for later
                        </button>
                    </div>
                </div>
            </div>
        `;
    });
    
    cartItemsList.innerHTML = cartHTML;
    updateCartCount();
}

// Display Saved Items
function displaySavedItems() {
    const savedItemsList = document.getElementById('savedItemsList');
    
    if (!savedItemsList) return;
    
    let savedHTML = '';
    
    savedItems.forEach(item => {
        savedHTML += `
            <div class="saved-item" data-id="${item.id}">
                <div class="saved-item-image">
                    <img src="${item.image}" alt="${item.name}">
                </div>
                <div class="saved-item-content">
                    <h4 class="saved-item-title">${item.name}</h4>
                    <div class="saved-item-price">$${item.price.toFixed(2)}</div>
                    <button class="move-to-cart-btn" onclick="moveToCart(${item.id})">
                        <i class="fas fa-cart-plus"></i> Move to cart
                    </button>
                </div>
            </div>
        `;
    });
    
    savedItemsList.innerHTML = savedHTML;
    
    // Update saved count
    const savedCountElement = document.querySelector('.saved-count');
    if (savedCountElement) {
        savedCountElement.textContent = `${savedItems.length} items`;
    }
}

// Update Cart Summary
function updateCartSummary() {
    const itemCountElement = document.getElementById('itemCount');
    const subtotalElement = document.getElementById('subtotal');
    const taxElement = document.getElementById('tax');
    const totalAmountElement = document.getElementById('totalAmount');
    
    if (!itemCountElement || !subtotalElement) return;
    
    const itemCount = cart.reduce((total, item) => total + item.quantity, 0);
    const subtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    const tax = subtotal * 0.083; // 8.3% tax
    const discount = subtotal >= 100 ? subtotal * 0.1 : 0; // 10% discount for orders over $100
    const total = subtotal + tax - discount;
    
    itemCountElement.textContent = itemCount;
    subtotalElement.textContent = `$${subtotal.toFixed(2)}`;
    taxElement.textContent = `$${tax.toFixed(2)}`;
    
    if (totalAmountElement) {
        totalAmountElement.textContent = `$${total.toFixed(2)}`;
    }
    
    // Update cart total badge
    const cartTotalItems = document.getElementById('cartTotalItems');
    if (cartTotalItems) {
        cartTotalItems.textContent = itemCount;
    }
}

// Initialize Cart Interactions
function initCartInteractions() {
    // Clear cart button
    const clearCartBtn = document.getElementById('clearCartBtn');
    if (clearCartBtn) {
        clearCartBtn.addEventListener('click', clearCart);
    }
}

// Clear Cart
function clearCart() {
    if (cart.length === 0) {
        showToast('Your cart is already empty', 'error');
        return;
    }
    
    if (confirm('Are you sure you want to clear your cart?')) {
        cart.length = 0;
        saveToLocalStorage();
        displayCartItems();
        updateCartSummary();
        showToast('Cart cleared successfully', 'success');
    }
}

// Update Quantity
function updateQuantity(productId, newQuantity) {
    newQuantity = parseInt(newQuantity);
    
    if (newQuantity < 1) {
        removeFromCart(productId);
        return;
    }
    
    if (updateCartQuantity(productId, newQuantity)) {
        displayCartItems();
        updateCartSummary();
        showToast('Quantity updated', 'success');
    }
}

// Remove from Cart
function removeFromCart(productId) {
    if (removeFromCart(productId)) {
        displayCartItems();
        updateCartSummary();
        showToast('Item removed from cart', 'success');
    }
}

// Save for Later
function saveForLater(productId) {
    if (saveForLater(productId)) {
        displayCartItems();
        displaySavedItems();
        updateCartSummary();
        showToast('Item saved for later', 'success');
    }
}

// Move to Cart from Saved Items
function moveToCart(savedItemId) {
    if (moveToCart(savedItemId)) {
        displayCartItems();
        displaySavedItems();
        updateCartSummary();
        showToast('Item moved to cart', 'success');
    }
}

// Initialize Checkout
function initCheckout() {
    const checkoutBtn = document.getElementById('checkoutBtn');
    
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', function() {
            if (cart.length === 0) {
                showToast('Your cart is empty. Add items to checkout.', 'error');
                return;
            }
            
            // Simulate checkout process
            showToast('Processing your order...', 'success');
            
            // In a real app, this would redirect to checkout page
            setTimeout(() => {
                showToast('Checkout functionality would be implemented here', 'success');
            }, 1500);
        });
    }
}

// Update cart count
function updateCartCount() {
    const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
    const cartCountElements = document.querySelectorAll('#cartCount, .cart-count-badge');
    
    cartCountElements.forEach(element => {
        if (element) element.textContent = cartCount;
    });
}

// Show toast notification
function showToast(message, type = 'success') {
    // Remove existing toasts
    const existingToasts = document.querySelectorAll('.toast');
    existingToasts.forEach(toast => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    });
    
    // Create new toast
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'}"></i>
        <span>${message}</span>
    `;
    
    document.body.appendChild(toast);
    
    // Animate in
    setTimeout(() => {
        toast.classList.add('show');
    }, 10);
    
    // Remove after 3 seconds
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => {
            if (toast.parentNode) {
                document.body.removeChild(toast);
            }
        }, 300);
    }, 3000);
}