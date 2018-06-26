const pokeDB = require(__dirname + '/js/pokeDB.json')

const form = document.querySelector('form')
const image = document.querySelector('img')
const dt = document.querySelector('dt')
const dd = document.querySelector('dd')

function showPokemonData(pokeId) {
  let pokeData = pokeDB.find(poke => poke.id == pokeId)
  image.src = `images/pokemons/${pokeId}.png`
  dt.textContent = pokeData.name
  dd.textContent = pokeData.type
}

const onFormSubmit = event => {
  event.preventDefault()
  const [ input ] = event.target.elements
  const pokeId = input.value.padStart(3, 0)
  showPokemonData(pokeId)
}

form.addEventListener('submit', onFormSubmit)