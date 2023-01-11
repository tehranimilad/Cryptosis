const express = require('express')
const app = express()
const cors = require('cors')

require('./models')
require('dotenv').config()

const bodyParser = require('body-parser')
const path = require("path")

const userCtrl = require('./controllers/users')
const commentCtrl = require('./controllers/comments')


// Middleware 
app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(express.json())



// routes

app.use('/users', userCtrl)
app.use('/comments', commentCtrl)


app.listen(process.env.PORT, () => {
    console.log(`App is running at localhost:${process.env.PORT}`)
})