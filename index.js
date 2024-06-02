require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello Sainath')
})


app.get('/login',(req,res)=> {
    res.send("PLEASE login to explore")
})

app.get('/index',(req,res)=> {
    res.send("<h1>index page</h1>")
})

app.listen(process.env.PORT, () => {
  console.log(`Port is running on Port : ${port}`)
})