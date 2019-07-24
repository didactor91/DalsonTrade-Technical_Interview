const { Schema } = require('mongoose')

const item = new Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, required: true }
})


module.exports =  item