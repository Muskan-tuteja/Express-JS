import express from 'express'
import userData from './user.json' with{type:'json'}

const app = express()

app.get("/",(req,resp)=>{
    console.log(userData);
    
    // resp.send("user list api")
    resp.send(userData)

})
app.get("/user/:id",(req,resp)=>{
    const id = req.params.id
    console.log(id)
let filterData = userData.filter((user) =>user.id==id)
    resp.send(filterData)
})
app.listen(3200)