import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import your components
import LandingPage from './components/pages/LandingPage';
import Login from './components/pages/Signin';
import Dashboard from './components/pages/Dashboard';
import VerifyCertificate from './components/pages/VerifyCertificate';
// import CertificateResult from './components/CertificateResult';
import IssueCertificates from './components/sections/IssueCertificates';
import NotFound from './components/pages/NotFound';
import History from './components/sections/History'
import Alerts from './components/sections/Alerts';
import Settings from './components/sections/Settings';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <BrowserRouter>
        <Routes>
          {/* All routes are now public for testing */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/signin" element={<Login />} />
          <Route path="/verify" element={<VerifyCertificate />} />
          {/* <Route path="/certificate-result" element={<CertificateResult />} /> */}

          {/* Admin routes are no longer protected */}
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/issue" element={<IssueCertificates />} />
          <Route path="/admin/history" element={<History />} />
          <Route path='/admin/alerts' element={<Alerts />} />.
            <Route path='/admin/settings' element={<Settings />} />.
          {/* Fallback Route for unknown paths */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;