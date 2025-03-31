import Footer from "@/components/ui/footer";
import Link from "next/link";
import React from 'react';

export default function Page1() {
  const cards = [
    {
      title: "Alles ist zu viel",
      description: "Ich denke darüber nach, mich oder andere zu verletzen oder mir das Leben zu nehmen. Wo kann ich Unterstützung bekommen?",
      link: "/page1/section1",
    },
    {
      title: "Irgendwas stimmt nicht",
      description: "Ich fühle mich unwohl, angespannt, ausgebrannt, gereizt, beobachtet oder habe das Gefühl, das irgendetwas nicht stimmt. Wo finde ich mehr Informationen?",
      link: "/page1/section2",
    },
    {
      title: "Ich habe eine psychische Erkrankung",
      description: "Ich habe die Diagnose einer psychischen Erkrankung wie z.B. Depression oder Angsterkrankung gestellt bekommen. Wie geht es jetzt weiter?",
      link: "/page1/section3",
    },
    {
      title: "Ich suche Hilfe zu einem bestimmten Thema",
      description: "Es gibt ein bestimmtes Thema, das mich belastet wie zum Beispiel ein Beziehungskonflikt, Diskriminierungs-erfahrungen oder familiäre Probleme. Wer kann mir helfen?",
      link: "/page1/section4",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <div className="container mx-auto px-4 py-8 mt-10 max-w-6xl flex-grow">
        <h1 className="text-2xl font-bold text-center mb-10 text-gray-300">Worum geht es?</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 justify-items-center">
          {cards.map((card, index) => (
            <Link
              key={index}
              href={card.link}
              className="group block bg-gradient-to-br from-gray-900 to-[--background] border border-gray-700 p-8 rounded-3xl shadow-[0_0_15px_rgba(255,255,255,0.05)] hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all duration-300 w-full max-w-md transform hover:-translate-y-1"
            >
              <div className="relative w-full flex items-center justify-center">
                <div className="bg-gray-800 rounded-full p-6 w-48 h-48 flex items-center justify-center text-center">
                  <h3 className="text-xl font-semibold text-gray-300 group-hover:text-gray-200">
                    {card.title}
                  </h3>
                </div>
              </div>
              <p className="text-gray-400 mt-6 text-center group-hover:text-gray-300">
                {card.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
} 