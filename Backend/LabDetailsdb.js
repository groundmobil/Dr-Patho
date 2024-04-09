// LabDetailsdb.js

const mongoose = require('mongoose');

// Define the schema for lab details
const LabDetailsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

// Create a model using the schema
const LabDetails = mongoose.model('LabDetails', LabDetailsSchema);

module.exports = LabDetails;
