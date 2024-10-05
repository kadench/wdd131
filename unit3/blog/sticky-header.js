// Original script from: https://www.w3schools.com/howto/howto_js_shrink_header_scroll.asp.
// Edits by: Kaden Hansen

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    const headerFontSize = document.body.style.fontSize
    const mainHeader = document.querySelector("sticky")

    mainHeader.style.fontSize = `calc(${headerFontSize} - .2em)`;
} else {
    mainHeader.style.fontSize = headerFontSize;
  }
}