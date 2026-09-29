function createToaster(config) {
    return function () {
        console.log(config)
    }

}


let toaster = createToaster({
    positionX: "right",
    positionY: "top",
    Theme: 'dark',
    duration: 3,
})
toaster()


