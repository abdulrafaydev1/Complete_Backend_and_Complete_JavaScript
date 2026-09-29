// globle scope
console.log(this) // ya this keyword globle scope ma hai or ya abi windon ma add ho raha hai 

// function ky ander this keyword
function abcd(){ // ya this keyword function ky ander hai or function ky ander hona ky bava jhub window ma add hota hai
    console.log(this)
}
abcd()

// ya this keyword mathot ky ader hai or iska result hoga kya ager object ky ander just this likna to result ayyeega pura object or ager object ma this.name keyword ky sat kuch likh hai to result ayeeega name ki value 
const obj = {
    name: 'rafay',
    sayName: function(){
        console.log(this)
    }
}

obj.sayName()
// console.log(obj)


// event handel
document.querySelector('h1').addEventListener('click', function(){
    alert('chal raha hai sahi se')
})