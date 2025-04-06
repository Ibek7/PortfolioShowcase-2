import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="section pt-32 pb-24 overflow-hidden bg-gradient">
      <div className="container mx-auto px-6 child-delay">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <motion.div 
            className="lg:w-1/2 text-white"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-3 py-1 text-xs font-semibold bg-white/10 text-white/90 rounded-full backdrop-blur-sm mb-6">
              Software Engineer & Full-Stack Developer
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              Hello, I'm <span className="text-primary-300">John Doe</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 font-serif mb-8 max-w-xl">
              I create elegant solutions to complex problems. Specializing in
              full-stack development with a focus on user experience and performance.
            </p>
            <div className="flex flex-wrap gap-4">
              <motion.a 
                href="#projects" 
                className="px-6 py-3 bg-white text-primary-800 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                View Projects
              </motion.a>
              <motion.a 
                href="#contact" 
                className="px-6 py-3 bg-transparent border border-white text-white rounded-lg font-medium hover:bg-white/10 transition-all duration-300"
                whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Me
              </motion.a>
            </div>
          </motion.div>
          
          <motion.div 
            className="lg:w-1/2 relative"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <div className="w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl mx-auto relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-700 to-primary-400 opacity-20"></div>
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                alt="John Doe" 
                className="w-full h-full object-cover"
              />
            </div>
            
            <motion.div 
              className="absolute -bottom-10 -left-10 w-24 h-24 rounded-lg bg-white shadow-lg flex items-center justify-center"
              initial={{ rotate: 0 }}
              animate={{ rotate: 12 }}
              transition={{ duration: 0.6 }}
            >
              <svg viewBox="0 0 24 24" className="w-12 h-12 text-primary-500" fill="currentColor">
                <path d="M12 14.184c-6.002 0-10.886 4.148-11.98 9.541 2.075-4.049 4.446-5.513 11.98-5.513 7.534 0 9.905 1.464 11.98 5.513-1.095-5.393-5.978-9.541-11.98-9.541z" />
                <path d="M12 8.046c4.526 0 8.2 3.674 8.2 8.2v1.607c1.954-.291 3.683-.955 5.089-1.937A13.225 13.225 0 0012 0C6.433 0 1.686 3.361.286 8.049 2.09 9.708 5.822 11.046 12 11.046c6.178 0 9.91-1.338 11.714-2.997-1.528-5.127-6.077-9.033-11.714-9.033a13.225 13.225 0 00-8.285 2.909 13.291 13.291 0 014.222-5.518C9.074 9.4 10.128 12.2 12 12.2c1.871 0 2.926-2.799 4.063-5.789 1.786 1.127 3.326 2.666 4.452 4.453-2.987 1.135-5.79 2.188-5.79 4.057 0 1.87 2.803 2.921 5.79 4.057-1.126 1.787-2.666 3.326-4.452 4.453-1.137-2.99-2.192-5.789-4.063-5.789-1.872 0-2.926 2.799-4.063 5.789-1.786-1.127-3.326-2.666-4.452-4.453 2.987-1.136 5.79-2.189 5.79-4.057s-2.803-2.921-5.79-4.057c1.126-1.787 2.666-3.326 4.452-4.453 1.137 2.99 2.191 5.789 4.063 5.789z" />
              </svg>
            </motion.div>
            
            <motion.div 
              className="absolute -top-5 -right-5 w-20 h-20 rounded-lg bg-white shadow-lg flex items-center justify-center"
              initial={{ rotate: 0 }}
              animate={{ rotate: -6 }}
              transition={{ duration: 0.6 }}
            >
              <svg viewBox="0 0 24 24" className="w-10 h-10 text-green-600" fill="currentColor">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2.18c5.423 0 9.82 4.398 9.82 9.82 0 5.423-4.398 9.82-9.82 9.82-5.423 0-9.82-4.398-9.82-9.82 0-5.423 4.398-9.82 9.82-9.82zm-1.603 5.835c-.072 0-.144.025-.205.075a.278.278 0 00-.088.22v5.543c0 .113.03.195.089.246.059.05.132.076.216.076.084 0 .168-.026.253-.076l4.048-2.772c.072-.05.113-.12.113-.216s-.041-.171-.113-.22l-4.078-2.777a.458.458 0 00-.235-.098z" />
              </svg>
            </motion.div>
          </motion.div>
        </div>
        
        <div className="flex flex-wrap justify-center md:justify-start gap-x-12 gap-y-6 mt-20 text-white/80">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.4 }}
          >
            <p className="text-3xl font-bold text-white">5+</p>
            <p className="text-sm mt-1">Years Experience</p>
          </motion.div>
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.4 }}
          >
            <p className="text-3xl font-bold text-white">50+</p>
            <p className="text-sm mt-1">Projects Completed</p>
          </motion.div>
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.4 }}
          >
            <p className="text-3xl font-bold text-white">20+</p>
            <p className="text-sm mt-1">Happy Clients</p>
          </motion.div>
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.4 }}
          >
            <p className="text-3xl font-bold text-white">1000+</p>
            <p className="text-sm mt-1">GitHub Contributions</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
