import { motion } from "framer-motion";
import { Camera, Monitor, Users } from "lucide-react";
import ServiceCard from "@/components/ui/ServiceCard";

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      title: "Web Design & Management",
      description: "Custom-built, responsive websites that represent your brand perfectly. Includes ongoing support and maintenance.",
      icon: <Monitor className="h-8 w-8 text-primary" />,
      isHighlighted: false,
      link: "#web-design"
    },
    {
      id: 2,
      title: "Photo & Video",
      description: "Professional photography and videography services tailored to showcase your brand, products, events or personal milestones.",
      icon: <Camera className="h-8 w-8 text-primary" />,
      isHighlighted: true,
      link: "#"
    },
    {
      id: 3,
      title: "Social Media Strategy & Consulting",
      description: "Personalized consultation to develop confidence-building strategies that transform social media from intimidating to actionable, with ongoing guidance to bolster your brand's growth.",
      icon: <Users className="h-8 w-8 text-primary" />,
      isHighlighted: false,
      link: "#"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <section id="services" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-heading text-center mb-4 text-white tracking-wide"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          What I Can Do For You
        </motion.h2>
        
        <motion.p 
          className="text-center text-gray-400 max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          I offer strategic creative solutions that build confidence and transform your brand vision into actionable results, from compelling visual storytelling to guided social media strategies.
        </motion.p>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {services.map(service => (
            <ServiceCard 
              key={service.id}
              title={service.title}
              description={service.description}
              icon={service.icon}
              isHighlighted={service.isHighlighted}
              link={service.link}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
