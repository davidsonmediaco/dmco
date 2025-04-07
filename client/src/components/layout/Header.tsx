import { useState, useEffect } from "react";

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
    <header className={`fixed w-full bg-white/90 backdrop-blur-sm z-50 transition-shadow ${isScrolled ? 'shadow-md' : 'shadow-sm'}`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold tracking-tight">Davidson Media Co</a>
        
        {/* Mobile menu button */}
        <button 
          onClick={toggleMenu}
          className="lg:hidden text-dark focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
        
        {/* Desktop navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          <a href="#work" className="text-dark hover:text-primary transition-colors">Work</a>
          <a href="#services" className="text-dark hover:text-primary transition-colors">Services</a>
          <a href="#web-design" className="text-dark hover:text-primary transition-colors">Web Design</a>
          <a href="#contact" className="text-dark hover:text-primary transition-colors">Contact</a>
        </nav>
      </div>
      
      {/* Mobile navigation */}
      <nav 
        className={`bg-white lg:hidden ${isMenuOpen ? 'block' : 'hidden'} transition-all duration-300`}
      >
        <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
          <a 
            href="#work" 
            className="text-dark hover:text-primary transition-colors py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Work
          </a>
          <a 
            href="#services" 
            className="text-dark hover:text-primary transition-colors py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Services
          </a>
          <a 
            href="#web-design" 
            className="text-dark hover:text-primary transition-colors py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Web Design
          </a>
          <a 
            href="#contact" 
            className="text-dark hover:text-primary transition-colors py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
