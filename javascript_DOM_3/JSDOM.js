let form = document.querySelector('form')
let main = document.querySelector('#main')
let input = document.querySelector('#input')
let select = document.querySelector('#select')

form.addEventListener('submit', function (dets) {
    dets.preventDefault()

    let container = document.createElement('div')
    container.classList.add('container')

    let h5 = document.createElement('h5')
    h5.textContent = input.value

    let span = document.createElement('span')
    span.classList.add("span")
    span.textContent = select.value

    let btn = document.createElement('button')
    btn.textContent = 'Delete ToDo'
    btn.addEventListener('click', function () {
        container.remove()
    })

    h5.appendChild(span)
    container.appendChild(h5)
    container.appendChild(btn)
    main.appendChild(container)


})