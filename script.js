// Main JavaScript file for e-commerce website

document.addEventListener('DOMContentLoaded', function() {
    // Initialize components
    initMobileMenu();
    initSearch();
    initFilters();
    initProducts();
    initNewsletter();
    initDropdowns();
    
    // Update cart count on page load
    updateCartCount();
    
    // Initialize add to cart buttons for dynamically loaded products
    initAddToCartButtons();
});

// Mobile Menu Toggle
function initMobileMenu() {
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const mainNav = document.getElementById('mainNav');
    const navLinks = mainNav ? mainNav.querySelector('.nav-links') : null;
    
    if (mobileMenuToggle && navLinks) {
        mobileMenuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            this.querySelector('i').classList.toggle('fa-bars');
            this.querySelector('i').classList.toggle('fa-times');
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            if (mainNav && !mainNav.contains(event.target) && !mobileMenuToggle.contains(event.target)) {
                navLinks.classList.remove('active');
                mobileMenuToggle.querySelector('i').classList.add('fa-bars');
                mobileMenuToggle.querySelector('i').classList.remove('fa-times');
            }
        });
    }
}

// Search Functionality
function initSearch() {
    const searchBtn = document.getElementById('searchBtn');
    const searchInput = document.getElementById('searchInput');
    
    if (searchBtn && searchInput) {
        searchBtn.addEventListener('click', handleSearch);
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') handleSearch();
        });
    }
    
    function handleSearch() {
        const query = searchInput.value.trim();
        if (query) {
            // Filter products based on search query
            filterProducts();
            showToast(`Searching for: "${query}"`);
        }
    }
}

// Initialize Filters
function initFilters() {
    // Category filter
    const categoryOptions = document.querySelectorAll('#categoryFilter .filter-option');
    categoryOptions.forEach(option => {
        option.addEventListener('click', function(e) {
            e.preventDefault();
            categoryOptions.forEach(opt => opt.classList.remove('active'));
            this.classList.add('active');
            filterProducts();
        });
    });
    
    // Brand filter
    const brandOptions = document.querySelectorAll('#brandFilter .filter-option');
    brandOptions.forEach(option => {
        option.addEventListener('click', function(e) {
            e.preventDefault();
            brandOptions.forEach(opt => opt.classList.remove('active'));
            this.classList.add('active');
            filterProducts();
        });
    });
    
    // Price filter
    const minPriceInput = document.getElementById('minPrice');
    const maxPriceInput = document.getElementById('maxPrice');
    const priceSliderMin = document.getElementById('priceSliderMin');
    const priceSliderMax = document.getElementById('priceSliderMax');
    const applyPriceBtn = document.getElementById('applyPrice');
    const clearPriceBtn = document.getElementById('clearPrice');
    
    // Sync price inputs with sliders
    if (minPriceInput && priceSliderMin) {
        minPriceInput.addEventListener('input', function() {
            priceSliderMin.value = this.value;
            updatePriceSlider();
        });
        
        priceSliderMin.addEventListener('input', function() {
            minPriceInput.value = this.value;
            updatePriceSlider();
        });
    }
    
    if (maxPriceInput && priceSliderMax) {
        maxPriceInput.addEventListener('input', function() {
            priceSliderMax.value = this.value;
            updatePriceSlider();
        });
        
        priceSliderMax.addEventListener('input', function() {
            maxPriceInput.value = this.value;
            updatePriceSlider();
        });
    }
    
    // Apply price filter
    if (applyPriceBtn) {
        applyPriceBtn.addEventListener('click', filterProducts);
    }
    
    // Clear price filter
    if (clearPriceBtn) {
        clearPriceBtn.addEventListener('click', function() {
            minPriceInput.value = 0;
            maxPriceInput.value = 2000;
            priceSliderMin.value = 0;
            priceSliderMax.value = 2000;
            updatePriceSlider();
            filterProducts();
        });
    }
    
    // Rating filter
    const ratingOptions = document.querySelectorAll('.rating-option');
    ratingOptions.forEach(option => {
        option.addEventListener('click', function() {
            ratingOptions.forEach(opt => opt.classList.remove('active'));
            this.classList.add('active');
            filterProducts();
        });
    });
    
    // Condition filter
    const conditionCheckboxes = document.querySelectorAll('.condition-checkbox');
    conditionCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', filterProducts);
    });
    
    // Sort select
    const sortSelect = document.getElementById('sortSelect');
    if (sortSelect) {
        sortSelect.addEventListener('change', filterProducts);
    }
    
    // Clear all filters
    const clearButtons = document.querySelectorAll('.filter-clear');
    clearButtons.forEach(button => {
        if (!button.id) { // Exclude price clear button which has its own handler
            button.addEventListener('click', function(e) {
                e.preventDefault();
                const filterSection = this.closest('.filter-section');
                if (filterSection) {
                    // Clear active states
                    const activeOptions = filterSection.querySelectorAll('.active');
                    activeOptions.forEach(opt => opt.classList.remove('active'));
                    
                    // Reset checkboxes
                    const checkboxes = filterSection.querySelectorAll('input[type="checkbox"]');
                    checkboxes.forEach(cb => cb.checked = false);
                    
                    // Check "any" checkbox if exists
                    const anyCheckbox = filterSection.querySelector('input[value="any"]');
                    if (anyCheckbox) anyCheckbox.checked = true;
                    
                    filterProducts();
                }
            });
        }
    });
}

