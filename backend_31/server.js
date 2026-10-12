const express = require('express');
const app = express()

app.get('/', (req, res) => {
    res.send
    res.send('hello world')
})
// chacha kya hall hai app ka 
app.listen(4000, () => {
    console.log('Server is running on port 3000')
});