import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { insertContactMessageSchema } from '@shared/schema';
import { z } from 'zod';
import { apiRequest } from '@/lib/queryClient';
import { useToast } from '@/hooks/use-toast';

const contactSchema = insertContactMessageSchema.extend({
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters long")
});

type ContactFormValues = z.infer<typeof contactSchema>;

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const { 
    register, 
    handleSubmit, 
    reset,
    formState: { errors } 
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: ''
    }
  });
  
  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    try {
      await apiRequest('POST', '/api/contact', data);
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
        variant: "default",
      });
      reset();
    } catch (error) {
      toast({
        title: "Failed to send message",
        description: error instanceof Error ? error.message : "Please try again later",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const inputClasses = "w-full px-4 py-3 border border-[#FFD700]/30 rounded-lg focus:ring-2 focus:ring-[#FFD700]/50 focus:border-[#FFD700]/50 transition-colors bg-black/60 text-[#FFFFF7] placeholder:text-[#FFFFF7]/40";
  const labelClasses = "block text-[#FFD700] font-medium mb-2 font-['Cinzel']";
  const errorClasses = "text-red-400 text-sm mt-1 font-['Cormorant_Garamond']";
  
  const contactItems = [
    { 
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>,
      title: "Email",
      content: <a href="mailto:hello@johndoe.com" className="hover:text-white transition-colors">hello@johndoe.com</a>
    },
    { 
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>,
      title: "Location",
      content: "San Francisco, California"
    },
    { 
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>,
      title: "Availability",
      content: "Monday - Friday, 9:00 AM - 6:00 PM PST"
    }
  ];
  
  const socialLinks = [
    { 
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>,
      url: "https://github.com"
    },
    { 
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
            </svg>,
      url: "https://linkedin.com"
    },
    { 
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
            </svg>,
      url: "https://twitter.com"
    },
    { 
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.628 0-12 5.373-12 12s5.372 12 12 12 12-5.373 12-12-5.372-12-12-12zm9.885 11.441c-2.575-.422-4.943-.445-7.103-.073-.244-.563-.497-1.125-.767-1.68 2.31-1 4.165-2.358 5.548-4.082 1.35 1.594 2.197 3.619 2.322 5.835zm-3.842-7.282c-1.205 1.554-2.868 2.783-4.986 3.68-1.016-1.861-2.178-3.676-3.488-5.438.779-.197 1.591-.314 2.431-.314 2.275 0 4.368.779 6.043 2.072zm-10.516-.993c1.331 1.742 2.511 3.538 3.537 5.381-2.43.715-5.331 1.082-8.684 1.105.692-2.835 2.601-5.193 5.147-6.486zm-5.44 8.834l.013-.256c3.849-.005 7.169-.448 9.95-1.322.233.475.456.952.67 1.432-3.38 1.057-6.165 3.222-8.337 6.48-1.432-1.719-2.296-3.927-2.296-6.334zm3.829 7.81c1.969-3.088 4.482-5.098 7.598-6.027.928 2.42 1.609 4.91 2.043 7.46-3.349 1.291-6.953.666-9.641-1.433zm11.586.43c-.438-2.353-1.08-4.653-1.92-6.897 1.876-.265 3.94-.196 6.199.196-.437 2.786-2.028 5.192-4.279 6.701z"/>
            </svg>,
      url: "https://dribbble.com"
    }
  ];
  
  return (
    <section id="contact" className="section py-24 bg-[#000000]">
      <div className="container mx-auto px-6 child-delay">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold gold-accent-glow font-['Cinzel'] mb-4" data-text="Get In Touch">Get In Touch</h2>
          <p className="text-[#FFFFF7]/70 max-w-xl mx-auto font-['Cormorant_Garamond'] text-lg italic">
            Have a project in mind or want to discuss potential opportunities? Let's connect!
          </p>
        </motion.div>
        
        <div className="flex flex-col lg:flex-row gap-12">
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-[#FFFFF7]/10 backdrop-blur-md rounded-xl p-8 shadow-xl border border-[#FFD700]/20">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label htmlFor="name" className={labelClasses}>Your Name</label>
                  <input 
                    id="name" 
                    className={`${inputClasses} ${errors.name ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}`}
                    placeholder="John Smith"
                    {...register('name')}
                  />
                  {errors.name && <p className={errorClasses}>{errors.name.message}</p>}
                </div>
                
                <div>
                  <label htmlFor="email" className={labelClasses}>Email Address</label>
                  <input 
                    id="email" 
                    className={`${inputClasses} ${errors.email ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}`}
                    placeholder="your@email.com"
                    {...register('email')}
                  />
                  {errors.email && <p className={errorClasses}>{errors.email.message}</p>}
                </div>
                
                <div>
                  <label htmlFor="subject" className={labelClasses}>Subject</label>
                  <input 
                    id="subject" 
                    className={`${inputClasses} ${errors.subject ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}`}
                    placeholder="Project Inquiry"
                    {...register('subject')}
                  />
                  {errors.subject && <p className={errorClasses}>{errors.subject.message}</p>}
                </div>
                
                <div>
                  <label htmlFor="message" className={labelClasses}>Your Message</label>
                  <textarea 
                    id="message" 
                    rows={5} 
                    className={`${inputClasses} resize-none ${errors.message ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}`}
                    placeholder="Tell me about your project, timeline, and budget..."
                    {...register('message')}
                  ></textarea>
                  {errors.message && <p className={errorClasses}>{errors.message.message}</p>}
                </div>
                
                <motion.button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-black text-[#FFD700] font-medium py-3 px-6 rounded-lg border border-[#FFD700]/30 hover:bg-[#FFD700]/10 transition-all focus:outline-none focus:ring-2 focus:ring-[#FFD700]/50 focus:ring-offset-2 disabled:opacity-70 disabled:cursor-not-allowed font-['Cinzel']"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </motion.button>
              </form>
            </div>
          </motion.div>
          
          <motion.div 
            className="lg:w-1/2 flex flex-col justify-between"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-8">
              {contactItems.map((item, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-black border border-[#FFD700]/30 rounded-full flex items-center justify-center text-[#FFD700] shadow-[0_0_10px_rgba(255,215,0,0.2)]">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#FFD700] font-['Cinzel'] mb-2">{item.title}</h3>
                    <p className="text-[#FFFFF7]/80 font-['Cormorant_Garamond'] text-lg">
                      {item.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12">
              <h3 className="text-xl font-bold text-[#FFD700] font-['Cinzel'] mb-4">Connect With Me</h3>
              <div className="flex space-x-4">
                {socialLinks.map((link, index) => (
                  <motion.a 
                    key={index}
                    href={link.url} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-black border border-[#FFD700]/30 rounded-full flex items-center justify-center text-[#FFD700] hover:bg-[#FFD700]/10 hover:border-[#FFD700]/50 transition-all shadow-[0_0_10px_rgba(255,215,0,0.1)]"
                    whileHover={{ scale: 1.1, boxShadow: "0 0 15px rgba(255,215,0,0.3)" }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {link.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
