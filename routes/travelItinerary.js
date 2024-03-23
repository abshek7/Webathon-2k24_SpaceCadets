const express = require('express');
const router = express.Router();
const Hotel = require('../models/Hotel');

router.get('/travel-itinerary', async (req, res) => {
  try {
    const hotels = await Hotel.find({});
    res.json(hotels);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;