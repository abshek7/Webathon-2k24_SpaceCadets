// components/SearchResults.js
import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

const ResultCard = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const SearchResults = () => {
  const location = useLocation();
  const results = location.state;

  return (
    <div>
      <h1>Search Results</h1>
      {results.length > 0 ? (
        <div>
          {results.map((result) => (
            <ResultCard key={result.id}>
              <h2>{result.name}</h2>
              <p>{result.description}</p>
              <p>Price: {result.price}</p>
            </ResultCard>
          ))}
        </div>
      ) : (
        <p>No results found.</p>
      )}
    </div>
  );
};

export default SearchResults;