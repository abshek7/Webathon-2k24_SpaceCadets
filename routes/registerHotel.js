const express = require('express');
const router = express.Router();
const Hotel = require('../models/Hotel');

router.post('/', async (req, res) => {
  try {
    console.log('Request Body:', req.body); // Log the request body

    const {
      name,
      location,
      rooms,
      flightDetails,
      itinerary,
      features,
      image,
      rating,
      price,
    } = req.body;

    const newHotel = new Hotel({
      name,
      location,
      rooms,
      flightDetails,
      itinerary,
      features,
      image,
      rating,
      price,
    });

    const savedHotel = await newHotel.save();
    console.log('Saved Hotel:', savedHotel); // Log the saved hotel document

    res.status(201).json({ message: 'Hotel registered successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;