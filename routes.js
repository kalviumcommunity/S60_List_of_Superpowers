const express = require('express')
const app = express()

app.get('/get', (req,res) =>{
    res.send('Successful get request')
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