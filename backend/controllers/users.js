const express = require('express')
const router = express.Router()
const db = require('../models')
const jwt = require('jwt-simple')
const config = require('../config/config')


// Checks if the user token created when logging in exists
function isAuthenticated(req, res, next){
    if(req.headers.authorization){
        next()
    } else {
        res.sendStatus(401)
    }
}

// Create/Sign-Up Route - Works in Postman
router.post('/signup', async (req, res) => {
    const foundUser = await db.User.findOne({ username: req.body.username})
    if(!foundUser){
        // If User is not found, user is created
        const createdUser = await db.User.create(req.body)
        // Creates token that is associated with specific user
        const payload = {id: createdUser._id}
        const token = jwt.encode(payload, config.jwtSecret)
        res.json({
            user: createdUser,
            token: token
        })
    } else {
        res.sendStatus(401)
    }})

//Login Route- works in Postman
router.post('/login', async (req, res) => {
    try {
      const foundUser = await db.User.findOne({ username: req.body.username})
      if(req.body.password === foundUser.password){
          const payload = {id: foundUser._id}
          const token = jwt.encode(payload, config.jwtSecret)
          res.json({
              user: foundUser,
              token: token,
          })
      } else {
          res.status(401).json({message: "Incorrect username or password"})
      }
    } catch (error) {
      console.error(error)
      res.status(500).json({message: "An error occurred. Please try again later."})
    }
  })

// Show Token
router.get('/token', isAuthenticated, async (req, res) => {
    const token = req.headers.authorization
    const decoded = jwt.decode(token, config.jwtSecret)
    // Find user by the decoded token ID we established when logging in / signing up
    const foundUser = await db.User.findById(decoded.id)
    // Find the comments linked to the user by the ID of that user
    const userComments = await Comments.find({ user: foundUser._id });
    res.json({
        user: foundUser,
        comments: userComments
    })
})


// All Users Index Route 
router.get('/', async (req, res) => {
    const allUsers = await db.User.find({})
    res.json(allUsers)
})

// Show User / Associated Posts
router.get('/:id', async (req, res)=> {
    const userComments = await Comments.find({ user: req.params.id });
    res.json({
        comments: userComments
    })
})

// Delete User/Associated Posts
router.delete('/:id', isAuthenticated, async (req, res)=> {
    await Comments.deleteMany({ user: req.params.id})
    await db.User.findByIdAndDelete(req.params.id)
    res.sendStatus(200)
})

module.exports = router