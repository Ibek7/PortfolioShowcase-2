import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/CustomCursor';
import Hero from '@/components/sections/Hero';
import Projects from '@/components/sections/Projects';
import Skills from '@/components/sections/Skills';
import Experience from '@/components/sections/Experience';
import Blog from '@/components/sections/Blog';
import Contact from '@/components/sections/Contact';
import { useScrollSpy } from '@/hooks/use-scroll-spy';

const Home = () => {
  const activeSection = useScrollSpy({
    sectionIds: ['home', 'projects', 'skills', 'experience', 'blog', 'contact'],
    offset: 200
  });

  return (
    <>
      <CustomCursor />
      <Header activeSection={activeSection} />
      
      <main>
        <Hero />
        <Projects />
        <Skills />
        <Experience />
        <Blog />
        <Contact />
      </main>
      
      <Footer />
    </>
  );
};

export default Home;
