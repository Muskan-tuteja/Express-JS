// const express = require('express')

import express from 'express'

import page from './page.js'
import about from './about.js'

const app = express()

app.get("",(req,res)=>{
    res.send(page())

})
app.get("/about",(req,res)=>{
    res.send(about())

})
app.get("",(req,res)=>{
    res.send("<h1>Home pahe 235</>")

})

app.listen(9000)