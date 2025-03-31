"use client";

import Footer from "@/components/ui/footer";
import { useRouter } from 'next/navigation';
import Link from "next/link";

export default function Unsure() {
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
          Bin ich bei Hausärzt*in oder Therapeut*in richtig?
        </h1>

        {/* Question */}
        <div className="bg-gray-800 p-3 md:p-5 lg:p-6 rounded-lg border border-gray-700 mb-6">
          <p className="text-base md:text-lg lg:text-xl leading-relaxed text-gray-300">
            Warum Sind Sie unsicher ob Ihre Hausärzt*in oder eine Therapeut*in die richtige Ansprechperson ist?
          </p>
        </div>

        {/* Concerns list */}
        <div className="space-y-3 md:space-y-4 text-gray-300">
          <Link href="/page1/section2/unsure/anonymous" className="block">
            <div className="bg-gray-800/50 p-3 md:p-5 lg:p-6 rounded-lg border border-gray-700 hover:bg-gray-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg cursor-pointer">
              <p className="text-sm md:text-base lg:text-lg leading-relaxed">
                Ich will lieber anonym bleiben
              </p>
            </div>
          </Link>

          <Link href="/page1/section2/unsure/severity" className="block">
            <div className="bg-gray-800/50 p-3 md:p-5 lg:p-6 rounded-lg border border-gray-700 hover:bg-gray-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg cursor-pointer">
              <p className="text-sm md:text-base lg:text-lg leading-relaxed">
                Ich frage mich, ob mein Problem überhaupt schwer genug ist um mich an eine Ärzt*in oder Therapeut*in zu wenden
              </p>
            </div>
          </Link>

          <Link href="/page1/section2/unsure/privacy" className="block">
            <div className="bg-gray-800/50 p-3 md:p-5 lg:p-6 rounded-lg border border-gray-700 hover:bg-gray-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg cursor-pointer">
              <p className="text-sm md:text-base lg:text-lg leading-relaxed">
                Ich bin unsicher, ob Andere davon erfahren könnten, meine Karriere darunter leiden könnte oder andere Nachteile entstehen könnten
              </p>
            </div>
          </Link>

          <Link href="/page1/section2/unsure/autonomy" className="block">
            <div className="bg-gray-800/50 p-3 md:p-5 lg:p-6 rounded-lg border border-gray-700 hover:bg-gray-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg cursor-pointer">
              <p className="text-sm md:text-base lg:text-lg leading-relaxed">
                Ich habe Angst, dass ich nicht mehr entscheiden kann, wie es weiter geht, wenn ich eine Ärzt*in oder Therapeut*in über meine Sorgen informiert habe
              </p>
            </div>
          </Link>

          <Link href="/page1/section2/unsure/discrimination" className="block">
            <div className="bg-gray-800/50 p-3 md:p-5 lg:p-6 rounded-lg border border-gray-700 hover:bg-gray-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg cursor-pointer">
              <p className="text-sm md:text-base lg:text-lg leading-relaxed">
                Ich habe Sorge, dass mir in der Praxis nicht sensibel begegnet wird oder ich diskriminierendes Verhalten erleben könnte
              </p>
            </div>
          </Link>

          <Link href="/page1/section2/unsure/other" className="block">
            <div className="bg-gray-800/50 p-3 md:p-5 lg:p-6 rounded-lg border border-gray-700 hover:bg-gray-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg cursor-pointer">
              <p className="text-sm md:text-base lg:text-lg leading-relaxed">
                Anderer Grund
              </p>
            </div>
          </Link>
        </div>
      </div>
      <div className="mt-6">
        <Footer />
      </div>
    </div>
  );
} 