import express from 'express'
const app = express()

function apgeCheck(req,res,next){
    if(!req.query.age || req.query.age<18){
        res.send("Alert ! You can not acess this page")
    }else{
        next()
    }
}
app.use(apgeCheck)

app.get("/",(req,res)=>{
    res.send("<h1>This is Home Page</h1>")
})
app.get("/Login",(req,res)=>{
    res.send("<h1>This is Login Page</h1>")
})
app.get("/admin",(req,res)=>{
    res.send("<h1>This is admin Page</h1>")
})

app.listen(8900)