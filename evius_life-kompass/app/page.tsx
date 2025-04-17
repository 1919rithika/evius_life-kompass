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
        <div className="w-full max-w-5xl flex flex-col justify-center items-center space-y-32">
          {options.map((option, index) => (
            <div key={index} className="relative group">
              <Link href={option.link} className="relative z-10">
                <div className="w-24 h-24 bg-gray-800 rounded-full flex items-center justify-center transition-all duration-300 hover:ring-4 hover:ring-gray-700">
                  <span className="text-3xl font-bold text-gray-200">
                    {option.letter}
                  </span>
                </div>
              </Link>
              
              {/* Info Panel */}
              <div 
                className={`absolute opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none
                  ${index === 0 ? 'right-full mr-8' : 'left-full ml-8'}
                  top-1/2 -translate-y-1/2 w-80 bg-gray-800 rounded-lg p-6 shadow-xl`}
              >
                <h2 className="text-xl font-bold text-gray-200 mb-3">{option.title}</h2>
                <p className="text-gray-300 text-sm leading-relaxed">{option.description}</p>
                <div className={`absolute top-1/2 -translate-y-1/2 ${index === 0 ? 'right-0 translate-x-1/2' : 'left-0 -translate-x-1/2'}`}>
                  <div className={`w-4 h-4 bg-gray-800 transform rotate-45`}></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}