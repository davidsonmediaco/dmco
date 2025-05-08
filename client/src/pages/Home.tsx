import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import HeroSection from "../components/sections/HeroSection";
import ServicesSection from "../components/sections/ServicesSection";
import PortfolioSection from "../components/sections/PortfolioSection";
import ContactSection from "../components/sections/ContactSection";
import AutoCarouselSection from "../components/sections/AutoCarouselSection";
import { portfolioItems } from "../lib/data";
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

  // Filter items for the carousel
  const featuredItems = portfolioItems.slice(0, 8); // Get first 8 items for carousel

  return (
    <div className="font-inter text-white bg-black">
      <Header />
      <main>
        <HeroSection />
        
        {/* Portfolio Grid Section */}
        <PortfolioSection />
        
        <ServicesSection />
        <AutoCarouselSection 
          title="Featured Work"
          subtitle="A selection of our best photography"
          items={featuredItems}
          viewMoreLink="/portfolio"
        />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
