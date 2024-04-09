// Import required libraries
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const reviewsRoutes = require('./Reviewsdb');
const loginRoutes = require('./logindb');
const BookNowdb = require('./BookNowdb');
const Slotdb = require('./Slotdb');
const TestDetails = require('./detailsdb');
const LabDetails = require('./LabDetailsdb');

// Initialize Express app
const server = express();

// Middleware setup
server.use(cors());
server.use(express.json());

// Connect to MongoDB Atlas
mongoose.connect('mongodb+srv://Stuti:Dr.PathoDBLogin@cluster0.zhkvyeb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// MongoDB connection setup
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB Atlas');
});

// Example route for the root endpoint
server.get('/', (req, res) => {
  res.send('Hi Backend!');
});

// Mount login routes
server.use('/', loginRoutes);

// Update the endpoint to handle storing BookNow data
server.post('/booknow', async (req, res) => {
  const { pincode, selectedTest } = req.body;

  if (!pincode || !selectedTest) {
    return res.status(400).json({ error: 'Pincode and selectedTest are required' });
  }

  // Save BookNow data to the database
  await BookNowdb.saveBookNowData(pincode, selectedTest);

  res.status(200).json({ message: 'BookNow data saved successfully' });
});

// Update the endpoint to handle storing Review data
server.post('/reviews', async (req, res) => {
  const { rating, reviewText } = req.body;

  if (!rating || !reviewText) {
    return res.status(400).json({ error: 'Rating and reviewText are required' });
  }

  // Save Review data to the database
  await reviewsRoutes.saveReviewData(rating, reviewText); // Change Reviewsdb to reviewsRoutes

  res.status(200).json({ message: 'Review data saved successfully' });
});

// Update the endpoint to handle storing slot data
server.post('/slot', async (req, res) => {
  const { address, date, timeSlot} = req.body;

  if (!address || !date || !timeSlot ) {
    return res.status(400).json({ error: 'Address, date, and time slot are required' });
  }

  // Save slot data to the database
  await Slotdb.saveSlotData(address, date, timeSlot);

  res.status(200).json({ message: 'Slot data saved successfully' });
});

// Route to handle storing selected test details
server.post('/selectedtest', async (req, res) => {
  const { testName, pincode } = req.body;

  if (!testName || !pincode) {
    return res.status(400).json({ error: 'Test name and pincode are required' });
  }

  try {
    // Create a new test details document
    const testDetails = new TestDetails({
      testName,
      pincode,
    });

    // Save the test details to the database
    await testDetails.save();

    res.status(200).json({ message: 'Test details saved successfully' });
  } catch (error) {
    console.error('Error saving test details:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Update the endpoint to handle storing lab details
server.post('/labdetails', async (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ error: 'Lab name is required' });
  }

  try {
    // Create a new LabDetails document
    const labDetails = new LabDetails({
      name,
    });

    // Save the lab details to the database
    await labDetails.save();

    res.status(200).json({ message: 'Lab details saved successfully' });
  } catch (error) {
    console.error('Error saving lab details:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Set up server to listen on specified port
const PORT = process.env.PORT || 8080;
server.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
