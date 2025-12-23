// Products Data
const products = [
    {
        id: 1,
        name: "Game Covers (Cos 2000, Black 10)",
        description: "Premium gaming covers with multiple color options. Made from durable materials for long-lasting protection.",
        price: 980.00,
        originalPrice: 1508.60,
        discount: 35,
        category: "tech",
        brand: "lanxue",
        rating: 4.5,
        ratingCount: 125,
        orders: "25-151 orders",
        image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
        condition: "new",
        features: ["Metallic", "Plastic cover", "5GB RAM", "Super power", "Lugea Memory"]
    },
    {
        id: 2,
        name: "GoPro HERDG 4K Action Camera - Black",
        description: "Capture your adventures in stunning 4K quality with this professional action camera.",
        price: 998.00,
        category: "electronics",
        brand: "gopro",
        rating: 4.8,
        ratingCount: 342,
        orders: "75-151 orders",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
        condition: "new",
        features: ["4K Video", "Waterproof", "Image Stabilization", "Voice Control"]
    },
    {
        id: 3,
        name: "GoPro HEiOS 8K Action Camera - Silver",
        description: "Professional 8K action camera with advanced stabilization and voice control.",
        price: 998.00,
        category: "electronics",
        brand: "gopro",
        rating: 4.7,
        ratingCount: 287,
        orders: "75-151 orders",
        image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
        condition: "new",
        features: ["8K Video", "Advanced Stabilization", "Voice Control", "Waterproof"]
    },
    {
        id: 4,
        name: "GoPro HEiOS 8K Action Camera - Black Pro",
        description: "Professional grade 8K action camera with all premium features included.",
        price: 998.00,
        originalPrice: 1508.60,
        discount: 25,
        category: "electronics",
        brand: "gopro",
        rating: 4.9,
        ratingCount: 421,
        orders: "25-151 orders",
        image: "https://images.unsplash.com/photo-1552168324-d612d77725e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
        condition: "refurbished",
        features: ["8K Pro", "360° Capture", "Live Streaming", "Extended Battery"]
    },
    {
        id: 5,
        name: "Samsung Galaxy S23 Ultra",
        description: "Flagship smartphone with advanced camera system and powerful performance.",
        price: 1299.00,
        category: "smartphones",
        brand: "samsung",
        rating: 4.8,
        ratingCount: 892,
        orders: "200+ orders",
        image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
        condition: "new",
        features: ["200MP Camera", "S Pen", "8K Video", "5000mAh Battery"]
    },
    {
        id: 6,
        name: "Apple iPhone 14 Pro",
        description: "Latest iPhone with Dynamic Island and always-on display.",
        price: 1399.00,
        category: "smartphones",
        brand: "apple",
        rating: 4.9,
        ratingCount: 1245,
        orders: "500+ orders",
        image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
        condition: "new",
        features: ["A16 Bionic", "48MP Camera", "Dynamic Island", "Emergency SOS"]
    },
    {
        id: 7,
        name: "Wireless Bluetooth Earbuds Pro",
        description: "Premium wireless earbuds with active noise cancellation.",
        price: 199.00,
        originalPrice: 299.00,
        discount: 33,
        category: "mobile",
        brand: "pexco",
        rating: 4.6,
        ratingCount: 567,
        orders: "150+ orders",
        image: "https://daling.pk/cdn/shop/files/1_f9f6aebe-9c3f-47f4-8515-4b1c9a7d33de.jpg?v=1720453335",
        condition: "new",
        features: ["Noise Cancellation", "30hr Battery", "Wireless Charging", "IPX7 Waterproof"]
    },
    {
        id: 8,
        name: "Smart Watch Pro Series 8",
        description: "Advanced smartwatch with health monitoring and GPS tracking.",
        price: 399.00,
        category: "tech",
        brand: "huawei",
        rating: 4.7,
        ratingCount: 789,
        orders: "300+ orders",
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
        condition: "refurbished",
        features: ["ECG Monitor", "GPS", "Sleep Tracking", "Water Resistant"]
    },
    {
        id: 9,
        name: "T-shirts with multiple colors",
        description: "High-quality cotton t-shirts available in multiple colors for men and women.",
        price: 29.99,
        category: "fashion",
        brand: "artel",
        rating: 4.4,
        ratingCount: 234,
        orders: "100+ orders",
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
        condition: "new",
        features: ["100% Cotton", "Multiple Colors", "Machine Washable", "Premium Fit"]
    }
];

// Cart data - initialize from localStorage or with default items
let cart = [];
let savedItems = [];

// Load cart and saved items from localStorage on initialization
function loadCartData() {
    const savedCart = localStorage.getItem('ecommerce_cart');
    const savedSavedItems = localStorage.getItem('ecommerce_saved_items');
    
    if (savedCart) {
        cart = JSON.parse(savedCart);
    } else {
        // Initialize with default items
        cart = [
            {
                id: 101,
                name: "T-shirts with multiple colors, for men and lady",
                price: 40.00,
                quantity: 1,
                image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80",
                details: "Size: medium, Color: blue, Materials: Plastic",
                seller: "Artel Market"
            },
            {
                id: 102,
                name: "T-shirts with multiple colors, for men and lady",
                price: 40.00,
                quantity: 1,
                image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80",
                details: "Size: medium, Color: blue, Materials: Plastic",
                seller: "Best factory LLC"
            },
            {
                id: 103,
                name: "T-shirts with multiple colors, for men and lady",
                price: 40.00,
                quantity: 1,
                image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80",
                details: "Size: medium, Color: blue, Materials: Plastic",
                seller: "Artel Market"
            }
        ];
        saveCartToLocalStorage();
    }
    
    if (savedSavedItems) {
        savedItems = JSON.parse(savedSavedItems);
    } else {
        // Initialize with default saved items
        savedItems = [
            {
                id: 201,
                name: "GoPro HERDG 4K Action Camera - Black",
                price: 99.50,
                image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80"
            },
            {
                id: 202,
                name: "GoPro HERDG 4K Action Camera - Black",
                price: 99.50,
                image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80"
            },
            {
                id: 203,
                name: "GoPro HERDG 4K Action Camera - Black",
                price: 99.50,
                image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80"
            },
            {
                id: 204,
                name: "GoPro HERDG 4K Action Camera - Black",
                price: 99.50,
                image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80"
            }
        ];
        saveSavedItemsToLocalStorage();
    }
}

