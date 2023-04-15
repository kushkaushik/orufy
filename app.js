const express = require('express')
const mongoose = require('mongoose')
const config = require('dotenv')
config.config({path:"./config/config.env"})
const app = express();
const PORT = process.env.PORT || 6000

mongoose.connect(process.env.URI)
mongoose.connection.on('connected',()=>{
    console.log("connected to database successfully");
})


app.use(express.json())
require('./schema/newSchema')
app.use(require('./router/myRouter'))








app.listen(process.env.PORT , ()=>{
    console.log(`Server is connected ${process.env.PORT}`)
})




