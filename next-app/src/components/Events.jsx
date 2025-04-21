"use client"
import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import img from "../../public/assets/img/new.jpg"
import Link from 'next/link'

const Events = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Event details content component for mobile to avoid duplication
  const MobileEventContent = () => (
    <>
      <h2 className="text-3xl font-bold text-white mb-4 text-center">AI or Die Tour – UI Edition!</h2>
      <p className="text-md text-gray-300 mb-4 text-center">
        Join global AI expert Alexander Morad on May 1st, 2025, at 10 AM at the University of Ibadan, 
        Faculty of Science. Discover how Generative AI is reshaping content, business, and education—powered by NEXT.
      </p>
      
      <p className="text-md text-gray-300 mb-4 text-center">
        The future is unfolding right before our eyes—are you ready to step into it?
        Join us on this revolutionary tour into the world of Generative AI!
      </p>
      
      <p className="text-md text-gray-300 mb-4 text-center">
        "What AI cannot do DOES NOT exist." — Bold claim or undeniable reality? Let's put it to the test with Alexander Morad on May 1st, 2025!
      </p>
      
      <p className="text-md text-gray-300 mb-4 text-center">
        From creativity to problem-solving, AI is rewriting the rules. Don't just hear about the future—experience it firsthand.
      </p>
      
      <div className="bg-gray-900 p-4 rounded-lg mb-6 text-center">
        <p className="text-white font-medium mb-1">
          📍 Faculty of Science, Large Lecture Theatre, University of Ibadan
        </p>
        <p className="text-white font-medium mb-1">
          ⏰ 10 AM WAT
        </p>
        <p className="text-white font-medium">
          🚀 Innovate. Educate. Elevate. See you there!
        </p>
      </div>
      
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <Link href="https://lu.ma/lhqpus4f" target="_blank" rel="noopener noreferrer" 
          className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors">
          Registration Link
        </Link>
        
        <Link href="https://chat.whatsapp.com/CjtXm6u9yOt2fnCR2DzloZ" target="_blank" rel="noopener noreferrer" 
          className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-green-600 text-white font-medium hover:bg-green-700 transition-colors">
          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          Join WhatsApp Group
        </Link>
      </div>
    </>
  );

  // Desktop content component with left alignment for text
  const DesktopEventContent = () => (
    <>
      <h2 className="text-3xl font-bold text-white mb-4">AI or Die Tour – UI Edition!</h2>
      <p className="text-md text-gray-300 mb-4">
        Join global AI expert Alexander Morad on May 1st, 2025, at 10 AM at the University of Ibadan, 
        Faculty of Science. Discover how Generative AI is reshaping content, business, and education—powered by NEXT.
      </p>
      
      <p className="text-md text-gray-300 mb-4">
        The future is unfolding right before our eyes—are you ready to step into it?
        Join us on this revolutionary tour into the world of Generative AI!
      </p>
      
      <p className="text-md text-gray-300 mb-4">
        "What AI cannot do DOES NOT exist." — Bold claim or undeniable reality? Let's put it to the test with Alexander Morad on May 1st, 2025!
      </p>
      
      <p className="text-md text-gray-300 mb-4">
        From creativity to problem-solving, AI is rewriting the rules. Don't just hear about the future—experience it firsthand.
      </p>
      
      <div className="bg-gray-900 p-4 rounded-lg mb-6">
        <p className="text-white font-medium mb-1">
          📍 Faculty of Science, Large Lecture Theatre, University of Ibadan
        </p>
        <p className="text-white font-medium mb-1">
          ⏰ 10 AM WAT
        </p>
        <p className="text-white font-medium">
          🚀 Innovate. Educate. Elevate. See you there!
        </p>
      </div>
      
      <div className="flex flex-col sm:flex-row items-center justify-start gap-4">
        <Link href="https://lu.ma/lhqpus4f" target="_blank" rel="noopener noreferrer" 
          className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors">
          Registration Link
        </Link>
        
        <Link href="https://chat.whatsapp.com/CjtXm6u9yOt2fnCR2DzloZ" target="_blank" rel="noopener noreferrer" 
          className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-green-600 text-white font-medium hover:bg-green-700 transition-colors">
          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          Join WhatsApp Group
        </Link>
      </div>
    </>
  );

  return (
    <section className="py-16 bg-black">
      <div className="container mx-auto px-4 md:px-6 mb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-white text-center">Events</h1>
      </div>
      
      {/* Desktop/Laptop View - Image Left, Text Right */}
      <div 
        ref={sectionRef} 
        className="hidden md:flex container mx-auto px-4 md:px-6 flex-row items-center justify-between gap-12 opacity-0 translate-x-[-100px] transition-all duration-1000 ease-out"
      >
        <div className="w-1/2">
          <Image
            src={img}
            alt="AI or Die Tour"
            className="rounded-lg shadow-lg object-cover h-auto w-full"
            priority
          />
        </div>
        
        <div className="w-1/2">
          <DesktopEventContent />
        </div>
      </div>

      {/* Mobile View - Centered content */}
      <div 
        className="md:hidden container mx-auto px-4 flex flex-col items-center justify-center gap-8"
      >
        <div className="w-full mb-4 flex justify-center">
          <Image
            src={img}
            alt="AI or Die Tour"
            className="rounded-lg shadow-lg object-cover h-auto w-full max-w-sm mx-auto"
            priority
          />
        </div>
        
        <div className="w-full">
          <MobileEventContent />
        </div>
      </div>
    </section>
  );
};

export default Events;