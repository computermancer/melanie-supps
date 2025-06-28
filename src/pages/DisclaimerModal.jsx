import React, { useEffect, useRef } from 'react';

const DisclaimerModal = ({ isOpen, onAgree }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    // Prevent scrolling when modal is open
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup function
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-2 bg-black bg-opacity-50 flex items-start justify-center p-4 pt-20 z-50"
      onClick={(e) => {
        // Close modal when clicking outside the content
        if (e.target === modalRef.current) {
          onAgree();
        }
      }}
      ref={modalRef}
    >
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-2xl w-full max-h-[70vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex items-center mb-4">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white">📜 Important Notice</h2>
          </div>
          
          <div className="prose dark:prose-invert max-w-none">
            <p className="mb-4">
              <strong>The following information is provided for educational and informational purposes only.</strong>
            </p>
            <p className="mb-4">
              Mateo Bravo is not a licensed medical professional, physician, or registered dietitian. Mateo Bravo does not diagnose, treat, cure, or prevent any disease or medical condition.
            </p>
            <p className="mb-4">
              The nutritional and lifestyle suggestions presented in this guide are optional strategies intended to support your body's foundational systems — such as immune function, cardiovascular regulation, and nervous system balance. These suggestions are based on available research and client-centered experimentation, but they are not a substitute for medical advice.
            </p>
            <p className="mb-6">
              Before starting any new supplement, dietary plan, or lifestyle change, please consult with your primary care physician or relevant healthcare provider, especially if you are pregnant, breastfeeding, taking prescription medication (including blood thinners, SSRIs, or cardiovascular drugs), or have an existing medical condition.
            </p>
            <p className="mb-6">
              Your participation in this guide is entirely voluntary, and any decisions you make about using the suggestions provided here are your own responsibility.
            </p>
          </div>

          <div className="flex justify-end mt-6">
            <button
              onClick={onAgree}
              className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
              autoFocus
            >
              I Understand and Agree
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisclaimerModal;
