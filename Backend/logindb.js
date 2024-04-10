// Import required libraries
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

// Example route to store contact info data
app.post('/api/contact', async (req, res) => {
  // Route logic remains the same
});

// Example route to store personal info data
app.post('/api/personal-info', async (req, res) => {
  // Route logic remains the same
});

// Example route to store address data
app.post('/api/address', async (req, res) => {
  // Route logic remains the same
});

// Example route to retrieve contact info data
app.get('/api/contact', async (req, res) => {
  // Route logic remains the same
});

// Example route to retrieve personal info data
app.get('/api/personal-info', async (req, res) => {
  // Route logic remains the same
});

// Example route to retrieve address data
app.get('/api/address', async (req, res) => {
  // Route logic remains the same
});

module.exports = app;
