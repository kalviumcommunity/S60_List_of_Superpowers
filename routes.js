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
    res.status(201).send("Successful post request")
})

app.put('/put/:id',(req,res) =>{
    res.send("Successfully updated")
})

app.delete('/delete/:id',(req,res)=>{
    res.send("Successfully deleted data")
})

module.exports = app;