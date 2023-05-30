const express = require("express");
const app = express();
app.use(express.json());
const body_parser = require("body-parser");

// const Suser = require("../models/adminSchema.js");
const router = express.Router();
router.use(body_parser.json());
router.use(body_parser.urlencoded({ extended: true }));

const Home = require("../controllers/Home");
const {
  fsignup,
  flogin,
  ssignup,
  slogin,
  // Logout,
} = require("../controllers/Credentials");
const {Addexp,getexp,getexpById} = require('../crud/create')
const{Editexperiment}=require('../crud/update')
const{DeleteExpById}=require('../crud/delete')
// const { Authenticate } = require("../middleware/auth.js");

router.get("/", Home);

router.post("/ssignup", ssignup);
router.post("/slogin", slogin);
router.post("/fsignup", fsignup);
router.post("/flogin", flogin);
// router.post("/logout", Logout);

router.post("/addexp", Addexp);


router.get("/getexp",getexp);
router.get("/getexp/:id",getexpById);

router.get("/delete/:id",DeleteExpById)

router.put("/updateexp", Editexperiment );

module.exports = router;
