"use client";

import Footer from "@/components/ui/footer";
import { useRouter } from 'next/navigation';
import Link from "next/link";

export default function Severity() {
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
          Ist mein Problem schwer genug?
        </h1>

        <div className="space-y-6 text-gray-300">
          {/* Main message */}
          <div className="bg-gray-800/50 p-4 md:p-6 rounded-lg border border-gray-700">
            <div className="space-y-4">
              <p className="text-base md:text-lg leading-relaxed">
                Grundsätzlich steht Ihnen eine ärztliche oder therapeutische Einschätzung immer zu! Sie müssen sich keine Sorgen machen, wegen eines "zu kleinen Problems" in die Praxis zu kommen.
              </p>
              <p className="text-base md:text-lg leading-relaxed">
                Eine frühzeitige Abklärung und Behandlung kann entscheidend dabei helfen, dass es nicht zu schwereren Problemen kommt und ist daher immer sinnvoll.
              </p>
            </div>
          </div>

          {/* Online Assessment */}
          <div className="bg-gray-800/50 p-4 md:p-6 rounded-lg border border-gray-700">
            <h2 className="text-lg md:text-xl font-semibold mb-4">Online Einschätzung</h2>
            <div className="space-y-4">
              <p className="text-base md:text-lg leading-relaxed">
                Wenn Sie selbst weiter einschätzen wollen, wie schwer Ihre Belastung einzuschätzen ist, können Sie mit einer kurzen Online Auswertung in wenigen Minuten auch noch mehr Informationen bekommen.
              </p>
              
              <div className="mt-6">
                <Link 
                  href="/online-assessment"
                  className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300"
                >
                  Zur online Einschätzung
                </Link>
              </div>
            </div>
          </div>

          <div className="text-sm text-gray-400 mt-4 text-center">
            Denken Sie daran: Kein Problem ist zu klein, um Hilfe zu suchen.
          </div>
        </div>
      </div>
      <div className="mt-6">
        <Footer />
      </div>
    </div>
  );
} 