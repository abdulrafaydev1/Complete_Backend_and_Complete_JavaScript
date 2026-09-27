let input = document.querySelector('.name')
let form = document.querySelector('form')

form.addEventListener("submit", function (dets) {
    dets.preventDefault()

    if (input.value.length <= 2) {
        console.log('sahi nahi hai')
    } else {
        console.log('sahi hai')
    }
})