import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { workExperience } from '@/data/portfolio-data';

const Experience = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });
  const [showModal, setShowModal] = useState(false);
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };
  
  return (
    <section id="experience" className="section py-24 bg-[#000000]">
      <div className="container mx-auto px-6 child-delay">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold gold-accent-glow font-['Cinzel'] mb-4" data-text="Work Experience">Work Experience</h2>
          <p className="text-[#FFFFF7]/70 max-w-xl mx-auto font-['Cormorant_Garamond'] text-lg italic">
            My professional journey through different roles and companies
          </p>
        </motion.div>
        
        <div ref={containerRef} className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#FFD700] via-[#FFD700]/50 to-transparent"></div>
          
          {/* Experience items */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {workExperience.map((job, index) => (
              <motion.div 
                key={index} 
                className="relative z-10 mb-12 last:mb-0"
                variants={itemVariants}
              >
                <div className="flex flex-col md:flex-row items-center">
                  <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 text-left md:order-1'} mb-8 md:mb-0`}>
                    {index % 2 === 0 ? (
                      <div className="royal-card p-6 rounded-xl bg-black/40 backdrop-blur-md border border-[#FFD700]/20 shadow-[0_0_15px_rgba(255,215,0,0.1)] hover:shadow-[0_10px_25px_rgba(255,215,0,0.2)] transition-all">
                        <h3 className="text-xl font-bold text-[#FFD700] font-['Cinzel'] mb-2">{job.title}</h3>
                        <h4 className="text-[#FFD700]/80 font-medium mb-3 font-['Cinzel']">{job.company}</h4>
                        <p className="text-[#FFFFF7]/90 font-['Cormorant_Garamond'] text-lg mb-4">
                          {job.description}
                        </p>
                        <div className="flex flex-wrap gap-2 justify-end">
                          {job.technologies.map((tech, i) => (
                            <span key={i} className="text-xs font-medium bg-black/50 backdrop-blur-sm text-[#FFD700] px-2 py-1 rounded border border-[#FFD700]/30">
                              {tech.name}
                            </span>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <div className="text-[#FFD700] font-medium font-['Cinzel']">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {job.period}
                      </div>
                    )}
                  </div>
                  
                  <div className="w-10 h-10 rounded-full border-4 border-[#000000] bg-[#FFD700] text-[#000000] flex items-center justify-center shadow-[0_0_15px_rgba(255,215,0,0.5)] z-10">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  
                  <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pl-12 text-left' : 'md:pr-12 md:text-right md:order-none'}`}>
                    {index % 2 === 0 ? (
                      <div className="text-[#FFD700] font-medium font-['Cinzel']">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {job.period}
                      </div>
                    ) : (
                      <div className="royal-card p-6 rounded-xl bg-black/40 backdrop-blur-md border border-[#FFD700]/20 shadow-[0_0_15px_rgba(255,215,0,0.1)] hover:shadow-[0_10px_25px_rgba(255,215,0,0.2)] transition-all">
                        <h3 className="text-xl font-bold text-[#FFD700] font-['Cinzel'] mb-2">{job.title}</h3>
                        <h4 className="text-[#FFD700]/80 font-medium mb-3 font-['Cinzel']">{job.company}</h4>
                        <p className="text-[#FFFFF7]/90 font-['Cormorant_Garamond'] text-lg mb-4">
                          {job.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {job.technologies.map((tech, i) => (
                            <span key={i} className="text-xs font-medium bg-black/50 backdrop-blur-sm text-[#FFD700] px-2 py-1 rounded border border-[#FFD700]/30">
                              {tech.name}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
        
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <button
            onClick={() => setShowModal(true)}
            className="inline-flex items-center px-6 py-3 bg-black text-[#FFD700] rounded-lg font-medium border border-[#FFD700]/30 transition-all hover:bg-[#FFD700]/10 font-['Cinzel']"
          >
            Request Full Resume
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </motion.div>
        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-black/90 text-[#FFD700] p-6 rounded-xl max-w-md w-full shadow-[0_0_25px_rgba(255,215,0,0.3)] border border-[#FFD700]/20 relative">
              <button onClick={() => setShowModal(false)} className="absolute top-2 right-2 text-[#FFD700]/60 hover:text-[#FFD700] text-2xl font-bold">&times;</button>
              <h3 className="text-xl font-bold mb-4 font-['Cinzel']">Request My Resume</h3>
              <form onSubmit={(e) => { e.preventDefault(); setShowModal(false); alert('Request sent!'); }}>
                <input type="text" placeholder="Your Name" className="w-full border mb-3 px-3 py-2 rounded bg-black/70 text-[#FFD700] placeholder-[#FFD700]/50 border-[#FFD700]/30" required />
                <input type="email" placeholder="Your Email" className="w-full border mb-3 px-3 py-2 rounded bg-black/70 text-[#FFD700] placeholder-[#FFD700]/50 border-[#FFD700]/30" required />
                <textarea placeholder="Optional Message" className="w-full border mb-3 px-3 py-2 rounded bg-black/70 text-[#FFD700] placeholder-[#FFD700]/50 border-[#FFD700]/30"></textarea>
                <button type="submit" className="w-full bg-[#FFD700] text-black py-2 rounded font-bold hover:bg-[#e6c200]">
                  Send Request
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Experience;
