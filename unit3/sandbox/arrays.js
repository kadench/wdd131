//  arrays.js
// example 1
const steps = ["one", "two", "three", "nine", "12"];

const listTemplate = (step) => {
  return `<li>${step}</li>`
};

const stepsHtml = steps.map(listTemplate); // use map to convert the list from strings to HTML
document.querySelector("#myList").innerHTML = stepsHtml.join("") // set the innerHTML