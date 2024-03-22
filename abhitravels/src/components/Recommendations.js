// components/Recommendations.js
import React from 'react';
import styled from 'styled-components';

const RecommendationCard = styled.div`
  display: inline-block;
  width: 200px;
  margin: 10px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
`;

const Location = styled.p`
  padding: 10px;
  font-weight: bold;
  text-align: center;
`;

const Recommendations = () => {
  const recommendations = [
    {
      id: 1,
      location: 'Paris',
      image: 'https://images.unsplash.com/photo-1502917976243-b095efa77f7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    },
    {
      id: 2,
      location: 'Tokyo',
      image: 'https://images.unsplash.com/photo-1513533169968-df88d9314fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    },
    {
      id: 3,
      location: 'New York',
      image: 'https://images.unsplash.com/photo-1485776245471-c8da4ecd9035?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    },
    {
      id: 4,
      location: 'Sydney',
      image: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    },
    {
      id: 5,
      location: 'London',
      image: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80',
    },
  ];

  return (
    <div>
      <div>
        {recommendations.map((recommendation) => (
          <RecommendationCard key={recommendation.id}>
            <Image src={recommendation.image} alt={recommendation.location} />
            <Location>{recommendation.location}</Location>
          </RecommendationCard>
        ))}
      </div>
    </div>
  );
};

export default Recommendations;