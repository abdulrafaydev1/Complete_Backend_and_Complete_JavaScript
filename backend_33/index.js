const express = require('express')
const form = require('./routes/form')
const app = express()

a

app.use('/form', form)

app.listen(4000, (req, res) => {
    console.log('server is running on port 4000')
})