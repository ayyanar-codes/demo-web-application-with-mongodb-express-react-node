const express = require('express');
const mongoose=require('mongoose');
const app = express()
const port = 8000


mongoose.connect('mongodb://localhost:127017/my')

app.get('/', (req, res) => {
  res.send('Hello World! from node js by Ayyanar')
})  

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})