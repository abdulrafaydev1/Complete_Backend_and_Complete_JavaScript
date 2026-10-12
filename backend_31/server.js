const express = require('express');
const app = express()

app.use(function(req,res,next){
    console.log('midderware chala')
    next()
});

app.get('/', (req, res) => {
    res.send('hello world')
    console.log('hello world')
})

app.listen(4000, () => {
    console.log('Server is running on port 3000')
});