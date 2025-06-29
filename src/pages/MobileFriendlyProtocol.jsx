import React, { useState } from "react";
import SupplementModal from "../components/SupplementModal";

const dataSections = [
  {
    title: "🧠 Core Cardiovascular & Nervous System Support",
    columns: ["Supplement", "Benefits", "Typical Dosage", "Key Notes", "Contraindications"],
    rows: [
      ["Omega-3 (EPA/DHA)", "Anti-inflammatory, stabilizes heart rhythm", "1–3 g/day (EPA + DHA)", "Use triglyceride form", "May enhance effect of blood thinners"],
      ["CoQ10 (Ubiquinol)", "Supports cardiac mitochondrial function", "100–200 mg/day", "Vital post-statin or pericarditis", "Rare mild GI upset"],
      ["Taurine", "Regulates calcium, heart rhythm, calming", "500–2,000 mg/day", "May reduce HR and improve relaxation", "Low concern; synergistic with magnesium"],
      ["Magnesium Glycinate", "Calming, reduces palpitations, supports vagal tone", "200–400 mg/day", "Glycinate form minimizes GI side effects", "Caution in severe renal impairment"],
      ["Vitamin D3", "Immune modulation, hormonal balance", "Limit to 2000 IU/day", "Use blood tests to guide dosing", "Excessive intake → calcium overload"],
      ["Vitamin K2 (MK-7)", "Directs calcium to bones, not arteries", "90–200 mcg/day", "Works with D3 to prevent calcification", "Avoid with warfarin (interferes with INR)"],
      ["Niacin (Flush form)", "Vasodilator, supports lipid metabolism", "Start at 50–100 mg with food", "May cause flushing sensation", "Avoid extended-release in liver disease"]
    ]
  },
  {
    title: "🦠 Anti-Inflammatory & Gut-Immune Axis",
    columns: ["Supplement", "Benefits", "Typical Dosage", "Key Notes", "Contraindications"],
    rows: [
      ["High-Dose Colostrum", "Gut healing, immune modulation, PRPs", "5–10 g/day", "Best in powdered form on empty stomach", "Dairy-sensitive individuals may react"],
      ["Bromelain", "Proteolytic enzyme, reduces fibrosis & edema", "500–2,000 mg/day", "Take on empty stomach for systemic effect", "Avoid with anticoagulants or ulcers"],
      ["Turmeric (Curcumin)", "Potent anti-inflammatory, antioxidant", "500–2,000 mg/day (with black pepper or liposomal)", "Enhances cardiac and gut recovery", "Avoid with blood thinners, gallstones, SSRIs (high doses)"],
      ["Ginger", "Anti-nausea, vasodilator, circulation booster", "1–2 g/day", "Supports digestion and HR calming", "Can mildly thin blood; avoid pre-surgery"],
      ["Garlic (Allicin-form)", "Cardioprotective, antimicrobial, vasodilator", "600–1,200 mg/day", "Use aged or stabilized form to reduce odor", "Potentiates blood thinners, may lower BP"]
    ]
  },
  {
    title: "🧘‍♂️ Autonomic Nervous System Reset",
    columns: ["Method", "Purpose", "Protocol", "Notes"],
    rows: [
      ["Breathwork (resonance or 4-7-8)", "Raise vagal tone, calm HR", "5–10 min/day", "Can track HRV as feedback"],
      ["Manual Vagus Nerve Stimulation", "Parasympathetic activation", "Ear massage, neck stroking, gargling, humming", "Easy daily routine, no equipment"],
      ["Cold water facial immersion", "Acute vagal stimulus", "Face dunk 10–30 sec", "Good for resetting during anxiety or HR spikes"],
      ["Salt & Hydration", "Maintain blood volume, stabilize HR", "3–10g sodium/day depending on need", "Best paired with minerals (Mg, K)"],
      ["Niacin flush", "Mild hormetic stress + vagal response", "Begin with 50 mg niacin", "Can mimic anxiety initially, but desensitizes over time"]
    ]
  },
  {
    title: "🥚 Nutritional & Dietary Support",
    columns: ["Food/Ingredient", "Role", "Key Benefits", "Notes"],
    rows: [
      ["Egg yolks", "Cholesterol, choline, B vitamins", "Hormone production, cell membrane repair", "Especially valuable post-inflammation"],
      ["Coconut oil, pasture butter, lard, tallow", "Saturated fats for stability and hormone support", "Good energy source, supports mitochondrial health", "Use with balanced fats (include MUFAs/PUFAs)"],
      ["Garlic, turmeric, ginger (as foods)", "Anti-inflammatory & vasodilatory", "Work synergistically in diet", "Rotate fresh/raw/cooked forms for diversity"]
    ]
  },
  {
    title: "🚨 Drug Interaction / Contraindication Matrix",
    columns: ["Compound", "May Interact With", "Risk / Caution"],
    rows: [
      ["Turmeric", "SSRIs, anticoagulants (warfarin), gallbladder meds", "Serotonin syndrome risk (high dose), bleeding risk"],
      ["Garlic", "Anticoagulants, antiplatelet drugs", "Increased bleeding time, especially with aspirin/warfarin"],
      ["Bromelain", "NSAIDs, antibiotics, anticoagulants", "May enhance absorption/effects, bleeding risk"],
      ["K2", "Warfarin", "Strongly interferes with INR regulation"],
      ["Magnesium", "Certain antibiotics (quinolones, tetracyclines)", "Space out by 2+ hrs"],
      ["Niacin", "Statins, antihypertensives", "May intensify flushing, liver load, or BP drop"],
      ["Colostrum", "Immunosuppressants, dairy allergy", "Potential immune stimulation or allergic reaction"]
    ]
  }
];

import { Link } from 'react-router-dom';

export default function Protocol() {
  const [selectedSupplement, setSelectedSupplement] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSupplementClick = (supplement, section) => {
    // Add section columns to the supplement data for display in modal
    const supplementWithColumns = [...supplement];
    supplementWithColumns.columns = section.columns;
    setSelectedSupplement(supplementWithColumns);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedSupplement(null);
  };

  return (
    <div className="p-10 max-w-7xl mx-auto text-gray-800 dark:text-gray-100 space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h1 className="text-3xl md:text-4xl font-semibold text-black dark:text-white">
          Comprehensive Nutrient & Supplement Protocol
        </h1>
        <div className="flex gap-3 w-full sm:w-auto">
          <Link
            to="/protocol"
            className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white rounded-md shadow-sm font-medium transition-colors text-center"
          >
            Mobile View (Current)
          </Link>
          <Link
            to="/protocol/full"
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md shadow-sm font-medium transition-colors text-center"
          >
            Full View
          </Link>

        </div>
      </div>
      <div className="pt-4">

      {dataSections.map((section, index) => (
        <div key={index} className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
            {section.title}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {section.rows.map((row, rowIndex) => (
              <button
                key={rowIndex}
                onClick={() => handleSupplementClick(row, section)}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-4 text-left hover:shadow-md transition-shadow"
              >
                <h3 className="font-semibold text-lg text-gray-800 dark:text-white mb-2">
                  {row[0]}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2">
                  {row[1]} {/* Show the benefits as a preview */}
                </p>
              </button>
            ))}
          </div>
        </div>
      ))}

      <SupplementModal 
        isOpen={isModalOpen} 
        onClose={closeModal} 
        supplement={selectedSupplement} 
      />
      </div>
    </div>
  );
}