const mongoose = require('mongoose')
const Contact = mongoose.Schema({
    myName : String,
    myNumber : String,
    myEmail : String,
    myMessage : String
})

module.exports = mongoose.model('Data',Contact)