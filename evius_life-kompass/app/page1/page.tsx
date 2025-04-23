"use client";

import Footer from "@/components/ui/footer";
import Link from "next/link";
import { useState, useMemo, useCallback } from "react";
import React from "react";

interface Question {
  question: string;
  options: string[];
}

// Add general follow-up questions
const generalQuestions: Question[] = [
  {
    question: "Wie lange bestehen diese Gefühle schon?",
    options: [
      "Seit einigen Tagen",
      "Seit mehreren Wochen",
      "Seit einigen Monaten",
      "Seit über einem Jahr",
      "Kommt und geht",
    ],
  },
  {
    question: "Hast du bereits professionelle Hilfe in Anspruch genommen?",
    options: [
      "Ja, regelmäßig",
      "Ja, gelegentlich",
      "Nein, aber ich denke darüber nach",
      "Nein, möchte ich nicht",
      "Unsicher",
    ],
  },
  {
    question:
      "Wie stark fühlst du dich durch deine aktuelle Situation belastet?",
    options: ["Sehr stark", "Stark", "Mittelmäßig", "Leicht", "Kaum spürbar"],
  },
];

// Update questionSets with more specific questions
const questionSets: { [key: string]: Question[] } = {
  Überwältigt: [
    {
      question:
        "Wie oft fühlst du dich von deinen täglichen Aufgaben überfordert?",
      options: [
        "Mehrmals täglich",
        "Täglich",
        "Mehrmals pro Woche",
        "Gelegentlich",
        "Selten",
      ],
    },
    {
      question: "Was löst bei dir am häufigsten Überforderung aus?",
      options: [
        "Arbeit/Studium",
        "Familie/Beziehungen",
        "Finanzielle Sorgen",
        "Gesundheitliche Probleme",
        "Soziale Verpflichtungen",
      ],
    },
    {
      question: "Welche Unterstützung würde dir am meisten helfen?",
      options: [
        "Professionelle Beratung",
        "Gespräche mit Freunden/Familie",
        "Bessere Work-Life-Balance",
        "Stressmanagement-Techniken",
        "Praktische Alltagshilfe",
      ],
    },
  ],
  Ängstlich: [
    {
      question: "In welchen Situationen treten deine Ängste am stärksten auf?",
      options: [
        "Soziale Situationen",
        "Alleine zu Hause",
        "Bei der Arbeit",
        "In der Öffentlichkeit",
        "Bei Konflikten",
      ],
    },
    {
      question: "Wie äußern sich deine Ängste körperlich?",
      options: ["Herzrasen", "Schwitzen", "Zittern", "Atemnot", "Schwindel"],
    },
  ],
  Verloren: [
    {
      question: "Wodurch fühlst du dich orientierungslos?",
      options: [
        "Fehlende Lebensziele",
        "Berufliche Unsicherheit",
        "Beziehungsprobleme",
        "Identitätsfragen",
        "Zukunftsängste",
      ],
    },
  ],
  Depressiv: [
    {
      question:
        "Wie stark beeinträchtigen deine depressiven Gefühle deinen Alltag?",
      options: ["Sehr stark", "Stark", "Mittelmäßig", "Leicht", "Kaum spürbar"],
    },
    {
      question: "Welche Aktivitäten fallen dir besonders schwer?",
      options: [
        "Aufstehen/Morgendliche Routine",
        "Soziale Kontakte pflegen",
        "Arbeit/Studium",
        "Haushalt führen",
        "Hobbys nachgehen",
      ],
    },
  ],
  Gestresst: [
    {
      question:
        "Welche Stressbewältigungsstrategien hast du bereits ausprobiert?",
      options: [
        "Sport/Bewegung",
        "Meditation/Achtsamkeit",
        "Gespräche mit Freunden",
        "Professionelle Hilfe",
        "Keine",
      ],
    },
  ],
};

const OptionButton = React.memo(
  ({
    option,
    isSelected,
    onClick,
  }: {
    option: string;
    isSelected: boolean;
    onClick: () => void;
  }) => (
    <button
      type="button"
      onClick={onClick}
      translate="no"
      className={`p-4 border-1 rounded-lg transition-all duration-100 text-left
      ${
        isSelected
          ? "border-blue-500 bg-blue-500 text-white"
          : "border-gray-600 hover:border-blue-500 hover:bg-blue-500 hover:text-white"
      }`}
    >
      <div className="flex items-center" translate="yes">
        <div
          className={`w-5 h-5 border-2 rounded mr-3 flex items-center justify-center
        ${
          isSelected
            ? "border-white bg-white"
            : "border-gray-600 bg-transparent"
        }`}
        >
          {isSelected && (
            <svg
              className="w-3 h-3 text-blue-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
            </svg>
          )}
        </div>
        <span>{option}</span>
      </div>
    </button>
  )
);

