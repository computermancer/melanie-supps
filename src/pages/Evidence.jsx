const evidenceItems = [
  {
    title: "🧠 Omega-3 Fatty Acids (EPA/DHA)",
    description: "What it does: Omega-3s reduce inflammation and support heart rhythm stability. They also help calm an overactive nervous system.",
    evidence: "Evidence: Meta-analyses support their use for arrhythmia prevention, lowering triglycerides, and improving vagal tone (heart rate variability).",
    bestForm: "Best form: Fish oil in triglyceride form or algae-based if vegan.",
    caution: "Caution: Can thin blood — check with a doctor if on anticoagulants."
  },
  {
    title: "⚡ CoQ10 (Ubiquinol)",
    description: "What it does: Powers your heart's mitochondria (energy generators), helping with endurance, recovery, and stable rhythms.",
    evidence: "Evidence: Used in heart failure and statin-associated fatigue; shown to improve ejection fraction and exercise tolerance.",
    bestForm: "Best form: Ubiquinol (active form), better absorbed than ubiquinone.",
    caution: ""
  },
  {
    title: "💗 Taurine",
    description: "What it does: Helps regulate calcium in heart muscle and promotes stable electrical activity. It's also calming for the brain and nervous system.",
    evidence: "Evidence: Research shows benefits in reducing arrhythmias and supporting blood pressure regulation.",
    bestForm: "",
    caution: ""
  },
  {
    title: "🧲 Magnesium (Glycinate)",
    description: "What it does: Relaxes muscles and nerves, improves sleep, lowers anxiety, and helps regulate heart rate.",
    evidence: "Evidence: Strong evidence for reducing anxiety symptoms and arrhythmic events, especially in deficiency states.",
    bestForm: "Best form: Magnesium glycinate — gentle on the stomach and calming.",
    caution: ""
  },
  {
    title: "🧪 Niacin (Flush Form)",
    description: "What it does: Opens blood vessels (vasodilation), supports cholesterol metabolism, and may act as a mild hormetic stressor to the nervous system.",
    evidence: "Evidence: Shown to improve HDL and support lipid metabolism. The flush mimics and helps desensitize the stress response over time.",
    bestForm: "",
    caution: "Caution: Can cause flushing, heat, or itching. Avoid extended-release unless medically necessary."
  },
  {
    title: "🧂 Salt (Sodium) Intake",
    description: "What it does: Increases blood volume, supports circulation, and stabilizes heart rate in cases of low blood pressure or dysautonomia.",
    evidence: "Evidence: Especially effective in individuals with autonomic dysfunction, POTS, or low resting blood pressure.",
    bestForm: "Best sources: Sea salt, electrolyte powders, broths.",
    caution: ""
  },
  {
    title: "🧘 Vagus Nerve Stimulation",
    description: "What it does: Activates the 'rest and digest' branch of the nervous system, slowing the heart rate and calming the mind.",
    evidence: "Evidence: Shown to reduce systemic inflammation and improve HRV. Manual stimulation (ear massage, gargling, humming) mimics medical vagus nerve stimulation.",
    bestForm: "Practical Tip: Practice slow nasal breathing (e.g., 4-7-8 or 5-5 box breathing) daily.",
    caution: ""
  },
  {
    title: "🍍 Bromelain",
    description: "What it does: A pineapple-derived enzyme that reduces inflammation, breaks down fibrin, and supports circulation.",
    evidence: "Evidence: Used in chronic inflammation, trauma recovery, and fibrotic conditions. May reduce swelling post-surgery or post-infection.",
    bestForm: "",
    caution: "Caution: Thins blood — avoid if on anticoagulants or before surgery."
  },
  {
    title: "🍼 Colostrum",
    description: "What it does: Strengthens the immune system and repairs the gut lining, both of which affect heart health and anxiety.",
    evidence: "Evidence: Rich in growth factors, immunoglobulins, and anti-inflammatory proteins. Beneficial in post-viral recovery.",
    bestForm: "",
    caution: "Caution: Derived from dairy — avoid if allergic or casein-sensitive."
  },
  {
    title: "🌿 Turmeric (Curcumin)",
    description: "What it does: Potent anti-inflammatory and antioxidant, helps reduce systemic inflammation and oxidative stress.",
    evidence: "Evidence: Studies show reductions in CRP and inflammatory cytokines. Also supports gut-brain-heart connection.",
    bestForm: "",
    caution: "Caution: May interact with SSRIs and blood thinners. Avoid if prone to kidney stones or gallbladder issues."
  },
  {
    title: "🌱 Ginger",
    description: "What it does: Supports digestion, circulation, and nervous system regulation. Mildly lowers blood pressure.",
    evidence: "Evidence: Used for nausea, anxiety, and inflammation. Improves peripheral circulation and may reduce HR variability.",
    bestForm: "",
    caution: "Caution: Avoid high doses before surgery; may thin blood slightly."
  },
  {
    title: "🧄 Garlic (Aged or Allicin-form)",
    description: "What it does: Supports heart health, reduces blood pressure, and improves lipid profile.",
    evidence: "Evidence: Meta-analyses show garlic reduces blood pressure, LDL, and C-reactive protein.",
    bestForm: "",
    caution: "Caution: Potentiates anticoagulants and antiplatelet meds."
  }
];

export default function Evidence() {
  // Function to format text with bold labels
  const formatTextWithBoldLabels = (text) => {
    if (!text) return null;
    
    // Split the text at the first colon to separate label from content
    const parts = text.split(':');
    if (parts.length > 1) {
      const label = parts[0] + ':';
      const content = parts.slice(1).join(':');
      
      return (
        <p className="mb-3 text-gray-700 dark:text-gray-300">
          <span className="font-semibold text-gray-900 dark:text-gray-100">{label}</span>
          {content}
        </p>
      );
    }
    
    return <p className="mb-3 text-gray-700 dark:text-gray-300">{text}</p>;
  };

  return (
    <div className="p-6 max-w-7xl mx-auto text-gray-800 dark:text-gray-100 space-y-10">
      <h1 className="text-4xl font-semibold text-black dark:text-white">
        Evidence-Based Supplement & Lifestyle Support Breakdown
      </h1>

      <div className="space-y-6">
        {evidenceItems.map((item, index) => (
          <div 
            key={index} 
            className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 mb-6"
          >
            <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white">
              {item.title}
            </h2>
            <div className="space-y-4">
            
            {formatTextWithBoldLabels(item.description)}
            
            {formatTextWithBoldLabels(item.evidence)}
            
            {item.bestForm && formatTextWithBoldLabels(item.bestForm)}
            
            {item.caution && (
              <div className="mt-5 p-4 bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 dark:border-red-400 rounded-r">
                <p className="text-red-700 dark:text-red-300 font-medium">
                  {item.caution}
                </p>
              </div>
            )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}