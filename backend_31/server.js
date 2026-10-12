const express = require('express');
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(function(req,res,next){
    console.log('midderware chala')
    next()
});

app.get('/', (req, res) => {
    console.log('hello world')
})

app.listen(4000, () => {
    console.log('Server is running on port 3000')
});