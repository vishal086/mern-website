const mongoose = require('mongoose')
const serviceSchema = mongoose.Schema({
       imageUrl : String,
       title : String,
       desription : String,
       linkText : String,
       link : String

})

module.exports = mongoose.model("Service",serviceSchema);