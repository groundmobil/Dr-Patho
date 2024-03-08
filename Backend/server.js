// Import required libraries
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const reviewsRoutes = require('./Reviewsdb');
const loginRoutes = require('./logindb');
const BookNowdb = require('./BookNowdb');

// Initialize Express app
const server = express();

server.use(cors({
  origin: 'https://www.drpatho.in/',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
}));

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

// Set up server to listen on specified port
const PORT = process.env.PORT || 8080;
server.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
