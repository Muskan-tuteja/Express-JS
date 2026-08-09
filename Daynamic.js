import express from 'express'

const app = express()

app.get("/",(req,resp)=>{
    const users =['Muskan','Mahi','Mkilh'];
    // const users =['muskan','mahi','mkilh']
    let data = ``;
    for(let i =0; i<users.length;i++){

        
        console.log(users[i]);
        
    }
    resp.send("This is Home Page")
})

app.listen(7800)