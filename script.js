/* API LINK SETUP */
const APILINK = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=5d3e3e5aa0a63f6e85a45adaf181e95a&page=1';
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';
const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=5d3e3e5aa0a63f6e85a45adaf181e95a&query=";


/* GET FROM HTML */
const main = document.getElementById("section");
const form = document.getElementById("form");
const search = document.getElementById("query");


/* API QUERY */
returnMovies(APILINK);
function returnMovies(url) {
  fetch(url).then(res => res.json()) /* Test of the query to DB  */
    .then(function(data) {
      console.log(data.results);
      data.results.forEach(element => {

        /* CONSTRUCTION STEP Create individual html elements for use. */
        const div_card = document.createElement('div');
        div_card.setAttribute('class', 'card');

        const div_row = document.createElement('div');
        div_row.setAttribute('class', 'row');

        const div_column = document.createElement('div');
        div_column.setAttribute('class', 'column');

        const image = document.createElement('img');
        image.setAttribute('class', 'thumbnail');

        const title = document.createElement('h3');

        const center = document.createElement('center');

        /* DETAIL STEP: adding information retrieved via API */
        title.innerHTML = `${element.title}`
        image.src = IMG_PATH + element.poster_path;

        /* Re-construction of original HTML Card */
        center.appendChild(image);
        div_card.appendChild(center);
        div_card.appendChild(title);
        div_column.appendChild(div_card);
        div_row.appendChild(div_column);

        main.appendChild(div_row);
      });
    });
}

/* Listener to activate function based on search and enter */
form.addEventListener('submit', (e) => {
  e.preventDefault();
  main.innerHTML = '';

  const searchItem = search.value;

  if (searchItem) {
    returnMovies(SEARCHAPI + searchItem);
    search.value = "";
  }
});
