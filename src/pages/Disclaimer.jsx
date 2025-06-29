import React from 'react';
import { Link } from 'react-router-dom';

export default function Disclaimer() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-6">
        <h1 className="text-3xl font-bold mb-6 text-center">Disclaimer</h1>
        
        <div className="prose dark:prose-invert max-w-none">
          <p className="mb-4">
            The information provided in this guide is for educational and informational purposes only and is not intended as medical advice. The content is not meant to be a substitute for professional medical advice, diagnosis, or treatment.
          </p>
          
          <h2 className="text-xl font-semibold mt-6 mb-3">Important Considerations:</h2>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.</li>
            <li>Never disregard professional medical advice or delay in seeking it because of something you have read in this guide.</li>
            <li>If you think you may have a medical emergency, call your doctor or emergency services immediately.</li>
            <li>Reliance on any information provided in this guide is solely at your own risk.</li>
          </ul>

          <h2 className="text-xl font-semibold mt-6 mb-3">Supplement Information:</h2>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>Dietary supplements are not intended to diagnose, treat, cure, or prevent any disease.</li>
            <li>The statements made about specific products have not been evaluated by the Food and Drug Administration.</li>
            <li>Individual results may vary, and the effectiveness of supplements has not been confirmed by FDA-approved research.</li>
          </ul>

          <p className="mb-4">
            By using this guide, you acknowledge that you have read and understand this disclaimer and that you are using the information provided at your own risk.
          </p>
        </div>

        <div className="mt-8 text-center">
          <Link 
            to="/" 
            className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors inline-block"
          >
            I understand and agree
          </Link>
        </div>
      </div>
    </div>
  );
}
