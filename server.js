// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const keys = require('./config/keys');
const User = require('./models/User');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(keys.mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Connected to MongoDB');
})
.catch((err) => {
  console.error('Error connecting to MongoDB:', err);
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Routes
const searchRoutes = require('./routes/search');
const authRoutes = require('./routes/auth');
const recommendationsRoutes = require('./routes/recommendations');
const registerHotelRoutes = require('./routes/registerHotel');
const travelItineraryRoutes = require('./routes/travelItinerary');
app.use('/api/search', searchRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/recommendations', recommendationsRoutes);
app.use('/api/register-hotel', registerHotelRoutes);
app.use('/api/travel-itinerary', travelItineraryRoutes);
app.use((req, res, next) => {
  console.log(`${req.method} ${req.path}`);
  next();
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});