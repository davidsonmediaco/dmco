import { useState, useEffect } from "react";
import { Link } from "wouter";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll event to add shadow to header when scrolled
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-gradient-to-b from-black/80 to-black/40 backdrop-blur-sm' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-heading font-extrabold text-[#D4AF37] drop-shadow-lg tracking-wide" style={{ letterSpacing: '0.03em' }}>Davidson Media Co</Link>
        
        {/* Mobile menu button */}
        <button 
          onClick={toggleMenu}
          className="lg:hidden text-[#D4AF37] focus:outline-none drop-shadow-md"
          aria-label="Toggle menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
        
        {/* Desktop navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          <a href="#work" className="text-[#D4AF37] hover:text-white transition-colors font-bold drop-shadow-md">Work</a>
          <a href="#services" className="text-[#D4AF37] hover:text-white transition-colors font-bold drop-shadow-md">Services</a>
          <a href="#web-design" className="text-[#D4AF37] hover:text-white transition-colors font-bold drop-shadow-md">Web Design</a>
          <a href="#contact" className="text-[#D4AF37] hover:text-white transition-colors font-bold drop-shadow-md">Contact</a>
          <Link href="/about" className="text-[#D4AF37] hover:text-white transition-colors font-bold drop-shadow-md">About Me</Link>
        </nav>
      </div>
      
      {/* Mobile navigation */}
      <nav 
        className={`bg-gradient-to-b from-black/90 to-black/70 backdrop-blur-md lg:hidden ${
          isMenuOpen ? 'block' : 'hidden'
        } transition-all duration-300`}
      >
        <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
          <a 
            href="#work" 
            className="text-[#D4AF37] hover:text-white transition-colors py-2 font-bold"
            onClick={() => setIsMenuOpen(false)}
          >
            Work
          </a>
          <a 
            href="#services" 
            className="text-[#D4AF37] hover:text-white transition-colors py-2 font-bold"
            onClick={() => setIsMenuOpen(false)}
          >
            Services
          </a>
          <a 
            href="#web-design" 
            className="text-[#D4AF37] hover:text-white transition-colors py-2 font-bold"
            onClick={() => setIsMenuOpen(false)}
          >
            Web Design
          </a>
          <a 
            href="#contact" 
            className="text-[#D4AF37] hover:text-white transition-colors py-2 font-bold"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </a>
          <Link 
            href="/about" 
            className="text-[#D4AF37] hover:text-white transition-colors py-2 font-bold"
            onClick={() => setIsMenuOpen(false)}
          >
            About Me
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
