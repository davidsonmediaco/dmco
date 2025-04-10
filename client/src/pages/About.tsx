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
                    <h2 className="text-3xl font-heading text-white mb-6">The Story Behind Davidson Media Co.</h2>
                    
                    <p className="mb-6">
                      I grew up in the greatest city in the world, New York, where I quickly realized that photography is everywhere. My first camera was a little blue Canon PowerShot, and I brought it with me everywhere I went. When you live in a place like NYC, there's always something worth capturing.
                    </p>
                    
                    <p className="mb-6">
                      In 2010, my family moved to New Jersey, and the change from the fast pace of the city to a quiet town was a tough adjustment. But on my first day at my new high school, I met a photo teacher who helped me discover that photography wasn't just something I liked, it was something I loved. I've been hooked ever since.
                    </p>
                    
                    <p className="mb-6">
                      A big part of my journey has always been our dogs. In 2011 we got Charlie, who had the kind of personality that just begged to be photographed. Then came Patrick in 2015, the sweetest soul I've ever met. He adored Charlie, and their bond was something special. After we said goodbye to Charlie in 2022, we were blessed with Louie, a playful little pup who brought so much light back into our lives and a lot of great photo opportunities.
                    </p>
                    
                    <p className="mb-6">
                      My dogs have been a huge inspiration behind the work I do. On days when things felt heavy, I'd grab my camera and go outside to take pictures of them. It gave me peace, joy, and purpose.
                    </p>
                    
                    <p className="mb-6">
                      More than anything, I want to show you the beauty in everyday moments. Photography is about preserving what matters and creating memories that last. To me, being a photographer isn't just about holding a camera, it's about helping people remember what really matters.
                    </p>
                    
                    <h3 className="text-2xl font-heading mt-10 mb-4 text-white">Areas of Expertise</h3>
                    
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