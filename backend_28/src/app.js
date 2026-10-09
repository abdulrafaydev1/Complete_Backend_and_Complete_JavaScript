const express = require('express')
const app = express()
app.use(express.json())

app.get('/', (req, res) => {
    res.send('working...')
})

module.exports = app

// yar ya kya hua mare sat saylani se intership per lagna tha likin ya kya masla ho gaya mare sat