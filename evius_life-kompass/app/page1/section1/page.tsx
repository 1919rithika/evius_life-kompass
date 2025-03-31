"use client";

import Footer from "@/components/ui/footer";
import Link from "next/link";
import { useRouter } from 'next/navigation';

export default function Section1() {
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
        <h1 className="text-3xl font-bold text-center mb-10 text-gray-300">Akute Hilfe</h1>

        <div className="space-y-8 text-gray-300">
          {/* Emergency instruction */}
          <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
            <p className="text-xl">
              Bevor Sie sich oder andere verletzen, rufen Sie den Notarzt (112) oder begeben Sie sich in eine Notaufnahme.
            </p>
          </div>

          {/* Additional help options */}
          <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
            <p className="text-lg">
              Ansonsten hilft Ihnen der Berliner Krisendienst{" "}
              <a href="tel:030-390-63-10" className="text-blue-400 hover:text-blue-300">
                (030 390 63 10)
              </a>{" "}
              (auf Wunsch auch anonym), der Patientenservice{" "}
              <a href="tel:116-117" className="text-blue-400 hover:text-blue-300">
                (116 117)
              </a>{" "}
              oder die nächste psychiatrische Klinik.
            </p>
            <p className="text-sm mt-2 text-gray-400">(c) bempsy</p>
          </div>

          {/* Clinic list section */}
          <div className="mt-8">
            <p className="mb-4">Eine Liste der psychiatrischen Kliniken in Berlin finden Sie hier:</p>
            <Link
              href="/kliniken"
              className="block w-full p-4 text-center bg-gray-800 hover:bg-gray-700 rounded-lg border border-gray-700 transition-colors duration-300"
            >
              Liste psychiatrischer Kliniken
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
} 