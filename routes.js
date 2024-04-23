const express = require('express')
const app = express()

const {modeldata}=require("./mongodata")

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

module.exports = app;