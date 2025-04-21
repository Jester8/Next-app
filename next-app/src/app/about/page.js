"use client";
import React from 'react';
import Navbar from '@/components/Navbar';
import Aboutcrumbs from '@/components/Aboutcrumbs';
import AboutHero from '@/components/AboutHero';
import Footer from '@/components/Footer';
import Founder from '@/components/Founder';

const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <Navbar />
      
      {/* Main Content - About Page */}
      <main className="flex-grow">
        <Aboutcrumbs />
        <AboutHero/>
        
      </main>
        <Founder/>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AboutPage;