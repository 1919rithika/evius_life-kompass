// components/Questionnaire.tsx
"use client";

import React, { useState, useMemo, useCallback } from "react";
import Footer from "@/components/ui/footer";
import Link from "next/link";

interface Question {
  question: string;
  options: string[];
}

interface QuestionnaireProps {
  initialQuestion: Question;
  questionSets: { [key: string]: Question[] };
  generalQuestions: Question[];
}

export default function Questionnaire({
  initialQuestion,
  questionSets,
  generalQuestions,
}: QuestionnaireProps) {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [answers, setAnswers] = useState<{ [key: string]: string }>({});

  const handleOptionChange = useCallback(
    (question: string, option: string) => {
      setAnswers((prev) => ({
        ...prev,
        [question]: option,
      }));
    },
    []
  );

  const dynamicQuestions = useMemo(() => {
    if (selectedOption && questionSets[selectedOption]) {
      return questionSets[selectedOption];
    }
    return [];
  }, [selectedOption, questionSets]);

  return (
    <main className="min-h-screen flex flex-col items-center justify-between p-4 md:p-24 bg-gradient-to-br from-[#f5f5f5] to-[#e0e0e0] text-gray-800">
      <div className="w-full max-w-3xl space-y-10">
        <section className="bg-white p-6 rounded-2xl shadow-md space-y-4">
          <h2 className="text-2xl font-semibold">{initialQuestion.question}</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {initialQuestion.options.map((option) => (
              <button
                key={option}
                onClick={() => setSelectedOption(option)}
                className={`p-3 rounded-xl border ${
                  selectedOption === option
                    ? "bg-blue-500 text-white"
                    : "bg-white hover:bg-gray-100"
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </section>

        {selectedOption && (
          <>
            {[...(questionSets[selectedOption] || []), ...generalQuestions].map(
              (q, idx) => (
                <section
                  key={idx}
                  className="bg-white p-6 rounded-2xl shadow-md space-y-4"
                >
                  <h3 className="text-lg font-medium">{q.question}</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {q.options.map((option) => (
                      <button
                        key={option}
                        onClick={() => handleOptionChange(q.question, option)}
                        className={`p-2 rounded-xl border ${
                          answers[q.question] === option
                            ? "bg-blue-500 text-white"
                            : "bg-white hover:bg-gray-100"
                        }`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </section>
              )
            )}
            <div className="flex justify-end">
              <Link href="/result">
                <button className="mt-4 bg-blue-600 text-white py-2 px-6 rounded-xl hover:bg-blue-700 transition">
                  Weiter
                </button>
              </Link>
            </div>
          </>
        )}
      </div>
      <Footer />
    </main>
  );
}
