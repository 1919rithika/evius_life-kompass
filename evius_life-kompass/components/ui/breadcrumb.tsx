"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Breadcrumb = () => {
  const path = usePathname(); // Get the current path

  // Break the current path into smaller pieces and filter out unwanted parts
  const parts = path
    .split("/")
    .filter((part) => part && part !== "footer"); // Exclude "footer"

  return (
    <nav className="shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <ul className="flex items-center space-x-2 text-sm">
          {/* Always show the "Dashboard" link */}
          <li className="border-b border-gray-600">
            <Link
              href="/"
              className="text-gray-400 hover:text-gray-300 transition-colors"
            >
              Dashboard
            </Link>
          </li>
          {/* Render breadcrumb parts */}
          {parts.map((part, i) => (
            <li key={i} className="flex items-center">
              <span className="mx-2 text-gray-500">/</span>
              {i === parts.length - 1 ? (
                <span className="text-gray-400 capitalize">{part}</span> // Last part, not a link
              ) : (
                <Link
                  href={`/${parts.slice(0, i + 1).join("/")}`}
                  className="text-gray-400 hover:text-gray-300 transition-colors capitalize"
                >
                  {part}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Breadcrumb;
