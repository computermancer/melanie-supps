import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Protocol from './pages/Protocol';
import MobileFriendlyProtocol from './pages/MobileFriendlyProtocol';
import Evidence from './pages/Evidence';
import TieredProtocol from './pages/TieredProtocol';
import MobileFriendlyTieredProtocol from './pages/MobileFriendlyTieredProtocol';
import HowToUse from './pages/HowToUse';
import Resources from './pages/Resources';
import Disclaimer from './pages/Disclaimer';

// This component handles client-side routing fallback
function RouteFallback() {
  const location = useLocation();
  const navigate = useNavigate();
  
  useEffect(() => {
    // If we land on a 404, redirect to home
    if (location.pathname !== '/') {
      navigate('/', { replace: true });
    }
  }, [location, navigate]);
  
  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="text-center p-6 max-w-md mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Page Not Found</h2>
        <p className="mb-6">The page you're looking for doesn't exist or has been moved.</p>
        <Link 
          to="/" 
          className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors inline-block"
        >
          Go to Home
        </Link>
      </div>
    </div>
  );
}

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <header className="p-4 shadow-md">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <Link 
              to="/" 
              className="px-6 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-700 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors shadow-sm text-lg font-semibold"
            >
              Support Guide
            </Link>
            <button
              className="px-6 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-700 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors shadow-sm flex items-center"
              onClick={() => setDarkMode(!darkMode)}
            >
              {darkMode ? (
                <>
                  <span className="mr-2">☀️</span>
                  <span>Light Mode</span>
                </>
              ) : (
                <>
                  <span className="mr-2">🌙</span>
                  <span>Dark Mode</span>
                </>
              )}
            </button>
          </div>
        </header>
        <main className="p-4">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/protocol" element={<MobileFriendlyProtocol />} />
            <Route path="/protocol/full" element={<Protocol />} />
            <Route path="/evidence" element={<Evidence />} />
            <Route path="/tiered" element={<MobileFriendlyTieredProtocol />} />
            <Route path="/tiered/full" element={<TieredProtocol />} />
            <Route path="/how-to-use" element={<HowToUse />} />
            <Route path="/disclaimer" element={<Disclaimer />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="*" element={<RouteFallback />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}