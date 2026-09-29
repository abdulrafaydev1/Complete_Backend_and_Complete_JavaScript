function createToaster(config) {
    return function (notificationName) {
        let div = document.createElement('div')
        div.textContent = notificationName
        div.classList.add('clield')
        div.style = config.Theme === 'dark' ? div.classList.add('clield2') : div.classList.add('clield')
        let pecent = document.createElement('div')
        pecent.classList.add('parent')
        pecent.appendChild(div)
        document.body.appendChild(pecent)

        setTimeout(function () {
            pecent.remove()
        }, config.duration * 1000)
    }

}

let toaster = createToaster({
    positionX: "right",
    positionY: "top",
    Theme: 'light',
    duration: 3,
})
toaster("donwload done")
setTimeout(() => {
    toaster("rafay accped you request")
}, 2000);

