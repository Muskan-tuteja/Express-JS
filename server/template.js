import express from 'express'
const app = express()
app.set('view engine','ejs')
app.get("/",(req,resp)=>{
    // resp.send("Home Page")
    resp.render('home',{name:"Muskink",age:45})

})
app.listen(2300)