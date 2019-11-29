// Luke Skywalker

// luke-vehicle

let button_luke_starship = document.querySelector('#button-luke-starship')
let result_luke_starship = document.querySelector('#result-luke-starship')

function getInfoStarshipLuke() {
    axios.get('https://swapi.co/api/starships/12').then(function (response) {
        updateInfoStarshipLuke(response.data)
    })
}

function updateInfoStarshipLuke(data) {
    result_luke_starship.innerText = data.name
}

button_luke_starship.addEventListener('click', getInfoStarshipLuke)

// luke-species

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

// luke-planet

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



// Obi-Wan Kenobi

// obiwan-vehicle

let button_obiwan_starship = document.querySelector('#button-obiwan-starship')
let result_obiwan_starship = document.querySelector('#result-obiwan-starship')

function getInfoStarshipObiWan() {
    axios.get('https://swapi.co/api/starships/48').then(function (response) {
        updateInfoStarshipObiWan(response.data)
    })
}

function updateInfoStarshipObiWan(data) {
    result_obiwan_starship.innerText = data.name
}

button_obiwan_starship.addEventListener('click', getInfoStarshipObiWan)

// obiwan-species

let button_obiwan_species = document.querySelector('#button-obiwan-species')
let result_obiwan_species = document.querySelector('#result-obiwan-species')

function getInfoSpeciesObiWan() {
    axios.get('https://swapi.co/api/species/1').then(function (response) {
        updateInfoSpeciesObiWan(response.data)
    })
}

function updateInfoSpeciesObiWan(data) {
    result_obiwan_species.innerText = data.name
}

button_obiwan_species.addEventListener('click', getInfoSpeciesObiWan)

// obiwan-planet

let button_obiwan_planet = document.querySelector('#button-obiwan-planet')
let result_obiwan_planet = document.querySelector('#result-obiwan-planet')

function getInfoPlanetObiWan() {
    axios.get('https://swapi.co/api/planets/20').then(function (response) {
        updateInfoPlanetObiWan(response.data)
    })
}

function updateInfoPlanetObiWan(data) {
    result_obiwan_planet.innerText = data.name
}

button_obiwan_planet.addEventListener('click', getInfoPlanetObiWan)