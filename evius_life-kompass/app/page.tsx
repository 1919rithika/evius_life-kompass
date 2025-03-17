import Image from "next/image";
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
        <h1 className="text-2xl font-bold text-center mb-6">Um wen geht es?</h1>

        {/* Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 justify-items-center">
          {cards.map((card, index) => (
            <Link
              key={index}
              href={card.link}
              className=" block bg-white p-4 rounded-3xl shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative w-full h-40"></div>
              <h3 className="text-lg font-semibold mt-4 group-hover:text-blue-600">
                {card.title}
              </h3>
              <p className="text-gray-600">{card.description}</p>
            </Link>
          ))}
        </div>
      </div>

      {/* Footer at the bottom */}
      <Footer />
    </div>
  );
}
