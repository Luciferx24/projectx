const express = require('express');
const path = require('path')
const app = express()
app.use(express.static('./Knight'));
app.get('/', (req, res)=>{
    console.log("user hit the resources")
    res.status(200);
    res.sendFile(path.join(__dirname, '/index.html'))
})

app.listen(80, ()=>{
    console.log("listening on port 80")
})