import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import AutoCarouselSection from "@/components/sections/AutoCarouselSection";
import ServicesSection from "@/components/sections/ServicesSection";
import WebDesignSection from "@/components/sections/WebDesignSection";
import ContactSection from "@/components/sections/ContactSection";
import { useEffect } from "react";
import { portfolioItems } from "@/lib/data";

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

  // Filter items by category
  const portraitItems = portfolioItems.filter(item => item.categories.includes('portraits'));
  const brandItems = portfolioItems.filter(item => item.categories.includes('brands'));
  const musicItems = portfolioItems.filter(item => item.categories.includes('music'));
  const dogItems = portfolioItems.filter(item => item.categories.includes('dogs'));
  const sportsItems = portfolioItems.filter(item => item.categories.includes('sports'));

  return (
    <div className="font-inter text-white bg-black">
      <Header />
      <main>
        <HeroSection />
        
        <section id="work" className="pt-16">
          <div className="container mx-auto px-4 mb-8">
            <h2 className="text-4xl md:text-5xl font-heading mb-4">My Work</h2>
            <p className="text-xl text-zinc-300 max-w-3xl">
              Explore my diverse portfolio of photography work across various categories.
              Each collection represents a unique approach to visual storytelling.
            </p>
          </div>
        </section>
        
        <AutoCarouselSection 
          title="Portrait Gallery"
          subtitle="Professional portrait photography that captures personality and emotion"
          items={portraitItems}
          viewMoreLink="/portraits"
        />
        
        <AutoCarouselSection 
          title="Brands & Business"
          subtitle="Commercial photography telling your brand's unique story"
          items={brandItems}
          viewMoreLink="/brands"
        />
        
        <AutoCarouselSection 
          title="Music"
          subtitle="Concert, performance, and music industry photography"
          items={musicItems}
          viewMoreLink="/music"
        />
        
        <AutoCarouselSection 
          title="Man's Best Friend"
          subtitle="Playful, emotional photography celebrating our canine companions"
          items={dogItems}
          viewMoreLink="/dogs"
        />
        
        <AutoCarouselSection 
          title="Sports"
          subtitle="Dynamic photography capturing athletic moments and competition"
          items={sportsItems}
          viewMoreLink="/sports"
        />
        
        <ServicesSection />
        <WebDesignSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
