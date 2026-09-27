let count = 0;
let progressBar = document.querySelector(".progress-bar")
let percentText = document.querySelector("#percentText")

let init = setInterval(() => {
    if(count<=99){
        count++
        progressBar.style.width = `${count}%`
        percentText.textContent = `${count}%`
    }

}, 30);
