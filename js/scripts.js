let button_luke_starship = document.querySelector('#button-luke-starship')
let result_luke_starship = document.querySelector('#result-luke-starship')

// vehicle

function getInfoStarshipLuke() {
    axios.get('https://swapi.co/api/starships/12').then(function (response) {
        updateInfoStarshipLuke(response.data)
    })
}

function updateInfoStarshipLuke(data) {
    result_luke_starship.innerText = data.name
}

button_luke_starship.addEventListener('click', getInfoStarshipLuke)

// species

let button_luke_species = document.querySelector('#button-luke-species')
let result_luke_species = document.querySelector('#result-luke-species')

function getInfoSpeciesLuke() {
    axios.get('https://swapi.co/api/species/1').then(function (response) {
        updateInfoSpeciesLuke(response.data)
    })
}

function updateInfoSpeciesLuke(data) {
    result_luke_species.innerText = data.name
}

button_luke_species.addEventListener('click', getInfoSpeciesLuke)

// planet

let button_luke_planet = document.querySelector('#button-luke-planet')
let result_luke_planet = document.querySelector('#result-luke-planet')

function getInfoPlanetLuke() {
    axios.get('https://swapi.co/api/planets/9').then(function (response) {
        updateInfoPlanetLuke(response.data)
    })
}

function updateInfoPlanetLuke(data) {
    result_luke_planet.innerText = data.name
}

button_luke_planet.addEventListener('click', getInfoPlanetLuke)