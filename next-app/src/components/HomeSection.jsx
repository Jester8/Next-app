"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import img1 from "../../public/assets/img/robot.png";
import img2 from "../../public/assets/img/rob2.png";

const SkeletonLoader = () => (
  <div className="w-full space-y-4 animate-pulse">
    <div className="h-12 bg-gray-300 rounded w-3/4"></div>
    <div className="h-10 bg-gray-300 rounded w-1/2"></div>
    <div className="h-20 bg-gray-300 rounded w-full"></div>
    <div className="h-10 bg-gray-300 rounded w-1/4"></div>
  </div>
);

const HomeSection = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate content loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="w-full bg-black text-white">
      {/* First Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="w-full md:w-1/2 space-y-6 mb-8 md:mb-0">
            {loading ? (
              <SkeletonLoader />
            ) : (
              <>
                <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                  We are  <span className="text-white">Horizon</span>
                  <br />
                  <span className="text-emerald-400">Robotics</span> Handle It,
                </h1>
                <p className="text-gray-300 max-w-lg">
                  In publishing and graphic design, Lorem ipsum is a placeholder text 
                  commonly used to demonstrate the visual form of a document.
                </p>
                <button className="flex items-center space-x-2 bg-transparent hover:bg-emerald-700 text-emerald-400 font-semibold hover:text-white py-2 px-4 border border-emerald-400 hover:border-transparent rounded-full transition duration-300">
                  <div className="w-6 h-6 rounded-full border-2 border-emerald-400 flex items-center justify-center">
                    <span className="text-emerald-400">→</span>
                  </div>
                  <span>Learn More</span>
                </button>
              </>
            )}
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            {loading ? (
              <div className="w-full h-64 md:h-96 bg-gray-800 rounded-lg animate-pulse"></div>
            ) : (
              <div className="relative w-full h-64 md:h-96">
                <Image 
                  src={img1} 
                  alt="Horizon Robotics Robot" 
                  layout="fill" 
                  objectFit="contain"
                  className="transform hover:scale-105 transition-transform duration-500"
                  priority
                />
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Services Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row-reverse items-center justify-between">
          <div className="w-full md:w-1/2 space-y-6 mb-8 md:mb-0">
            {loading ? (
              <SkeletonLoader />
            ) : (
              <>
                <h2 className="text-md md:text-md font-bold">Services</h2>
                <h3 className="text-3xl md:text-4xl font-bold leading-tight">
                  Promising Care:
                  <br />
                  <span className="text-emerald-400">Right At Home</span>
                </h3>
                <p className="text-gray-300 max-w-lg">
                  In publishing and graphic design, Lorem ipsum is a placeholder text 
                  commonly used to demonstrate the visual form of a document.
                </p>
              </>
            )}
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            {loading ? (
              <div className="w-full h-64 md:h-80 bg-gray-800 rounded-lg animate-pulse"></div>
            ) : (
              <div className="relative w-full h-64 md:h-80">
                <Image 
                  src={img2} 
                  alt="Robotic Hand" 
                  layout="fill" 
                  objectFit="contain"
                  className="transform hover:scale-105 transition-transform duration-500"
                  priority
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;