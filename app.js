const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')

const app = express()

// 静态资源
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json())

let loginApi = require('./routes/login')
let userApi = require('./routes/user')

app.use('/api', loginApi)
app.use('/api/user', userApi)


app.listen(3000, () => {
    console.log('port: http://localhost:3000');
})