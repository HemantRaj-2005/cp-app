import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:5000/api/auth/current-user', { credentials: 'include' })
      .then(response => response.json())
      .then(data => {
        if (data) {
          setUser(data);
        }
      })
      .catch(() => {
        setUser(null);
      });
  }, []);

  const login = (userData) => {
    setUser(userData);
    navigate('/dashboard');
  };

  const logout = () => {
    fetch('http://localhost:5000/api/auth/logout', { method: 'POST', credentials: 'include' })
      .then(() => {
        setUser(null);
        navigate('/auth');
      });
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
