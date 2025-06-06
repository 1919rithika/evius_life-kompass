"use client";

import Footer from "@/components/ui/footer";
import { useRouter } from 'next/navigation';

export default function OtherReasons() {
  const router = useRouter();

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
          Andere Gründe für Ihre Unsicherheit?
        </h1>

        <div className="space-y-6 text-gray-300">
          {/* Introduction */}
          <div className="bg-gray-800/50 p-4 md:p-6 rounded-lg border border-gray-700">
            <p className="text-base md:text-lg leading-relaxed mb-4">
              Es gibt viele verschiedene Gründe, warum man zögern könnte, sich Hilfe zu suchen. Jeder dieser Gründe ist verständlich und verdient es, ernst genommen zu werden.
            </p>
          </div>

          {/* Crisis Service Information */}
          <div className="bg-gray-800/50 p-4 md:p-6 rounded-lg border border-gray-700">
            <h2 className="text-lg md:text-xl font-semibold mb-4">Berliner Krisendienst - Wir sind für Sie da</h2>
            
            <div className="space-y-4">
              <p className="text-base md:text-lg leading-relaxed">
                Der Berliner Krisendienst hilft schnell und qualifiziert bei psychosozialen Krisen bis hin zu akuten seelischen und psychiatrischen Notsituationen.
              </p>

              <div className="space-y-3 mt-4">
                <h3 className="font-medium text-base md:text-lg">Unsere Angebote:</h3>
                <ul className="list-disc list-inside space-y-2 ml-2">
                  <li>Kostenlose Beratung</li>
                  <li>24 Stunden am Tag erreichbar</li>
                  <li>Auf Wunsch anonym</li>
                  <li>Flexible Beratungsformen:
                    <ul className="list-disc list-inside ml-6 mt-2">
                      <li>Telefonisch</li>
                      <li>Persönlich</li>
                      <li>In zugespitzten Situationen vor Ort</li>
                      <li>Videoberatungen nach Terminvergabe</li>
                    </ul>
                  </li>
                  <li>9 Berliner Standorte für persönliche Gespräche</li>
                </ul>
              </div>

              <div className="mt-6 space-y-4">
                <a 
                  href="https://www.berliner-krisendienst.de/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300"
                >
                  Zum Berliner Krisendienst
                </a>
              </div>
            </div>
          </div>

          {/* Encouraging message */}
          <div className="bg-gray-800/50 p-4 md:p-6 rounded-lg border border-gray-700">
            <p className="text-base md:text-lg leading-relaxed text-center">
              Egal was der Grund für Ihre Unsicherheit ist - wir hören Ihnen zu und finden gemeinsam einen Weg.
            </p>
          </div>

          <div className="text-sm text-gray-400 mt-4 text-center">
            (c) Krisendienst
          </div>
        </div>
      </div>
      <div className="mt-6">
        <Footer />
      </div>
    </div>
  );
} 