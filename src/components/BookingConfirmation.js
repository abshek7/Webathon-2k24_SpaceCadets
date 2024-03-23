import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
`;

const BookingConfirmation = () => {
  return (
    <Container>
      <h1>Booking Confirmation</h1>
      <p>Thank you for your booking!</p>
    </Container>
  );
};

export default BookingConfirmation;