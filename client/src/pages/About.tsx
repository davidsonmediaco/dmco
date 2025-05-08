import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-background"
    >
      <Header />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8 text-foreground">About Us</h1>
        <div className="prose prose-lg max-w-none text-foreground">
          <p>
            Davidson Media Co is a premier photography and videography studio
            specializing in capturing life's most precious moments. From sports
            events to portraits, music performances to brand storytelling, we
            bring your vision to life through our lens.
          </p>
          <p>
            Our team of experienced professionals is dedicated to delivering
            exceptional quality and service, ensuring that every project exceeds
            expectations.
          </p>
        </div>
        <div className="mt-8">
          <Button asChild>
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </div>
      </div>
      <Footer />
    </motion.div>
  );
}