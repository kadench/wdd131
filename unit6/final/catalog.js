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

function menuHandler() {
    const mobileList = document.querySelector(".mobile-list");
    const desktopList = document.querySelector("desktop-menu");
    const hamburgerIcon = document.querySelector(".hamburger");

    if (window.innerWidth < 768) {
        mobileList.classList.remove("hidden");
        hamburgerIcon.style.userSelect = "all";
        hamburgerIcon.style.zIndex = "1";
    } else {
        mobileList.classList.add("hidden");
        desktopList.classList.remove("hidden")
        hamburgerIcon.style.userSelect = "none";
        hamburgerIcon.style.zIndex = "-1";
        pageLinks.classList.add("desktop-menu");
    }
};

function formCloseHandler() {
    const asideChevron = document.querySelector(".close-form");
    const formDiv = document.querySelector(".filter-form");

    formDiv.classList.toggle("hidden");
    asideChevron.classList.toggle("fa-chevron-up");
    asideChevron.classList.toggle("fa-chevron-down");

};

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
    window.addEventListener("resize", menuHandler);
    window.addEventListener("load", menuHandler);
});

// Add event listers to the button to open the page links on mobile and desktop
hamburgerIcon.addEventListener("click", menuHandler); 
hamburgerIcon.addEventListener("touch", menuHandler);

// Add event listeners to the close form arrow.
asideChevron.addEventListener("click", formCloseHandler);
asideChevron.addEventListener("touch", formCloseHandler);



