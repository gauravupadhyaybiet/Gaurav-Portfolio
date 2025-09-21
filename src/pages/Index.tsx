
import React, { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ScrollAnimator from '@/components/ScrollAnimator';

const Index = () => {
  useEffect(() => {
    document.title = "Your Name | Software Engineer Portfolio";
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />
      <ScrollAnimator />
      <Hero />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
