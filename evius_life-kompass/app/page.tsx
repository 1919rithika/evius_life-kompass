import Footer from "@/components/ui/footer";
import Link from "next/link";

export default function Home() {
  // Sample data for the cards
  const cards = [
    {
      title: "Mich selbst",
      description:
        "Ich fühle mich belastet und möchte mich über Möglichkeiten zur Unterstützung informieren.",
      link: "/page1",
    },
    {
      title: "Person im Umfeld",
      description:
        "Jemandem in meinem Umfeld geht es nicht gut und ich möchte mich über Möglichkeiten zur Unterstützung informieren.",
      link: "/page2",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Content Wrapper */}
      <div className="container mx-auto px-4 py-8 mt-10 max-w-6xl flex-grow">
        <h1 className="text-2xl font-bold text-center mb-10 text-gray-300">Um wen geht es?</h1>

        {/* Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 justify-items-center">
          {cards.map((card, index) => (
            <Link
              key={index}
              href={card.link}
              className="group block bg-gradient-to-br from-gray-900 to-[--background] border border-gray-700 p-8 rounded-3xl shadow-[0_0_15px_rgba(255,255,255,0.05)] hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all duration-300 w-full max-w-md transform hover:-translate-y-1"
            >
              <div className="relative w-full h-40 flex items-center justify-center">
                {/* Removed the colored gradient overlay */}
              </div>
              <h3 className="text-xl font-semibold mt-4 text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                {card.title}
              </h3>
              <p className="text-gray-400 mt-2 group-hover:text-gray-300 transition-colors duration-300">{card.description}</p>
            </Link>
          ))}
        </div>
      </div>

      {/* Footer at the bottom */}
      <Footer />
    </div>
  );
}