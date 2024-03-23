import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import axios from 'axios';
import { RiLockPasswordLine, RiMailLine } from 'react-icons/ri';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
 
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const InnerContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 320px;
  width: 100%;
  padding: 40px;
  border-color:black
  background-color: #f0f0f0; /* Light gray background */
  border-radius: 8px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  animation: ${fadeIn} 1s ease; /* Apply fade-in animation */
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
  width: calc(100% - 40px); /* Adjust width to accommodate icon */
  padding: 10px;
  padding-right: 30px; /* Adjust padding to accommodate icon */
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #007bff; /* Focus border color */
  }
`;

const Icon = styled.div`
  position: absolute;
  top: 35%;
  right: 5px; /* Adjust right position */
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  color: #999; /* Adjust icon color */
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

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', { email, password });
      const { token } = response.data;
      localStorage.setItem('token', token);
      alert('Login successful!');
      window.location.href = '/homepage';
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container>
      <InnerContainer>
        <Title>Login</Title>
        <form onSubmit={handleLogin}>
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
          <Button type="submit">Login</Button>
        </form>
      </InnerContainer>
    </Container>
  );
};

export default Login;