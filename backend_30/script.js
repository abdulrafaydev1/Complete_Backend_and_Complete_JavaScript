const fs = require('fs');

fs.copyFile("exampel2.txt", "./copy/chacha.txt", function(err){
    if (err) console.error(err.message)
    else console.log('done')
})