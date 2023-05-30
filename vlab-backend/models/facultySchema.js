const mongoose = require("mongoose");
// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");

// let validateEmail = function (email) {
//   var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//   return re.test(email);
// };

const facultySchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: {
    type: String,
    required: true,
  },

  // tokens: [
  //   {
  //     token: {
  //       type: String,
  //       required: true,
  //     },
  //   },
  // ],
});

//encryption of password
// adminSchema.pre("save", async function (next) {
//   if (!this.isModified("password")) {
//     next();
//   }
//   this.password = await bcrypt.hash(this.password, 10);
//   this.confirmpassword = await bcrypt.hash(this.confirmpassword, 10);
// });

//verify password

// adminSchema.methods.comparePassword = async function (yourPassword) {
//   return await bcrypt.compare(yourPassword, this.password);
// };

//get token
// adminSchema.methods.jwtGenerateToken = async function (res) {
//   try {
//     const token = jwt.sign(
//       {
//         _id: this._id,
//       },
//       process.env.JWT_SECRET,
//       {
//         expiresIn: 3600,
//       }
//     );
//     this.tokens = this.tokens.concat({ token: token });
//     await this.save();
//     return token;
//   } catch (err) {
//     console.log(err);
//   }
// };

const faculty = new mongoose.model("facultyData", facultySchema);
module.exports = faculty;

// "name":"bhavya",
// "course":"b.tech",
// "branch":"cs",
// "email":"bhavyaa@gmail.com",
// "password":"12345678",
// "cpassword":"12345678"
