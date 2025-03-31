"use client";

import Footer from "@/components/ui/footer";
import { useRouter } from 'next/navigation';

export default function NoInsurance() {
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
          Behandlungsmöglichkeiten ohne Krankenversicherung
        </h1>

        {/* Organizations */}
        <div className="space-y-6 text-gray-300">
          {/* MediBüro */}
          <div className="bg-gray-800/50 p-4 md:p-6 rounded-lg border border-gray-700">
            <h2 className="text-lg md:text-xl font-semibold mb-3">MediBüro Berlin – Netzwerk für das Recht auf Gesundheitsversorgung aller Migrant*innen</h2>
            <div className="space-y-2">
              <p>Gneisenaustraße 2a, 10961 Berlin</p>
              <p>Tel.: +49 30 6946746</p>
              <div className="flex flex-col md:flex-row md:space-x-2">
                <a href="mailto:info@medibuero.de" className="text-emerald-400 hover:text-emerald-300 break-all">info@medibuero.de</a>
                <a href="http://www.medibuero.de" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:text-emerald-300">http://www.medibuero.de</a>
              </div>
            </div>
          </div>

          {/* open-med-Ambulanz */}
          <div className="bg-gray-800/50 p-4 md:p-6 rounded-lg border border-gray-700">
            <h2 className="text-lg md:text-xl font-semibold mb-3">open-med-Ambulanz Steglitz-Zehlendorf</h2>
            <div className="space-y-2">
              <p>Teltower Damm 8a, 14169 Berlin</p>
              <p className="font-medium">Allgemeinmedizinische Sprechzeiten:</p>
              <ul className="list-disc list-inside ml-4">
                <li>dienstags 16:00 – 18:00</li>
                <li>donnerstags 13:00 – 18:00</li>
              </ul>
              <p className="font-medium">Sprechzeiten für Kinder:</p>
              <p>Mo und Di nach Vereinbarung</p>
              <p className="font-medium">Psychiatrische und psychotherapeutische Versorgung:</p>
              <p>nach Terminvereinbarung</p>
              <p>Tel.: +49 176 63152094</p>
              <p>Telefonisch erreichbar: montags bis donnerstags von 11:00 Uhr bis 17 Uhr</p>
              <div className="flex flex-col md:flex-row md:space-x-2">
                <a href="mailto:info@medizin-hilft.org" className="text-emerald-400 hover:text-emerald-300">info@medizin-hilft.org</a>
                <a href="http://www.medizin-hilft.org" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:text-emerald-300">www.medizin-hilft.org</a>
              </div>
            </div>
          </div>

          {/* open.med Berlin-Lichtenberg */}
          <div className="bg-gray-800/50 p-4 md:p-6 rounded-lg border border-gray-700">
            <h2 className="text-lg md:text-xl font-semibold mb-3">open.med Berlin-Lichtenberg</h2>
            <div className="space-y-2">
              <p>Projektträger: Ärzte der Welt e.V.</p>
              <p>Irenenstraße 20, 10317 Berlin</p>
              <p className="font-medium">Öffnungszeiten: Allgemeinmedizinische Sprechstunde für Erwachsene:</p>
              <ul className="list-disc list-inside ml-4">
                <li>Montag: 11-15 Uhr</li>
                <li>Mittwoch: 14-18 Uhr</li>
              </ul>
              <p>Tel.: +49 30 206069600</p>
              <div className="flex flex-col md:flex-row md:space-x-2">
                <a href="https://www.aerztederwelt.org/wem-wir-beistehen/hilfe-fuer-patientinnen#berlin" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:text-emerald-300 break-all">https://www.aerztederwelt.org/wem-wir-beistehen/hilfe-fuer-patientinnen#berlin</a>
              </div>
              <a href="mailto:open.med-berlin@aerztederwelt.org" className="text-emerald-400 hover:text-emerald-300">E-Mail: open.med-berlin@aerztederwelt.org</a>
            </div>
          </div>

          <div className="text-sm text-gray-400 mt-4">
            (c) Medibüro
          </div>
        </div>
      </div>
      <div className="mt-6">
        <Footer />
      </div>
    </div>
  );
} 