// Dotenv Configuration
require('dotenv').config()
const mongoURL = process.env.MONGO_URL
const port = process.env.PORT || 4000 

// Imports
const express = require('express')
const app = express()
const cors = require("cors");
const { default: mongoose, mongo } = require('mongoose')
const userRoutes = require('./Routes/UserRoute')
const doctorRoutes = require('./Routes/DoctorRoute')
//Middlewares
app.use(cors())
app.use(express.json())
app.use('/api/auth', userRoutes)
app.use('/api/doctor', doctorRoutes )
//Routes


// Listening
mongoose.connect(mongoURL).then(()=>{
    app.listen(port,()=>{
        console.log(`Connected to Database and Listening on Port number ${port}`);
    })
}).catch((err)=>{
    console.log("Error while connecting to Database", err)
})