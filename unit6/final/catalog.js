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
            }
        }
    ]
};

// State object to retain visibility settings
const visibilityState = {
    showDescriptions: false,
    showCategoryTags: true,
    showSpecialTags: true
};

// Only pulls up the women's clothing
function toggleWWear(catalog) {
    const isChecked = document.getElementById("womensWearCheck").checked;
    const productGrid = document.querySelector(".product-grid");
    
    productGrid.innerHTML = '';
    
    if (isChecked) {
        const filteredProducts = catalog.products.filter(product =>
            product.categories.find(category => category.toLowerCase().includes("women"))
        );
        placeProducts({ products: filteredProducts });
    } else {
        placeProducts(catalog);
    }
}

// Only pulls up the men's clothing
function toggleMWear(catalog) {
    const isChecked = document.getElementById("mensWearCheck").checked;
    const productGrid = document.querySelector(".product-grid");

    productGrid.innerHTML = '';

    if (isChecked) {
        const filteredProducts = catalog.products.filter(product =>
            product.categories.find(category => 
                category.toLowerCase().includes("men") && !category.toLowerCase().includes("women")
            )
        );
        placeProducts({ products: filteredProducts });
    } else {
        placeProducts(catalog);
    }
}


function toggleProductDescriptionHandler() {
    const productDescriptions = document.querySelectorAll(".desc-text");
    
    productDescriptions.forEach((description) => {
        description.classList.toggle("hidden");
    });

    visibilityState.showDescriptions = !visibilityState.showDescriptions;
}

// Hide or show the category buttons
function toggleCategoryTagsHandler() {
    const categorySections = document.querySelectorAll(".category-container");
    
    categorySections.forEach((section) => {
        section.classList.toggle("hidden");
    });
    visibilityState.showCategoryTags = !visibilityState.showCategoryTags;
}

// Hide or show the special tag buttons
function toggleSpecialTagsHandler() {
    const generalTagSections = document.querySelectorAll(".tag-container");

    generalTagSections.forEach((section) => {
        section.classList.toggle("hidden");
    });

    visibilityState.showSpecialTags = !visibilityState.showSpecialTags;
}

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
        hamburgerIcon.classList.remove("hidden")
        desktopList.classList.add("hidden");
    } else {
        mobileList.classList.add("hidden");
        desktopList.classList.remove("hidden");
        hamburgerIcon.classList.add("hidden")
    }
}

// Sets all product cards to the height of the tallest card, recalculating on load and resize
function setUniformCardHeights() {
    const productCards = document.querySelectorAll(".product-card");

    productCards.forEach(card => {
        card.style.height = "auto";
    });

    let maxHeight = 0;
    productCards.forEach(card => {
        maxHeight = Math.max(maxHeight, card.offsetHeight);
    });

    if (maxHeight > 0) {
        productCards.forEach(card => {
            card.style.height = `${maxHeight}px`;
        });
    }
}

// Got ChatGPT's help with cart-amount and local storage because I sat here
// for two hours unable to figure out why the cartAmountElement variable was
// returning null and causing an error.

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

// Close the catalog filters when chevron is clicked
function formCloseHandler() {
    const asideChevron = document.querySelector(".close-form");
    const formDiv = document.querySelector(".filter-form");

    formDiv.classList.toggle("hidden");
    asideChevron.classList.toggle("fa-chevron-up");
    asideChevron.classList.toggle("fa-chevron-down");
}

// Place each product on the grid
function placeProducts(catalog) {
    const productGrid = document.querySelector(".product-grid");

    catalog.products.forEach((product) => {

        const newArticle = document.createElement("article");
        newArticle.innerHTML = makeHTMLTemplate(product);
        productGrid.insertAdjacentElement("beforeend", newArticle);

    });
}

// Make the HTML template for the products
function makeHTMLTemplate(product) {
    const HTMLString = `
    <article class="product-card" data-link="${productCatalog.getPdpLink(product.id)}">
        <div class="product-img-div">
            <img class="product-image" src="${product.imgPath}" alt="${product.imgAlt}">
        </div>
        <div class="product-content">
            <div class="price-details">
                <div class="product-price">
                    ${priceHandler(product)}
                </div>
            </div>
            <h2 class="product-title">
                ${product.name}
            </h2>
            <div class="tag-container ${hiddenHandler('tag')}">
                ${tagHandler(product.tags)}
            </div>
            <div class="product-desc">
                <p class="desc-text ${hiddenHandler('desc')}">
                    ${product.shortDescription}
                </p>
                <div class="category-container ${hiddenHandler('category')}">
                    ${categoryButtonHandler(product.categories)}
                </div>
                <div class="product-nav">
                    <a class="other-page-link" href="${productCatalog.getPdpLink(product.id)}">
                        view product<span class="fa fa-chevron-right"></span>
                    </a>
                     <button
                        class="other-page-link"
                        data-add-to-cart
                        type="button"
                        aria-label="Add this product to your cart"
                        >
                        add to cart<span class="fa fa-chevron-right"></span>
                    </button>
                </div>
            </div>
        </div>
    </article>`;
    
    return HTMLString;
}

// Handle how the price is shown (if there's a sale or not)
function priceHandler(product) {
    const currentPrice = product.price;
    const originalPrice = product.priceWas;
    const isDiscounted = product.tags.sale;

    let discountPercentage = null;
    let priceTemplateString = ``;

    if (isDiscounted) {
        discountPercentage = Math.floor(((originalPrice - currentPrice) / originalPrice) * 100);

        priceTemplateString = `<div class="product-price">
                                    <span class="discount-percentage">${discountPercentage}% off</span>
                                    <span class="price-was">$${originalPrice}</span>
                                    <span class="discounted-price">$${currentPrice}</span>
                                </div>`
    }
    else {
        priceTemplateString = `<div class="product-price">
                                    <span>$${currentPrice}</span>
                                </div>`;
    }

    return priceTemplateString;
}

