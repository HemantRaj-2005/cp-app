// src/components/auth/RegisterForm.jsx
import React, { useState } from 'react';
import Input from '../common/Input';
import PasswordInput from '../common/PasswordInput';
import { AiFillGoogleCircle } from 'react-icons/ai';
import Button from '../common/Button';


const RegisterForm = ({ toggleForm }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [dob, setDob] = useState('');
  const [institute, setInstitute] = useState('');
  const [countryCode, setCountryCode] = useState('+1'); // Default country code

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your registration logic here
  };

  const handleGoogleLogin = () => {
    // Add your Google login logic here
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-xl font-bold">Sign Up</h2>
      <Input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
      <Input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <PasswordInput placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <PasswordInput placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
      <div className="flex space-x-2">
        <select
          value={countryCode}
          onChange={(e) => setCountryCode(e.target.value)}
          className="w-1/4 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 text-black"
        >
          <option value="+91">+91 (India)</option>
          <option value="+1">+1 (USA)</option>
          <option value="+44">+44 (UK)</option>
          <option value="+81">+81 (Japan)</option>
          <option value="+61">+61 (Australia)</option>
          {/* Add more country codes as needed */}
        </select>
        <Input type="tel" placeholder="Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)} className="w-3/4" />
      </div>
      <Input type="date" placeholder="Date of Birth" value={dob} onChange={(e) => setDob(e.target.value)} />
      <Input type="text" placeholder="Institute Name" value={institute} onChange={(e) => setInstitute(e.target.value)} />
      <Button type="submit">Sign Up</Button>
      <Button type="button" onClick={handleGoogleLogin}>
        <AiFillGoogleCircle className='w-6 h-6 mr-2' />
        Sign Up with Google
      </Button>
      <p className="mt-2 text-sm">
        Already have an account? <span className="text-blue-500 cursor-pointer" onClick={toggleForm}>Login</span>
      </p>
    </form>
  );
};

export default RegisterForm;
