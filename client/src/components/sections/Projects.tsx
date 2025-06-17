import { motion } from 'framer-motion';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { projects } from '@/data/portfolio-data';

const Projects = () => {
  const { ref, inView } = useIntersectionObserver({ 
    threshold: 0.1, 
    triggerOnce: true
  });
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="projects" className="section py-24 bg-[#000000]">
      <div className="container mx-auto px-6 child-delay">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold gold-accent font-['Cinzel'] mb-4">Featured Projects</h2>
          <p className="text-white max-w-xl mx-auto font-['Cormorant_Garamond'] text-lg">
            A curated selection of my work showcasing problem-solving abilities and technical expertise
          </p>
        </motion.div>
        
        <motion.div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              className="project-card royal-card rounded-xl overflow-hidden border border-[#FFD700]/20"
              variants={itemVariants}
            >
              {project.title === "Software Engineer Portfolio" ? (
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt=".NET MAUI & Azure Traveler: Travel Companion App" 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute top-3 right-3 bg-black/80 backdrop-blur-sm border border-[#FFD700]/40 rounded-full py-1 px-3 text-xs font-semibold text-[#FFD700]">
                    AI Travel App
                  </div>
                </div>
              ) : (
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute top-3 right-3 bg-black/80 backdrop-blur-sm border border-[#FFD700]/40 rounded-full py-1 px-3 text-xs font-semibold text-[#FFD700]">
                    {project.category}
                  </div>
                </div>
              )}
              <div className="p-6 bg-black/40 backdrop-blur-md border-t border-[#FFD700]/20">
                <h3 className="text-xl font-bold text-[#FFD700] mb-2 font-['Cinzel']">{project.title === "Software Engineer Portfolio" ? ".NET MAUI & Azure Traveler: Travel Companion App" : project.title}</h3>
                <p className="text-[#FFFFF7]/90 font-['Cormorant_Garamond'] text-lg mb-4">
                  {project.title === "Software Engineer Portfolio" ? "Built a cross‑platform AI Travel Companion app with .NET MAUI, Azure, OpenAI, and Syncfusion integrations for seamless itinerary planning, dynamic scheduling, and Xcode‑based deployment." : project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {(project.title === "Software Engineer Portfolio" ? [
                    { name: ".NET MAUI" },
                    { name: "SQL" },
                    { name: "Azure" },
                    { name: "OpenAI" },
                    { name: "Syncfusion" },
                    { name: "Xcode" }
                  ] : project.technologies).map((tech, i) => (
                    <span 
                      key={i} 
                      className="text-xs font-medium bg-black/50 backdrop-blur-sm text-[#FFD700] px-2 py-1 rounded border border-[#FFD700]/30"
                    >
                      {tech.name}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <a href={project.caseStudyUrl} className="text-[#FFD700] font-medium hover:text-[#FFD700]/80 transition-colors">
                    View Case Study →
                  </a>
                  <div className="flex gap-3">
                    <a href={project.githubUrl} className="text-[#FFD700]/70 hover:text-[#FFD700] transition-colors" aria-label="GitHub Repository">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </a>
                    <a href={project.liveUrl} className="text-[#FFD700]/70 hover:text-[#FFD700] transition-colors" aria-label="Live Project">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <a href="#" className="inline-flex items-center px-6 py-3 bg-black/40 backdrop-blur-md text-[#FFD700] rounded-lg font-medium border border-[#FFD700]/30 transition-all hover:bg-black/60 hover:shadow-[0_0_15px_rgba(255,215,0,0.2)] font-['Cinzel']">
            View All Projects
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
