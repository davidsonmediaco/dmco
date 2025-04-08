import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const WebDesignSection = () => {
  const { toast } = useToast();

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
      
      // Focus on message input and add template text after scrolling
      setTimeout(() => {
        const messageInput = document.getElementById('message') as HTMLTextAreaElement;
        if (messageInput) {
          messageInput.focus();
          messageInput.value = "I'm interested in having a website built for my business.";
        }
      }, 1000);
    } else {
      toast({
        title: "Navigation error",
        description: "Could not find the contact section. Please scroll down to the contact form.",
        variant: "destructive"
      });
    }
  };

  const benefits = [
    {
      title: "Responsive Design",
      description: "Your site will look perfect on all devices, from phones to desktops"
    },
    {
      title: "SEO Optimization",
      description: "Built with search engines in mind to help customers find you"
    },
    {
      title: "Ongoing Support",
      description: "Regular updates and maintenance to keep your site running smoothly"
    }
  ];

  return (
    <section id="web-design" className="py-20 bg-black relative overflow-hidden">
      {/* Background decorative element */}
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden opacity-5 pointer-events-none">
        <svg viewBox="0 0 323 323" className="w-full h-full text-primary" xmlns="http://www.w3.org/2000/svg">
          <path d="M320.667 253V70c0-37.308-30.692-68-68-68H70c-37.308 0-68 30.692-68 68v183c0 37.308 30.692 68 68 68h182.667c37.308 0 68-30.692 68-68z" fill="currentColor" />
        </svg>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <motion.div 
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-heading mb-6 text-white tracking-wide">Your Brand, Your Site, Done Right.</h2>
            <p className="text-xl text-primary mb-4">Functional. Beautiful. SEO-optimized. Sites that convert.</p>
            <p className="text-gray-400 mb-8">
              I create custom websites that not only look stunning but also drive real business results. From personal portfolios to small business and e-commerce platforms, I handle everything from design to deployment.
            </p>
            
            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-start"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.2 }}
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-1">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-white">{benefit.title}</h3>
                    <p className="text-gray-400">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <motion.button 
              className="px-8 py-3 bg-primary text-black rounded-full font-bold hover:bg-primary/90 transition-colors duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
              onClick={scrollToContact}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Let's Build Your Site
            </motion.button>
          </motion.div>
          
          <motion.div 
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative mx-auto max-w-md">
              <div className="relative z-10 bg-white rounded-xl shadow-2xl overflow-hidden">
                <div className="h-8 bg-gray-100 flex items-center px-4">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                </div>
                <img
                  src="https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=1064&auto=format&fit=crop"
                  alt="Web design example"
                  className="w-full h-auto"
                />
              </div>
              
              <div className="absolute -bottom-4 -right-4 -z-10 w-full h-full bg-gray-200 rounded-xl"></div>
              <div className="absolute -bottom-8 -right-8 -z-20 w-full h-full bg-gray-300 rounded-xl"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WebDesignSection;
