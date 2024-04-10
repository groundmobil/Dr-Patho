// contactModel.js

const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  phoneNumber: String,
});

const ContactModel = mongoose.model('Contact', contactSchema);

module.exports = ContactModel;
