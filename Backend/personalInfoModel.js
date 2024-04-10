// personalInfoModel.js

const mongoose = require('mongoose');

const personalInfoSchema = new mongoose.Schema({
    name: String,
    email: String,
    dob: String,
    gender: String,
    phoneNumber: String, // Include phoneNumber field here as well
    // Other fields specific to personal info
  });
  
  const PersonalInfoModel = mongoose.model('PersonalInfo', personalInfoSchema);

module.exports = PersonalInfoModel;
