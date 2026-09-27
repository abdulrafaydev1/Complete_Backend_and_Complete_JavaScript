let form = document.querySelector('form')
let main = document.querySelector('#main')

form.addEventListener('submit', function(dets){
    dets.preventDefault()

    let container = document.createElement('div')
    container.classList.add('container')

    let h5 = document.createElement('h5')
    h5.textContent = 'this is your first todo'

    let span = document.createElement('span')
    span.classList.add("span")
    span.textContent = 'rafay'

    let btn = document.createElement('button')
    btn.textContent = 'Delete ToDo'

    h5.appendChild(span)
    container.appendChild(h5)
    container.appendChild(btn)
    main.appendChild(container)
    
})