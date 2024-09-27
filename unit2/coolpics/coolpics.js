// menu variables
const menuButton = document.querySelector(".subtitle");
const mainNav = document.querySelector(".nav-container");

// Image gallery modal functionality
const galleryImages = Array.from(document.querySelectorAll(".gallery-image"));

// When the menu is on screen, look for click.
menuButton.addEventListener("click", ToggleMenu);

// function called to give and remove hiding the ul nav when menu is clicked.
function ToggleMenu() {
    const mainNav = document.querySelector(".nav-container");
    mainNav.classList.toggle("hidden");
}

// Give each image an Event Listener
galleryImages.forEach((image) => {
    image.addEventListener("click", ViewHandler)
})


function ExitModal() {
    const viewerDiv = document.querySelector(".viewer");
    viewerDiv.classList.toggle("hidden")
}

function ViewerTemplate(pic, alt="full landscape image") {
    return `<div class="viewer">
    <button class="close-viewer">X</button>
    <img src="${pic}" alt="${alt}">
    </div>`;
}

function ViewHandler(event) {
    // create a variable to hold the element that was clicked on from event.target
    const clickedImage = event.target;
    
	// get the src attribute from that element and 'split' it on the "-"
    let imageSrc = String(clickedImage.src);
    const imageSrcArray = imageSrc.split("-");
    
    if (imageSrcArray[1] === "sm.jpeg") {
        imageSrcArray[1] = "full.jpeg";
    }
    imageSrc = imageSrcArray.join("-");
    
	// construct the new image file name by adding "-full.jpeg" to the first part of the array from the previous step
    const modalInformation = ViewerTemplate(imageSrc);
    
	// insert the viewerTemplate into the top of the body element
	// (element.insertAdjacentHTML("afterbegin", htmltoinsert))
    document.body.insertAdjacentHTML("afterbegin", modalInformation);
    
	// add a listener to the close button (X) that calls a function called closeViewer when clicked
    // When "X" is clicked "close" the modal by hiding it, until an image in gallery is clicked.
    modalExitButton = document.querySelector(".close-viewer")
    modalExitButton.addEventListener("click", ExitModal);

}