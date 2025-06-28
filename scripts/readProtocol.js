const XLSX = require('xlsx');
const fs = require('fs');
const path = require('path');

// Read the Excel file
const workbook = XLSX.readFile(path.join(__dirname, '../Docs/Protocol.xlsx'));

// Get the first sheet name
const firstSheetName = workbook.SheetNames[0];
const worksheet = workbook.Sheets[firstSheetName];

// Convert to JSON
const data = XLSX.utils.sheet_to_json(worksheet);

// Generate React component
const component = `import React from 'react';

const Protocol = () => {
  const protocolData = ${JSON.stringify(data, null, 2)};

  // Group data by category
  const groupedData = protocolData.reduce((acc, item) => {
    const category = item.Category || 'Uncategorized';
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(item);
    return acc;
  }, {});

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8 text-center">💊 Supplement & Protocol Guide</h1>
      
      {Object.entries(groupedData).map(([category, items]) => (
        <div key={category} className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white border-b pb-2">
            {category}
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {items.map((item, index) => (
              <div 
                key={index} 
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow duration-200"
              >
                <div className="p-5">
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                    {item.Supplement || item['Food/Ingredient'] || item.Method || 'Untitled'}
                  </h3>
                  
                  <div className="space-y-3">
                    {Object.entries(item).map(([key, value]) => {
                      // Skip empty values and the Category field
                      if (!value || key === 'Category') return null;
                      
                      // Skip if the key is the same as the title
                      if (key === 'Supplement' || key === 'Food/Ingredient' || key === 'Method') return null;
                      
                      return (
                        <div key={key} className="border-t border-gray-100 dark:border-gray-700 pt-2">
                          <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                            {key}
                          </h4>
                          <p className="mt-1 text-gray-700 dark:text-gray-300">
                            {value}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
      
      <div className="mt-10 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-800">
        <h3 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">Important Note</h3>
        <p className="text-yellow-700 dark:text-yellow-300">
          This protocol is for informational purposes only and should not replace professional medical advice. 
          Always consult with a qualified healthcare provider before starting any new supplement regimen, 
          especially if you have pre-existing medical conditions or are taking medications.
        </p>
      </div>
    </div>
  );
};

export default Protocol;`;

// Write the component to a file
fs.writeFileSync(
  path.join(__dirname, '../src/pages/Protocol.jsx'),
  component,
  'utf8'
);

console.log('Protocol component has been generated successfully!');
