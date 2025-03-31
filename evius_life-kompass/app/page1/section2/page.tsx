"use client";

import Footer from "@/components/ui/footer";
import Link from "next/link";
import { useRouter } from 'next/navigation';

export default function Section2() {
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
        <h1 className="text-3xl font-bold text-center mb-10 text-gray-300">Irgendetwas stimmt nicht</h1>

        <div className="space-y-8 text-gray-300">
          {/* Main information */}
          <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
            <p className="text-xl">
              Eine qualifizierte Einschätzung der Situation kann von Ärzt*innen oder Psychotherapeut*innen getroffen werden. Hierfür kannst du entweder einen Termin bei deiner Hausärzt*in oder eine Sprechstunde bei einer Psychotherapeut*in vereinbaren.
            </p>
          </div>

          {/* Additional sections as clickable buttons */}
          <div className="space-y-4">
            <Link
              href="/page1/section2/how-it-works"
              className="block w-full p-6 text-left bg-gray-800/50 hover:bg-gray-700 rounded-lg border border-gray-700 transition-colors duration-300"
            >
              <h2 className="text-xl font-semibold">Wie funktioniert das?</h2>
            </Link>

            <Link
              href="/page1/section2/unsure"
              className="block w-full p-6 text-left bg-gray-800/50 hover:bg-gray-700 rounded-lg border border-gray-700 transition-colors duration-300"
            >
              <h2 className="text-xl font-semibold">Ich bin unsicher, ob ich mich wirklich an eine Ärzt*in oder Therapeut*in wenden soll</h2>
            </Link>

            <Link
              href="/page1/section2/no-insurance"
              className="block w-full p-6 text-left bg-gray-800/50 hover:bg-gray-700 rounded-lg border border-gray-700 transition-colors duration-300"
            >
              <h2 className="text-xl font-semibold">Ich habe keine Krankenversicherung und kann einen Termin nicht bezahlen</h2>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
} 