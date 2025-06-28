import React from "react";
import { Link } from 'react-router-dom';

// Force left alignment with !important
const styles = `
  .force-left {
    text-align: left !important;
    justify-content: flex-start !important;
    margin-left: 0 !important;
    margin-right: auto !important;
    display: block !important;
    width: 100% !important;
  }
`;

const phases = [
  {
    title: "🔹 Phase 1: Foundation & Stability",
    goal: "Calm the nervous system, stabilize heart rate, and reduce inflammation.",
    duration: "2–4 weeks",
    priority: "Low risk, high benefit, foundational support",
    columns: ["Category", "Intervention", "Notes"],
    rows: [
      ["🧠 Nervous System", "Magnesium glycinate", "200–400 mg nightly"],
      ["🧂 Circulatory Support", "Salt + Hydration", "3–10g/day with water or food"],
      ["🧘 Vagal Tone", "Breathwork + Manual VNS", "Daily 5–10 mins"],
      ["🐟 Anti-inflammatory", "Omega-3 (EPA/DHA)", "Start with 1,000 mg/day"],
      ["☀️ Immune Balance", "Vitamin D3 + K2", "2,000 IU D3 + 100 mcg K2"],
      ["🥚 Nutritional", "Whole-food cholesterol (yolks, butter, coconut oil)", "1–2 servings daily"]
    ],
    tracking: {
      title: "📊 Tracking Focus:",
      items: [
        "Resting HR",
        "Sleep quality",
        "Anxiety/stress episodes",
        "Exercise tolerance"
      ]
    }
  },
  {
    title: "🔸 Phase 2: Autonomic & Gut-Immune Recovery",
    goal: "Deepen parasympathetic regulation, reduce systemic inflammation, and heal gut-heart axis.",
    duration: "3–6 weeks (builds on Phase 1)",
    columns: ["Category", "Intervention", "Notes"],
    rows: [
      ["🧪 Gut/Immune", "High-dose colostrum", "5–10g/day on empty stomach"],
      ["🍍 Inflammation/Repair", "Bromelain", "500–2000 mg/day on empty stomach"],
      ["🧘 Vagal Tone (Advanced)", "Cold face dips + humming", "1–2x/day if tolerated"],
      ["🍃 Herbal Anti-inflammatory", "Turmeric (Curcumin)", "500–1,000 mg/day with pepper"],
      ["🌿 Nervous System", "Ginger (fresh or extract)", "1–2g/day, supports HR and digestion"],
      ["🧄 Vascular/Cholesterol", "Garlic extract", "600–1200 mg/day (aged or allicin)"]
    ],
    tracking: {
      title: "📊 Tracking Focus:",
      items: [
        "HRV (if possible)",
        "Post-meal symptoms",
        "Bloating/inflammation levels",
        "HR spikes in daily stressors"
      ]
    }
  },
  {
    title: "🔺 Phase 3: Targeted Regulation & Resilience",
    goal: "Improve resilience under load (e.g., during exercise), test tolerance for hormetic stress, and fine-tune HR control.",
    duration: "2–4 weeks (can be cyclical or pulsed)",
    columns: ["Category", "Intervention", "Notes"],
    rows: [
      ["🔥 Hormetic Response", "Niacin (flush form)", "Start at 50 mg → build to 200 mg; always with food"],
      ["🔁 Nervous System", "Stim-triggered VNS (e.g., gargling after anxiety trigger)", "On demand"],
      ["💊 Custom Add-ons", "CoQ10, Taurine", "Add based on energy/stamina; 100–200 mg CoQ10, 1–2g taurine"],
      ["💡 Experimental", "New supplement trials (e.g., adaptogens, HRV tools)", "Introduce one at a time, 1-week buffer"]
    ],
    tracking: {
      title: "📊 Tracking Focus:",
      items: [
        "HR recovery after workouts",
        "HR spikes from triggers",
        "Mental energy/mood",
        "Tolerance to heat, exertion, or social stressors"
      ]
    }
  },
  {
    title: "🧠 Optional Phase 4: Maintenance or Pulsed Interventions",
    description: "Once symptoms stabilize:",
    bulletPoints: [
      "Pulse high-dose colostrum or bromelain only during flare-ups",
      "Use niacin or garlic only intermittently",
      "Focus on food-based and nervous system habits",
      "Continue baseline: magnesium, omega-3, vagal exercises, and salt as needed"
    ]
  }
];

