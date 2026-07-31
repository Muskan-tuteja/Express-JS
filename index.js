const express = require('express')

const app = express()

app.get("",(req,res)=>{
    res.send("<h1>Home pahe</>")

})
app.get("/about",(req,res)=>{
    res.send("<h1>About Page</>")

})
app.get("",(req,res)=>{
    res.send("<h1>Home pahe 235</>")

})

app.listen(9000)