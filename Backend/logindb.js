const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Define MongoDB schemas

const contactSchema = new mongoose.Schema({
  phoneNumber: String,
});

const ContactModel = mongoose.model('Contact', contactSchema);

const personalInfoSchema = new mongoose.Schema({
  name: String,
  email: String,
  dob: String,
  gender: String,
});

const PersonalInfoModel = mongoose.model('PersonalInfo', personalInfoSchema);

const addressSchema = new mongoose.Schema({
  pinCode: String,
  address: String,
  city: String,
  state: String,
});

const AddressModel = mongoose.model('Address', addressSchema);

// Create an Express router
const router = express.Router();

// Example route to store contact info data
router.post('/api/contact', async (req, res) => {
  try {
    const { phoneNumber } = req.body;
    console.log("Received Contact Info:", { phoneNumber });
    const newContact = new ContactModel({ phoneNumber });
    await newContact.save();
    console.log("Contact Info saved to database:", newContact);
    res.status(200).json({ message: 'Contact info saved successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Example route to store personal info data
router.post('/api/personal-info', async (req, res) => {
  try {
    const { name, email, dob, gender } = req.body;
    console.log("Received Personal Info:", { name, email, dob, gender });
    
    const newPersonalInfo = new PersonalInfoModel({ name, email, dob, gender });
    await newPersonalInfo.save();
    
    console.log("Personal Info saved to database:", newPersonalInfo);
    res.status(200).json({ message: 'Personal info saved successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Example route to store address data
router.post('/api/address', async (req, res) => {
  try {
    const { pinCode, address, city, state } = req.body;
    console.log("Received Address Info:", { pinCode, address, city, state });
    const newAddress = new AddressModel({ pinCode, address, city, state });
    await newAddress.save();
    console.log("Address Info saved to database:", newAddress);
    res.status(200).json({ message: 'Address saved successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Example route to retrieve contact info data
router.get('/api/contact', async (req, res) => {
  try {
    const contactData = await ContactModel.find();
    res.status(200).json(contactData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});


// Example route to retrieve personal info data
router.get('/api/personal-info', async (req, res) => {
  try {
    const personalInfoData = await PersonalInfoModel.find();
    res.status(200).json(personalInfoData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Example route to retrieve address data
router.get('/api/address', async (req, res) => {
  try {
    const addressData = await AddressModel.find();
    res.status(200).json(addressData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

module.exports = router;
