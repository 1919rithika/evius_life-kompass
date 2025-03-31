"use client";

import Footer from "@/components/ui/footer";
import { useRouter } from 'next/navigation';
import Link from "next/link";

export default function Psychotherapy() {
  const router = useRouter();

  const topics = [
    {
      title: "Was ist Psychotherapie?",
      href: "/page1/section3/treatment-options/psychotherapy/what-is",
    },
    {
      title: "Wer bietet Psychotherapie an?",
      href: "/page1/section3/treatment-options/psychotherapy/providers",
    },
    {
      title: "Welche Verfahren gibt es?",
      href: "/page1/section3/treatment-options/psychotherapy/methods",
    },
    {
      title: "Wer trägt die Kosten für eine Therapie?",
      href: "/page1/section3/treatment-options/psychotherapy/costs",
    },
    {
      title: "Wie bekomme ich einen Therapieplatz?",
      href: "/page1/section3/treatment-options/psychotherapy/finding-therapy",
    },
    {
      title: "Welche Rechte habe ich als Patient*in?",
      href: "/page1/section3/treatment-options/psychotherapy/patient-rights",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <div className="container mx-auto px-3 md:px-4 py-3 md:py-8 mt-2 md:mt-10 max-w-4xl flex-grow">
        {/* Back button */}
        <button 
          onClick={() => router.back()}
          className="inline-flex items-center text-gray-300 hover:text-gray-100 mb-4 md:mb-8 text-sm md:text-base"
        >
          <svg className="w-4 h-4 md:w-6 md:h-6 mr-1 md:mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Zurück
        </button>

        {/* Main content */}
        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-8 lg:mb-10 text-gray-300 px-2">
          Psychotherapie
        </h1>

        <div className="space-y-6 text-gray-300">
          {/* Introduction */}
          <div className="bg-gray-800/50 p-4 md:p-6 rounded-lg border border-gray-700">
            <p className="text-base md:text-lg leading-relaxed">
              Hier finden Sie weiter Informationen zu Psychotherapie im allgemeinen, dazu wer Psychotherapie anbietet, welche Verfahren es gibt, wer die Kosten trägt und wie Sie einen Platz bekommen.
            </p>
          </div>

          {/* Topics */}
          <div className="grid gap-4 md:gap-6">
            {topics.map((topic, index) => (
              <Link 
                key={index}
                href={topic.href}
                className="block bg-gray-800/50 p-4 md:p-6 rounded-lg border border-gray-700 hover:bg-gray-700/50 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex items-center justify-between">
                  <h2 className="text-lg md:text-xl font-semibold">{topic.title}</h2>
                  <svg 
                    className="w-6 h-6 text-emerald-400" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M9 5l7 7-7 7" 
                    />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-6">
        <Footer />
      </div>
    </div>
  );
} 