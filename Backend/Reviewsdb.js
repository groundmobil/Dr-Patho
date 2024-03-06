const mongoose = require('mongoose');

// Define the schema for Reviews data
const reviewSchema = new mongoose.Schema({
  rating: {
    type: Number,
    required: true,
  },
  reviewText: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Create a model based on the schema
const Review = mongoose.model('Review', reviewSchema);

// Function to save review data to the database
const saveReviewData = async (rating, reviewText) => {
  try {
    const reviewData = new Review({ rating, reviewText });
    await reviewData.save();
    console.log('Review data saved successfully');
  } catch (error) {
    console.error('Error saving review data:', error.message);
  }
};

// Function to retrieve all review data from the database
const getAllReviewData = async () => {
  try {
    const allReviewData = await Review.find({});
    return allReviewData;
  } catch (error) {
    console.error('Error retrieving review data:', error.message);
    return [];
  }
};

module.exports = { saveReviewData, getAllReviewData };
