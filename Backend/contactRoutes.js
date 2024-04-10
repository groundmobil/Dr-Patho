// contactRoutes.js

const express = require('express');
const ContactModel = require('./contactModel');

const router = express.Router();

router.post('/api/contact', async (req, res) => {
  try {
    const { phoneNumber } = req.body;
    const newContact = new ContactModel({ phoneNumber });
    await newContact.save();
    res.status(200).json({ message: 'Contact info saved successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

module.exports = router;
