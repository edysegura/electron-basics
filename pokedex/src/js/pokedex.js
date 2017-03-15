const pokeDB = require(__dirname + '/js/pokeDB.json')

const form = document.querySelector('form')
const input = document.querySelector('input')
const image = document.querySelector('img')
const dt = document.querySelector('dt')
const dd = document.querySelector('dd')


function showPokemonData (pokeId) {
    let pokeData = pokeDB.find(poke => poke.id == pokeId)
    image.src = `images/pokemons/${pokeId}.png`
    dt.innerHTML = pokeData.name
    dd.innerHTML = pokeData.type
}

form.onsubmit = () => {
    showPokemonData(input.value)
    return false
}
