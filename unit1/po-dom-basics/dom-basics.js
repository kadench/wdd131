const newParagraph = document.createElement("p");
newParagraph.innerText = "Added with Javascript!";
document.body.appendChild(newParagraph);

const newImg = document.createElement("img")
newImg.src = 'https://picsum.photos/500/500'
document.body.append(newImg);

const newDiv = document.createElement("div");
newDiv.innerHTML = "<ul><li>One</li><li>Two</li><li>Three</li></ul>";
document.body.appendChild(newDiv);

const newSection = document.createElement("section");
newDiv.innerHTML = "<h2>DOM Basics</h2><p>That was added through Javascript</p>";
document.body.appendChild(newSection);