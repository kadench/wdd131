// Product catalog
const productCatalog = {
    getPdpLink(id) {
        return `pdp.html?productId=${id}`;
    },
    products: [
        {
            id: "12267",
            name: "Black Sport-Tek Sport-Wick United Performance Pullover Hoodie",
            description: `Stay dry and comfortable during every workout with the Sport-Tek
                Sport-Wick United Performance Pullover Hoodie. This hoodie is crafted 
                with advanced moisture-wicking fabric to keep you sweat-free during intense 
                activities. The soft, lightweight material offers flexibility while maintaining 
                warmth. Perfect for layering or wearing on its own during cooler weather.`,
            imgPath: "images/mens_active_hoodie/hoodie_front.png",
            imgAlt: "a man faces forward wearing a black sport tek hoodie that has the store logo on it",
            categories: ["hoodie", "moisture-wicking", "men's activewear", "pullover"],
            shortDescription: "Moisture-wicking pullover hoodie for active use.",
            priceWas: null,
            price: 39.99,
            tags: {
                newArrival: false,
                bestSeller: true,
                sale: false
            },
            sizes: {
                XS: false,
                S: true,
                M: true,
                L: true,
                XL: true,
                "2X": false
            }
        },
        {
            id: "12268",
            name: "Black Hanes Women's Sport Cool Dri Performance Shirt",
            description: `Hanes Women's Sport Cool Dri Performance Shirt is designed with
                advanced moisture-wicking technology to keep you cool and comfortable. 
                Whether you're pushing through an intense workout or enjoying outdoor 
                activities, this shirt offers lightweight comfort and dries quickly, making 
                it a perfect fit for your active lifestyle.`,
            imgPath: "images/womens_active_t/tee_front.png",
            imgAlt: "a woman faces forward wearing a black cool dry shirt that has the store logo on it",
            categories: ["t-shirt", "moisture-wicking", "women's activewear", "cool-dri"],
            shortDescription: "Quick-drying, lightweight active shirt for women.",
            priceWas: 16.99,
            price: 9.99,
            tags: {
                newArrival: true,
                bestSeller: false,
                sale: true
            },
            sizes: {
                XS: true,
                S: true,
                M: true,
                L: false,
                XL: false,
                "2X": false
            }
        },
        {
            id: "12269",
            name: "Black Port & Company Core Crewneck Sweatshirt",
            description: `The Black Port & Company Core Crewneck Sweatshirt offers a classic 
                fit and feel with its soft fleece material, making it perfect for layering 
                or wearing casually. Whether you're lounging or staying active, this 
                sweatshirt is designed to provide warmth and comfort throughout the day.`,
            imgPath: "images/mens_sweat_shirt/sweatshirt_front.png",
            imgAlt: "a man faces forward wearing a black sweatshirt that has the store logo on it",
            categories: ["sweatshirt", "crewneck", "casual", "layering"],
            shortDescription: "Casual fleece crewneck sweatshirt for layering.",
            priceWas: 29.99,
            price: 15.99,
            tags: {
                newArrival: false,
                bestSeller: true,
                sale: true
            },
            sizes: {
                XS: false,
                S: true,
                M: true,
                L: true,
                XL: false,
                "2X": true
            }
        },
        {
            id: "12267",
            name: "Black Sport-Tek Sport-Wick United Performance Pullover Hoodie",
            description: `Stay dry and comfortable during every workout with the Sport-Tek
                Sport-Wick United Performance Pullover Hoodie. This hoodie is crafted 
                with advanced moisture-wicking fabric to keep you sweat-free during intense 
                activities. The soft, lightweight material offers flexibility while maintaining 
                warmth. Perfect for layering or wearing on its own during cooler weather.`,
            imgPath: "images/mens_active_hoodie/hoodie_front.png",
            imgAlt: "a man faces forward wearing a black sport tek hoodie that has the store logo on it",
            categories: ["hoodie", "moisture-wicking", "men's activewear", "pullover"],
            shortDescription: "Moisture-wicking pullover hoodie for active use.",
            priceWas: null,
            price: 39.99,
            tags: {
                newArrival: false,
                bestSeller: true,
                sale: false
            },
            sizes: {
                XS: true,
                S: true,
                M: false,
                L: true,
                XL: true,
                "2X": false
            }
        },
        {
            id: "12268",
            name: "Black Hanes Women's Sport Cool Dri Performance Shirt",
            description: `Hanes Women's Sport Cool Dri Performance Shirt is designed with
                advanced moisture-wicking technology to keep you cool and comfortable. 
                Whether you're pushing through an intense workout or enjoying outdoor 
                activities, this shirt offers lightweight comfort and dries quickly, making 
                it a perfect fit for your active lifestyle.`,
            imgPath: "images/womens_active_t/tee_front.png",
            imgAlt: "a woman faces forward wearing a black cool dry shirt that has the store logo on it",
            categories: ["t-shirt", "moisture-wicking", "women's activewear", "cool-dri"],
            shortDescription: "Quick-drying, lightweight active shirt for women.",
            priceWas: 16.99,
            price: 9.99,
            tags: {
                newArrival: true,
                bestSeller: false,
                sale: true
            },
            sizes: {
                XS: false,
                S: true,
                M: false,
                L: true,
                XL: true,
                "2X": false
            }
        },
        {
            id: "12269",
            name: "Black Port & Company Core Crewneck Sweatshirt",
            description: `The Black Port & Company Core Crewneck Sweatshirt offers a classic 
                fit and feel with its soft fleece material, making it perfect for layering 
                or wearing casually. Whether you're lounging or staying active, this 
                sweatshirt is designed to provide warmth and comfort throughout the day.`,
            imgPath: "images/mens_sweat_shirt/sweatshirt_front.png",
            imgAlt: "a man faces forward wearing a black sweatshirt that has the store logo on it",
            categories: ["sweatshirt", "crewneck", "casual", "layering"],
            shortDescription: "Casual fleece crewneck sweatshirt for layering.",
            priceWas: 29.99,
            price: 15.99,
            tags: {
                newArrival: false,
                bestSeller: true,
                sale: true
            },
            sizes: {
                XS: true,
                S: true,
                M: true,
                L: false,
                XL: false,
                "2X": true
            }
        }
    ]
};