OptionButton.displayName = "OptionButton";

const QuestionContent = React.memo(
  ({
    question,
    options,
    selectedOptions,
    onOptionClick,
  }: {
    question: string;
    options: string[];
    selectedOptions: Set<string>;
    onOptionClick: (option: string) => void;
  }) => (
    <div className="flex-grow flex flex-col items-center justify-center px-2 mt-1 text-gray-100">
      <div className="w-full max-w-3xl">
        <h1
          className="text-2xl sm:text-3xl font-bold mb-4 text-center"
          translate="yes"
        >
          {question}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {options.map((option, index) => (
            <OptionButton
              key={`${option}-${index}`}
              option={option}
              isSelected={selectedOptions.has(option)}
              onClick={() => onOptionClick(option)}
            />
          ))}
        </div>
      </div>
    </div>
  )
);

QuestionContent.displayName = "QuestionContent";

export default function Page1(): React.ReactElement {
  const [state, setState] = useState({
    currentQuestion: 0,
    selectedOptions: new Set<string>(),
    dynamicQuestions: [] as Question[],
    allAnswers: new Map<number, Set<string>>(),
  });

  const initialQuestion: Question = {
    question: "Wie fühlst du dich?",
    options: [
      "Überwältigt",
      "Ängstlich",
      "Depressiv",
      "Gestresst",
      "Verloren",
      "Verwirrt",
      "Angst",
      "Andere​",
    ],
  };

  // Generate dynamic questions based on selected feelings
  const generateDynamicQuestions = useCallback(
    (selectedFeelings: Set<string>): Question[] => {
      const allRelevantQuestions: Question[] = [];
      const usedQuestions = new Set<string>();

      // Add specific questions for each selected feeling
      selectedFeelings.forEach((feeling) => {
        if (questionSets[feeling]) {
          questionSets[feeling].forEach((question) => {
            if (!usedQuestions.has(question.question)) {
              allRelevantQuestions.push(question);
              usedQuestions.add(question.question);
            }
          });
        }
      });

      // Add general questions if we need more
      if (allRelevantQuestions.length < 4) {
        generalQuestions.forEach((question) => {
          if (!usedQuestions.has(question.question)) {
            allRelevantQuestions.push(question);
            usedQuestions.add(question.question);
          }
        });
      }

      // Shuffle the questions to randomize the order
      const shuffledQuestions = [...allRelevantQuestions]
        .sort(() => Math.random() - 0.5)
        .slice(0, 4); // Take only 4 questions (plus the initial question makes 5)

      return shuffledQuestions;
    },
    []
  );

  const handleOptionClick = useCallback((option: string): void => {
    setState((prevState) => {
      const newSelected = new Set(prevState.selectedOptions);
      if (newSelected.has(option)) {
        newSelected.delete(option);
      } else {
        newSelected.add(option);
      }
      return {
        ...prevState,
        selectedOptions: newSelected,
      };
    });
  }, []);

  const handleNext = useCallback((): void => {
    if (state.selectedOptions.size > 0) {
      setState((prevState) => {
        const newState = { ...prevState };
        const newAnswers = new Map(prevState.allAnswers);
        newAnswers.set(
          prevState.currentQuestion,
          new Set(prevState.selectedOptions)
        );

        if (prevState.currentQuestion === 0) {
          const newQuestions = generateDynamicQuestions(
            prevState.selectedOptions
          );
          return {
            ...prevState,
            currentQuestion: 1,
            selectedOptions: new Set(),
            dynamicQuestions: newQuestions,
            allAnswers: newAnswers,
          };
        } else if (prevState.currentQuestion < 5) {
          return {
            ...prevState,
            currentQuestion: prevState.currentQuestion + 1,
            selectedOptions: new Set(),
            allAnswers: newAnswers,
          };
        }
        return prevState;
      });
    }
  }, [state.selectedOptions, generateDynamicQuestions]);

  const handlePrevious = useCallback((): void => {
    if (state.currentQuestion > 0) {
      setState((prevState) => {
        // Save current answers before going back
        const newAnswers = new Map(prevState.allAnswers);
        newAnswers.set(
          prevState.currentQuestion,
          new Set(prevState.selectedOptions)
        );

        const previousQuestion = prevState.currentQuestion - 1;
        // Restore previous answers
        const previousAnswers =
          prevState.allAnswers.get(previousQuestion) || new Set();

        return {
          ...prevState,
          currentQuestion: previousQuestion,
          selectedOptions: new Set(previousAnswers),
          allAnswers: newAnswers,
        };
      });
    }
  }, [state.currentQuestion]);

  // Calculate progress - adjust to show 100% when reaching the last question
  const progress = useMemo(() => {
    // Each question represents 20% of progress (100% / 5 questions)
    const progressPerQuestion = 100 / 5;
    // Calculate current progress
    return Math.min(state.currentQuestion * progressPerQuestion, 100);
  }, [state.currentQuestion]);

  // Progress bar segments
  const segments = useMemo(
    () => (
      <div className="absolute top-0 left-0 right-0 h-full flex">
        {Array.from({ length: 4 }, (_, i) => (
          <div key={i} className="flex-1 flex items-center justify-center">
            <div
              className="w-0.5 h-full bg-white" 
              style={{
                transform: "translateX(-50%)",
              }}
            />
          </div>
        ))}
      </div>
    ),
    []
  );

  const currentQuestionData = useMemo(() => {
    if (state.currentQuestion === 0) {
      return initialQuestion;
    }
    return state.dynamicQuestions[state.currentQuestion - 1] || initialQuestion;
  }, [state.currentQuestion, state.dynamicQuestions]);

  return (
    <div className="min-h-screen flex flex-col relative" translate="no">
      {/* Top Section with SOS and Progress Bar */}
      <div className="relative pt-20 sm:pt-8">
        {/* SOS Button */}
        <Link
          href="/emergency"
          className="absolute top-4 left-4 bg-red-600 hover:bg-red-700 text-white font-bold w-12 h-12 rounded-full shadow-lg transform transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 flex items-center justify-center text-sm z-20"
        >
          <span translate="no">SOS</span>
        </Link>

        {/* Progress Bar */}
        <div className="w-full max-w-xl mx-auto px-4">
          <div className="relative">
            <div className="flex items-center justify-center">
              {/* Starting Circle */}
              <div className="w-12 h-12 sm:w-10 sm:h-10 rounded-full bg-green-500 flex items-center justify-center text-white text-base sm:text-lg font-semibold z-10">
                1
              </div>
              {/* Progress Bar Line */}
              <div className="w-64 sm:w-96 mx-4 relative">
                <div className="h-5 sm:h-4 bg-gray-200 rounded-full overflow-hidden">
                  {/* Progress Fill */}
                  <div
                    className="absolute top-0 left-0 h-full bg-green-500 transition-all duration-300 ease-in-out"
                    style={{ width: `${progress}%` }}
                  />
                  {/* Segments Container */}
                  {segments}
                </div>
              </div>
              {/* Ending Circle */}
              <div className="w-12 h-12 sm:w-10 sm:h-10 rounded-full bg-green-500 flex items-center justify-center text-white text-base sm:text-lg font-semibold z-10">
                5
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Question Content */}
      <QuestionContent
        question={currentQuestionData.question}
        options={currentQuestionData.options}
        selectedOptions={state.selectedOptions}
        onOptionClick={handleOptionClick}
      />

      {/* Navigation Buttons */}
      <div className="w-full max-w-3xl mx-auto p-4 flex justify-between items-center">
        <div className="flex items-center gap-4">
          {state.currentQuestion > 0 && (
            <button
              onClick={handlePrevious}
              type="button"
              className="inline-flex items-center justify-center px-4 py-2 border-1 rounded-lg transition-all duration-200 border-gray-600 hover:border-blue-500 hover:bg-blue-500 hover:text-white"
            >
              <span className="mr-2">←</span>
              <span translate="yes">Previous</span>
            </button>
          )}
          <div className="text-sm text-gray-500" translate="yes">
            {state.selectedOptions.size} option
            {state.selectedOptions.size !== 1 ? "s" : ""} selected
          </div>
        </div>
        <button
          onClick={handleNext}
          type="button"
          className={`inline-flex items-center justify-center px-6 py-2 border-1 rounded-lg transition-all duration-200
            ${
              state.selectedOptions.size > 0
                ? "border-blue-500 bg-blue-500 text-white hover:bg-blue-600"
                : "border-gray-600 text-gray-100 cursor-not-allowed "
            }`}
          disabled={state.selectedOptions.size === 0}
        >
          <span translate="yes" className="mr-2">
            Next
          </span>
          <span>→</span>
        </button>
      </div>
      <Footer />
    </div>
  );
}
