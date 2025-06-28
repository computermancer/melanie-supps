import React, { useState } from "react";
import { Link } from 'react-router-dom';

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
      ["🧂 Electrolyte Support", "Magnesium + Potassium", "From food or supplements as needed"]
    ],
    tracking: {
      title: "📊 Tracking Focus:",
      items: [
        "HRV (if tracking)",
        "Gut symptoms",
        "Inflammation markers (if available)",
        "Exercise tolerance"
      ]
    }
  },
  {
    title: "🔺 Phase 3: Advanced Repair & Optimization",
    goal: "Tissue repair, mitochondrial support, and resilience building.",
    duration: "4+ weeks (after Phases 1–2)",
    columns: ["Category", "Intervention", "Notes"],
    rows: [
      ["🔋 Mitochondrial", "CoQ10 (Ubiquinol)", "100–200 mg/day"],
      ["🧬 Cellular Repair", "Taurine", "1–3 g/day"],
      ["🩸 Circulation", "Garlic (Allicin)", "600–1200 mg/day"],
      ["🔄 Detox Support", "NAC or Glutathione", "As needed for detox support"],
      ["⚡ Energy Support", "B-Complex or Nutritional Yeast", "As needed for energy"]
    ],
    tracking: {
      title: "📊 Tracking Focus:",
      items: [
        "Exercise capacity",
        "Recovery time",
        "Energy levels",
        "Overall well-being"
      ]
    }
  }
];

export default function MobileFriendlyTieredProtocol() {
  const [expandedPhase, setExpandedPhase] = useState(null);

  const togglePhase = (index) => {
    setExpandedPhase(expandedPhase === index ? null : index);
  };

  return (
    <div className="p-4 max-w-7xl mx-auto text-gray-800 dark:text-gray-100 space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h1 className="text-3xl md:text-4xl font-semibold text-black dark:text-white">
          Tiered Recovery Protocol
        </h1>
        <div className="flex gap-3 w-full sm:w-auto">
          <Link
            to="/mobile-tiered"
            className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white rounded-md shadow-sm font-medium transition-colors text-center"
          >
            Mobile View (Current)
          </Link>
          <Link
            to="/tiered"
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md shadow-sm font-medium transition-colors text-center"
          >
            Full View
          </Link>
        </div>
      </div>
      <div className="pt-4 space-y-6">
        {phases.map((phase, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
            <button
              onClick={() => togglePhase(index)}
              className="w-full text-left p-4 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
            >
              <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
                {phase.title}
              </h2>
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="text-sm bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 px-2 py-1 rounded">
                  {phase.duration}
                </span>
                <span className="text-sm bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 px-2 py-1 rounded">
                  {phase.priority}
                </span>
              </div>
            </button>

            {expandedPhase === index && (
              <div className="p-4 space-y-4 border-t border-gray-200 dark:border-gray-700">
                <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg">
                  <h3 className="font-medium text-blue-800 dark:text-blue-200 mb-1">Goal:</h3>
                  <p className="text-blue-700 dark:text-blue-300">{phase.goal}</p>
                </div>

                <div className="space-y-3">
                  <h3 className="font-medium text-gray-700 dark:text-gray-300">Interventions:</h3>
                  <div className="space-y-2">
                    {phase.rows.map((row, rowIndex) => (
                      <div key={rowIndex} className="p-3 bg-gray-50 dark:bg-gray-700/30 rounded-lg">
                        <div className="font-medium text-gray-900 dark:text-white">{row[1]}</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">{row[0]}</div>
                        {row[2] && (
                          <div className="mt-1 text-sm text-gray-700 dark:text-gray-300">
                            {row[2]}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {phase.tracking && (
                  <div className="mt-4 p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                    <h3 className="font-medium text-purple-800 dark:text-purple-200 mb-2">
                      {phase.tracking.title}
                    </h3>
                    <ul className="list-disc list-inside space-y-1">
                      {phase.tracking.items.map((item, i) => (
                        <li key={i} className="text-purple-700 dark:text-purple-300">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
