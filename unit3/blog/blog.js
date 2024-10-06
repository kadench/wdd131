const articles = [
	{
		id: 1,
		title: 'Septimus Heap Book One: Magyk',
		date: 'July 5, 2022',
		description:
			'If you enjoy stories about seventh sons of seventh sons and magyk this is the book for you.',
		imgSrc: 'https://upload.wikimedia.org/wikipedia/en/5/5f/Magkycover2.jpg',
		imgAlt: 'Book cover for Septimus Heap 1',
		author: 'Angie Sage',
		ages: '10-14',
		genre: 'Fantasy',
		stars: '****'
	},
	{
		id: 2,
		title: 'Magnus Chase Book One: Sword of Summer',
		date: 'December 12, 2021',
		description:
			'The anticipated new novel by Rick Riordan. After Greek mythology (Percy Jackson), Greek/Roman (Heroes of Olympus), and Egyptian (Kane Chronicles), Rick decides to try his hand with Norse Mythology, and the end result is good.',
		imgSrc:
			'https://books.google.com/books/content/images/frontcover/xWuyBAAAQBAJ?fife=w300',
		imgAlt: 'Book cover for Magnus Chase 1',
		author: 'Rick Riordan',
		ages: '12-16',
		genre: 'Fantasy',
		stars: '⭐⭐⭐⭐'
	}
]


function PlaceElementOnPage(articles) {
	const newArticle = document.createElement('article');
	newArticle.innerHTML = CreateHTMLElement(articles);
	document.body.insertAdjacentElement("afterend", newArticle);
}

function CreateHTMLElement(articles) {
	const articlesArray = Array.from(articles);
	const convertedHTML = []
	articlesArray.forEach((article) => {
		let genre = article.genre;
		let date = article.date;
		let ages = article.ages;
		let bookTitle = article.title;
		let author = article.author;
		let stars = article.stars;
		let bookCoverImageSrc = article.imgSrc;
		let bookCoverAlt = article.imgAlt;
		let description = article.description;
		let articleHTML = `<article class="book-post"><section class="book-metadata"><ul class="metadata-info"><li class="metadata-item"><img class="metadata-icon" src="images/book-icon.svg" alt="genre metadata icon"><p class="icon-text">${genre}</p></li><li class="metadata-item"><img class="metadata-icon" src="images/calendar_icon.svg" alt="date published metadata icon"><p class="icon-text">${date}</p></li><li class="metadata-item"><img class="metadata-icon" src="images/groups_icon.svg" alt="recommended age metadata icon"><p class="icon-text">${ages}</p></li></ul></section><section class="book-info"><h2 class="book-title">${bookTitle}</h2><h3 class="author">${author} | <span>${stars}</span></h3><img class="book-cover-image" src="${bookCoverImageSrc}" alt="${bookCoverAlt}"><p class="book-desc">${description}</p></section></article>`
		convertedHTML.push(articleHTML)
		console.log(convertedHTML)
	})
	return convertedHTML
};

PlaceElementOnPage(articles)


/* <article class="book-post">
        <section class="book-metadata">
            <ul class="metadata-info">
                <li class="metadata-item"><img class="metadata-icon" src="images/book-icon.svg" alt="genre metadata icon"><p class="icon-text">Fantasy</p></li>
                <li class="metadata-item"><img class="metadata-icon" src="images/calendar_icon.svg" alt="date published metadata icon"><p class="icon-text">July 5th, 2022</p></li>
                <li class="metadata-item"><img class="metadata-icon" src="images/groups_icon.svg" alt="recommended age metadata icon"><p class="icon-text">10-14</p></li>
            </ul>
        </section>
        <section class="book-info">
            <h2 class="book-title">Septimus Heap Book One: Magyk</h2>
            <h3 class="author">Angie Sage |<span class="">⭐⭐⭐⭐</span></h3>
            <img class="book-cover-image" src="https://upload.wikimedia.org/wikipedia/en/5/5f/Magkycover2.jpg" alt="book cover for septimus heap 1">
            <p class="book-desc">If you enjoy stories about seventh sons of seventh sons and magyk this is the book for you.</p>
        </section>
    </article> */