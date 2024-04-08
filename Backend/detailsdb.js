// detailsdb.js

const mongoose = require('mongoose');

// Define a schema for test details
const testDetailsSchema = new mongoose.Schema({
  testName: {
    type: String,
    required: true,
  },
  pincode: {
    type: String,
    required: true,
  },
});

// Create a model based on the schema
const TestDetails = mongoose.model('TestDetails', testDetailsSchema);

// Export the model
module.exports = TestDetails;
