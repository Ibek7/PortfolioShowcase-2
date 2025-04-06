import { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { frontendSkills, backendSkills, devopsSkills, dataVisualizationSkills } from '@/data/portfolio-data';

interface SkillBarProps {
  name: string;
  percentage: number;
  delay?: number;
}

const SkillBar = ({ name, percentage, delay = 0 }: SkillBarProps) => {
  const skillRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(skillRef, { once: true, margin: "-100px 0px" });
  
  return (
    <div ref={skillRef}>
      <div className="flex justify-between mb-2">
        <span className="font-medium text-gray-800">{name}</span>
        <span className="text-gray-600">{percentage}%</span>
      </div>
      <div className="skill-bar h-2 bg-gray-200 rounded-full">
        <motion.div 
          className="skill-progress h-full bg-primary-600 rounded-full"
          initial={{ width: "0%" }}
          animate={isInView ? { width: `${percentage}%` } : { width: "0%" }}
          transition={{ duration: 1, delay: delay, ease: "easeOut" }}
        />
      </div>
    </div>
  );
};

const SkillCategory = ({ title, skills, delayOffset = 0 }: { title: string, skills: any[], delayOffset?: number }) => {
  return (
    <>
      <h3 className="text-xl font-bold mb-6 text-gray-900">{title}</h3>
      
      <div className="space-y-6">
        {skills.map((skill, index) => (
          <SkillBar 
            key={skill.name}
            name={skill.name}
            percentage={skill.percentage}
            delay={delayOffset + (index * 0.1)}
          />
        ))}
      </div>
    </>
  );
};

const Skills = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };
  
  return (
    <section id="skills" className="section py-24 bg-gray-50">
      <div ref={ref} className="container mx-auto px-6 child-delay">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Technical Skills</h2>
          <p className="text-gray-600 max-w-xl mx-auto font-serif">
            Technologies and tools I've mastered throughout my professional journey
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants}>
            <SkillCategory 
              title="Front-End Development" 
              skills={frontendSkills} 
            />
            
            <div className="mt-12">
              <SkillCategory 
                title="Data Visualization" 
                skills={dataVisualizationSkills} 
                delayOffset={0.4}
              />
            </div>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <SkillCategory 
              title="Back-End Development" 
              skills={backendSkills} 
            />
            
            <div className="mt-12">
              <SkillCategory 
                title="DevOps & Tools" 
                skills={devopsSkills} 
                delayOffset={0.4}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
