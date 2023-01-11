const express = require('express')
const router = express.Router()
const db = require('../models')
const jwt = require('jwt-simple')
const config = require('../config/config')

// Checks if the user token created when logging in exists
function isAuthenticated(req,res,next) {
    if(req.headers.authorization) {
        next()
    } else {
        res.sendStatus(401)
    }
}

// Create Route - Works in Postman
router.post('/', isAuthenticated, async (req,res) => {
    const createdComments = await db.Comments.create(req.body)
    const token = req.headers.authorization
    const decoded = jwt.decode(token, config.jwtSecret)
    createdComments.user = decoded.id
    createdComments.save()
    res.json(createdComments)
})

// Index - Works in Postman
// Populate grabs all of the information associated with the user ID stored in the user collection
router.get('/', async (req,res) => {
    const allComments = await db.Comments.find({}).populate('user')
    res.json(allComments)
})

// Show Route - works in Postman
router.get('/:id', async (req,res) => {
    const foundComments = await db.Comments.findById(req.params.id).populate('user')
    res.json(foundComments)
})

// Update Route - works in Postman
router.put('/:id', async (req,res) => {
    const updatedComments = await db.Comments.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new:true}
    )
    res.json(updatedComments)
    
})

// Delete route - works in Postman
router.delete('/:id', isAuthenticated, async (req,res) => {
    await db.Comments.findByIdAndDelete(req.params.id)
    res.sendStatus(200)
})

module.exports = router
