import express from 'express'
const app = express()

function ipCheck(req,res,next){
    if(!req.query.age || req.query.age<18){
        res.send("Alert ! You can not acess this page")
    }else{
        next()
    }
}
app.use(ipCheck)

app.listen(8900)