// Save to localStorage
function saveCartToLocalStorage() {
    localStorage.setItem('ecommerce_cart', JSON.stringify(cart));
}

function saveSavedItemsToLocalStorage() {
    localStorage.setItem('ecommerce_saved_items', JSON.stringify(savedItems));
}

// Get all products
function getAllProducts() {
    return products;
}

// Get product by ID
function getProductById(id) {
    return products.find(product => product.id === id);
}

// Get products by category
function getProductsByCategory(category) {
    if (category === 'all') return products;
    return products.filter(product => product.category === category);
}

// Get products by brand
function getProductsByBrand(brand) {
    if (brand === 'all') return products;
    return products.filter(product => product.brand === brand);
}

// Filter products by price range
function filterProductsByPrice(min, max) {
    return products.filter(product => product.price >= min && product.price <= max);
}

// Filter products by rating
function filterProductsByRating(minRating) {
    return products.filter(product => product.rating >= minRating);
}

// Filter products by condition
function filterProductsByCondition(condition) {
    if (condition.includes('any')) return products;
    return products.filter(product => condition.includes(product.condition));
}

// Sort products
function sortProducts(productsArray, sortBy) {
    const sorted = [...productsArray];
    
    switch(sortBy) {
        case 'price-low':
            return sorted.sort((a, b) => a.price - b.price);
        case 'price-high':
            return sorted.sort((a, b) => b.price - a.price);
        case 'rating':
            return sorted.sort((a, b) => b.rating - a.rating);
        case 'newest':
            return sorted.sort((a, b) => b.id - a.id);
        default:
            return sorted;
    }
}

// Add to cart - FIXED VERSION
function addToCart(productId, quantity = 1) {
    const product = getProductById(productId);
    if (!product) {
        console.error('Product not found:', productId);
        return false;
    }
    
    // Check if product already exists in cart
    const existingItemIndex = cart.findIndex(item => item.id === productId);
    
    if (existingItemIndex > -1) {
        // Update quantity if item already exists
        cart[existingItemIndex].quantity += quantity;
    } else {
        // Add new item to cart
        const newCartItem = {
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: quantity,
            image: product.image,
            details: product.features ? product.features.join(', ') : '',
            seller: product.brand ? product.brand.charAt(0).toUpperCase() + product.brand.slice(1) : 'Brand Store'
        };
        cart.push(newCartItem);
    }
    
    saveCartToLocalStorage();
    updateCartCount();
    console.log('Cart after adding:', cart);
    return true;
}

// Remove from cart
function removeFromCart(productId) {
    const initialLength = cart.length;
    cart = cart.filter(item => item.id !== productId);
    
    if (cart.length < initialLength) {
        saveCartToLocalStorage();
        updateCartCount();
        return true;
    }
    return false;
}

// Update cart quantity
function updateCartQuantity(productId, quantity) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity = parseInt(quantity);
        saveCartToLocalStorage();
        updateCartCount();
        return true;
    }
    return false;
}

// Save item for later
function saveItemForLater(productId) {
    const itemIndex = cart.findIndex(item => item.id === productId);
    if (itemIndex !== -1) {
        const [item] = cart.splice(itemIndex, 1);
        savedItems.push(item);
        saveCartToLocalStorage();
        saveSavedItemsToLocalStorage();
        updateCartCount();
        return true;
    }
    return false;
}

// Move to cart from saved items
function moveToCartFromSaved(savedItemId) {
    const itemIndex = savedItems.findIndex(item => item.id === savedItemId);
    if (itemIndex !== -1) {
        const [item] = savedItems.splice(itemIndex, 1);
        cart.push(item);
        saveCartToLocalStorage();
        saveSavedItemsToLocalStorage();
        updateCartCount();
        return true;
    }
    return false;
}

// Remove from saved items
function removeFromSavedItems(itemId) {
    savedItems = savedItems.filter(item => item.id !== itemId);
    saveSavedItemsToLocalStorage();
    return true;
}

// Get cart items
function getCartItems() {
    return cart;
}

// Get saved items
function getSavedItems() {
    return savedItems;
}

// Get cart total items count
function getCartTotalItems() {
    return cart.reduce((total, item) => total + item.quantity, 0);
}

// Get cart total price
function getCartTotalPrice() {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
}

// Update cart count display
function updateCartCount() {
    const cartCount = getCartTotalItems();
    const cartCountElements = document.querySelectorAll('#cartCount, .cart-count-badge');
    
    cartCountElements.forEach(element => {
        if (element) {
            element.textContent = cartCount;
        }
    });
    
    return cartCount;
}

// Show toast notification
function showToast(message, type = 'success') {
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'}"></i>
        <span>${message}</span>
    `;
    
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.classList.add('show');
    }, 10);
    
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => {
            if (toast.parentNode) {
                document.body.removeChild(toast);
            }
        }, 300);
    }, 3000);
}

// Initialize cart data on page load
loadCartData();