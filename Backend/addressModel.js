// addressModel.js

const mongoose = require('mongoose');

const addressSchema = new mongoose.Schema({
    pinCode: String,
    address: String,
    city: String,
    state: String,
    phoneNumber: String, // Include phoneNumber field here as well
    // Other fields specific to address
  });

  const AddressModel = mongoose.model('Address', addressSchema);
  
module.exports = AddressModel;
