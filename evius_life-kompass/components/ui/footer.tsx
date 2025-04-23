import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full border-t border-gray-600 py-4 mt-auto"> 
      <div className="w-full px-4">
        <nav className="flex flex-wrap justify-center gap-y-2 gap-x-4 text-xs sm:text-sm">
          <a
            className="text-gray-400 hover:text-gray-300 transition-colors"
            href="/footer/imprint"
          >
            Imprint
          </a>
          <span className="text-gray-500 hidden sm:inline">|</span>
          <a
            className="text-gray-400 hover:text-gray-300 transition-colors"
            href="/footer/terms"
          >
            Terms
          </a>
          <span className="text-gray-500 hidden sm:inline">|</span>
          <a
            className="text-gray-400 hover:text-gray-300 transition-colors"
            href="/footer/privacy"
          >
            Privacy
          </a>
          <span className="text-gray-500 hidden sm:inline">|</span>
          <a
            className="text-gray-400 hover:text-gray-300 transition-colors"
            href="/footer/cookies"
          >
            Cookies
          </a>
        </nav>
        <p className="text-gray-400 text-center mt-4 text-xs sm:text-sm">
          © evius life/kompass 2025
        </p>
      </div>
    </footer>
  );
};

export default Footer;
