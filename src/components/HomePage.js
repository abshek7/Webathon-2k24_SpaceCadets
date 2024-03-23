import React, { useState } from 'react';
import axios from 'axios';
import { format } from 'date-fns';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Recommendations from './Recommendations';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const Header = styled.header`
  text-align: center;
  margin-bottom: 40px;
`;

const Title = styled.h1`
  font-size: 36px;
  font-weight: bold;
  color: #333;
`;

const Subtitle = styled.p`
  font-size: 18px;
  color: #666;
`;

const SearchBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 20px;
`;

const Input = styled.input`
  padding: 10px;
  margin: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  padding: 10px 20px;
  margin: 5px;
  background-color: #008489;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const RecommendationsSection = styled.div`
  margin-top: 40px;
`;

const RecommendationsTitle = styled.h2`
  font-size: 24px;
  font-weight: bold;
  color: #333;
  text-align: center;
  margin-bottom: 20px;
`;


const HomePage = () => {
  const [location, setLocation] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [rooms, setRooms] = useState(1);
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    try {
      const formattedStartDate = format(new Date(startDate), 'yyyy-MM-dd');
      const formattedEndDate = format(new Date(endDate), 'yyyy-MM-dd');
      const response = await axios.post('http://localhost:5000/api/search', {
        location,
        startDate: formattedStartDate,
        endDate: formattedEndDate,
        adults,
        children,
        rooms,
      });
      setSearchResults(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container>
      <Header>
        <Title>Find the perfect destination for your dream vacation</Title>
        <Subtitle>Search for hotels, resorts, and more</Subtitle>
      </Header>
      <SearchBox>
        <Input
          type="text"
          placeholder="Enter location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <Input
          type="date"
          placeholder="Start date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
        <Input
          type="date"
          placeholder="End date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
        <Input
          type="number"
          placeholder="Adults"
          value={adults}
          onChange={(e) => setAdults(e.target.value)}
        />
        <Input
          type="number"
          placeholder="Children"
          value={children}
          onChange={(e) => setChildren(e.target.value)}
        />
        <Input
          type="number"
          placeholder="Rooms"
          value={rooms}
          onChange={(e) => setRooms(e.target.value)}
        />
        <Button onClick={handleSearch}>Search</Button>
      </SearchBox>
      {searchResults.length > 0 && (
        <div>
          <h2>Search Results</h2>
          {searchResults.map((result) => (
            <div key={result.id}>
              <h3>{result.name}</h3>
              <p>{result.description}</p>
              <p>Location: {result.location}</p>
              <p>Price: {result.price}</p>
              <p>Rating: {result.rating}</p>
            </div>
          ))}
        </div>
      )}
      <RecommendationsSection>
        <RecommendationsTitle>Popular Destinations</RecommendationsTitle>
        <Recommendations />
      </RecommendationsSection>
    </Container>
  );
};

export default HomePage;