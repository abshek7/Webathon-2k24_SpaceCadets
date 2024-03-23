import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { RiMailLine, RiLockPasswordLine } from 'react-icons/ri';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f4f4f4;
`;

const RegisterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 320px;
  width: 100%;
  padding: 40px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  margin-bottom: 20px;
  text-align: center;
  font-size: 24px;
  color: #333;
`;

const InputContainer = styled.div`
  position: relative;
  width: 100%;
`;

const Input = styled.input`
  width: calc(100% - 40px);
  padding: 10px;
  padding-right: 30px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
`;

const Icon = styled.div`
  position: absolute;
  top: 35%;
  right: 5px; /* Adjust right position */
  transform: translateY(-50%);
  display: flex;
  align-items: center;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const LoginLink = styled(Link)`
  text-decoration: none;
  color: #007bff;
  text-align: center;
  display: block;
  margin-top: 10px;
`;

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [registrationStatus, setRegistrationStatus] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/auth/register', {
        email,
        password,
      });
      setRegistrationStatus('successful');
      alert('Registration successful! Please login to continue.');
      window.location.href = '/login';
    } catch (error) {
      console.error(error);
      setRegistrationStatus('unsuccessful');
      alert('Registration unsuccessful! Try Again');
    }
  };

  return (
    <Container>
      <RegisterContainer>
        <Title>Register</Title>
        <form onSubmit={handleRegister}>
          <InputContainer>
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Icon>
              <RiMailLine />
            </Icon>
          </InputContainer>
          <InputContainer>
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <Icon>
              <RiLockPasswordLine />
            </Icon>
          </InputContainer>
          <Button type="submit">Register</Button>
        </form>
        {registrationStatus === 'successful' ? (
          <p style={{ color: 'green', marginTop: '10px' }}>
            Registration successful! Please login to continue.
          </p>
        ) : (
          <p style={{ color: 'red', marginTop: '10px' }}>
            Registration unsuccessful! Please try again.
          </p>
        )}
        <LoginLink to="/login">Already have an account? Login</LoginLink>
      </RegisterContainer>
    </Container>
  );
};

export default Register;