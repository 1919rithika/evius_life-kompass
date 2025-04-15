"use client";

import Footer from "@/components/ui/footer";
import Link from "next/link";
import { useState } from "react";
import React from 'react';

interface Question {
  question: string;
  options: string[];
}

export default function Page1(): React.ReactElement {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState<Set<string>>(new Set());
  
  const questions: Question[] = [
    {
      question: "Wie fühlst du dich?",
      options: [
        "Überwältigt",
        "Ängstlich",
        "Depressiv",
        "Gestresst",
        "Verloren",
        "Verwirrt",
        "Angst",
        "Andere​"
      ]
    },
    // Add more questions here
  ];

  const totalQuestions = questions.length;

  const handleOptionClick = (option: string): void => {
    setSelectedOptions(prev => {
      const newSelected = new Set(prev);
      if (newSelected.has(option)) {
        newSelected.delete(option);
      } else {
        newSelected.add(option);
      }
      return newSelected;
    });
  };

  const handleNext = (): void => {
    if (selectedOptions.size > 0 && currentQuestion < totalQuestions - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOptions(new Set());
    }
  };

  const segments = Array.from({ length: 7 }, (_, i) => (
    <div key={i} className="w-1 h-full bg-white" />
  ));

  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Top Section with SOS and Progress Bar */}
      <div className="relative pt-20 sm:pt-8"> {/* Added padding-top for mobile */}
        {/* SOS Button */}
        <Link
          href="/emergency"
          className="absolute top-4 left-4 bg-red-600 hover:bg-red-700 text-white font-bold w-12 h-12 rounded-full shadow-lg transform transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 flex items-center justify-center text-sm z-20"
        >
          SOS
        </Link>

        {/* Progress Bar */}
        <div className="w-full max-w-xl mx-auto px-4"> {/* Reduced max-width from 3xl to xl */}
          <div className="relative">
            {/* Circle and Line Progress */}
            <div className="flex items-center justify-center"> {/* Added justify-center */}
              {/* Starting Circle */}
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-blue-500 flex items-center justify-center text-white text-base sm:text-lg font-semibold z-10">
                1
              </div>
              {/* Progress Bar Line */}
              <div className="w-48 sm:w-64 mx-2 relative"> {/* Fixed width instead of flex-1 */}
                {/* Background Line */}
                <div className="h-5 sm:h-6 bg-gray-200 rounded-full"> {/* Increased height */}
                  {/* Progress Fill */}
                  <div 
                    className="h-full bg-blue-500 rounded-full transition-all duration-300 ease-in-out"
                    style={{ width: `${(currentQuestion / totalQuestions) * 100}%` }}
                  ></div>
                </div>
                {/* Segments */}
                <div className="absolute top-0 left-0 right-0 h-5 sm:h-6 flex justify-between px-2"> {/* Matched height */}
                  {segments}
                </div>
              </div>
              {/* Ending Circle */}
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-4 sm:border-4 border-gray-300 flex items-center justify-center text-gray-500 text-base sm:text-lg font-semibold z-10">
                7
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Question Content */}
      <div className="flex-grow flex flex-col items-center justify-center px-4 mt-8">
        <div className="w-full max-w-2xl">
          <h1 className="text-2xl sm:text-3xl font-bold mb-8 text-center">
            {questions[currentQuestion].question}
          </h1>

          {/* Options Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                className={`p-4 border-2 rounded-lg transition-all duration-200 text-left
                  ${selectedOptions.has(option) 
                    ? 'border-blue-500 bg-blue-500 text-white' 
                    : 'border-gray-300 hover:border-blue-500 hover:bg-blue-500 hover:text-white'}`}
                onClick={() => handleOptionClick(option)}
              >
                <div className="flex items-center">
                  <div className={`w-5 h-5 border-2 rounded mr-3 flex items-center justify-center
                    ${selectedOptions.has(option)
                      ? 'border-white bg-white'
                      : 'border-gray-400 bg-transparent'}`}
                  >
                    {selectedOptions.has(option) && (
                      <svg className="w-3 h-3 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                      </svg>
                    )}
                  </div>
                  {option}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="w-full max-w-3xl mx-auto p-4 flex justify-between items-center">
        <div className="text-sm text-gray-500">
          {selectedOptions.size} option{selectedOptions.size !== 1 ? 's' : ''} selected
        </div>
        <button
          onClick={handleNext}
          className={`inline-flex items-center justify-center px-6 py-2 border-2 rounded-lg transition-all duration-200
            ${selectedOptions.size > 0 
              ? 'border-blue-500 bg-blue-500 text-white hover:bg-blue-600' 
              : 'border-gray-300 text-gray-400 cursor-not-allowed'}`}
          disabled={selectedOptions.size === 0}
        >
          <span className="mr-2">Next</span>
          <span>→</span>
        </button>
      </div>

      {/* Footer at the bottom */}
      <Footer />
    </div>
  );
}