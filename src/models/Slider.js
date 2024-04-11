const mongoose = require('mongoose')
const Slider = mongoose.Schema({
    title:String,
    subtitle:String,
    imageUrl:String
})


module.exports = mongoose.model('slider',Slider)  