const express = require('express');
const multer = require('multer');
const Trek = require('../models/Trek');

const router = express.Router();

// Configure multer for file uploads (optional, if still supporting files)


// Add a new trek
router.post('/treks', async (req, res) => {
  const { name, image, duration, price, itinerary, isTopTrek, itineraryUrl } = req.body;

  try {
    // Parse the itinerary field safely
    const parsedItinerary = typeof itinerary === 'string' ? JSON.parse(itinerary) : itinerary;

    const trek = new Trek({
      name,
      image,
      duration,
      price,
      itinerary: parsedItinerary, // Save parsed itinerary
      isTopTrek,
      itineraryUrl, // Save the URL
    });

    await trek.save();
    res.status(201).json(trek);
  } catch (error) {
    console.error('Error adding trek:', error.message);
    res.status(500).send('Server Error');
  }
});

// Edit a trek
router.put('/treks/:id', async (req, res) => {
  const { name, image, duration, price, itinerary, isTopTrek, itineraryUrl } = req.body;

  try {
    // Parse the itinerary field safely
    const parsedItinerary = typeof itinerary === 'string' ? JSON.parse(itinerary) : itinerary;

    const updateData = {
      name,
      image,
      duration,
      price,
      itinerary: parsedItinerary, // Save parsed itinerary
      isTopTrek,
      itineraryUrl, // Update the URL
    };

    const trek = await Trek.findByIdAndUpdate(req.params.id, updateData, { new: true });
    res.json(trek);
  } catch (error) {
    console.error('Error updating trek:', error.message);
    res.status(500).send('Server Error');
  }
});

// Delete a trek
router.delete('/treks/:id', async (req, res) => {
  try {
    await Trek.findByIdAndDelete(req.params.id);
    res.json({ message: 'Trek deleted' });
  } catch (error) {
    console.error('Error deleting trek:', error.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