// Toggle mobile menu based on window width
function toggleMobileMenu() {
    const mobileList = document.querySelector(".mobile-list");
    mobileList.classList.toggle("hidden");
}

// Set which menu is shown when
function setShownMenu() {
    const mobileList = document.querySelector(".mobile-list");
    const desktopList = document.querySelector(".desktop-menu");
    const hamburgerIcon = document.querySelector(".hamburger");

    if (window.innerWidth < 768) {
        mobileList.classList.add("hidden");
        hamburgerIcon.classList.remove("hidden");
        desktopList.classList.add("hidden");
    } else {
        mobileList.classList.add("hidden");
        desktopList.classList.remove("hidden");
        hamburgerIcon.classList.add("hidden");
    }
}

// Initialize cart count from localStorage or set it to 0 if not present
function initializeCartCount() {
    const cartCount = parseInt(localStorage.getItem("cartCount")) || 0;
    updateCartCount(cartCount);
}

// Add "Add to Cart" event listeners after placing products
function bindAddToCartEvents() {
    const addToCartLinks = document.querySelectorAll("[data-add-to-cart]");
    addToCartLinks.forEach((link) => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            addItemToCart();
        });
    });
}

// Update the cart display based on the new count and save to localStorage
function updateCartCount(newCount) {
    const cartAmountElement = document.querySelector(".cart-amount");
    const cartAmountIcon = document.querySelector(".cart-amount-icon");

    if (cartAmountElement && cartAmountIcon) {
        if (newCount > 99) {
            cartAmountElement.classList.add("hidden");
            cartAmountIcon.classList.remove("hidden");
        } else {
            cartAmountElement.classList.remove("hidden");
            cartAmountIcon.classList.add("hidden");
            cartAmountElement.textContent = newCount;
        }
        localStorage.setItem("cartCount", newCount);
    } else {
        console.error("Cart elements not found in the DOM.");
    }
}

// Increase cart count, update the display, and add animation effects
function addItemToCart() {
    let cartCount = parseInt(localStorage.getItem("cartCount")) || 0;
    cartCount++;
    updateCartCount(cartCount);

    // Apply animation to indicate item was added
    const cartCircle = document.querySelector(".incart-circle");
    const cartAmountElement = document.querySelector(".cart-amount");

    cartCircle.classList.add("grow-shake");
    cartAmountElement.classList.add("grow-shake");

    // Remove animation classes after the animation completes
    setTimeout(() => {
        cartCircle.classList.remove("grow-shake");
        cartAmountElement.classList.remove("grow-shake");
    }, 500);
}

// Function to get the productId from the URL
function getProductIdFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('productId');
}

// Function to find the product by productId
function getProductById(productId) {
    return productCatalog.products.find(product => product.id === productId);
}

// Function to display the product details on the PDP
function displayProduct(product) {
    if (!product) {
        console.error("Product not found.");
        return;
    }

    // Target elements on the PDP to populate with product details
    document.querySelector('.product-title').textContent = product.name;
    document.querySelector('.product-image').src = product.imgPath;
    document.querySelector('.product-image').alt = product.imgAlt;
    document.querySelector('.product-description').textContent = product.description;
    document.querySelector('.product-price').innerHTML = priceHandler(product); // Reusing your price handler
    document.querySelector('.product-categories').innerHTML = categoryButtonHandler(product.categories);
    document.querySelector('.product-tags').innerHTML = tagHandler(product.tags);
}

// Function to initialize the PDP with the correct product details
function initializePDP() {
    const productId = getProductIdFromURL();
    const product = getProductById(productId);
    displayProduct(product);
}

// Call initializePDP on page load
// Define all resize events
window.addEventListener("load", initializePDP); // Update the page with the query's information
window.addEventListener("resize", setShownMenu); // Show or hide the mobile menu on resize
window.addEventListener("load", setShownMenu); // Show or hide the mobile menu on load
window.addEventListener("load", initializeCartCount); // Initialize the cart's number on page load

// Define the items for the document to find
const hamburgerIcon = document.querySelector(".hamburger");

// Add event listeners to the button to open the page links on mobile
hamburgerIcon.addEventListener("click", toggleMobileMenu); 
hamburgerIcon.addEventListener("touch", toggleMobileMenu);

