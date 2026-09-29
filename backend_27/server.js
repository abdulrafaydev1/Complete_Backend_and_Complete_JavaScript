require('dotenv').config()
const app = require('./src/app')
const connectdb = require('./src/db/db')
connectdb()
app.use(express.json());
const port = process.env.PORT
app.listen(port, () => {
    console.log('server is running on port',port)
})