// Update price slider visual
function updatePriceSlider() {
    const minSlider = document.getElementById('priceSliderMin');
    const maxSlider = document.getElementById('priceSliderMax');
    const sliderTrack = document.querySelector('.slider-track');
    
    if (minSlider && maxSlider && sliderTrack) {
        const min = parseInt(minSlider.value);
        const max = parseInt(maxSlider.value);
        const minPercent = (min / 5000) * 100;
        const maxPercent = (max / 5000) * 100;
        
        sliderTrack.style.left = `${minPercent}%`;
        sliderTrack.style.right = `${100 - maxPercent}%`;
    }
}

// Initialize Products Display
function initProducts() {
    const productsContainer = document.getElementById('productsContainer');
    
    if (productsContainer) {
        displayProducts(getAllProducts());
    }
}

// Display Products
function displayProducts(productsArray) {
    const productsContainer = document.getElementById('productsContainer');
    const loadingIndicator = document.getElementById('loadingIndicator');
    const noProductsMessage = document.getElementById('noProductsMessage');
    
    if (!productsContainer) return;
    
    // Show loading
    if (loadingIndicator) loadingIndicator.style.display = 'flex';
    if (noProductsMessage) noProductsMessage.style.display = 'none';
    
    // Simulate loading delay
    setTimeout(() => {
        if (productsArray.length === 0) {
            productsContainer.innerHTML = '';
            if (loadingIndicator) loadingIndicator.style.display = 'none';
            if (noProductsMessage) noProductsMessage.style.display = 'block';
            return;
        }
        
        let productsHTML = '';
        
        productsArray.forEach(product => {
            const ratingStars = getStarRating(product.rating);
            const discountBadge = product.discount ? `<div class="product-badge">-${product.discount}%</div>` : '';
            const originalPrice = product.originalPrice ? `<span class="original-price">$${product.originalPrice.toFixed(2)}</span>` : '';
            
            productsHTML += `
                <div class="product-card" data-id="${product.id}">
                    ${discountBadge}
                    <div class="product-image">
                        <img src="${product.image}" alt="${product.name}" loading="lazy">
                    </div>
                    <div class="product-content">
                        <span class="product-category">${getCategoryName(product.category)}</span>
                        <h3 class="product-title">
                            <a href="#">${product.name}</a>
                        </h3>
                        <p class="product-description">${product.description}</p>
                        <div class="product-price">
                            <span class="current-price">$${product.price.toFixed(2)}</span>
                            ${originalPrice}
                        </div>
                        <div class="product-rating">
                            <div class="stars">${ratingStars}</div>
                            <span class="rating-count">${product.rating.toFixed(1)} (${product.ratingCount})</span>
                        </div>
                        <div class="product-meta">
                            <span><i class="fas fa-shipping-fast"></i> Free Shipping</span>
                            <span><i class="fas fa-shopping-bag"></i> ${product.orders}</span>
                        </div>
                        <div class="product-actions">
                            <button class="action-btn primary-btn add-to-cart-btn" data-product-id="${product.id}">
                                <i class="fas fa-cart-plus"></i> Add to Cart
                            </button>
                            <button class="action-btn secondary-btn" onclick="viewProductDetails(${product.id})">
                                <i class="fas fa-eye"></i> Details
                            </button>
                        </div>
                    </div>
                </div>
            `;
        });
        
        productsContainer.innerHTML = productsHTML;
        
        // Initialize add to cart buttons for the newly loaded products
        initAddToCartButtons();
        
        if (loadingIndicator) loadingIndicator.style.display = 'none';
    }, 500);
}

// Initialize Add to Cart buttons
function initAddToCartButtons() {
    const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
    
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productId = parseInt(this.getAttribute('data-product-id'));
            addProductToCart(productId);
        });
    });
}

