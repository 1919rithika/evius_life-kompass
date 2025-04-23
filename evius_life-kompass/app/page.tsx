"use client";

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
    <div className="min-h-screen flex flex-col relative max-w-full overflow-x-hidden">
      {/* SOS Button */}
      <Link href="/emergency">
        <div className="absolute top-4 left-4 bg-red-600 hover:bg-red-700 text-white font-bold w-10 h-10 rounded-full shadow-lg flex items-center justify-center text-sm">
          SOS
        </div>
      </Link>

      {/* CENTERED MAIN CONTENT */}
      <div className="flex-grow flex items-center justify-center px-4 py-12 sm:py-20">
        <div className="flex flex-col items-center justify-center space-y-8 sm:space-y-15">
          {options.map((option, index) => (
            <div
              key={index}
              className="relative group flex flex-col items-center"
            >
              {/* Circle */}
              <Link href={option.link}>
                <div className="relative z-10 w-24 h-24 bg-gray-800 rounded-full flex items-center justify-center transition-all duration-300 hover:ring-4 hover:ring-gray-700"></div>
              </Link>

              {/* Tooltip (absolute) */}
              <div
                className={`absolute opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none
                  ${index === 0 ? "right-full mr-8" : "left-full ml-8"}
                  top-1/2 -translate-y-1/2 w-80 bg-gray-800 rounded-lg p-6 shadow-xl`}
              >
                <h2
                  suppressHydrationWarning
                  className="text-xl font-bold text-gray-200 mb-3"
                >
                  {option.title}
                </h2>
                <p
                  suppressHydrationWarning
                  className="text-gray-300 text-sm leading-relaxed"
                >
                  {option.description}
                </p>
                <div
                  className={`absolute top-1/2 -translate-y-1/2 ${
                    index === 0
                      ? "right-0 translate-x-1/2"
                      : "left-0 -translate-x-1/2"
                  }`}
                >
                  <div className="w-4 h-4 bg-gray-800 transform rotate-45" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
