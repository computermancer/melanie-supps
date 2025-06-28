import React from "react";

export default function HowToUse() {
  return (
    <div className="p-4 max-w-2xl mx-auto w-full">
      <h1 className="text-2xl font-semibold mb-6">How to Use This Guide</h1>

      <div className="grid gap-4">
        <div className="border p-4 rounded shadow hover:shadow-lg bg-white dark:bg-gray-800 transition-all duration-200 cursor-pointer">
          <h2 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Welcome</h2>
          <ul className="space-y-2 text-gray-600 dark:text-gray-300">
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>This guide was created to help you explore ways to support your body's natural ability to heal, regulate, and restore balance.</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>It's not a treatment plan, but a set of optional tools, nutritional ideas, and lifestyle practices grounded in research and client experience.</span>
            </li>
          </ul>
        </div>

        <div className="border p-4 rounded shadow hover:shadow-lg bg-white dark:bg-gray-800 transition-all duration-200 cursor-pointer">
          <h2 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">What's Inside</h2>
          <ul className="space-y-2 text-gray-600 dark:text-gray-300">
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Tiered supplement plans to follow at your own pace</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Research-backed explanations for each item</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Nervous system and lifestyle practices</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Cautions, interactions, and safety notes</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Optional experiments and food strategies</span>
            </li>
          </ul>
        </div>

        <div className="border p-4 rounded shadow hover:shadow-lg bg-white dark:bg-gray-800 transition-all duration-200 cursor-pointer">
          <h2 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">How to Get the Most Out of It</h2>
          <ul className="space-y-2 text-gray-600 dark:text-gray-300">
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Start small — try one or two changes at a time</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Track your responses (energy, HR, mood, anxiety)</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Adjust based on your body's feedback</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Don't force anything; go with what feels supportive</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Discuss any changes with your healthcare provider</span>
            </li>
          </ul>
        </div>

        <div className="border p-4 rounded shadow hover:shadow-lg bg-white dark:bg-gray-800 transition-all duration-200 cursor-pointer">
          <h2 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Your Role</h2>
          <ul className="space-y-2 text-gray-600 dark:text-gray-300">
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>This is your toolkit — not a rulebook.</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>You're in the driver's seat, and this guide is here to help you make informed, confident choices for your health.</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}