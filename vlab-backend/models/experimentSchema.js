const mongoose = require("mongoose");

const experimentSchema = new mongoose.Schema({
  number: { type: Number },

  name: { type: String },

  aim: { type: String },

  theory: { type: String },

  procedure: { type: String },

  observation: { type: String },

  assignment: { type: String },

  reference: { type: String },
});

const experiment = new mongoose.model("experimentData", experimentSchema);
module.exports = experiment;
