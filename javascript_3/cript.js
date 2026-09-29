let a = 12;

function abcd(){
    console.log(a)
}

function abcc(){
    var a = 12;
    abcd()
}

abcc()