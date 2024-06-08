import React, { useState } from 'react';
import LoginForm from '../components/auth/LoginForm';
import RegisterForm from '../components/auth/RegisterForm';
import logo from '../assets/logo.png';

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-950 text-white">
      <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-6xl">
        <div className="flex flex-col items-center justify-center p-8 md:p-0 md:w-1/2">
          <img src={logo} alt="SkillCrafter Logo" className="w-20 h-20 mb-4 cursor-pointer" onClick={() => window.location.href = '/'} />
          <h1 className="text-3xl font-bold mb-4">Welcome to
            <span className='px-2 py-1 bg-gradient-to-r from-purple-900 via-indigo-900 to-gray-950 rounded-lg text-white shadow-2xl transition-transform hover:scale-105' >
              SkillCrafter
            </span>
          </h1>
          <p className="text-lg">Craft your skills with us and ace your coding journey!</p>
        </div>
        <div className="bg-gradient-to-r from-slate-950 via-cyan-950 to-zinc-950 p-8 rounded-lg shadow-lg w-full md:w-1/2">
          {isLogin ? <LoginForm toggleForm={toggleForm} /> : <RegisterForm toggleForm={toggleForm} />}
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
