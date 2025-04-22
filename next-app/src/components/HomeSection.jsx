"use client"
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import img1 from "../../public/assets/img/real.jpeg";
import img2 from "../../public/assets/img/real2.jpeg";

const HomeSection = () => {
  const firstSectionRef = useRef(null);
  const secondSectionRef = useRef(null);

  useEffect(() => {
    // Animation for first section
    const firstSection = firstSectionRef.current;
    if (firstSection) {
      const textContent = firstSection.querySelector(".text-content");
      const imageContent = firstSection.querySelector(".image-content");
      
      textContent.classList.add("animate-slide-right");
      imageContent.classList.add("animate-slide-left");
    }
    
    // Animation for second section
    const secondSection = secondSectionRef.current;
    if (secondSection) {
      const textContent = secondSection.querySelector(".text-content");
      const imageContent = secondSection.querySelector(".image-content");
      
      textContent.classList.add("animate-slide-left");
      imageContent.classList.add("animate-slide-right");
    }
  }, []);

  return (
    <section className="w-full text-white bg-gradient-to-br from-green-900 via-black to-green-900 mt-8">
      {/* First Section */}
      <div ref={firstSectionRef} className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="w-full md:w-1/2 space-y-6 mb-8 md:mb-0 text-content opacity-0 transition-all duration-1000 ease-out">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              We are <span className="text-white">bringing</span>
              <br />
              <span className="text-emerald-400">technology</span> to the younger generation.
            </h1>
            <p className="text-gray-100 max-w-lg">
              Here at Next we are empowering the next generation of leaders through AI education and innovation.
            </p>
            <button className="flex items-center space-x-2 bg-transparent hover:bg-emerald-700 text-emerald-400 font-semibold hover:text-white py-2 px-4 border border-emerald-400 hover:border-transparent rounded-full transition duration-300">
              <div className="w-6 h-6 rounded-full border-2 border-emerald-400 flex items-center justify-center">
                <span className="text-emerald-400">→</span>
              </div>
              <span>Learn More</span>
            </button>
          </div>
          <div className="w-full md:w-1/2 flex justify-center image-content opacity-0 transition-all duration-1000 ease-out">
            <div className="relative w-full h-72 md:h-96">
              <Image 
                src={img1} 
                alt="Horizon Robotics Robot" 
                layout="fill" 
                objectFit="cover"
                className="rounded-lg transform hover:scale-105 transition-transform duration-500"
                priority
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Services Section */}
      <div ref={secondSectionRef} className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-10">
          <div className="w-full md:w-1/2 space-y-6 mb-8 md:mb-0 text-content opacity-0 transition-all duration-1000 ease-out">
            <h3 className="text-3xl md:text-4xl font-bold leading-tight">
              Revolutionizing Education:
              <br />
              <span className="text-emerald-400">The Next Generation</span>
            </h3>
            <p className="text-gray-100 max-w-lg">
              Next is bringing the much-needed change to education technology. We're bridging the digital 
              divide and empowering students with AI tools that enhance learning outcomes while preparing 
              them for tomorrow's challenges in an increasingly technological world.
            </p>
          </div>
          <div className="w-full md:w-1/2 flex justify-center image-content opacity-0 transition-all duration-1000 ease-out">
            <div className="relative w-full h-72 md:h-96">
              <Image 
                src={img2} 
                alt="Robotic Hand" 
                layout="fill" 
                objectFit="cover"
                className="rounded-lg transform hover:scale-105 transition-transform duration-500"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Add the styles for animations */}
      <style jsx>{`
        @keyframes slideRight {
          from { transform: translateX(-50px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        
        @keyframes slideLeft {
          from { transform: translateX(50px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        
        .animate-slide-right {
          animation: slideRight 1s forwards;
        }
        
        .animate-slide-left {
          animation: slideLeft 1s forwards;
        }
      `}</style>
    </section>
  );
};

export default HomeSection;