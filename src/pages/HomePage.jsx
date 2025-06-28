import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DisclaimerModal from './DisclaimerModal';

const sections = [
  { title: 'Full Protocol', description: 'View the complete supplement and lifestyle support plan.', route: '/protocol' },
  { title: 'Evidence-Based Breakdown', description: 'Learn the rationale behind each recommendation.', route: '/evidence' },
  { title: 'Tiered Protocol Plan', description: 'Follow a step-by-step approach.', route: '/tiered' },
  { title: 'How to Use This Guide', description: 'Approach and navigate this guide.', route: '/how-to-use' },
 // { title: 'Products Links', description: 'Helpful products.', route: '/resources' },
];

export default function HomePage() {
  const navigate = useNavigate();
  const [showDisclaimer, setShowDisclaimer] = useState(false);

  useEffect(() => {
    // Check if user has agreed to the disclaimer within the last 24 hours
    const checkDisclaimerStatus = () => {
      const lastAgreed = localStorage.getItem('disclaimerAgreedTimestamp');
      const now = Date.now();
      const twentyFourHours = 24 * 60 * 60 * 1000; // 24 hours in milliseconds
      
      // Show disclaimer if never agreed or if more than 24 hours have passed
      if (!lastAgreed || (now - parseInt(lastAgreed, 10)) > twentyFourHours) {
        setShowDisclaimer(true);
      }
    };

    checkDisclaimerStatus();
  }, []);

  const handleAgree = () => {
    // Store the current timestamp when user agrees
    localStorage.setItem('disclaimerAgreedTimestamp', Date.now().toString());
    setShowDisclaimer(false);
  };

  return (
    <>
      <div className="min-h-screen flex justify-center pt-2">
        <div className="grid max-w-2xl w-full px-4" style={{ gridTemplateRows: 'repeat(auto-fill, 143px)', rowGap: '12px' }}>
          {sections.map((section, idx) => (
            <div
              key={idx}
              className="border p-4 rounded-lg shadow hover:shadow-lg cursor-pointer bg-white dark:bg-gray-800 transition-all duration-200" style={{ height: '140px', display: 'flex', flexDirection: 'column' }}
              onClick={() => navigate(section.route)}
            >
              <h2 className="text-lg font-semibold">{section.title}</h2>
              <div className="mt-2">
                <p className="text-sm text-gray-600 dark:text-gray-300">{section.description}</p>
              </div>
            </div>
          ))}
          
          {/* Disclaimer Card */}
          <div 
            className="border p-4 rounded-lg shadow hover:shadow-lg cursor-pointer bg-white dark:bg-gray-800 transition-all duration-200" 
            style={{ height: '140px', display: 'flex', flexDirection: 'column' }}
            onClick={() => setShowDisclaimer(true)}
          >
            <h2 className="text-lg font-semibold">Disclaimer</h2>
            <div className="mt-2">
              <p className="text-sm text-gray-600 dark:text-gray-300">Review important safety and usage information</p>
            </div>
          </div>
        </div>
      </div>
      
      <DisclaimerModal 
        isOpen={showDisclaimer} 
        onAgree={handleAgree}
      />
    </>
  );
}