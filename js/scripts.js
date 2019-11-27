let button = document.querySelector('#button')
let result = document.querySelector('#result')

function getInfo() {
    axios.get('https://swapi.co/api/people/1').then(function (response) {
        updateInfo(response.data)
    })
}

function updateInfo(data) {
    result.innerText = data.name
}

button.addEventListener('click', getInfo)