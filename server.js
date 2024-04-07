const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')


const app = express()
app.use(cors())

app.get('/ping', (req, res) => {
    res.send('Hello Node App')
})


app.listen(3000, () => {
    console.log('Node API app is running on port 3000')
})