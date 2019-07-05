const weatherForm = document.querySelector('form')

const search = document.querySelector('input')

const paragraphs = document.querySelectorAll('p')


weatherForm.addEventListener('submit', (event) => {

    event.preventDefault()
    
    paragraphs[1].innerHTML = 'Loading..'
    paragraphs[2].innerHTML = ''

    console.log(search.value)

    fetch('http://localhost:3000/weather?address=' + search.value).then((response) => {

        response.json().then((data) => {
            if (data.error == undefined) {
                paragraphs[1].innerHTML = data.location
                paragraphs[2].innerHTML = data.forecast
            }
            else {
                paragraphs[1].innerHTML = data.error
            }
        })
    })
})