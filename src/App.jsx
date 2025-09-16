import React, { useState } from 'react';
import LandingPage from './components/LandingPage';
import Login from './components/Login';
import AdminDashboard from './components/AdminDashboard';
import VerifyCertificate from './components/VerifyCertificate';
import CertificateResult from './components/CertificateResult';
import IssueCertificates from './components/IssueCertificates';

function App() {
  const [currentView, setCurrentView] = useState('landing');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [certificateData, setCertificateData] = useState(null);

  const handleLogin = () => {
    setIsAuthenticated(true);
    setCurrentView('dashboard');
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setCurrentView('landing');
  };

  const handleVerification = (data) => {
    setCertificateData(data);
    setCurrentView('certificateResult');
  };

  const handleNavigate = (view) => {
    setCurrentView(view);
  };

  const renderView = () => {
    switch(currentView) {
      case 'landing':
        return <LandingPage onNavigate={handleNavigate} />;
      case 'login':
        return <Login onLogin={handleLogin} onBack={() => setCurrentView('landing')} />;
      case 'dashboard':
        return <AdminDashboard onLogout={handleLogout} onChangeView={setCurrentView} />;
      case 'verify':
        return <VerifyCertificate onVerification={handleVerification} onBack={() => setCurrentView('dashboard')} />;
      case 'certificateResult':
        return <CertificateResult data={certificateData} onBack={() => setCurrentView('verify')} />;
      case 'issue':
        return <IssueCertificates onBack={() => setCurrentView('dashboard')} />;
      default:
        return <LandingPage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {renderView()}
    </div>
  );
}

export default App;