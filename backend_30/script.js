const fs = require("fs");

// fs.writeFile("rafay.txt", "Hello, Rafay!", (err) => {
//     if (err) {
//         console.error(err);
//     } else {
//         console.log("File created successfully");
//     }
// });

// fs.readFile("rafay.txt", "utf8", (err, data) => {
//     if (err) {
//         console.error(err);
//     } else {
//         console.log(data);
//     }
// });

// fs.appendFile('rafay.txt', '\nI am learning javascript', function(err){
//     if(err){
//         console.log(err)
//         return;
//     }

//     else console.log('done')
// })

// fs.unlink('rafay.txt', (err) =>{
//     if(err){
//         console.log(err)
//         return;
//     }

//     else console.log('done')
// })

fs.mkdir('uploads', (err) => {
    if (err) {
        console.log(err)
        return;
    }
    else console.log('done')
})