import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { Mail, Phone } from "lucide-react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { apiRequest } from "@/lib/queryClient";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" })
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const { 
    register, 
    handleSubmit, 
    reset,
    formState: { errors } 
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: ""
    }
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    try {
      // Create email subject and body
      const subject = `Contact Form Submission from ${data.name}`;
      const body = `
Name: ${data.name}
Email: ${data.email}

Message:
${data.message}
      `;
      
      // Create a mailto link
      const mailtoLink = `mailto:davidsonmediaco@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      
      // Open the email client
      window.open(mailtoLink, '_blank');
      
      toast({
        title: "Email client opened!",
        description: "Please send the email from your mail client to complete your message.",
      });
      reset();
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Could not open email client. Please email us directly at davidsonmediaco@gmail.com",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-3xl mx-auto bg-gray-900 rounded-2xl shadow-lg overflow-hidden border border-gray-800"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 md:p-12 bg-primary/10 text-white border-r border-gray-800">
              <h2 className="text-3xl font-heading mb-6 text-primary tracking-wide">Ready to Work Together?</h2>
              <p className="mb-4 text-gray-300">No pressure. Just tell me what you need — I'll take it from there.</p>
              <p className="mb-8 text-gray-300">Fill out the form and click "Open Email Client" to generate an email to me. You'll be able to review before sending.</p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <Mail className="h-6 w-6" style={{ color: "#D4AF37" }} />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-heading text-white">Email</h3>
                    <p className="text-gray-400">davidsonmediaco@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <Phone className="h-6 w-6" style={{ color: "#D4AF37" }} />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-heading text-white">Phone</h3>
                    <p className="text-gray-400">(646)-303-0973</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="24" 
                      height="24" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="#D4AF37" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    >
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-heading text-white">Location</h3>
                    <p className="text-gray-400">Bernardsville, NJ</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-8 md:p-12 bg-gray-900">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Name</label>
                  <input 
                    type="text" 
                    id="name"
                    {...register("name")}
                    className={`w-full px-4 py-3 border bg-gray-800 text-white ${errors.name ? 'border-red-500' : 'border-gray-700'} rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors`}
                  />
                  {errors.name && (
                    <div className="text-red-400 text-sm mt-1">{errors.name.message}</div>
                  )}
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email</label>
                  <input 
                    type="email" 
                    id="email"
                    {...register("email")}
                    className={`w-full px-4 py-3 border bg-gray-800 text-white ${errors.email ? 'border-red-500' : 'border-gray-700'} rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors`}
                  />
                  {errors.email && (
                    <div className="text-red-400 text-sm mt-1">{errors.email.message}</div>
                  )}
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Project Details</label>
                  <textarea 
                    id="message"
                    {...register("message")}
                    rows={4}
                    className={`w-full px-4 py-3 border bg-gray-800 text-white ${errors.message ? 'border-red-500' : 'border-gray-700'} rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors resize-none`}
                  ></textarea>
                  {errors.message && (
                    <div className="text-red-400 text-sm mt-1">{errors.message.message}</div>
                  )}
                </div>
                
                <button 
                  type="submit" 
                  className="w-full px-6 py-3 bg-primary text-white rounded-lg font-bold hover:bg-primary/90 transition-colors"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Opening Email...' : 'Open Email Client'}
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
