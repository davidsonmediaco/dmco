import { motion } from "framer-motion";
import { Link } from "wouter";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

export default function About() {
  return (
    <div className="bg-black min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-5xl font-heading text-white mb-8 tracking-wide">About Me</h1>
          
          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative aspect-[4/5] overflow-hidden rounded-lg"
            >
              <img
                src="/images/about/davidson-media-headshot.jpg"
                alt="Justin Davidson"
                className="w-full h-full object-cover"
              />
            </motion.div>
            
            {/* Bio Content */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="space-y-6 text-lg text-zinc-300"
            >
              <p>
                Hi, I'm Justin Davidson, a professional photographer based in Nashville, Tennessee. With over a decade of experience behind the lens, I've developed a passion for capturing authentic moments and telling compelling visual stories.
              </p>
              
              <p>
                My journey in photography began with a simple curiosity about capturing life's moments, but it quickly evolved into a deep appreciation for the art of visual storytelling. Whether I'm shooting portraits, events, or commercial work, my goal remains the same: to create images that resonate and leave a lasting impression.
              </p>
              
              <p>
                I specialize in portrait, music, and commercial photography, bringing a unique blend of technical expertise and creative vision to every project. My work has been featured in various publications and has helped numerous clients achieve their visual communication goals.
              </p>
              
              <div className="pt-4">
                <Link 
                  to="/contact" 
                  className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-[#D4AF37] hover:bg-[#D4AF37]/90 text-black font-medium text-base transition-colors duration-300"
                >
                  Let's Work Together
                </Link>
              </div>
            </motion.div>
          </div>
          
          {/* Additional Sections */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="mt-16 space-y-12"
          >
            {/* Approach Section */}
            <section>
              <h2 className="text-3xl font-heading text-white mb-4">My Approach</h2>
              <p className="text-lg text-zinc-300">
                I believe in creating a comfortable and collaborative environment during shoots, allowing natural moments to unfold while providing gentle direction when needed. My style combines technical precision with an eye for authentic emotion, resulting in images that are both polished and genuine.
              </p>
            </section>
            
            {/* Equipment Section */}
            <section>
              <h2 className="text-3xl font-heading text-white mb-4">Equipment</h2>
              <p className="text-lg text-zinc-300">
                I use professional-grade Canon equipment and lighting gear to ensure the highest quality results for every project. My mobile studio setup allows me to create consistent, high-quality images whether we're shooting in a studio environment or on location.
              </p>
            </section>
          </motion.div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}