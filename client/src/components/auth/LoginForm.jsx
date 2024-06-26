// src/components/auth/LoginForm.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../common/Input';
import PasswordInput from '../common/PasswordInput';
import Button from '../common/Button';
import { AiFillGoogleCircle } from 'react-icons/ai';
import axios from 'axios';

const LoginForm = ({ toggleForm }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', {
        email,
        password,
      });

      // Handle successful login
      localStorage.setItem('token', response.data.token);
      console.log('Login successful:', response.data);

      // Redirect to the dashboard
      navigate('/dashboard');
    } catch (error) {
      setError('Login failed');
      console.error('Login failed:', error);
    }
  };

  const handleGoogleLogin = () => {
    // Add your Google login logic here
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-xl font-bold">Login</h2>
      {error && <p className="text-red-500">{error}</p>}
      <Input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <PasswordInput placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <Button type="submit">Login</Button>
      <Button type="button" onClick={handleGoogleLogin}>
        <AiFillGoogleCircle className='w-6 h-6 mr-2' />
        Login with Google
      </Button>
      <p className="mt-2 text-sm">
        Don't have an account? <span className="text-blue-500 cursor-pointer" onClick={toggleForm}>Sign Up</span>
      </p>
    </form>
  );
};

export default LoginForm;
