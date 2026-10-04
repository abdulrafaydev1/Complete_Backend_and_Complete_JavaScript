const express = require('express')
const app = express()
app.use(express.json())

app.get('/', (req, res) => {
    res.send('working...')
})

module.exports = app