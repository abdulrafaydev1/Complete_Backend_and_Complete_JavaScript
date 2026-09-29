function createToaster(config) {
    return function (notificationName) {
        let div = document.createElement('div')
        div.textContent = notificationName
        div.classList.add('clield')
        let pecent = document.createElement('div')
        pecent.classList.add('parent')
        pecent.appendChild(div)
        document.body.appendChild(pecent)
    }   

}

let toaster = createToaster({
    positionX: "right",
    positionY: "top",
    Theme: 'dark',
    duration: 3,
})
toaster("donwload done")


