const mongoose = require('mongoose')

const CommentSchema = new mongoose.Schema({
    created: {
        type: Date,
        default: Date.now
    },
    crypto: {type: String},
    comment: {type: String, required: true},
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
})

module.exports = Comments = mongoose.model('Comments', CommentSchema)
