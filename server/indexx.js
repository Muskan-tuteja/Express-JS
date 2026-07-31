import express from 'express'
import path from 'path'

const app = express()

app.get("/",(res,req)=>{
    const absPath = path.resolve('./client/Home.html')
req.sendFile(absPath)
})


app.listen(8000)