const mongoose = require('mongoose');

const hotelSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  rooms: { type: Number, required: true },
  flightDetails: { type: String },
  itinerary: { type: String },
  features: { type: String },
  image: { type: String },
  rating: {type: String},
  price: { type: Number, required: true }
});

const Hotel = mongoose.model('Hotel', hotelSchema);

module.exports = Hotel;