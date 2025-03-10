const movieListElement = document.getElementById('movie-list');
console.log(movieListElement);


// Returns HTML collection!
// Doesn't have most of the array methods
// But at least has iterator
const headingElements = document.getElementsByClassName('heading');
console.log(headingElements[0]);

for (const headingElement of headingElements) {
    console.log(headingElement);
}

for (let i = 0; i < headingElements.length; i++) {
    console.log(headingElements[i]);
}

// Returns HTML collection
const movieListElements = document.getElementsByTagName('li');
console.log(movieListElements);

// Targeting by CSS selector
const favouriteMovieElement = document.querySelector('ul > li:first-child');

// Returns STATIC NodeList collection!!
// A bit more methods than HTML collection. Has forEach.
const favouriteMovieElements = document.querySelectorAll('ul > li');
console.log(favouriteMovieElement);
console.log(favouriteMovieElements);

// Returns LIVE NodeList
let childNodes = movieListElement.childNodes;

// Convert NodeList or HTML collection to array
const allMovieElementsArray = Array.from(favouriteMovieElements);
console.log(allMovieElementsArray);
