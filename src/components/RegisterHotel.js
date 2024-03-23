import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: grid;
  grid-gap: 10px;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const TextArea = styled.textarea`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #008489;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const RegisterHotel = () => {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [rooms, setRooms] = useState(0);
  const [flightDetails, setFlightDetails] = useState('');
  const [itinerary, setItinerary] = useState('');
  const [features, setFeatures] = useState('');
  const [image, setImage] = useState('');
  const [rating, setRating] = useState(0); 
  const [price, setPrice] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post('http://localhost:5000/api/register-hotel', {
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

      if (response.status === 201) {
        alert('Hotel registered successfully');
        setName('');
        setLocation('');
        setRooms(0);
        setFlightDetails('');
        setItinerary('');
        setFeatures('');
        setImage('');
        setRating(0);
        setPrice(0);
      } else {
        alert('Unexpected response from the server');
      }
    } catch (error) {
      console.error(error);
      if (error.response && error.response.data && error.response.data.error) {
        alert(`Server error: ${error.response.data.error}`);
      } else {
        alert('An error occurred during registration');
      }
    }
  };

  return (
    <Container>
      <Title>Register Hotel/Travel Itinerary</Title>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Hotel Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <Input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          required
        />
        <Input
          type="number"
          placeholder="Number of Rooms"
          value={rooms}
          onChange={(e) => setRooms(parseInt(e.target.value))}
          required
        />
        <TextArea
          placeholder="Flight Details"
          value={flightDetails}
          onChange={(e) => setFlightDetails(e.target.value)}
        />
        <TextArea
          placeholder="Itinerary Details"
          value={itinerary}
          onChange={(e) => setItinerary(e.target.value)}
        />
        <TextArea
          placeholder="Features"
          value={features}
          onChange={(e) => setFeatures(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <Input
          type="number"
          placeholder="Rating"
          value={rating}
          onChange={(e) => setRating(parseInt(e.target.value))}
        />
        <Input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(parseFloat(e.target.value))}
        />
        <Button type="submit">Register</Button>
      </Form>
    </Container>
  );
};

export default RegisterHotel;