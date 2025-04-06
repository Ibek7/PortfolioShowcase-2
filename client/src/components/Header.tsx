import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface HeaderProps {
  activeSection: string;
}

const Header = ({ activeSection }: HeaderProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const scrollToSection = (sectionId: string) => {
    setIsOpen(false);
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };
  
  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'blog', label: 'Blog' },
    { id: 'contact', label: 'Contact' }
  ];
  
  return (
    <header className={`fixed w-full z-40 bg-white/80 backdrop-blur-md transition-all duration-300 ${scrolled ? 'shadow-md py-2' : 'py-4'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" onClick={() => scrollToSection('home')} className="text-2xl font-bold tracking-tight text-primary-800">
          <span className="text-primary-600">J</span>Doe
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map(link => (
            <a 
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(link.id);
              }}
              className={`nav-link text-gray-800 font-medium hover:text-primary-600 transition-colors ${activeSection === link.id ? 'active' : ''}`}
            >
              {link.label}
            </a>
          ))}
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-800 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>
      
      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white shadow-lg absolute top-full left-0 w-full"
          >
            <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
              {navLinks.map(link => (
                <a 
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.id);
                  }}
                  className="text-gray-800 font-medium py-2 hover:text-primary-600 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
