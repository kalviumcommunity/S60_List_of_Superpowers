const express = require('express')
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')

const app = express()
dotenv.config()

const {modeldata, userdata}=require("./mongodata")
const JoiSchema = require("./JoiSchema")

app.get('/get', (req,res) =>{
    modeldata.find({})
    .then((source) =>{
        res.json({source})
    })
    .catch((err) =>{
        res.json({err})
    })
})

app.post('/post',(req,res) => {
    const {error , value} = JoiSchema.validate(req.body)
    if(error){
        res.json({message : "Error in the Format", error : error.message})
    }

    modeldata.create(req.body)
    .then(source => {res.json({source})})
    .catch((err) => res.json(err))
})


app.get('/getid/:id',(req,res)=> {
    const get = req.params.id
    modeldata.findById({_id:get})
    .then(powers => res.json(powers))
    .catch(err => console.log(err))
})

app.put('/put/:id',(req,res) =>{
   const put = req.params.id
   modeldata.findByIdAndUpdate({_id: put},{
    Name : req.body.Name,
    Super_Power_Category : req.body.Super_Power_Category,
    Super_Power : req.body.Super_Power,
    Image : req.body.Image
   })
   .then(powers => res.send(powers))
   .catch(err => console.log("error",err))
})


app.delete('/delete/:id',(req,res)=>{
   const del = req.params.id
   modeldata.findByIdAndDelete({_id:del})
   .then(powers => res.json(powers))
   .catch(err => res.json({err}))
})

app.post("/createuser", (req,res) =>{
    userdata.create(req.body)
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

app.post("/Userlogin", (req,res) =>{
    const {Email, Password, Name} = req.body
    userdata.findOne({Email:Email})
    .then(client =>{
        if(client){
            if(client.Password === Password && client.Name === Name){
                const Token = jwt.sign({Email:client.Email,Password:client.Password}, process.env.PASSWORD)
                res.json({correct : "Access Granted", Token : Token})
                console.log(Token)
                
            }else{
                res.json("Wrong info 😡, Who are you, Please fill correct info")
            }
        }else{
            res.json("Access Denied")
        }
    })
})

app.get("/Userlogin", (req,res) =>{
    userdata.find({})
    .then((userData) =>{res.json({userData})})
    .catch((err) => {res.json({err})})
})

module.exports = app;