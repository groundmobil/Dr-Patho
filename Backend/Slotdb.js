// Slotdb.js

// Import mongoose for MongoDB interaction
const mongoose = require('mongoose');

// Define the schema for slot data
const slotSchema = new mongoose.Schema({
  address: String,
  date: Date,
  timeSlot: String
});

// Create a model based on the schema
const Slot = mongoose.model('Slot', slotSchema);

// Define the function to save slot data
async function saveSlotData(address, date, timeSlot) {
  try {
    const slot = new Slot({ address, date, timeSlot });
    await slot.save();
    console.log('Slot data saved successfully');
  } catch (error) {
    console.error('Error saving slot data:', error);
    throw error; // Rethrow the error to be handled by the caller
  }
}

// Export the function to be used in other files
module.exports = { saveSlotData };
