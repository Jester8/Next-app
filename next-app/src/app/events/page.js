"use client";
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Events from '@/components/Events';
import Eventhero from '@/components/Eventhero';
import Video from '@/components/Video';

const EventsPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-black">
      {/* Navigation */}
      <Navbar />
      
      {/* Main Content */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Eventhero />
        
        {/* Events Listing Section */}
        <section className="container mx-auto px-4 py-12 md:py-16">
          <Events />
        </section>

      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default EventsPage;