// Make all the given tags into an HTML string of special tags
function tagHandler(tags) {
    let tagString = ``;
    
    if (tags.bestSeller) {
        tagString += `<button class="tag" data-tag="best-seller">Best Seller</button>`;
    }
    
    if (tags.sale) {
        tagString += `<button class="tag" data-tag="sale">Sale</button>`;
    }
    
    if (tags.newArrival) {
        tagString += `<button class="tag" data-tag="new-arrival">New Arrival</button>`;
    }

    return tagString;
}

// Make all the given category buttons an HTML string to put in the
// template
function categoryButtonHandler(categories) {

    let categoriesList = [];

    categories.forEach((category) => {
        const categoryButton = `<button
                                    class="category"
                                    data-category="${category}"
                                    type="button"
                                >
                                    ${category}
                                </button>`;
        categoriesList.push(categoryButton);
    });
    
    const categoryButtons = categoriesList.join("");

    return categoryButtons;
}

// Decide whether an element was hidden or not
function hiddenHandler(type) {
    const visibilityMap = {
        "category": visibilityState.showCategoryTags,
        "tag": visibilityState.showSpecialTags,
        "desc": visibilityState.showDescriptions
    };
    
    // ChatGPT showed me shorthand if else statements.
    // will use more in the future 
    return visibilityMap[type] ? "hidden" : "";
}

// ChatGPT made a to camel case function because for some reason JS doesn't have one
// This uses a pattern similar to python's re module to parse through the string and
// return a desired look.
function toCamelCase(str) {
    return str.toLowerCase().replace(/(?:\s+)(\w)/g, (_, char) => char.toUpperCase());
}


// Function to handle special tag button click
function handleSpecialTagClick(tagButton) {
    let clickedTag = toCamelCase(tagButton.textContent.trim());

    const productGrid = document.querySelector(".product-grid");
    productGrid.innerHTML = '';
    const filteredProducts = productCatalog.products.filter(product =>
        product.tags[clickedTag] === true
    );
    console.log(filteredProducts)
    placeProducts({ products: filteredProducts });
    setUniformCardHeights();
}

// Function to handle category tag button click
function handleCategoryTagClick(categoryButton) {
    const clickedCategory = categoryButton.textContent.trim().toLowerCase();
    const productGrid = document.querySelector(".product-grid");
    productGrid.innerHTML = '';
    const filteredProducts = productCatalog.products.filter(product =>
        product.categories.some(category =>
            category.toLowerCase() === clickedCategory
        )
    );
    placeProducts({ products: filteredProducts });
    setUniformCardHeights();
}

// Define all resize events
window.addEventListener("resize", setShownMenu); // Show or hide the mobile menu on resize
window.addEventListener("load", setShownMenu); // Show or hide the mobile menu on load
window.addEventListener("load", initializeCartCount); // Initialize the cart's number on page load
window.addEventListener("load", setUniformCardHeights); // Make sure all the cards have the same height on load
window.addEventListener("resize", setUniformCardHeights); // Make sure all the cards have the same height on resize

// Define the items for the document to find
const hamburgerIcon = document.querySelector(".hamburger");
const asideChevron = document.querySelector(".close-form");

// Add event listeners to the button to open the page links on mobile
hamburgerIcon.addEventListener("click", toggleMobileMenu); 
hamburgerIcon.addEventListener("touch", toggleMobileMenu);

// Add event listeners to the close form arrow.
asideChevron.addEventListener("click", formCloseHandler);
asideChevron.addEventListener("touch", formCloseHandler);

// Format and place the cards dynamically on page based on each given products
placeProducts(productCatalog);

// Call the function to bind "Add to Cart" event listeners
bindAddToCartEvents();

// Define all of the special tag button
const productGrid = document.querySelector(".product-grid");

productGrid.addEventListener("click", function (event) {
    const target = event.target;

    // Check if the click is on a special tag button
    if (target.classList.contains("tag")) {
        handleSpecialTagClick(target);
    }
    // Check if the click is on a category button
    else if (target.classList.contains("category")) {
        handleCategoryTagClick(target);
    }
});




// Form filtering

// Make an event listener that will update the content for the form

// Show or hide gender specific material
const womensWearCheck = document.getElementById("womensWearCheck");
const mensWearCheck = document.getElementById("mensWearCheck");

womensWearCheck.addEventListener("change", () => toggleWWear(productCatalog));
mensWearCheck.addEventListener("change", () => toggleMWear(productCatalog));


// Hide or show each special or category tag section or show or hide the product description 
const productDescriptionCheck = document.getElementById("productDescToggle");
const categoryTagSectionCheck = document.getElementById("toggleCategoryTags");
const specialTagCheck = document.getElementById("toggleSpecialTags");

productDescriptionCheck.addEventListener("change", toggleProductDescriptionHandler);
productDescriptionCheck.addEventListener("change", setUniformCardHeights);

categoryTagSectionCheck.addEventListener("change", toggleCategoryTagsHandler);
categoryTagSectionCheck.addEventListener("change", setUniformCardHeights);

specialTagCheck.addEventListener("change", toggleSpecialTagsHandler);
specialTagCheck.addEventListener("change", setUniformCardHeights);