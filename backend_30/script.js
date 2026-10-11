const fs = require('fs');

fs.writeFile("hey.txt", "kyya hall hai chacha", function(err){
    if(err) console.error(err);
    else console.log('done')
})