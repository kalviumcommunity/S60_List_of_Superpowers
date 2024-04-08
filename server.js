const express = require('express')
const app = express()
const {connectiondata,modeldata}=require("./mongodata")

function gettingData(){
    return modeldata.db.readyState === 1
}


app.get('/ping', (req, res) => {
    const calling  = gettingData()
    let  connectionStatus = calling ? "database connected" : "connection failed"
    res.send(connectionStatus)
})


app.listen(3000, () => {
    connectiondata()
    console.log('Node API app is running on port 3000')
})