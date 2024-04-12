// personalInfoRoutes.js

const express = require('express');
const PersonalInfoModel = require('./personalInfoModel');

const router = express.Router();

// Example route to store personal info data
router.post('/api/personal-info', async (req, res) => {
    try {
      const { name, email, dob, gender, phoneNumber } = req.body; // Include phoneNumber in destructuring
      console.log("Received Personal Info:", { name, email, dob, gender, phoneNumber });
      
      const newPersonalInfo = new PersonalInfoModel({ name, email, dob, gender, phoneNumber }); // Include phoneNumber when creating new document
      await newPersonalInfo.save();
      
      console.log("Personal Info saved to database:", newPersonalInfo);
      res.status(200).json({ message: 'Personal info saved successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  });

// Route to check if phone number exists
router.post('/api/check-phone-number', async (req, res) => {
  try {
    const { phoneNumber } = req.body;

    // Query the database to check if the phone number exists
    const personalInfo = await PersonalInfoModel.findOne({ phoneNumber });

    res.status(200).json({ exists: !!personalInfo }); // Send whether the phone number exists or not
  } catch (error) {
    console.error("Error while checking phone number:", error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Route to get user data based on phone number
router.post('/api/get-user-data', async (req, res) => {
  try {
    const { phoneNumber } = req.body;

    // Query the database to get user data based on the phone number
    const userData = await PersonalInfoModel.findOne({ phoneNumber });

    if (userData) {
      res.status(200).json(userData);
    } else {
      res.status(404).json({ message: 'User data not found' });
    }
  } catch (error) {
    console.error("Error fetching user data:", error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});


module.exports = router;
