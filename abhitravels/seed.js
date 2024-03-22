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
    description: 'A luxurious hotel in the heart of the city',
    location: 'Paris',
    price: 200,
    rating: 4.5,
    availableRooms: 10,
    images: [
      'https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      'https://images.unsplash.com/photo-1571448395698-55fe76e1d2e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      'https://images.unsplash.com/photo-1590073242853-b684f25053f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    ],
  },
  {
    name: 'Hotel B',
    description: 'A cozy hotel near the beach',
    location: 'Tokyo',
    price: 150,
    rating: 4.2,
    availableRooms: 5,
    images: [
      'https://images.unsplash.com/photo-1611892776114-76e64b5c0546?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      'https://images.unsplash.com/photo-1587467325483-f8982e7447c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      'https://images.unsplash.com/photo-1590073242483-6430afe940bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    ],
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