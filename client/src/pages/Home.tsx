import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import PortfolioSection from "@/components/sections/PortfolioSection";
import ServicesSection from "@/components/sections/ServicesSection";
import WebDesignSection from "@/components/sections/WebDesignSection";
import ContactSection from "@/components/sections/ContactSection";
import { useEffect } from "react";

const Home = () => {
  // Implement smooth scrolling for anchor links
  useEffect(() => {
    const handleAnchorLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a');
      
      if (link && link.hash && link.hash.startsWith('#')) {
        e.preventDefault();
        const targetElement = document.querySelector(link.hash);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    document.addEventListener('click', handleAnchorLinkClick);
    
    return () => {
      document.removeEventListener('click', handleAnchorLinkClick);
    };
  }, []);

  return (
    <div className="font-inter text-white bg-black">
      <Header />
      <main>
        <HeroSection />
        <PortfolioSection />
        <ServicesSection />
        <WebDesignSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
