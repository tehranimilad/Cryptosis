const express = require('express')
const app = express()
const cors = require('cors')

require('./models')
require('dotenv').config()

const bodyParser = require('body-parser')
const path = require("path")

const userCtrl = require('./controllers/users')


// Middleware 
app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(express.json())



// routes

app.use('/users', userCtrl)


app.listen(process.env.PORT, () => {
    console.log(`App is running at localhost:${process.env.PORT}`)
})