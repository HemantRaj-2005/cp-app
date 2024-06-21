import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Discuss from './pages/Discuss';
import Problems from './pages/Problems';
import ProblemDetailPage from './pages/ProblemDetailPage';
import NotFound from './pages/NotFound';
import Contests from './pages/Contests';
import Interview from './pages/Interview';
import AuthPage from './pages/AuthPage';
import { AuthProvider } from './context/AuthContext';

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <div className="min-h-screen bg-gray-100">
          <Navbar />
          <main className="container mx-auto p-4">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/problems" element={<Problems />} />
              <Route path="/problems/:id" element={<ProblemDetailPage />} />
              <Route path="/discuss" element={<Discuss />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/auth" element={<AuthPage />} />
              <Route path="/contests" element={<Contests />} />
              <Route path="/interview" element={<Interview />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
        </div>
      </AuthProvider>
    </Router>
  );
};

export default App;
