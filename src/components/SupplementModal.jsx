import React, { useEffect } from 'react';

const SupplementModal = ({ isOpen, onClose, supplement }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || !supplement) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 flex items-start justify-center p-4 pt-20 z-50 overflow-y-auto"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl w-full max-w-md max-h-[80vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
              {supplement[0]}
            </h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <div className="space-y-4">
            {supplement.map((value, index) => (
              index > 0 && (
                <div key={index} className="border-b border-gray-200 dark:border-gray-700 pb-3">
                  <h3 className="font-semibold text-gray-700 dark:text-gray-300">
                    {supplement.columns && supplement.columns[index]}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {value}
                  </p>
                </div>
              )
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupplementModal;
