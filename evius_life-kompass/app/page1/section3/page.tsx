"use client";

import Footer from "@/components/ui/footer";
import Link from "next/link";
import { useRouter } from 'next/navigation';

export default function Section3() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col">
      <div className="container mx-auto px-4 py-8 mt-10 max-w-4xl flex-grow">
        {/* Back button */}
        <button 
          onClick={() => router.back()}
          className="inline-flex items-center text-gray-300 hover:text-gray-100 mb-8"
        >
          <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Zurück
        </button>

        {/* Main content */}
        <h1 className="text-3xl font-bold text-center mb-10 text-gray-300">Was folgt nach einer Diagnose</h1>

        <div className="space-y-8 text-gray-300">
          {/* Main information */}
          <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
            <p className="text-xl">
              Nach der Diagnose einer psychischen Erkrankung können verschiedene Fragen auftreten, hier finden Sie Informationen zu einigen Themenbereichen.
            </p>
          </div>

          {/* Additional sections as clickable buttons */}
          <div className="space-y-4">
            <Link
              href="/page1/section3/treatment-options"
              className="block w-full p-6 text-left bg-gray-800/50 hover:bg-gray-700 rounded-lg border border-gray-700 transition-colors duration-300"
            >
              <h2 className="text-xl font-semibold">Welche Möglichkeiten der Behandlung gibt es?</h2>
            </Link>

            <Link
              href="/page1/section3/work-capability"
              className="block w-full p-6 text-left bg-gray-800/50 hover:bg-gray-700 rounded-lg border border-gray-700 transition-colors duration-300"
            >
              <h2 className="text-xl font-semibold">Welche Möglichkeiten gibt es, wenn ich mich nicht arbeitsfähig fühle?</h2>
            </Link>

            <Link
              href="/page1/section3/recovery"
              className="block w-full p-6 text-left bg-gray-800/50 hover:bg-gray-700 rounded-lg border border-gray-700 transition-colors duration-300"
            >
              <h2 className="text-xl font-semibold">Werden meine Beschwerden wieder besser?</h2>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
} 