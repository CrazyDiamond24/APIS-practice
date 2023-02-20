'use strict'

function onGetGenres() {
  getGenres(renderGenres)
}

function onGetMovieData(genreId) {
  getMovieData(genreId, renderData)
}

function renderGenres(genre) {
  const genres = genre.genres
  const genreDivs = genres.map((genre) => {
    return `<div class="genre-name" onclick="onGetMovieData(${genre.id})">${genre.name}</div>`
  })
  const elGenresContainer = document.querySelector('.genres-container')
  elGenresContainer.innerHTML = genreDivs.join('')
}

function renderData(data) {
  const movies = data.results
  const movieDivs = movies.map((movie) => {
    const imgUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    return `
        <div class="movie-data">
          <h3>${movie.title}</h3>
          <img class="movie-img" src="${imgUrl}" alt="${movie.title} poster">
          <p>${movie.overview}</p>
        </div>
      `
  })
  const elMoviesContainer = document.querySelector('.movies-container')
  elMoviesContainer.innerHTML = movieDivs.join('')
}
