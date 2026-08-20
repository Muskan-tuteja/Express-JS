// // const express = require('express')

// import express from 'express'

// import page from './page.js'
// import about from './about.js'

// const app = express()

// app.get("",(req,res)=>{
//     res.send(page())

// })
// app.get("/about",(req,res)=>{
//     res.send(about())

// })
// app.get("",(req,res)=>{
//     res.send("<h1>Home pahe 235</>")

// })

// app.listen(9000)



import express from "express";
import { MongoClient } from "mongodb";
import fs from "fs";
import path from "path";

const dbName = "college";
const url = "mongodb://localhost:27017";

const client = new MongoClient(url);

const app = express();
app.set("view engine", 'ejs')

app.get("/", async (req, resp) => {
  await client.connect();
  const db = client.db(dbName);

  const collections = db.collection("students");

  const result = await collections.find().toArray();

  console.log(result);
  resp.render("students", { result });
});
app.listen(3200);
