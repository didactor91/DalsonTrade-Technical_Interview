const mongoose = require('mongoose')
const schemas =  require('./schemas')

const { item } = schemas


module.exports = {
    User: mongoose.model('Item', item),
    mongoose
}