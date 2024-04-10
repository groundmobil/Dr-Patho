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

module.exports = router;
