import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";

const AboutPage = () => {
  return (
    <div className="font-inter text-white bg-black min-h-screen">
      <Header />
      <main>
        <section className="py-20 bg-black">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-5xl md:text-6xl font-heading mb-8 tracking-wide">About Me</h1>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
                <motion.div
                  className="md:col-span-1"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <div className="rounded-xl overflow-hidden shadow-xl mb-6">
                    <img 
                      src="/images/about/davidson-media-headshot.jpg" 
                      alt="Justin Davidson" 
                      className="w-full h-auto object-cover"
                      onContextMenu={(e) => e.preventDefault()}
                      draggable="false"
                    />
                  </div>
                  
                  <div className="bg-zinc-900 rounded-xl p-6 shadow-lg">
                    <h3 className="text-xl font-heading mb-4 text-primary">Contact Information</h3>
                    <ul className="space-y-3 text-zinc-300">
                      <li>
                        <span className="font-bold text-white">Email:</span>{" "}
                        <a href="mailto:davidsonmediaco@gmail.com" className="text-primary hover:text-primary/80">
                          davidsonmediaco@gmail.com
                        </a>
                      </li>
                      <li>
                        <span className="font-bold text-white">Phone:</span>{" "}
                        <a href="tel:+16463030973" className="text-primary hover:text-primary/80">
                          (646) 303-0973
                        </a>
                      </li>
                      <li>
                        <span className="font-bold text-white">Location:</span>{" "}
                        <span>Bernardsville, NJ</span>
                      </li>
                    </ul>
                  </div>
                </motion.div>
                
                <motion.div
                  className="md:col-span-2"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <div className="prose prose-lg prose-invert max-w-none">
                    <h2 className="text-3xl font-heading text-primary mb-6">The Story Behind Davidson Media Co.</h2>
                    
                    <p className="mb-6">
                      Welcome to Davidson Media Co. Founded on a passion for visual storytelling, I've built this business to help individuals and companies communicate their unique stories through compelling imagery and strategic digital presence.
                    </p>
                    
                    <p className="mb-6">
                      With experience spanning portrait photography, brand development, web design, and social media strategy, I bring a holistic approach to helping clients establish and enhance their visual identity.
                    </p>
                    
                    <h3 className="text-2xl font-heading mt-10 mb-4">My Approach</h3>
                    
                    <p className="mb-6">
                      Every project begins with understanding your specific needs and goals. Whether capturing the perfect portrait that showcases your personality, developing a website that converts visitors to customers, or creating a consistent visual brand across all platforms, my focus is always on delivering results that exceed expectations.
                    </p>
                    
                    <p className="mb-6">
                      I believe in building lasting relationships with clients through transparency, communication, and exceptional service. My success is measured by your satisfaction and the tangible results our work together achieves.
                    </p>
                    
                    <h3 className="text-2xl font-heading mt-10 mb-4">Areas of Expertise</h3>
                    
                    <ul className="list-disc pl-5 mb-6 space-y-2">
                      <li>Portrait Photography (Professional, Family, Lifestyle)</li>
                      <li>Brand & Business Photography</li>
                      <li>Music & Performance Photography</li>
                      <li>Custom Website Design for Personal Portfolios & Small Businesses</li>
                      <li>Social Media Strategy & Content Creation</li>
                      <li>Sports Photography</li>
                    </ul>
                    
                    <p className="mt-10">
                      I'm always open to discussing new projects and collaboration opportunities. Feel free to reach out through the contact details or use the contact form to start a conversation about your next project.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;