
import Link from "next/link";


const Footer = () => {
    return (
      
    <footer className="w-full border-t border-gray-600 py-4 mt-40">
      <div className="container mx-auto px-4">
        <nav className="flex justify-center space-x-4 text-sm">
          <Link
            href="/footer/imprint"
            className="text-gray-700 hover:text-gray-900 transition-colors"
          >
            Imprint
          </Link>
          <span className="text-gray-400">|</span>
          <Link
            href="/footer/terms"
            className="text-gray-700 hover:text-gray-900  transition-colors"
          >
            Terms 
          </Link>
          <span className="text-gray-400">|</span>
          <Link
            href="/footer/privacy"
            className="text-gray-700 hover:text-gray-900  transition-colors"
          >
            Privacy Policies
          </Link>
          <span className="text-gray-400">|</span>
          <Link
            href="/footer/cookies"
            className="text-gray-700 hover:text-gray-900  transition-colors"
          >
            Cookie Policy
          </Link>
                </nav>
                <p className="text-gray-700 text-center mt-4">© evius life/kompass 2025. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
