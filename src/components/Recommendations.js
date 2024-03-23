import React, { useState, useEffect } from 'react';
import axios from 'axios';
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
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/recommendations');
        setRecommendations(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <div>
        {recommendations.map((recommendation) => (
          <RecommendationCard key={recommendation._id}>
            <Image src={recommendation.image} alt={recommendation.location} />
            <Location>{recommendation.location}</Location>
          </RecommendationCard>
        ))}
      </div>
    </div>
  );
};

export default Recommendations;