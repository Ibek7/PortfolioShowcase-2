import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };
  
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };
  
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <motion.div 
          className="flex flex-col md:flex-row justify-between items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUpVariants}
        >
          <div className="mb-6 md:mb-0">
            <a 
              href="#" 
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('home');
              }}
              className="text-2xl font-bold tracking-tight"
            >
              <span className="text-primary-400">J</span>Doe
            </a>
            <p className="text-gray-400 mt-2 font-serif">
              Creating elegant solutions to complex problems
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6">
            {['home', 'projects', 'skills', 'experience', 'blog', 'contact'].map(section => (
              <a 
                key={section}
                href={`#${section}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(section);
                }}
                className="text-gray-400 hover:text-white transition-colors"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            ))}
          </div>
        </motion.div>
        
        <hr className="border-gray-800 my-8" />
        
        <motion.div 
          className="flex flex-col md:flex-row justify-between items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUpVariants}
        >
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} John Doe. All rights reserved.
          </p>
          
          <div className="mt-4 md:mt-0">
            <p className="text-gray-400 text-sm flex items-center">
              Designed and built with 
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-4 w-4 mx-1 text-primary-500" 
                viewBox="0 0 20 20" 
                fill="currentColor"
              >
                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
              </svg>
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
