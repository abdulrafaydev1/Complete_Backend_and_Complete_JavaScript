const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('chal raha hai')
})

app.listen(4000, (req, res) => {
    console.log('server is running on port 4000')
})