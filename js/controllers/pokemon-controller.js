'use strict'

function onGetPokemon() {
  getPokemon(renderPokemon)
}

function renderPokemon(pokemon) {
  const randomPokemons = []
  for (let i = 0; i < 10; i++) {
    const index = getRandomIntInclusive(0, pokemon.results.length - 1)
    const randomPokemon = pokemon.results[index]
    randomPokemons.push(randomPokemon)
  }
  const pokemonCards = []
  randomPokemons.map((pokemon) => {
    const name = capitalize(pokemon.name)
    const url = pokemon.url
    const id = url.split('/')[6]
    const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
    getPokemonWeight(id, (weight) => {
      const pokemonCard = `
          <div class="pokemon-card">
            <h3 class="pokemon-name">${name}</h3>
            <p class="pokemon-weight">Weight: ${weight / 10} kg</p>
            <img class="pokemon-img" src="${imgUrl}" alt="${name} image">
          </div>
        `
      pokemonCards.push(pokemonCard)
      if (pokemonCards.length === 10) {
        pokemonCards.sort()
        const elPokemonContainer = document.querySelector('.pokemon-container')
        elPokemonContainer.innerHTML = pokemonCards.join('')
      }
    })
  })
}
