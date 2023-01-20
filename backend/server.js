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
app.use(express.static(path.join(path.dirname(__dirname), "frontend", "build")))



// routes

app.use('/users', userCtrl)
app.use('/comments', commentCtrl)

app.get("*", (req, res) => {
    res.sendFile(path.join(path.dirname(__dirname), "frontend", "build", "index.html"));
});


app.listen(process.env.PORT, () => {
    console.log(`App is running at localhost:${process.env.PORT}`)
})