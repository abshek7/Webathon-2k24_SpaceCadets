import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const HotelCard = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 20px;
`;

const HotelHeader = styled.div`
  background-color: #f5f5f5;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const HotelName = styled.h2`
  font-size: 24px;
  margin: 0;
`;

const HotelPrice = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin: 0;
`;

const HotelImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
`;

const ItineraryDetails = styled.div`
  padding: 10px;
`;

const DetailsContainer = styled.div`
  margin-bottom: 10px;
`;

const DetailTitle = styled.h3`
  font-size: 16px;
  margin-bottom: 5px;
`;

const DetailContent = styled.p`
  margin: 0;
`;

const TravelItinerary = ({ itinerary }) => {
  return (
    <Container>
      {itinerary.map((hotel) => (
        <HotelCard key={hotel._id}>
          <HotelHeader>
            <HotelName>{hotel.name}</HotelName>
            <HotelPrice>${hotel.price}</HotelPrice>
          </HotelHeader>
          <HotelImage src={hotel.image} alt={hotel.name} />
          <ItineraryDetails>
            <DetailsContainer>
              <DetailTitle>Location</DetailTitle>
              <DetailContent>{hotel.location}</DetailContent>
            </DetailsContainer>
            <DetailsContainer>
              <DetailTitle>Rooms</DetailTitle>
              <DetailContent>{hotel.rooms}</DetailContent>
            </DetailsContainer>
            <DetailsContainer>
              <DetailTitle>Rating</DetailTitle>
              <DetailContent>{hotel.rating}</DetailContent>
            </DetailsContainer>
            <DetailsContainer>
              <DetailTitle>Flight Details</DetailTitle>
              <DetailContent>{hotel.flightDetails}</DetailContent>
            </DetailsContainer>
            <DetailsContainer>
              <DetailTitle>Itinerary</DetailTitle>
              <DetailContent>{hotel.itinerary}</DetailContent>
            </DetailsContainer>
            <DetailsContainer>
              <DetailTitle>Features</DetailTitle>
              <DetailContent>{hotel.features}</DetailContent>
            </DetailsContainer>
          </ItineraryDetails>
        </HotelCard>
      ))}
    </Container>
  );
};

export default TravelItinerary;