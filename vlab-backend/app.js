const express = require("express");
const app = express();
const conn = require("./models/dbconnection.js");
// require("dotenv").config();
// const cookie = require('cookie-parser')
// const Auth = require("./middleware/auth.js")
const PORT = 5000;

//accept json
app.use(express.json())

//accept body
app.use(express.urlencoded({extended:true}))
//  app.use(cookie())

app.use(require("./Routes/Route.js"));

// const auth = require("./middleware/auth.js")
// app.use(auth);

// app.get("/",(req, res) => {
//   res.send("this is kj home page");
// });

// app.post("/ssignup", (req, res) => {
//   res.send("this is my admin signup page");
// });

// app.post("/slogin", (req, res) => {
//   res.send("this is my admin login page");
// });

// app.post("/fsignup", (req, res) => {
//   res.send("this is my user signup page");
// });

// app.post("/flogin", (req, res) => {
//   res.send("this is my user login page");
// });

// app.post("/logout", (req, res) => {
//   res.send("log-out");
// });

// app.post("/addexp",(req,res)=>{
//   res.send("expadded")
// })

//  app.get("/getexp",(req,res)=>{
//   res.send("exp")
// })

// app.put("/updateexp/:id",(req,res)=>{
//   res.send("Updated")
// })

app.listen(PORT, () => {
  console.log(`running at port ${PORT}`);
});
