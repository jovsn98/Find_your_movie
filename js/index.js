const form = document.querySelector("#searchForm");
const searchInput = document.querySelector("#searchInput");
const result = document.getElementById("result");

console.log(result);

let movies = [];
let search = "kayak";

const fetchMovies = async () => {
  await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=8cbda39f20e6a7b7826865bf9c93aead&query=${search}`
  )
    .then((res) => res.json())
    .then((data) => (movies = data.results));
};
const moviesDisplay = async () => {
  await fetchMovies();

  movies.length = 12;
  console.log(movies);

  result.innerHTML = movies
    .map(
      (movie) =>
        `
      <div class="card-container">
      <li class="card">
      <h2>${movie.original_title}</h2>
      <img src="https://image.tmdb.org/t/p/w200/${movie.poster_path}">
      <div class="infos">
      <p>${movie.overview}</p>
      <p id="pop">Popularité : ${movie.popularity} ❤️</p>
      </li>
      </div>
      `
    )
    .join("");
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  search = searchInput.value;
  moviesDisplay();
});
