const products = [
    {
        productName: "Black Sport-Tek Sport-Wick United Performance Pullover Hoodie",
        description: "Stay dry and comfortable during every workout with the Sport-Tek Sport-Wick United Performance Pullover Hoodie. This hoodie is crafted with advanced moisture-wicking fabric to keep you sweat-free during intense activities. The soft, lightweight material offers flexibility while maintaining warmth. Perfect for layering or wearing on its own during cooler weather.",
        price: 42.00,
        tags: ["hoodie", "moisture-wicking", "activewear", "pullover"],
        availableSizes: ["S", "M", "L", "XL", "2X"],
        shortTitle: "Black Sport-Tek Hoodie",
        shortDescription: "Moisture-wicking pullover hoodie for active use.",
        newArrival: false,
        bestSeller: false,
        sale: false,
    },
    {
        productName: "Black Hanes Women's Sport Cool Dri Performance Shirt",
        description: "Hanes Women's Sport Cool Dri Performance Shirt is designed with advanced moisture-wicking technology to keep you cool and comfortable. Whether you're pushing through an intense workout or enjoying outdoor activities, this shirt offers lightweight comfort and dries quickly, making it a perfect fit for your active lifestyle.",
        sale: true,
        priceWas: 24.99,
        newPrice: 19.99,
        tags: ["t-shirt", "moisture-wicking", "women's activewear", "cool-dri"],
        availableSizes: ["XS", "S", "M", "L", "XL"],
        shortTitle: "Hanes Women's Cool Dri Shirt",
        shortDescription: "Quick-drying, lightweight active shirt for women.",
        newArrival: true,
        bestSeller: false,
        sale: true,
    },
    {
        productName: "Black Port & Company Core Crewneck Sweatshirt",
        description: "The Black Port & Company Core Crewneck Sweatshirt offers a classic fit and feel with its soft fleece material, making it perfect for layering or wearing casually. Whether you're lounging or staying active, this sweatshirt is designed to provide warmth and comfort throughout the day.",
        price: 30.00,
        tags: ["sweatshirt", "crewneck", "casual", "layering"],
        availableSizes: ["S", "M", "L", "XL", "2X"],
        shortTitle: "Port & Company Sweatshirt",
        shortDescription: "Casual fleece crewneck sweatshirt for layering.",
        newArrival: false,
        bestSeller: true,
        sale: true,
    }
];

function toggleCategoryTagsHandler() {
    const categorySections = document.querySelectorAll(".category-container");

    categorySections.forEach((section) => {
        section.classList.toggle("hidden");
    });
};

function toggleGeneralTagsHandler() {
    const generalTagSections = document.querySelectorAll(".tag-container");

    generalTagSections.forEach((section) => {
        section.classList.toggle("hidden");
    });
};

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

function formCloseHandler() {
    const asideChevron = document.querySelector(".close-form");
    const formDiv = document.querySelector(".filter-form");

    formDiv.classList.toggle("hidden");
    asideChevron.classList.toggle("fa-chevron-up");
    asideChevron.classList.toggle("fa-chevron-down");
}

// Define the icons for the document to find
const hamburgerIcon = document.querySelector(".hamburger");
const asideChevron = document.querySelector(".close-form");

// Make an event listener that will toggle the visibility of the tags 
const categoryTagSectionCheck = document.getElementById("toggleCategoryTags");
const generalTagCheck = document.getElementById("toggleGeneralTags");

categoryTagSectionCheck.addEventListener("change", toggleCategoryTagsHandler);
generalTagCheck.addEventListener("change", toggleGeneralTagsHandler);

// Make a resize event to ensure the window is desktop size to show the menu
document.addEventListener("DOMContentLoaded", () => {
    window.addEventListener("resize", setShownMenu);
    window.addEventListener("load", setShownMenu);
});

// Add event listeners to the button to open the page links on mobile
hamburgerIcon.addEventListener("click", toggleMobileMenu); 
hamburgerIcon.addEventListener("touch", toggleMobileMenu);

// Add event listeners to the close form arrow.
asideChevron.addEventListener("click", formCloseHandler);
asideChevron.addEventListener("touch", formCloseHandler);

// Format and place the cards dynamically on page based on each given product (x2 to fill out grid)















{/* <article class="product-card" data-link="pdp.html/#hanes-womens-cool-dri-shirt">
    <div class="product-img-div">
        <img class="product-image" src="images/womens_active_t/t_front.png" alt="women's black active tee with sc logo">
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
        <div class="tag-container hidden">
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
</article>  */}