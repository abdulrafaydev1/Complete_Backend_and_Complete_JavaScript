const express = require('express')
const form = require('./routes/form')
const app = express()

// kya hall hai app ka mujhe nahi pata

app.use('/form', form)

app.listen(4000, (req, res) => {
    console.log('server is running on port 4000')
})