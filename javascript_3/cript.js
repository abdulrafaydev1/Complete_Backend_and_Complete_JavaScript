function abcd(){
    let a = 12;
    return function (){
        console.log(a)
    }
}

let func = abcd()
console.log(func())
console.log(abcd())
