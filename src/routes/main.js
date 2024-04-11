const express = require('express')
const routes = express.Router()
const Detail = require('../models/Detail')
const Slider = require('../models/Slider')
const Service = require('../models/Service')
const Contact = require('../models/Contact')

routes.get('/',async (req,res)=>{
    const details = await Detail.findOne({"_id":"65cd9885c3373f90fdf4ed4d"})
    const slides = await Slider.find() 
    const services = await Service.find()
    //    console.log(services) 
      // console.log(details) 
      // console.log(slides)  
    res.render("index",({
        details : details,
        slides : slides,
        services : services
    }))      
})  

routes.get('/gallery',(req,res)=>{
    res.render("gallery")
})  

routes.post('/process-contact-form',(req,res)=>{

    console.log(req.body)

    // Save the data to db
     try 
     {
        const data = Contact.create(req.body)
        console.log(data)
        res.redirect('/')
     } catch(e){
        console.log(e)
        res.redirect('/')
     }
})


module.exports = routes     