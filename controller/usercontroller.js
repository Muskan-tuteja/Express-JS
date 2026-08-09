import { userList } from "../model/userModel.js"

export function handleUser(req,res){

    const userData = userList
    res.render('user',{users:userData})
}