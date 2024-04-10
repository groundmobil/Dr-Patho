// addressRoutes.js

const express = require('express');
const AddressModel = require('./addressModel');

const router = express.Router();

// Example route to store address data
router.post('/api/address', async (req, res) => {
    try {
      const { pinCode, address, city, state, phoneNumber } = req.body; // Include phoneNumber in destructuring
      console.log("Received Address Info:", { pinCode, address, city, state, phoneNumber });
      const newAddress = new AddressModel({ pinCode, address, city, state, phoneNumber }); // Include phoneNumber when creating new document
      await newAddress.save();
      console.log("Address Info saved to database:", newAddress);
      res.status(200).json({ message: 'Address saved successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  });

module.exports = router;
