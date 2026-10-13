const express = require('express')
const app = express()

app.use((req, res, next) => {
    res.send('hello form server')
    next()
})
app.use((req, res, next) => {
    res.send('hello form server 2')
    next()
})

app.listen(4000, (req, res) => {
    console.log('server is running on port 4000')
})