const express = require('express')
const mongoose = require('mongoose')
const url= 'mongodb://localhost/studentfswd'
const app = express()

mongoose.connect(url,{useNewUrlParser:true})
const con = mongoose.connection

con.on('open',()=>{
    console.log("connected...")
})
app.use(express.json())
const studentRouter= require('./routes/student')
app.use('/student',studentRouter)
app.listen(9000,()=>{
    console.log('server started')
})
