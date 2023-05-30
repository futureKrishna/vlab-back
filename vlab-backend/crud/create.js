const express = require("express");
const app = express();
const exp = require("../models/experimentSchema");

//For Adding ---->
const Addexp = async (req, res) => {
  const { number,name, aim, theory, procedure, observation, assignment, reference } =
    req.body;

    const expExist = await exp.findOne({ number:number });
    const expExist1 = await exp.findOne({ name:name });
    if (expExist || expExist1) {
      return res.send("experiment with this name or number already present");
    }

  const experiment = new exp({
    number,
    name,
    aim,
    theory,
    procedure,
    observation,
    assignment,
    reference,
  });

  try {
    await experiment.save();
    res
      .status(201)
      .json({ success: true, message: "Experiment Successfully Added" });
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
};

const getexp = async (req, res) => {
  try {
    const data = await exp.find();
    res.json(data);
  } catch (error) {
    console.log('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getexpById = async (req, res) => {
  try {
    const experimentId = req.params.id;
    const data = await exp.findOne({number:experimentId});
    res.json(data);
  } catch (error) {
    console.log('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.Addexp = Addexp;
exports.getexp = getexp;
exports.getexpById = getexpById;
