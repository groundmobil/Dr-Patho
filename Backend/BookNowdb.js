// BookNowdb.js

const mongoose = require('mongoose');

// Define the schema for BookNow data
const bookNowSchema = new mongoose.Schema({
  pincode: {
    type: String,
    required: true,
  },
  selectedTest: {
    type: String,
    required: true,
  },
});

// Create a model based on the schema
const BookNow = mongoose.model('BookNow', bookNowSchema);

// Function to save BookNow data to the database
const saveBookNowData = async (pincode, selectedTest) => {
  try {
    const bookNowData = new BookNow({ pincode, selectedTest });
    await bookNowData.save();
    console.log('BookNow data saved successfully');
  } catch (error) {
    console.error('Error saving BookNow data:', error.message);
  }
};

// Function to retrieve all BookNow data from the database
const getAllBookNowData = async () => {
  try {
    const allBookNowData = await BookNow.find({});
    return allBookNowData;
  } catch (error) {
    console.error('Error retrieving BookNow data:', error.message);
    return [];
  }
};

module.exports = { saveBookNowData, getAllBookNowData };