// Filter Products
function filterProducts() {
    let filteredProducts = getAllProducts();
    
    // Apply category filter
    const activeCategory = document.querySelector('#categoryFilter .filter-option.active');
    if (activeCategory && activeCategory.dataset.filter !== 'all') {
        filteredProducts = getProductsByCategory(activeCategory.dataset.filter);
    }
    
    // Apply brand filter
    const activeBrand = document.querySelector('#brandFilter .filter-option.active');
    if (activeBrand && activeBrand.dataset.brand !== 'all') {
        filteredProducts = filteredProducts.filter(product => 
            product.brand === activeBrand.dataset.brand
        );
    }
    
    // Apply price filter
    const minPrice = parseInt(document.getElementById('minPrice').value) || 0;
    const maxPrice = parseInt(document.getElementById('maxPrice').value) || 5000;
    filteredProducts = filteredProducts.filter(product => 
        product.price >= minPrice && product.price <= maxPrice
    );
    
    // Apply rating filter
    const activeRating = document.querySelector('.rating-option.active');
    if (activeRating && activeRating.dataset.rating !== '0') {
        const minRating = parseInt(activeRating.dataset.rating);
        filteredProducts = filteredProducts.filter(product => 
            product.rating >= minRating
        );
    }
    
    // Apply condition filter
    const checkedConditions = Array.from(
        document.querySelectorAll('.condition-checkbox:checked')
    ).map(cb => cb.value);
    
    if (checkedConditions.length > 0 && !checkedConditions.includes('any')) {
        filteredProducts = filteredProducts.filter(product => 
            checkedConditions.includes(product.condition)
        );
    }
    
    // Apply search filter
    const searchInput = document.getElementById('searchInput');
    if (searchInput && searchInput.value.trim()) {
        const query = searchInput.value.trim().toLowerCase();
        filteredProducts = filteredProducts.filter(product => 
            product.name.toLowerCase().includes(query) ||
            product.description.toLowerCase().includes(query) ||
            product.category.toLowerCase().includes(query) ||
            product.brand.toLowerCase().includes(query)
        );
    }
    
    // Apply sorting
    const sortSelect = document.getElementById('sortSelect');
    const sortBy = sortSelect ? sortSelect.value : 'default';
    filteredProducts = sortProducts(filteredProducts, sortBy);
    
    // Display filtered products
    displayProducts(filteredProducts);
}

// Helper Functions
function getCategoryName(category) {
    const categories = {
        'mobile': 'Mobile Accessory',
        'electronics': 'Electronics',
        'smartphones': 'Smartphones',
        'tech': 'Modern Tech',
        'fashion': 'Fashion'
    };
    return categories[category] || category;
}

function getStarRating(rating) {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
    
    let stars = '';
    for (let i = 0; i < fullStars; i++) stars += '<i class="fas fa-star"></i>';
    if (halfStar) stars += '<i class="fas fa-star-half-alt"></i>';
    for (let i = 0; i < emptyStars; i++) stars += '<i class="far fa-star"></i>';
    
    return stars;
}

// Product Actions - FIXED VERSION
function addProductToCart(productId) {
    if (addToCart(productId)) {
        showToast('Product added to cart!', 'success');
        updateCartCount();
        
        // If we're on the cart page, refresh the display
        if (window.location.pathname.includes('cart.html') || window.location.href.includes('cart.html')) {
            window.location.reload();
        }
    } else {
        showToast('Failed to add product to cart', 'error');
    }
}

function viewProductDetails(productId) {
    showToast('Product details will be shown here', 'success');
    // In a real app, this would navigate to product detail page
}

// Initialize Newsletter
function initNewsletter() {
    const newsletterForm = document.getElementById('newsletterForm');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const emailInput = this.querySelector('input[type="email"]');
            const email = emailInput.value.trim();
            
            if (email && validateEmail(email)) {
                showToast('Thank you for subscribing to our newsletter!', 'success');
                emailInput.value = '';
                
                // In a real app, you would send this to your backend
                console.log('Newsletter subscription:', email);
            } else {
                showToast('Please enter a valid email address', 'error');
            }
        });
    }
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Initialize Dropdowns
function initDropdowns() {
    const dropdowns = document.querySelectorAll('.dropdown');
    
    dropdowns.forEach(dropdown => {
        const toggle = dropdown.querySelector('.nav-link');
        const menu = dropdown.querySelector('.dropdown-menu');
        
        if (toggle && menu) {
            // Desktop hover
            dropdown.addEventListener('mouseenter', () => {
                if (window.innerWidth > 768) {
                    menu.style.opacity = '1';
                    menu.style.visibility = 'visible';
                    menu.style.transform = 'translateY(0)';
                }
            });
            
            dropdown.addEventListener('mouseleave', () => {
                if (window.innerWidth > 768) {
                    menu.style.opacity = '0';
                    menu.style.visibility = 'hidden';
                    menu.style.transform = 'translateY(10px)';
                }
            });
            
            // Mobile click
            if (window.innerWidth <= 768) {
                toggle.addEventListener('click', (e) => {
                    e.preventDefault();
                    menu.classList.toggle('show');
                });
            }
        }
    });
}

// Update cart count
function updateCartCount() {
    const cartCount = getCartTotalItems ? getCartTotalItems() : 0;
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

// Initialize updatePriceSlider on page load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
        updatePriceSlider();
    });
} else {
    updatePriceSlider();
}