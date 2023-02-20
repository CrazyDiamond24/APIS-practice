'use strict'

function getAns(cb) {
  $.get('https://yesno.wtf/api', (res) => {
    cb(res)
  })
}

function getJoke(cb) {
  $.get('https://api.chucknorris.io/jokes/random', (joke) => {
    cb(joke)
  })
}

function getDogImg(cb) {
  $.get('https://dog.ceo/api/breeds/image/random', (dog) => {
    cb(dog)
  })
}
