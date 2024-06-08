// src/components/auth/LoginForm.jsx
import React, { useState } from 'react';
import Input from '../common/Input';
import PasswordInput from '../common/PasswordInput';
import Button from '../common/Button';

const LoginForm = ({ toggleForm }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here
  };

  const handleGoogleLogin = () => {
    // Add your Google login logic here
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-xl font-bold">Login</h2>
      <Input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <PasswordInput placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <Button type="submit">Login</Button>
      <Button type="button" onClick={handleGoogleLogin}>Login with Google</Button>
      <p className="mt-2 text-sm">
        Don't have an account? <span className="text-blue-500 cursor-pointer" onClick={toggleForm}>Sign Up</span>
      </p>
    </form>
  );
};

export default LoginForm;
