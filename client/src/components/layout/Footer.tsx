import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Would normally submit to an API
    alert(`Thanks for subscribing with: ${email}`);
    setEmail("");
  };

  return (
    <footer className="bg-black text-white pt-16 pb-8 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="font-bold text-xl mb-4 text-primary">Davidson Media Co</h3>
            <p className="text-gray-400 mb-4">Turning Moments Into Stories, And Ideas Into Reality</p>
          </div>
          
          <div>
            <h3 className="font-bold text-xl mb-4 text-white">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">Photography</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">Videography</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">Web Design</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">Social Media</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-xl mb-4 text-white">Portfolio</h3>
            <ul className="space-y-2">
              <li><a href="/portraits" className="text-gray-400 hover:text-primary transition-colors">Portraits</a></li>
              <li><a href="/brands" className="text-gray-400 hover:text-primary transition-colors">Brands & Businesses</a></li>
              <li><a href="/music" className="text-gray-400 hover:text-primary transition-colors">Music</a></li>
              <li><a href="/dogs" className="text-gray-400 hover:text-primary transition-colors">Dogs</a></li>
              <li><a href="/sports" className="text-gray-400 hover:text-primary transition-colors">Sports</a></li>
              <li><a href="/bts" className="text-gray-400 hover:text-primary transition-colors">BTS Photography</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-xl mb-4 text-white">Subscribe</h3>
            <p className="text-gray-400 mb-4">Stay updated with our latest work and offers</p>
            <form className="flex" onSubmit={handleSubscribe}>
              <input 
                type="email" 
                placeholder="Your email" 
                className="px-4 py-2 bg-gray-800 text-white rounded-l-lg focus:outline-none w-full border border-gray-700 focus:border-primary"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="bg-primary px-4 py-2 rounded-r-lg text-black font-bold">
                <ArrowRight className="h-5 w-5" />
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-gray-500">© {new Date().getFullYear()} Davidson Media Co. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
