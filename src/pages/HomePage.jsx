import React from 'react';
import { useNavigate } from 'react-router-dom';

const sections = [
  { title: 'Full Protocol', description: 'View the complete supplement and lifestyle support plan.', route: '/protocol' },
  { title: 'Evidence-Based Breakdown', description: 'Learn the rationale behind each recommendation.', route: '/evidence' },
  { title: 'Tiered Protocol Plan', description: 'Follow a step-by-step approach.', route: '/tiered' },
  { title: 'How to Use This Guide', description: 'Approach and navigate this guide.', route: '/how-to-use' },
  // { title: 'Products Links', description: 'Helpful products.', route: '/resources' },
];

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex justify-center pt-2">
      <div className="grid max-w-2xl w-full px-4" style={{ gridTemplateRows: 'repeat(auto-fill, 143px)', rowGap: '12px' }}>
        {sections.map((section, idx) => (
          <div
            key={idx}
            className="border p-4 rounded-lg shadow hover:shadow-lg cursor-pointer bg-white dark:bg-gray-800 transition-all duration-200"
            style={{ height: '140px', display: 'flex', flexDirection: 'column' }}
            onClick={() => navigate(section.route)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && navigate(section.route)}
          >
            <h2 className="text-lg font-semibold">{section.title}</h2>
            <div className="mt-2">
              <p className="text-gray-600 dark:text-gray-300">{section.description}</p>
            </div>
            <div className="mt-auto flex justify-end">
              <span className="text-blue-600 dark:text-blue-400 font-medium">View →</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}