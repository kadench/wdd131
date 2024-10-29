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
            frontImgPath: "images/mens_active_hoodie/hoodie_front.webp",
            backImgPath: "images/mens_active_hoodie/hoodie_back.webp",
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
            frontImgPath: "images/womens_active_t/tee_front.webp",
            backImgPath: "images/womens_active_t/tee_back.webp",
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
            frontImgPath: "images/mens_sweat_shirt/sweatshirt_front.webp",
            backImgPath: "images/mens_sweat_shirt/sweatshirt_back.webp",
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
    }
    else {
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

// Update the cart display based on the new count and save to localStorage
function updateCartCount(newCount) {
    const cartAmountElement = document.querySelector(".cart-amount");
    const cartAmountIcon = document.querySelector(".cart-amount-icon");

    if (cartAmountElement && cartAmountIcon) {
        if (newCount > 99) {
            cartAmountElement.classList.add("hidden");
            cartAmountIcon.classList.remove("hidden");
        }
        else {
            cartAmountElement.classList.remove("hidden");
            cartAmountIcon.classList.add("hidden");
            cartAmountElement.textContent = newCount;
        }
        localStorage.setItem("cartCount", newCount);
    }
    else {
        console.error("Cart elements not found in the DOM.");
    }
}

// Increase cart count, update the display, and add animation effects
function addItemToCart(quantity) {
    quantity = parseInt(quantity);

    let cartCount = parseInt(localStorage.getItem("cartCount")) || 0;

    cartCount += quantity; // adding the given quantity instead of just one
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

    else {

        // Update the page's metadata with product info
        metadataHandler(product);
        imagePlacementHandler(product);
        tagAndCategoryHandler(product);
        descriptionHandler(product);
        sizeButtonAvailability(product);
        // Define the price div
        const priceDiv = document.querySelector(".product-price");
        priceDiv.innerHTML = priceHandler(product);

        // Target elements on the PDP to populate with product details
        document.querySelector('.product-title').textContent = product.name;
    }

}

// PDP Content handler functions
function metadataHandler(product) {
    // Description and author metadata
    document.querySelector('meta[name="description"]').setAttribute("content", product.shortDescription);
    document.querySelector('meta[name="author"]').setAttribute("content", "Kaden Hansen");

    // social media sharing metadata
    document.querySelector('meta[property="og:title"]').setAttribute("content", `${product.name} | Store Catalog`);
    document.querySelector('meta[property="og:description"]').setAttribute("content", product.description);
    document.querySelector('meta[property="og:image"]').setAttribute("content", product.frontImgPath);
    document.querySelector('meta[property="og:url"]').setAttribute("content", productCatalog.getPdpLink(product.id));
    document.querySelector('meta[name="twitter:card"]').setAttribute("content", "summary_large_image");

    // Title of the page
    document.querySelector('title').textContent = `${product.name} | Store Catalog`;
}

// Places the right images in the PDP
function imagePlacementHandler(product) {
    // Define the sections with the images
    const spotlightSection = document.querySelector(".spotlight");
    const imageLineSection = document.querySelector(".image-line");

    // Define the image strings
    const frontImgString = `<img src="${product.frontImgPath}" alt="person facing forward wearing the ${product.shortDescription.toLowerCase()}">`;
    const backImgString = `<img src="${product.backImgPath}" alt="person facing backward wearing the ${product.shortDescription.toLowerCase()}">`;

    spotlightSection.innerHTML = frontImgString;
    imageLineSection.innerHTML = frontImgString + backImgString
}

function imageSpotlightHandler(event) {
    const spotlightImage = document.querySelector(".spotlight img");
    const clickedImage = event.target;

    spotlightImage.src = clickedImage.src;
    spotlightImage.alt = clickedImage.alt;

}

// Handles the price string shown
function priceHandler(product) {
    const currentPrice = product.price;
    const originalPrice = product.priceWas;
    const isDiscounted = product.tags.sale;

    let discountPercentage = null;
    let priceTemplateString = ``;

    if (isDiscounted) {
        discountPercentage = Math.floor(((originalPrice - currentPrice) / originalPrice) * 100);

        priceTemplateString =   `<span class="discount-percentage">${discountPercentage}% off</span>
                                <span class="price-was">$${originalPrice}</span>
                                <span class="discounted-price">$${currentPrice}</span>`
    }
    else {
        priceTemplateString = `<span class="price">$${currentPrice}</span>`;
    }

    return priceTemplateString;
}

// Add the description text to the description
function descriptionHandler(product) {
    const productDescription = document.querySelector(".product-desc");
    const descriptionString = `<p class="desc-text">
                                    ${product.description}
                                </p>`

    productDescription.innerHTML = descriptionString

}

// Function to initialize the PDP with the correct product details
function initializePDP() {
    const productId = getProductIdFromURL();
    const product = getProductById(productId);
    displayProduct(product);

    // Handle when the images in image-line are clicked
    const imgLineImages = document.querySelectorAll(".image-line img");

    imgLineImages.forEach(image => {
        image.addEventListener("click", imageSpotlightHandler);
    });
}

// Changes the value in the quantity input when either '+' or '-' is clicked.
function adjustQuantity(isIncreasing) {
    const quantityInput = document.getElementById("itemQuantity");
    let quantityValue = parseInt(quantityInput.value) || 1;

    if (isIncreasing) {
        quantityValue++;
    } else if (quantityValue > 1) {
        quantityValue--;
    }
    
    quantityInput.value = quantityValue;
}

function tagAndCategoryHandler(product) {
    // Make all the given tags into an HTML string of special tags
    function tagHandler(tags) {
        let tagString = ``;
        
        if (tags.sale) {
            tagString += `<p class="tag" data-tag="sale">Sale</p>`;
        }
        
        if (tags.bestSeller) {
            tagString += `<p class="tag" data-tag="best-seller">Best Seller</p>`;
        }
        
        
        if (tags.newArrival) {
            tagString += `<p class="tag" data-tag="new-arrival">New Arrival</p>`;
        }

        return tagString;
    }

    // Make all the given category buttons an HTML string to put in the
    // template
    function categoryButtonHandler(categories) {

        let categoriesList = [];

        categories.forEach((category) => {
            const categoryButton = `<p
                                        class="category"
                                        data-category="${category}"
                                        type="button"
                                    >
                                        ${category}
                                    </p>`;
            categoriesList.push(categoryButton);
        });
        
        const categoryButtons = categoriesList.join("");

        return categoryButtons;
    }

    const tagAndCategoryDiv = document.querySelector(".tag-section");
    const tagString = tagHandler(product.tags);
    const categoryString = categoryButtonHandler(product.categories);

    let combinedTagString = tagString + categoryString;

    tagAndCategoryDiv.innerHTML = combinedTagString;
}

// Styles the buttons and shows the user which size they chose
function sizeButtonAvailability(product) {
    const sizeButtonList = Array.from(document.querySelectorAll(".size-button"));
    const availableSizes = Object.keys(product.sizes).filter(size => product.sizes[size]);
    
    sizeButtonList.forEach(button => {
        if (!availableSizes.includes(button.textContent)) {
            button.classList.add("disabled");
            button.disabled = true;
            button.setAttribute("title", `${button.textContent} is out of stock`);
        } else {
            button.disabled = false;
            button.removeAttribute("title");
            button.addEventListener("click", (event) => handleSizeButtonClick(event, sizeButtonList));
        }
    });
}

function handleSizeButtonClick(event, sizeButtonList) {
    const clickedButton = event.target;
    const clickedSizeTitle = document.querySelector("form h2");

    if (clickedButton.classList.contains("chosen")) {
        clickedButton.classList.remove("chosen");
        clickedSizeTitle.textContent = "Size: unset";
    } else {
        sizeButtonList.forEach(button => button.classList.remove("chosen"));
        clickedButton.classList.add("chosen");
        clickedSizeTitle.textContent = `Size: ${clickedButton.textContent}`;
    }
}

function submitHandler(event) {
    const quantityItem = event.target;
    const quantity = parseInt(event.target.value);

    if (quantity > 10) {
        preventDefault();
        quantityItem.classList.toggle("disabled")
    }
}

// Define all resize events
// Call initializePDP on page load
window.addEventListener("load", initializePDP); // Update the page with the query's information

// Make sure menu and cart is initialized when page is loaded or resized 
window.addEventListener("resize", setShownMenu); // Show or hide the mobile menu on resize
window.addEventListener("load", setShownMenu); // Show or hide the mobile menu on load
window.addEventListener("load", initializeCartCount); // Initialize the cart's number on page load

// Define the items for the document to find
const hamburgerIcon = document.querySelector(".hamburger");

// Add event listeners to the button to open the page links on mobile
hamburgerIcon.addEventListener("click", toggleMobileMenu); 
hamburgerIcon.addEventListener("touch", toggleMobileMenu);

// Make the add to cart button actually add a number to cart
const addToCartLink = document.querySelector("[data-add-to-cart]");

addToCartLink.addEventListener("click", (event) => {
    const productQuantity = document.getElementById("itemQuantity").value;
    event.preventDefault();
    addItemToCart(productQuantity);
});


// Make the quantity '+' and '-' buttons decrease and increase the value
const plusQuantityButton = document.querySelector(".fa-plus");
const minusQuantityButton = document.querySelector(".fa-minus");

plusQuantityButton.addEventListener("click", () => adjustQuantity(true));
minusQuantityButton.addEventListener("click", () => adjustQuantity(false));

// Make an add to cart submit handler
const addCartButton = document.querySelector(".add-to-cart");

addCartButton.addEventListener("submit", submitHandler);

