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
            categories: ["hoodie", "moisture-wicking", "activewear", "pullover"],
            shortDescription: "Moisture-wicking pullover hoodie for active use.",
            priceWas: null,
            price: 42.00,
            tags: {
                newArrival: false,
                bestSeller: false,
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
            imgPath: "images/womens_active_shirt/tee_front.png",
            imgAlt: "a woman faces forward wearing a black cool dry shirt that has the store logo on it",
            categories: ["t-shirt", "moisture-wicking", "women's activewear", "cool-dri"],
            shortDescription: "Quick-drying, lightweight active shirt for women.",
            priceWas: 24.99,
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
            imgPath: "images/mens_casual_sweatshirt/sweatshirt_front.png",
            imgAlt: "a man faces forward wearing a black sweatshirt that has the store logo on it",
            categories: ["sweatshirt", "crewneck", "casual", "layering"],
            shortDescription: "Casual fleece crewneck sweatshirt for layering.",
            priceWas: 30.00,
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
            categories: ["hoodie", "moisture-wicking", "activewear", "pullover"],
            shortDescription: "Moisture-wicking pullover hoodie for active use.",
            priceWas: null,
            price: 42.00,
            tags: {
                newArrival: false,
                bestSeller: false,
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
            imgPath: "images/womens_active_shirt/tee_front.png",
            imgAlt: "a woman faces forward wearing a black cool dry shirt that has the store logo on it",
            categories: ["t-shirt", "moisture-wicking", "women's activewear", "cool-dri"],
            shortDescription: "Quick-drying, lightweight active shirt for women.",
            priceWas: 24.99,
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
            imgPath: "images/mens_casual_sweatshirt/sweatshirt_front.png",
            imgAlt: "a man faces forward wearing a black sweatshirt that has the store logo on it",
            categories: ["sweatshirt", "crewneck", "casual", "layering"],
            shortDescription: "Casual fleece crewneck sweatshirt for layering.",
            priceWas: 30.00,
            price: 15.99,
            tags: {
                newArrival: false,
                bestSeller: true,
                sale: true
            }
        }
    ]
};

function toggleCategoryTagsHandler() {
    const categorySections = document.querySelectorAll(".category-container");

    categorySections.forEach((section) => {
        section.classList.toggle("hidden");
    });
}

function toggleSpecialTagsHandler() {
    const generalTagSections = document.querySelectorAll(".tag-container");

    generalTagSections.forEach((section) => {
        section.classList.toggle("hidden");
    });
}

function toggleMobileMenu() {
    const mobileList = document.querySelector(".mobile-list");
    mobileList.classList.toggle("hidden");
}

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

// Got ChatGPT's help with cart-amount and local storage because I sat here
// for two hours unable to figure out why the cartAmountElement variable was
// returning null and causing an error.

function initializeCartCount() {
    const cartCount = localStorage.getItem("cartCount") || 0;
    updateCartCount(cartCount);
}

function updateCartCount(newCount) {
    const cartAmountElement = document.querySelector(".cart-amount");
    const cartAmountIcon = document.querySelector(".cart-amount-icon");

    if (newCount > 99) {
        cartAmountElement.classList.add("hidden");
        cartAmountIcon.classList.remove("hidden");
    } else {
        cartAmountElement.classList.remove("hidden");
        cartAmountIcon.classList.add("hidden");
        cartAmountElement.textContent = newCount;
    }

    localStorage.setItem("cartCount", newCount);
}

function addItemToCart() {
    let cartCount = parseInt(localStorage.getItem("cartCount")) || 0;
    cartCount++;
    updateCartCount(cartCount);

    // Add animation classes to the cart icon and count
    const cartCircle = document.querySelector(".incart-circle");
    const cartAmountElement = document.querySelector(".cart-amount");

    cartCircle.classList.add("grow-shake");
    cartAmountElement.classList.add("grow-shake");

    // Remove animation classes after animation completes
    setTimeout(() => {
        cartCircle.classList.remove("grow-shake");
        cartAmountElement.classList.remove("grow-shake");
    }, 500);
}

