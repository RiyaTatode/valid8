import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import your components
import LandingPage from './components/pages/LandingPage';
import Login from './components/Login';
import AdminDashboard from './components/AdminDashboard';
import VerifyCertificate from './components/pages/VerifyCertificate';
import CertificateResult from './components/CertificateResult';
import IssueCertificates from './components/IssueCertificates';
import NotFound from './components/pages/NotFound';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <BrowserRouter>
        <Routes>
          {/* All routes are now public for testing */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/verify" element={<VerifyCertificate />} />
          <Route path="/certificate-result" element={<CertificateResult />} />

          {/* Admin routes are no longer protected */}
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/issue" element={<IssueCertificates />} />
          
          {/* Fallback Route for unknown paths */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;