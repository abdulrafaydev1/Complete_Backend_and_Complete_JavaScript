let input = document.querySelector('.name')
let form = document.querySelector('form')


form.addEventListener("submit", function (dets) {
    dets.preventDefault()

    if (input.value.length <= 2) {
        let hide = document.querySelector('#hide')
        hide.style.display = 'initial'
        hide.style.color = 'red'
    } else {
        console.log('sahi hai')
    }
})