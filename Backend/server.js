const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json())

const {connectiondata,modeldata}=require("./mongodata")

function gettingData(){
    return modeldata.db.readyState === 1
}

app.use('/',routes)


app.get('/ping', (req, res) => {
    const calling  = gettingData()
    let  connectionStatus = calling ? "database connected" : "connection failed"
    res.send(connectionStatus)
})


app.listen(3000, () => {
    connectiondata()
    console.log('Node API app is running on port 3000')
})