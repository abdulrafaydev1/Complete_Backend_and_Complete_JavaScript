function ClickMe() {
    let click = 0;
    return function () {
        if(click < 5){
            click++
            console.log(click)
        } else {
            console.error("mistake")
        }
    }
}

let fac = ClickMe()
fac()
fac()
fac()
fac()
fac()
fac()
