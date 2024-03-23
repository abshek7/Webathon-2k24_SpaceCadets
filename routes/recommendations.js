const express = require('express');
const router = express.Router();
const Hotel = require('../models/Hotel');

router.get('/recommendations', async (req, res) => {
  try {
    const recommendations = await Hotel.find({}).sort({ rating: -1 }).limit(5);
    res.json(recommendations);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;