'use strict'

function getPokemon(cb) {
  const xhr = new XMLHttpRequest()

  xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
      const res = JSON.parse(xhr.responseText)
      console.log(res)
      cb(res)
    }
  }

  xhr.open('GET', ' https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
  xhr.send()
}

function getPokemonWeight(id, cb) {
  const xhr = new XMLHttpRequest()

  xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
      const res = JSON.parse(xhr.responseText)
      const weight = res.weight
      cb(weight)
    }
  }

  xhr.open('GET', `https://pokeapi.co/api/v2/pokemon/${id}`)
  xhr.send()
}
