const mongoose = require('mongoose')

const CommentSchema = new mongoose.Schema({
    created: {
        type: Date,
        defualt: Date.now
    },
    crypto: {type: String},
    comment: {type: String, required: true},
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
})

const Comments = mongoose.model('Comments', CommentSchema)

module.exports = Comments