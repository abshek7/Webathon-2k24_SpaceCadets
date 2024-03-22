import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const Container = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  text-align: center;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #008489;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', { email, password });
      const { token } = response.data;
      // Store the token in localStorage
      localStorage.setItem('token', token);
      alert('Login successful!');
      // Redirect to homepage after successful login
      window.location.href = '/';
      // Show success message
    } catch (error) {
      console.error(error);
      // Handle login error
    }
  };

  return (
    <Container>
      <Title>Login</Title>
      <form onSubmit={handleLogin}>
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit">Login</Button>
      </form>
    </Container>
  );
};

export default Login;