const mongoose = require('mongoose')

const URL = 'mongodb+srv://sathya:sathyapr@cluster0.wrqpt.mongodb.net/sheypos-udemy'

mongoose.connect(URL)

let connectionObj = mongoose.connection

connectionObj.on('connected' , ()=>{
    console.log('Mongo DB Connection Successfull')
})

connectionObj.on('error' , ()=>{
    console.log('Mongo DB Connection Failed')
})