// globle scope
console.log(this) // ya this keyword globle scope ma hai or ya abi windon ma add ho raha hai 

// function ky ander this keyword
function abcd() { // ya this keyword function ky ander hai or function ky ander hona ky bava jhub window ma add hota hai
    console.log(this)
}
abcd()

// ya this keyword mathot ky ader hai or iska result hoga kya ager object ky ander just this likna to result ayyeega pura object or ager object ma this.name keyword ky sat kuch likh hai to result ayeeega name ki value 
const obj = {
    name: 'rafay',
    age: 21,
    sayName: function () {
        let func = () => {
            console.log(this)
        }
        func()
    }
}

obj.sayName()
// console.log(obj)


// event handel is ma ya ho raha hai ky gaer kisi element per addEventListener lagaya hai to this is ya wo milga ka kis element per addEventListener hai ro this is wo element milaga
document.querySelector('h1').addEventListener('click', function () {
    console.log(this.style.color = 'red');

})

class Abcd {
    constructor() {
        // console.log('jeyjey')
        this.a = 12
    }
}

let value = new Abcd()
console.group(value)








let obj2 = {
    name: 'rafay',
    age: 20
}

function abcd(){
    console.log(this.name)
    console.log(this.age)
}

abcd.call(obj2)