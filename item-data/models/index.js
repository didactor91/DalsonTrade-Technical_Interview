const mongoose = require('mongoose')
const schemas =  require('./schemas')

const item  = schemas


module.exports = {
    Item: mongoose.model('Item', item),
    mongoose
}