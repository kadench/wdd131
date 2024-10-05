// Select the header and main content elements
const mainContent = document.querySelector('main');
const header = document.querySelector(".sticky");

// Function to adjust the main content margin
function adjustContentMargin() {
    if (window.innerWidth > 768) {
        const headerHeight = header.offsetHeight;
        mainContent.style.marginTop = `${headerHeight}px`;
      }
      else if (window.innerWidth <= 768) {
        const headerHeight = header.offsetHeight;
        mainContent.style.marginTop = `${headerHeight}px`;
        
      }
        else {
        // On mobile, reset the margin-top
        mainContent.style.marginTop = '0';
    }
}

// Function to handle scroll event
function handleScroll() {
    if (window.innerWidth > 768) {
        const headerHeight = header.offsetHeight;

        // Check if we've scrolled past the header
        if (window.scrollY > headerHeight) {
            // Collapse the header when scrolling past its height
            header.classList.add("collapsed");
        } else {
            // Remove collapsed state when scrolling back up
            header.classList.remove("collapsed");
        }
    } else {
        // On mobile, ensure the header is never collapsed
        header.classList.remove("collapsed");
    }
}

// Function to handle layout adjustments
function adjustLayout() {
    adjustContentMargin();
    handleScroll();
}

// Add event listeners
window.addEventListener('load', adjustLayout);
window.addEventListener('scroll', handleScroll);
window.addEventListener('resize', adjustLayout);
