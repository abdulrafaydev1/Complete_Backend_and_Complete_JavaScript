const fs = require('fs');

fs.unlink('./copy/chacha.txt', function(err){
    if(err) console.error(err)
    else console.log('file removed')
})