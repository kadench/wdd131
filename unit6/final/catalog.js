function menuHandler() {
    const pageLinks = document.querySelector(".home-list");

    pageLinks.classList.toggle("hidden");
}

function formCloseHandler() {
    const asideChevron = document.querySelector(".close-form");
    const sidebar = document.querySelector(".sidebar");

    sidebar.classList.toggle("hidden");
    asideChevron.classList.toggle("fa-chevron-up");
    asideChevron.classList.toggle("fa-chevron-down");

}

// Define the icons for the document to find
const hamburgerIcon = document.querySelector(".hamburger");
const asideChevron = document.querySelector(".close-form");

// Add event listers to the button to open the page links on mobile and desktop
hamburgerIcon.addEventListener("click", menuHandler); 
hamburgerIcon.addEventListener("touch", menuHandler);

// Add event listeners to the close form arrow.
asideChevron.addEventListener("click", formCloseHandler);
asideChevron.addEventListener("touch", formCloseHandler);



