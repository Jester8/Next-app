"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import img1 from "../../public/assets/img/img1.jpeg";
import img2 from "../../public/assets/img/img2.jpeg"; 
import img3 from "../../public/assets/img/img3.jpeg"; 
import img4 from "../../public/assets/img/img4.jpeg";

const slides = [
  {
    image: img1,
    title: "AI-Powered Learning",
    description: "Revolutionizing classrooms with adaptive learning algorithms"
  },
  {
    image: img2,
    title: "Virtual Classrooms",
    description: "Breaking geographical barriers in education"
  },
  {
    image: img3,
    title: "Smart Grading",
    description: "Automated assessment for faster feedback"
  },
  {
    image: img4,
    title: "Personalized Education",
    description: "Tailored learning paths for every student"
  }
];

const ImgCard = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div className="container mx-auto px-4 py-6 sm:py-12">
      <div className="mb-4 sm:mb-6">
        <h2 className="text-center text-white text-3xl font-medium">Transforming Education with AI</h2>
      </div>
      
      {/* Mobile Carousel - visible only on small screens */}
      <div className="relative block md:hidden">
        <div className="relative h-[300px] w-full overflow-hidden rounded-lg">
          <Image 
            src={slides[currentSlide].image} 
            alt={slides[currentSlide].title}
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
          <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black to-transparent flex flex-col justify-end items-center p-4 text-center">
            <h3 className="text-white text-2xl font-bold mb-2">{slides[currentSlide].title}</h3>
            <p className="text-white text-lg">{slides[currentSlide].description}</p>
          </div>
        </div>
        
        {/* Navigation Buttons */}
        <button 
          onClick={prevSlide}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-30 text-white p-2 rounded-full hover:bg-opacity-50 transition-all"
          aria-label="Previous slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button 
          onClick={nextSlide}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-30 text-white p-2 rounded-full hover:bg-opacity-50 transition-all"
          aria-label="Next slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
        
        {/* Indicators */}
        <div className="flex justify-center mt-4 space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 w-2 rounded-full ${currentSlide === index ? 'bg-white' : 'bg-gray-400'}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
      
      {/* Desktop Layout (2 columns) - hidden on small screens */}
      <div className="hidden md:grid grid-cols-2 gap-4">
        <div className="grid grid-cols-1 gap-4">
          {/* Left column - Image 1 */}
          <div className="relative h-[350px] w-full overflow-hidden rounded-lg group">
            <Image 
              src={img1} 
              alt="AI-Powered Learning" 
              fill
              sizes="50vw"
              className="object-cover"
              priority
            />
            <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black to-transparent flex flex-col justify-end items-center p-6 text-center">
              <h3 className="text-white text-2xl font-bold mb-2">AI-Powered Learning</h3>
              <p className="text-white">Revolutionizing classrooms with adaptive learning algorithms</p>
            </div>
          </div>
          
          {/* Left column - Image 3 */}
          <div className="relative h-[350px] w-full overflow-hidden rounded-lg group">
            <Image 
              src={img3} 
              alt="Smart Grading" 
              fill
              sizes="50vw"
              className="object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black to-transparent flex flex-col justify-end items-center p-6 text-center">
              <h3 className="text-white text-2xl font-bold mb-2">Smart Grading</h3>
              <p className="text-white">Automated assessment for faster feedback</p>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 gap-4">
          {/* Right column - Image 2 */}
          <div className="relative h-[450px] w-full overflow-hidden rounded-lg group">
            <Image 
              src={img2} 
              alt="Virtual Classrooms" 
              fill
              sizes="50vw"
              className="object-cover"
              priority
            />
            <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black to-transparent flex flex-col justify-end items-center p-6 text-center">
              <h3 className="text-white text-2xl font-bold mb-2">Virtual Classrooms</h3>
              <p className="text-white">Breaking geographical barriers in education</p>
            </div>
          </div>
          
          {/* Right column - Image 4 */}
          <div className="relative h-[350px] w-full overflow-hidden rounded-lg group">
            <Image 
              src={img4} 
              alt="Personalized Education" 
              fill
              sizes="50vw"
              className="object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black to-transparent flex flex-col justify-end items-center p-6 text-center">
              <h3 className="text-white text-2xl font-bold mb-2">Personalized Education</h3>
              <p className="text-white">Tailored learning paths for every student</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImgCard;