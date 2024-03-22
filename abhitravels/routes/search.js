// routes/search.js
const express = require('express');
const router = express.Router();
const Hotel = require('../models/Hotel');

// Search for hotels
router.post('/', async (req, res) => {
  const { location, startDate, endDate, adults, children, rooms } = req.body;

  try {
    const hotels = await Hotel.find({
      location: { $regex: location, $options: 'i' },
      availableRooms: { $gte: rooms },
    });

    const results = hotels.map((hotel) => ({
      id: hotel._id,
      name: hotel.name,
      description: hotel.description,
      location: hotel.location,
      price: hotel.price,
      rating: hotel.rating,
      images: hotel.images,
    }));

    res.json(results);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;