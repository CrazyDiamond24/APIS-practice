'use strict'
const STORAGE_KEY = 'moviesDB'
const gMovies = loadFromStorage(STORAGE_KEY) || {}

function getGenres(cb) {
  const xhr = new XMLHttpRequest()
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const contacts = JSON.parse(xhr.responseText)
      cb(contacts)
    }
  }
  xhr.open(
    'GET',
    'https://api.themoviedb.org/3/genre/movie/list?api_key=2041981c0124b18f29601d094f25db29'
  )
  xhr.send()
}

function getMovieData(genreId, cb) {
  const STORAGE_KEY = `moviesDB_${genreId}` // unique key for the genre
  const cachedData = loadFromStorage(STORAGE_KEY)

  if (cachedData) {
    console.log('Using cached data:', cachedData)
    cb(cachedData)
  } else {
    console.log('Making API request...')
    const xhr = new XMLHttpRequest()
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        const movieData = JSON.parse(xhr.responseText)
        saveToStorage(STORAGE_KEY, movieData) // save data to localStorage with unique key(id)
        cb(movieData)
      }
    }
    xhr.open(
      'GET',
      `https://api.themoviedb.org/3/discover/movie?api_key=2041981c0124b18f29601d094f25db29&with_genres=${genreId}`
    )
    xhr.send()
  }
}
