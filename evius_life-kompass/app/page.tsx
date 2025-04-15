import Footer from "@/components/ui/footer";
import Link from "next/link";

export default function Home() {
  const options = [
    {
      letter: "M",
      title: "Mich selbst",
      description:
        "Ich fühle mich belastet und möchte mich über Möglichkeiten zur Unterstützung informieren.",
      link: "/page1",
    },
    {
      letter: "P",
      title: "Person im Umfeld",
      description:
        "Jemandem in meinem Umfeld geht es nicht gut und ich möchte mich über Möglichkeiten zur Unterstützung informieren.",
      link: "/page2",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col relative">
      {/* SOS Button */}
      <Link
        href="/emergency"
        className="absolute top-4 left-4 bg-red-600 hover:bg-red-700 text-white font-bold w-12 h-12 rounded-full shadow-lg transform transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 flex items-center justify-center text-sm"
      >
        SOS
      </Link>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 flex-grow flex flex-col items-center justify-center">
        <div className="w-full max-w-3xl flex flex-col items-center space-y-16">
          {options.map((option, index) => (
            <Link
              key={index}
              href={option.link}
              className="group relative"
            >
              <div className="w-32 h-32 bg-gray-800 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-150 group-hover:w-96 group-hover:h-96">
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h2 className="text-2xl font-bold text-gray-200 mb-4">{option.title}</h2>
                  <p className="text-gray-300 text-center text-sm">{option.description}</p>
                </div>
                <span className="text-4xl font-bold text-gray-200 group-hover:opacity-0 transition-opacity duration-300">
                  {option.letter}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}