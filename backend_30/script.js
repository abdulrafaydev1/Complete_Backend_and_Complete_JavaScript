const fs = require('fs');

fs.writeFile("hey.txt", "kya hall hai chacha", function (err) {
    if (err) console.error(err);
    else console.log('done')
})

fs.appendFile("hey.txt", " mai thk hon bata", function (err) {
    if (err) console.error(err);
    else console.log('done')
})