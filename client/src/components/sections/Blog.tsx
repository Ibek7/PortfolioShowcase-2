import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { blogPosts } from '@/data/portfolio-data';

const Blog = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
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
    <section id="blog" className="section py-24 bg-[#000000]">
      <div className="container mx-auto px-6 child-delay">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-[#FFD700] font-['Cinzel'] mb-4">Latest Articles</h2>
          <p className="text-white/70 max-w-xl mx-auto font-['Cormorant_Garamond'] text-lg">
            Thoughts, technical guides, and industry insights from my experience
          </p>
        </motion.div>
        
        <motion.div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {blogPosts.map((post, index) => (
            <motion.article 
              key={index}
              className="bg-black/40 backdrop-blur-md rounded-xl overflow-hidden border border-[#FFD700]/20 shadow-[0_0_15px_rgba(255,215,0,0.1)] hover:shadow-[0_0_20px_rgba(255,215,0,0.2)] transition-all"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className="h-48 overflow-hidden border-b border-[#FFD700]/20">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-[#FFD700]/70 mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-xl font-bold text-[#FFD700] font-['Cinzel'] mb-2">{post.title}</h3>
                <p className="text-white/70 font-['Cormorant_Garamond'] mb-4 text-lg">
                  {post.excerpt}
                </p>
                <a href={post.url} className="inline-block text-[#FFD700] font-medium hover:text-[#FFD700]/80 transition-colors border-b border-[#FFD700]/30 hover:border-[#FFD700]/60 pb-1">
                  Read Article →
                </a>
              </div>
            </motion.article>
          ))}
        </motion.div>
        
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <a href="#" className="inline-flex items-center px-8 py-3 bg-black/40 backdrop-blur-md border border-[#FFD700]/30 text-[#FFD700] rounded-lg font-['Cinzel'] font-medium transition-all hover:bg-black/60 hover:shadow-[0_0_15px_rgba(255,215,0,0.2)]">
            View All Articles
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;
