const express = require("express");
const app = express();
app.use(express.json());
const faculty = require("../models/facultySchema.js");
const student = require("../models/studentSchema.js");

const fsignup = async (req, res) => {
  const { name,email, password} =
    req.body;
  try {
    const userExist = await faculty.findOne({ email:email });
    if (userExist) {
      return res.send("User already registered");
    }
    const newfaculty = new faculty({
      name,
      email,
      password,
    });
    const registered = await newfaculty.save();
    if (registered) {
      return res.status(200).json({ success: "Successfully Registered" });
      //jwt thing
      // const token = await registered.jwtGenerateToken();
      // res.status(200).json({ success: "registration successful" });
    } else {
      return res.status(201).json({ success: "Some Unknown Error" });
    }
  } catch (err) {
    console.log(err);
  }
};

const flogin = async (req, res) => {
  const { email, password } = req.body;
    const userExist = await faculty.findOne({ email:email });
    if(!userExist) {
      return res.status(401).json({ success: false,message:"user does not exist" });
    }
    const passMatch=userExist.password;
    if(passMatch!==password) {
      return res.status(401).json({ success: false,message:"password incorrect" });
    }
    return res.status(200).json({ success:true,message:"successfully loggedin"});
      // //jwt thing
      // //  const token = await userExist.jwtGenerateToken(); //session
      // generateToken(userExist, 200, res);
};

const ssignup = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const userExist = await student.findOne({ email:email });
    if (userExist) {
      return res.send("User already registered");
    }
    const newStudent = new student({
      name,
      email,
      password,
    });
    const registered = await newStudent.save();
    if (registered) {
      //jwt thing
      // const token = await registered.jwtGenerateToken();
      // console.log(token);
      return res
        .status(200)
        .json({ success: true, message: "Successfully registered!!!" });
    }
    else {
      return res.status(201).json({ success: "Some Unknown Error" });
    }
  } catch (err) {
    console.log(err);
  }
};

const slogin = async (req, res) => {
  const { email, password } = req.body;
    const userExist = await student.findOne({ email:email });
    if(!userExist) {
      return res.status(401).json({ success: false,message:"user does not exist" });
    }
    const passMatch=userExist.password;
    if(passMatch!==password) {
      return res.status(401).json({ success: false,message:"password incorrect" });
    }
    return res.status(200).json({ success:true,message:"successfully loggedin"});
      // //jwt thing
      // //  const token = await userExist.jwtGenerateToken(); //session
      // generateToken(userExist, 200, res);
};

//httppnly cookie with jwt
// const generateToken = async (userExist, statuscode, res) => {
//   const token = await userExist.jwtGenerateToken();
//   const options = {
//     httpOnly: true,
//     expiresIn: new Date(Date.now() + process.env.EXPIRES_TOKEN),
//   };

//   res
//     .status(statuscode)
//     .cookie("token", token, options)
//     .json({ success: "login successful" });
// };

//logout
// const Logout = (req, res) => {
//   res.clearCookie("token");
//   res.status(200).json({
//     success: true,
//     message: "logged out",
//   });
// };

exports.fsignup = fsignup;
exports.flogin = flogin;
exports.ssignup = ssignup;
exports.slogin = slogin;
// exports.Logout = Logout;

//User Profile
// const userProfile = async (req,res,next)=>{
//   const user = Admin.findById(req.user._id)
//   res.status(200).json({
//     success:true,
//   user  })
//   next();
// }
