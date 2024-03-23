const keys = require('./config/keys');
const mongoose = require('mongoose');
const Hotel = require('./models/Hotel');

mongoose.connect(keys.mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const hotels = [
  {
    name: 'Hotel A',
    location: 'Paris',
    rooms: 10,
    flightDetails: 'Flight from New York to Paris',
    itinerary: 'Day 1: Arrive in Paris, check-in to hotel, and explore the city.',
    features: 'Spa, fitness center, restaurants',
    image: 'https://example.com/hotel-a.jpg',
    rating: '4.5',
    price: 200,
  },
  {
    name: 'Hotel B',
    location: 'Tokyo',
    rooms: 5,
    flightDetails: 'Flight from Los Angeles to Tokyo',
    itinerary: 'Day 1: Arrive in Tokyo, check-in to hotel, and visit temples.',
    features: 'Traditional Japanese rooms, onsen',
    image: 'https://example.com/hotel-b.jpg',
    rating: '4.2',
    price: 150,
  },
  // ... (rest of the hotel data)
];

const seedData = async () => {
  try {
    await Hotel.deleteMany({});
    await Hotel.insertMany(hotels);
    console.log('Database seeded successfully!');
  } catch (error) {
    console.error(error);
  } finally {
    mongoose.disconnect();
  }
};

seedData();