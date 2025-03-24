import Link from "next/link";


const Footer = () => {
    return (
      
    <footer className="w-full border-t border-gray-600 py-4 mt-40">
      <div className="container mx-auto px-4">
        <nav className="flex justify-center space-x-4 text-sm">
          <a className="text-gray-400 hover:text-gray-300 transition-colors" href="/footer/imprint">Imprint</a>
          <span className="text-gray-500">|</span>
          <a className="text-gray-400 hover:text-gray-300 transition-colors" href="/footer/terms">Terms</a>
          <span className="text-gray-500">|</span>
          <a className="text-gray-400 hover:text-gray-300 transition-colors" href="/footer/privacy">Privacy Policies</a>
          <span className="text-gray-500">|</span>
          <a className="text-gray-400 hover:text-gray-300 transition-colors" href="/footer/cookies">Cookie Policy</a>
        </nav>
        <p className="text-gray-400 text-center mt-4">© evius life/kompass 2025. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
