const express = require('express')
const app = express()
1

app.get('/ping', (req, res) => {
    res.send('Hello Node App')
})


app.listen(3000, () => {
    console.log('Node API app is running on port 3000')
})