const trackingTools = [
  { tool: "HR journal", description: "AM/PM HR, during/after exercise" },
  { tool: "Symptom tracker", description: "Anxiety, digestion, HR spikes, mood" },
  { tool: "Supplement log", description: "Doses, time of day, effects" },
  { tool: "Notes", description: "Any adverse effects or wins" }
];

export default function TieredProtocol() {
  return (
    <div className="p-6 max-w-7xl mx-auto text-gray-800 dark:text-gray-100 space-y-6">
      <style>{styles}</style>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h1 className="text-3xl md:text-4xl font-semibold text-black dark:text-white">
          Tiered Recovery Protocol
        </h1>
        <div className="flex gap-3 w-full sm:w-auto">
          <Link
            to="/mobile-tiered"
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md shadow-sm font-medium transition-colors text-center"
          >
            Mobile View
          </Link>
          <Link
            to="/tiered"
            className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white rounded-md shadow-sm font-medium transition-colors text-center"
          >
            Full View (Current)
          </Link>
        </div>
      </div>
      <div className="pt-4">
      {phases.map((phase, index) => (
        <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 mb-6 overflow-hidden">
          <div className="p-5">
            <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white force-left">
              {phase.title}
            </h2>
            
            {phase.goal && (
              <div className="mb-4">
                <p className="font-medium">Goal:</p>
                <p className="text-gray-700 dark:text-gray-300">{phase.goal}</p>
              </div>
            )}

            {phase.duration && (
              <div className="mb-4">
                <p className="font-medium">Duration: <span className="font-normal">{phase.duration}</span></p>
                {phase.priority && <p className="font-medium">Priority: <span className="font-normal">{phase.priority}</span></p>}
              </div>
            )}

            {phase.description && (
              <div className="mb-4">
                <p className="text-gray-700 dark:text-gray-300">{phase.description}</p>
              </div>
            )}

            {phase.bulletPoints && (
              <ul className="list-disc pl-5 mb-4 space-y-2">
                {phase.bulletPoints.map((point, i) => (
                  <li key={i} className="text-gray-700 dark:text-gray-300">{point}</li>
                ))}
              </ul>
            )}

            {phase.rows && (
              <div className="overflow-x-auto mb-4">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-gray-50 dark:bg-gray-700">
                      {phase.columns.map((col, idx) => (
                        <th 
                          key={idx} 
                          className="border border-gray-200 dark:border-gray-600 px-4 py-3 text-left text-gray-700 dark:text-gray-300 font-medium"
                          style={{ textAlign: 'left' }}
                        >
                          {col}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {phase.rows.map((row, rowIndex) => (
                      <tr 
                        key={rowIndex}
                        className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
                      >
                        {row.map((cell, cellIndex) => (
                          <td 
                            key={cellIndex}
                            className="border border-gray-200 dark:border-gray-600 px-4 py-3 text-left"
                          >
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {phase.tracking && (
              <div className="mt-4 bg-gray-50 dark:bg-gray-700/30 p-4 rounded">
                <h3 className="font-medium mb-2">{phase.tracking.title}</h3>
                <ul className="list-disc pl-5 space-y-1">
                  {phase.tracking.items.map((item, i) => (
                    <li key={i} className="text-gray-700 dark:text-gray-300">{item}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      ))}

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-5">
        <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white force-left">
          📌 Tracking & Adaptation Recommendations
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gray-50 dark:bg-gray-700">
                <th 
                  className="border border-gray-200 dark:border-gray-600 px-4 py-3 text-left text-gray-700 dark:text-gray-300 font-medium"
                  style={{ textAlign: 'left' }}
                >
                  Tracking Tool
                </th>
                <th 
                  className="border border-gray-200 dark:border-gray-600 px-4 py-3 text-left text-gray-700 dark:text-gray-300 font-medium"
                  style={{ textAlign: 'left' }}
                >
                  Suggested Format
                </th>
              </tr>
            </thead>
            <tbody>
              {trackingTools.map((tool, index) => (
                <tr 
                  key={index}
                  className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
                >
                  <td className="border border-gray-200 dark:border-gray-600 px-4 py-3 font-medium">
                    {tool.tool}
                  </td>
                  <td className="border border-gray-200 dark:border-gray-600 px-4 py-3">
                    {tool.description}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      </div>
    </div>
  );
}
