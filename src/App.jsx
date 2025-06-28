import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, useLocation, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Protocol from './pages/Protocol';
import MobileFriendlyProtocol from './pages/MobileFriendlyProtocol';
import Evidence from './pages/Evidence';
import TieredProtocol from './pages/TieredProtocol';
import MobileFriendlyTieredProtocol from './pages/MobileFriendlyTieredProtocol';
import Disclaimer from './pages/Disclaimer';
import HowToUse from './pages/HowToUse';
import Resources from './pages/Resources';
import DisclaimerModal from './pages/DisclaimerModal';

// Component to check disclaimer status
const DisclaimerCheck = ({ children }) => {
  const location = useLocation();
  const [showDisclaimer, setShowDisclaimer] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkDisclaimerStatus = () => {
      const lastAgreed = localStorage.getItem('disclaimerAgreedTimestamp');
      const now = Date.now();
      const twentyFourHours = 24 * 60 * 60 * 1000; // 24 hours in milliseconds
      
      // Show disclaimer if never agreed or if more than 24 hours have passed
      if (!lastAgreed || (now - parseInt(lastAgreed, 10)) > twentyFourHours) {
        setShowDisclaimer(true);
      }
      setIsLoading(false);
    };

    checkDisclaimerStatus();
  }, []);

  const handleAgree = () => {
    // Store the current timestamp when user agrees
    localStorage.setItem('disclaimerAgreedTimestamp', Date.now().toString());
    setShowDisclaimer(false);
  };

  if (isLoading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  if (showDisclaimer) {
    return <DisclaimerModal isOpen={true} onAgree={handleAgree} />;
  }

  return children;
};

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const location = useLocation();
  
  // Version check and force reload logic
  useEffect(() => {
    const currentVersion = '1.0.3'; // Incremented version
    const lastVersion = localStorage.getItem('appVersion');
    
    const clearCaches = async () => {
      try {
        if ('caches' in window) {
          const cacheNames = await caches.keys();
          await Promise.all(cacheNames.map(cacheName => caches.delete(cacheName)));
          console.log('Caches cleared');
        }
        
        // Clear specific local storage items
        localStorage.removeItem('disclaimerAgreedTimestamp');
        
        // Update the stored version
        localStorage.setItem('appVersion', currentVersion);
        
        // Force reload to get fresh assets
        window.location.href = '/';
      } catch (error) {
        console.error('Error clearing caches:', error);
      }
    };
    
    if (lastVersion !== currentVersion) {
      console.log(`Updating from version ${lastVersion} to ${currentVersion}`);
      clearCaches();
    }
  }, []);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <DisclaimerCheck>
          <>
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
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </main>
          </>
        </DisclaimerCheck>
      </div>
    </div>
  );
}