function formCloseHandler() {
    const asideChevron = document.querySelector(".close-form");
    const formDiv = document.querySelector(".filter-form");

    formDiv.classList.toggle("hidden");
    asideChevron.classList.toggle("fa-chevron-up");
    asideChevron.classList.toggle("fa-chevron-down");
}

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
            <div class="tag-container hidden">
                ${tagHandler(product.tags)}
            </div>
            <div class="product-desc">
                <p class="desc-text">
                    ${product.shortDescription}
                </p>
                <div class="category-container hidden">
                    ${categoryButtonHandler(product.categories)}
                </div>
                <div class="product-nav">
                    <a class="other-page-link" href="${productCatalog.getPdpLink(product.id)}">
                        view product<span class="fa fa-chevron-right"></span>
                    </a>
                    <button class="other-page-link"
                            data-add-to-cart
                            type="button"
                            aria-label="Add this product to your cart">
                        add to cart<span class="fa fa-chevron-right"></span>
                    </button>
                </div>
            </div>
        </div>
    </article>`;
    
    return HTMLString;
}

function priceHandler(product) {
    const currentPrice = product.price;
    const originalPrice = product.priceWas;
    const isDiscounted = product.tags.sale;

    let discountPercentage = null;
    let priceTemplateString = ``;

    if (isDiscounted) {
        discountPercentage = ((originalPrice - currentPrice) / originalPrice) * 100;

        priceTemplateString = `<div class="product-price">
                                    <span class="discount-percentage">${discountPercentage}% off</span>
                                    <span class="price-was">${originalPrice}</span>
                                    <span class="discounted-price">${currentPrice}</span>
                                </div>`
    }
    else {
        priceTemplateString = `<div class="product-price">
                                    <span>${currentPrice}</span>
                                </div>`;
    }

    return priceTemplateString;
}

function tagHandler(tags) {
    let tagString = ``;
    
    if (tags.bestSeller === true) {
        tagString += `<button class="tag" data-tag="best-seller">Best Seller</button>`;
    }
    
    if (tags.sale) {
        tagString += `<button class="tag" data-tag="sale">Sale</button>`;
    }
    
    if (tags.newArrival === true) {
        tagString += `<button class="tag" data-tag="new-arrival">New Arrival</button>`;
    }

    return tagString;
}

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

// Make a resize event to ensure the window is desktop size to show the menu
window.addEventListener("resize", setShownMenu);
window.addEventListener("load", setShownMenu);

// Define the items for the document to find
const hamburgerIcon = document.querySelector(".hamburger");
const asideChevron = document.querySelector(".close-form");
const addToCartLinks = document.querySelectorAll("[data-add-to-cart]");
const categoryTagSectionCheck = document.getElementById("toggleCategoryTags");
const specialTagCheck = document.getElementById("toggleSpecialTags");

// Initialize the cart's number on page load
initializeCartCount();

// Add event listeners to the button to open the page links on mobile
hamburgerIcon.addEventListener("click", toggleMobileMenu); 
hamburgerIcon.addEventListener("touch", toggleMobileMenu);

// Add an event listener to each "Add to Cart" link
addToCartLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
        event.preventDefault(); // Don't
        addItemToCart();
    });
});

// Add event listeners to the close form arrow.
asideChevron.addEventListener("click", formCloseHandler);
asideChevron.addEventListener("touch", formCloseHandler);

// Format and place the cards dynamically on page based on each given products
productCatalog.products.forEach((product) => {
    placeProduct(product);
});

// Make an event listener that will toggle the visibility of the tags 
categoryTagSectionCheck.addEventListener("change", toggleCategoryTagsHandler);
specialTagCheck.addEventListener("change", toggleSpecialTagsHandler);





{/* <article class="product-card" data-link="pdp.html/#hanes-womens-cool-dri-shirt">
    <div class="product-img-div">
        <img class="product-image" src="images/womens_active_t/tee_front.png" alt="women's black active tee with sc logo">
    </div>
    <div class="product-content">
        <div class="price-details">
            <div class="product-price">
                <span class="discount-percentage">20% off</span>
                <span class="price-was">$24.99</span>
                <span class="discounted-price">$19.99</span>
            </div>
        </div>
        <h2 class="product-title">
        Hanes Women's Cool Dri Shirt
        </h2>
        <div class="tag-container">
            <button class="tag" data-tag="best-seller">Best Seller</button>
            <button class="tag" data-tag="sale">Sale</button>
            <button class="tag" data-tag="new-arrival">New Arrival</button>
        </div>
        <div class="product-desc">
            <p class="desc-text">
                Quick-drying, lightweight active shirt for women..
            </p>
            <div class="category-container hidden">
                <button class="category" data-category="t-shirt" type="button">T-shirt</button>
                <button class="category" data-category="moisture-wicking" type="button">Moisture-Wicking</button>
                <button class="category" data-category="womens-activewear" type="button">Women's Activewear</button>
                <button class="category" data-category="cool-dri" type="button">Cool-Dri</button>
            </div>
            <div class="product-nav">
                <a class="other-page-link" href="pdp.html/#hanes-womens-cool-dri-shirt">
                    view product<span class="fa fa-chevron-right"></span>
                </a>
                <a class="other-page-link" href="pdp.html/#hanes-womens-cool-dri-shirt">
                    add to cart<span class="fa fa-chevron-right"></span>
                </a>
            </div>
        </div>
    </div>
</article> */}