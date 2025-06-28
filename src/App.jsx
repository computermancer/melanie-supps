import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Protocol from './pages/Protocol';
import MobileFriendlyProtocol from './pages/MobileFriendlyProtocol';
import Evidence from './pages/Evidence';
import TieredProtocol from './pages/TieredProtocol';
import MobileFriendlyTieredProtocol from './pages/MobileFriendlyTieredProtocol';
import Disclaimer from './pages/Disclaimer';
import HowToUse from './pages/HowToUse';
import Resources from './pages/Resources';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  
  // Version check and force reload logic
  useEffect(() => {
    const currentVersion = '1.0.1'; // Update this with each deployment
    const lastVersion = localStorage.getItem('appVersion');
    
    if (lastVersion !== currentVersion) {
      // Clear all caches
      if ('caches' in window) {
        caches.keys().then((cacheNames) => {
          cacheNames.forEach((cacheName) => {
            caches.delete(cacheName);
          });
        });
      }
      
      // Update the stored version
      localStorage.setItem('appVersion', currentVersion);
      
      // Force reload to get fresh assets
      window.location.reload(true);
    }
  }, []);

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
            <Route path="/protocol" element={<Protocol />} />
            <Route path="/evidence" element={<Evidence />} />
            <Route path="/tiered" element={<TieredProtocol />} />
            <Route path="/mobile-tiered" element={<MobileFriendlyTieredProtocol />} />
            <Route path="/mobile-protocol" element={<MobileFriendlyProtocol />} />
            <Route path="/disclaimer" element={<Disclaimer />} />
            <Route path="/how-to-use" element={<HowToUse />} />
            <Route path="/resources" element={<Resources />} />
            {/* Catch all other routes and redirect to home */}
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}