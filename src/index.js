const express = require('express')
const hbs = require('hbs')
const app = express()
const mongoose = require('mongoose')
const routes = require('./routes/main')
const Detail = require('./models/Detail')  
const Slider = require('./models/Slider')
const Service = require('./models/Service')
const Contact = require('./models/Contact')
/** Save Data to Db */
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({
    extended : true 
}))

hbs.registerPartials("views/partials")
app.set("view engine","hbs")
app.set("views","views")
app.use("",routes)
mongoose.connect('mongodb://127.0.0.1:27017/Website') 
.then(()=>{ 
    console.log("Connected  Successfully:")
    ///** Sending Data for Navbar in Database */
    // Detail.create({ 
    //     brandName:"Vishal_Gautam",
    //     links:[  
    //         {
    //            label : "Home", 
    //            url : "/" 
    //         },
    //         {
    //             label : "About",
    //             url : "/about" 
    //         }, 
    //         {
    //             label : "Gallery",
    //             url : "/gallery"
    //         },
    //         {
    //             label : "Services",
    //             url : "/services"
    //         },
    //         {
    //             label : "Contact Us",
    //             url : "/contact" 
    //         }
    //     ]
    // })


    // /** Sending Data for slider in database */ 
    // Slider.create([
    //     {
    //         title: 'Learn MERN with Vishal',
    //         subtitle : 'Full stack development is very important to survive in the tech industry.',
    //         imageUrl : "https://images.unsplash.com/photo-1707920266055-3c74a15fb947?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8"
    //     }, 
    //     {
    //         title: 'Learn MERN with Vishal',
    //         subtitle : 'Full stack development is very important to survive in the tech industry.',
    //         imageUrl : "https://images.unsplash.com/photo-1707922172778-c59c96446d76?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8"
    //     }, 
    //     {
    //         title: 'Learn MERN with Vishal',
    //         subtitle : 'Full stack development is very important to survive in the tech industry.',
    //         imageUrl : "https://images.unsplash.com/photo-1707343843437-caacff5cfa74?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHx8"
    //     },
    // ])

    // /** Sending Data for Services in database */ 
    // Service.create([
    //     {
    //         imageUrl : "https://plus.unsplash.com/premium_photo-1708005566035-e8652b784a09?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8fA%3D%3D",
    //         title : "Food",
    //         desription : "Indulge in the comforting embrace of a classic culinary duo: succulent herb-roasted chicken paired with creamy garlic mashed",
    //         linkText : 'https://www.zomato.com/india',
    //         link : 'Click Here'
    //     }
    // ]) 
           

})      
.catch((err)=>{
    console.log("Connection Failed:") 
})   



app.listen(8000,()=>{ 
    console.log("Server Started") 
 })