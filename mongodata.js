const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()
const data = require("./data")


function dataConnection(){
    mongoose.connect(process.env.DATABASE_URL)
    .then (() => {
        console.log("connection success")
    })
    .catch (()=>{
        console.log("connection failed")
    })
}

const mongooseSchema = new mongoose.Schema({
    Super_Power_Category :  String,
    Name : String,
    Super_Power : String,
    Image : String
})

// console.log(data)
const modelData = mongoose.model('firstData', mongooseSchema)
// modelData.insertMany(data).then(() =>{console.log("connected")})
module.exports = {modeldata : modelData, connectiondata : dataConnection}