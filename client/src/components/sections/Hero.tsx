import { motion } from 'framer-motion';
import { useSmoothScroll } from '@/hooks/use-smooth-scroll';

const Hero = () => {
  const smoothScroll = useSmoothScroll({ 
    offset: 80, 
    duration: 1200,
    easing: (t) => {
      // Ultra-luxurious gold-inspired easing function
      return t < 0.5
        ? 4 * t * t * t
        : 1 - Math.pow(-2 * t + 2, 3) / 2;
    }
  });
  return (
    <section id="home" className="section pt-32 pb-24 overflow-hidden relative min-h-screen flex items-center">
      <div className="container mx-auto px-6 child-delay pt-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <motion.div 
            className="lg:w-1/2 text-white relative z-10"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative inline-block">
              <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-black/30 text-white rounded-full royal-card backdrop-blur-md mb-6 border border-[#FFD700]/20">
                Computer Science & Mathematics Student
              </span>
              <motion.span 
                className="absolute -right-2 -top-2 w-4 h-4 rounded-full bg-[#FFD700]"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              />
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-['Cinzel'] font-bold leading-tight mb-8">
              <span className="block">Bekam</span>
              <span className="block mt-1">
                <span className="gold-accent-glow" data-text="Guta">Guta</span>
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-white/80 font-['Cormorant_Garamond'] mb-10 max-w-xl leading-relaxed">
              First-year Computer Science and Mathematics double major at DePauw University with 
              a passion for AI research, web development, and tutoring. Maintaining a 3.97 GPA while exploring how
              technology can address complex social challenges.
            </p>
            
            <div className="flex flex-wrap gap-5">
              <motion.button 
                onClick={() => smoothScroll('projects')}
                className="royal-button px-8 py-4 rounded-lg font-medium text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ y: -5, boxShadow: "0 15px 30px rgba(0, 0, 0, 0.6), 0 0 20px rgba(255, 215, 0, 0.3)" }}
                whileTap={{ scale: 0.97 }}
              >
                Explore Portfolio
              </motion.button>
              
              <motion.button 
                onClick={() => smoothScroll('contact')}
                className="px-8 py-4 bg-transparent border border-[#FFD700] text-white rounded-lg font-medium hover:bg-[#FFD700]/10 transition-all duration-300 font-['Cinzel']"
                whileHover={{ 
                  backgroundColor: "rgba(255, 215, 0, 0.1)",
                  borderColor: "rgba(255, 215, 0, 0.8)",
                  boxShadow: "0 0 15px rgba(255, 215, 0, 0.3)"
                }}
                whileTap={{ scale: 0.97 }}
              >
                Get in Touch
              </motion.button>
            </div>
          </motion.div>
          
          <motion.div 
            className="lg:w-1/2 relative"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <div className="relative mx-auto">
              {/* Decorative hexagon */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-black/40 to-[#FFD700]/20 rounded-full blur-md z-0"></div>
              
              <div className="w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-2 gold-border shadow-[0_0_30px_rgba(255,215,0,0.3)] mx-auto relative z-10">
                <div className="absolute inset-0 bg-gradient-to-tr from-black to-[#111111] opacity-10"></div>
                <img 
                  src="https://images.unsplash.com/photo-1531384441138-2736e62e0919?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                  alt="Bekam Guta" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Decorative elements */}
              <motion.div 
                className="absolute -bottom-10 -left-10 w-28 h-28 royal-card rounded-lg flex items-center justify-center z-20"
                initial={{ rotate: 0 }}
                animate={{ rotate: 12 }}
                transition={{ 
                  duration: 6, 
                  repeat: Infinity, 
                  repeatType: "reverse" 
                }}
              >
                <svg viewBox="0 0 24 24" className="w-14 h-14 gold-accent" fill="currentColor">
                  <path d="M12 14.184c-6.002 0-10.886 4.148-11.98 9.541 2.075-4.049 4.446-5.513 11.98-5.513 7.534 0 9.905 1.464 11.98 5.513-1.095-5.393-5.978-9.541-11.98-9.541z" />
                  <path d="M12 8.046c4.526 0 8.2 3.674 8.2 8.2v1.607c1.954-.291 3.683-.955 5.089-1.937A13.225 13.225 0 0012 0C6.433 0 1.686 3.361.286 8.049 2.09 9.708 5.822 11.046 12 11.046c6.178 0 9.91-1.338 11.714-2.997-1.528-5.127-6.077-9.033-11.714-9.033a13.225 13.225 0 00-8.285 2.909 13.291 13.291 0 014.222-5.518C9.074 9.4 10.128 12.2 12 12.2c1.871 0 2.926-2.799 4.063-5.789 1.786 1.127 3.326 2.666 4.452 4.453-2.987 1.135-5.79 2.188-5.79 4.057 0 1.87 2.803 2.921 5.79 4.057-1.126 1.787-2.666 3.326-4.452 4.453-1.137-2.99-2.192-5.789-4.063-5.789-1.872 0-2.926 2.799-4.063 5.789-1.786-1.127-3.326-2.666-4.452-4.453 2.987-1.136 5.79-2.189 5.79-4.057s-2.803-2.921-5.79-4.057c1.126-1.787 2.666-3.326 4.452-4.453 1.137 2.99 2.191 5.789 4.063 5.789z" />
                </svg>
              </motion.div>
              
              <motion.div 
                className="absolute -top-8 -right-8 w-24 h-24 royal-card rounded-lg flex items-center justify-center z-20"
                initial={{ rotate: 0 }}
                animate={{ rotate: -6 }}
                transition={{ 
                  duration: 5, 
                  repeat: Infinity, 
                  repeatType: "reverse" 
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 gold-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </motion.div>
              
              <motion.div 
                className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 w-14 h-14 royal-card rounded-full flex items-center justify-center z-10"
                animate={{ 
                  scale: [1, 1.1, 1],
                  opacity: [0.8, 1, 0.8]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 gold-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </motion.div>
            </div>
          </motion.div>
        </div>
        
        {/* Stats with royal styling */}
        <div className="flex flex-wrap justify-center md:justify-start gap-x-16 gap-y-8 mt-24 text-white/80">
          {[
            { number: "3.97", label: "Cumulative GPA" },
            { number: "4.00", label: "Major GPA" },
            { number: "82%", label: "AI Research Accuracy" },
            { number: "2", label: "Academic Honor Awards" }
          ].map((stat, index) => (
            <motion.div 
              key={index}
              className="text-center relative group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
            >
              <motion.div 
                className="absolute -inset-3 rounded-lg border border-[#FFD700]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                animate={{
                  borderColor: ["rgba(255, 215, 0, 0.1)", "rgba(255, 215, 0, 0.3)", "rgba(255, 215, 0, 0.1)"],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              />
              <p className="text-4xl font-bold gold-accent font-['Cinzel']">{stat.number}</p>
              <p className="text-sm mt-1 text-white/70 font-['Cormorant_Garamond']">{stat.label}</p>
            </motion.div>
          ))}
        </div>
        
        {/* Enhanced scroll indicator with ultra-luxurious styling */}
        <motion.div 
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center cursor-pointer gold-shimmer"
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: 1,
            y: [0, 10, 0]
          }}
          transition={{ 
            delay: 1.2, 
            duration: 2,
            y: {
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
          onClick={() => smoothScroll('projects')}
          whileHover={{ scale: 1.1 }}
        >
          <p className="gold-accent-glow mb-3 font-['Cinzel'] text-sm tracking-widest" data-text="EXPLORE">EXPLORE</p>
          
          <div className="relative w-8 h-12 flex items-center justify-center">
            {/* Outer decorative frame */}
            <motion.div 
              className="absolute inset-0 border border-[#FFD700]/50 rounded-full"
              animate={{
                boxShadow: ["0 0 5px rgba(255, 215, 0, 0.3)", "0 0 10px rgba(255, 215, 0, 0.6)", "0 0 5px rgba(255, 215, 0, 0.3)"],
                borderColor: ["rgba(255, 215, 0, 0.3)", "rgba(255, 215, 0, 0.7)", "rgba(255, 215, 0, 0.3)"],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            
            {/* Inner animated circle */}
            <motion.div 
              className="w-2 h-2 rounded-full bg-[#FFD700] absolute z-10"
              animate={{ 
                y: [-5, 5, -5],
                boxShadow: [
                  "0 0 5px rgba(255, 215, 0, 0.6), 0 0 10px rgba(255, 215, 0, 0.3)",
                  "0 0 10px rgba(255, 215, 0, 0.8), 0 0 20px rgba(255, 215, 0, 0.5)",
                  "0 0 5px rgba(255, 215, 0, 0.6), 0 0 10px rgba(255, 215, 0, 0.3)"
                ]
              }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            {/* Decorative arrow */}
            <motion.svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="absolute bottom-0 w-4 h-4 text-[#FFD700]" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
              animate={{
                y: [0, 2, 0],
                opacity: [0.7, 1, 0.7]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5
              }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </motion.svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
