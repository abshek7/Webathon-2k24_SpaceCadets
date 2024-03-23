// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import SearchResults from './components/SearchResults';
import BookingConfirmation from './components/BookingConfirmation';
import Register from './components/Register';
import Login from './components/Login';
import RegisterTravels from './components/RegisterHotel';
import Travels from './components/TravelItinerary';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/search-results" element={<SearchResults />} />
        <Route path="/booking-confirmation" element={<BookingConfirmation />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/registertravels" element={<RegisterTravels />} />
        <Route path="/travels" element={<Travels />} />
      </Routes>
    </Router>
  );
}

export default App;