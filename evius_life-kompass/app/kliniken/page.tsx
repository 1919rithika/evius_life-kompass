"use client";

import Footer from "@/components/ui/footer";
import { useRouter } from 'next/navigation';

export default function Kliniken() {
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
          Ein Termin bei der Hausärzt*in oder einer Therapeut*in
        </h1>

        <div className="space-y-3 md:space-y-6 lg:space-y-8 text-gray-300">
          {/* First section */}
          <div className="bg-gray-800 p-3 md:p-5 lg:p-6 rounded-lg border border-gray-700">
            <p className="text-base md:text-lg lg:text-xl leading-relaxed">
              Im ersten Schritt wird eine Einschätzung erfolgen, ob bei den beschriebenen Belastungen eine therapeutische Behandlung sinnvoll ist.
            </p>
          </div>

          {/* Second section - Doctor's appointment */}
          <div className="bg-gray-800/50 p-3 md:p-5 lg:p-6 rounded-lg border border-gray-700">
            <p className="text-sm md:text-base lg:text-lg leading-relaxed">
              Hausärzt*innen können diese erste Einschätzung psychischer Belastungen vornehmen. Hierfür sollten Sie nicht zu einer Akutsprechstunde erscheinen, sondern einen Termin ausmachen, damit Ihre Ärzt*in genug Zeit einplant. Um den Termin zu vereinbaren, müssen Sie keine Details zu Ihrer Situation angeben. Sie können zum Beispiel einfach sagen, dass Sie "eine Abklärung wegen psychischer Belastungen" brauchen oder etwas ähnliches.
            </p>
          </div>

          {/* Third section - Psychotherapist appointment */}
          <div className="bg-gray-800/50 p-3 md:p-5 lg:p-6 rounded-lg border border-gray-700">
            <p className="text-sm md:text-base lg:text-lg leading-relaxed">
              Noch ausführlich kann Sie eine Psychotherapeut*in beraten. Hierfür können Sie eine Sprechstunde vereinbaren, am schnellsten geht das über den Terminservice der Kassenärztlichen Vereinigung, das geht online unter
            </p>
            <a 
              href="https://www.116117-termine.de/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-blue-400 hover:text-blue-300 underline break-all inline-block my-2"
            >
              https://www.116117-termine.de/
            </a>
            <p className="text-sm md:text-base lg:text-lg leading-relaxed">
              oder telefonisch unter{" "}
              <a 
                href="tel:116117" 
                className="text-blue-400 hover:text-blue-300 whitespace-nowrap"
              >
                116117
              </a>.
            </p>
          </div>
        </div>
        <div className="mt-6">
          <Footer />
        </div>
      </div>
    </div>
  );
} 