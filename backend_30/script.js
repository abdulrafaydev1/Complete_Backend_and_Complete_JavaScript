const fs = require('fs');

fs.writeFile('example.txt', 'kya hall hai', function(err){
    if(err) console.error(err)
    else console.log('done')
})

fs.copyFile('example.txt', './my-new-folder/example2.txt', function(err){
    if(err) console.error(err)
    else console.log('done')
})

