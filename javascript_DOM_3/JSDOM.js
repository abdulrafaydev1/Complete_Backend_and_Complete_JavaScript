// let count = 0;
// let progressBar = document.querySelector(".progress-bar")
// let percentText = document.querySelector("#percentText")
// let h2 = document.querySelector('h2')

// let init = setInterval(() => {
//     if(count<=99){
//         count++
//         progressBar.style.width = `${count}%`
//         percentText.textContent = `${count}%`
//     } else{
//         h2.textContent = 'downloaded'
//         h2.style.color = 'green'
//         clearInterval(init)
//     }

// }, 5000 / 100);



// // sessionStorage.setItem('name', 'rafay')

// localStorage.setItem("name", JSON.stringify({
//         name: "rafay",
//     age: 30,
//     city: 'karachi'
// }))


function setDarkOrLight() {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        document.body.classList.add("dark")
        document.body.classList.remove("light")
    } else {
        document.body.classList.add("light")
        document.body.classList.remove("dark")
    }
}

setDarkOrLight()

let toggleTheme = document.querySelector('#toggleTheme')
toggleTheme.addEventListener('click', function () {
    if (document.body.classList.contains("dark")) {
        document.body.classList.remove("dark")
        document.body.classList.add('light')
    } else{
         document.body.classList.remove("light")
        document.body.classList.add('dark')
    }
})

window.matchMedia("(prefers-color-scheme: dark)").addEventListener('change', function () {
    setDarkOrLight()
})