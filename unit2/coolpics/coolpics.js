// menu variables
const menuButton = document.querySelector(".subtitle");
const mainNav = document.querySelector(".nav-container");

// image gallery variables
const imgs = Array.from(document.querySelectorAll("figure img"));
const changeImgScreenSize = window.matchMedia("(min-width: 1024px)");

// When the menu is on screen, look for click.
menuButton.addEventListener("click", ToggleMenu);

// When viewport changes size: "(min-width: 1024px)", switch the
// gallery images to the full one to avoid blur and for fun.
changeImgScreenSize.addEventListener("change", ChangeImage);

// function called to give and remove hiding the ul nav when menu is clicked.
function ToggleMenu() {
    const mainNav = document.querySelector(".nav-container");
    mainNav.classList.toggle("hidden");
}

// function that changes all images to the larger image when "(min-width: 1024px)" is met.
function ChangeImage() {
    if (changeImgScreenSize.matches) {
        imgs.forEach((img) => {
            img.src = "images/norris-full.jpeg";
        })
    }
};

// Image gallery modal functionality
const modalExitButton = document.querySelector(".close-viewer");

// When "X" is clicked "close" the modal by hiding it, until an image in gallery is clicked.
modalExitButton.addEventListener("click", ExitModal);

function ExitModal() {
    const viewerDiv = document.querySelector(".viewer");
    viewerDiv.classList.toggle("hidden")
}

function viewerTemplate(pic, alt) {
    return `<div class="viewer">
      <button class="close-viewer">X</button>
      <img src="${pic}" alt="${alt}">
      </div>`;
  }


  function viewHandler(event) {
	// create a variable to hold the element that was clicked on from event.target

	// get the src attribute from that element and 'split' it on the "-"

	// construct the new image file name by adding "-full.jpeg" to the first part of the array from the previous step

	// insert the viewerTemplate into the top of the body element
	// (element.insertAdjacentHTML("afterbegin", htmltoinsert))

	// add a listener to the close button (X) that calls a function called closeViewer when clicked

}