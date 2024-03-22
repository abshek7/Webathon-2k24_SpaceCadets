// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import SearchResults from './components/SearchResults';
import BookingConfirmation from './components/BookingConfirmation';
import Register from './components/Register';
import Login from './components/Login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search-results" element={<SearchResults />} />
        <Route path="/booking-confirmation" element={<BookingConfirmation />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;