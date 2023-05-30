const express = require("express");
const app = express();
const exp = require("../models/experimentSchema");

const DeleteExpById = async (req, res) => {
    try {
      const experimentId = req.params.id;
      const available=await exp.findOne({number:experimentId});
      if(!available){
        await exp.deleteOne({ number: experimentId });
        res.json({ message: 'Experiment not present' });
      }
      res.json({ message: 'Experiment Deleted Successfully' });
    } catch (error) {
      console.log('Error:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };

exports.DeleteExpById = DeleteExpById