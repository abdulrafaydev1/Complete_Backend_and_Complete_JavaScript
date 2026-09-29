const express = require("express")
const postRoutes = require('./routes/post.route')
const app = express()

app.use('/post', postRoutes)

module.exports = app