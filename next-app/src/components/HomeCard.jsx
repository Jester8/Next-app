"use client"
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import img3 from "../../public/assets/img/rob3.png"
import img4 from "../../public/assets/img/rob4.png"
import img5 from "../../public/assets/img/rob5.png"
import img6 from "../../public/assets/img/rob6.png"

const CardSkeleton = () => (
  <div className="bg-gray-900 rounded-lg p-4 animate-pulse">
    <div className="w-full h-48 bg-gray-800 rounded-md mb-4"></div>
    <div className="flex items-center mb-3">
      <div className="w-10 h-10 bg-gray-800 rounded-full mr-2"></div>
      <div className="h-6 bg-gray-800 rounded w-1/2"></div>
    </div>
    <div className="h-4 bg-gray-800 rounded w-3/4 mb-2"></div>
    <div className="h-4 bg-gray-800 rounded w-full mb-4"></div>
    <div className="flex items-center">
      <div className="h-4 bg-gray-800 rounded w-1/4"></div>
      <div className="h-4 bg-gray-800 rounded w-4 ml-2"></div>
    </div>
  </div>
);

const FeatureCard = ({ image, icon, title, description }) => {
  return (
    <div className="bg-black  shadow-emerald-400 shadow-sm  rounded-md overflow-hidden transform transition-transform duration-300 hover:scale-105">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-2/5">
          <div className="relative h-40 w-full">
            <Image 
              src={image} 
              alt={title}
              layout="fill"
              objectFit="cover"
              className="transition-opacity duration-300 hover:opacity-90"
            />
          </div>
        </div>
        <div className="md:w-3/5 p-6 text-white">
          <div className="flex items-center mb-3">
            <div className="w-10 h-10 rounded-full bg-transparent flex items-center justify-center mr-3">
              <div className="text-emeraald-400">
                {icon}
              </div>
            </div>
            <h3 className="text-lg font-semibold">{title}</h3>
          </div>
          <p className="text-gray-400 text-sm mb-4">{description}</p>
          <div className="flex items-center text-emerald-400 text-sm font-medium">
            <span>Services</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

const HomeCard = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate content loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);

  const featureCards = [
    {
      image: img3,
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" strokeWidth="2" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
      </svg>,
      title: "Machine Learning",
      description: "In publishing and graphic design, Lorem ipsum is a placeholder."
    },
    {
      image: img6,
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>,
      title: "Machine Learning",
      description: "In publishing and graphic design, Lorem ipsum is a placeholder."
    },
    {
      image: img4,
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" strokeWidth="2" />
        <path d="M12 16a4 4 0 100-8 4 4 0 000 8z" fill="currentColor" />
      </svg>,
      title: "Machine Learning",
      description: "In publishing and graphic design, Lorem ipsum is a placeholder."
    },
    {
      image: img5,
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>,
      title: "Machine Learning",
      description: "In publishing and graphic design, Lorem ipsum is a placeholder."
    }
  ];

  return (
    <section className="w-full bg-black py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 gap-6">
          {loading ? (
            <>
              <CardSkeleton />
              <CardSkeleton />
              <CardSkeleton />
              <CardSkeleton />
            </>
          ) : (
            featureCards.map((card, index) => (
              <FeatureCard 
                key={index}
                image={card.image}
                icon={card.icon}
                title={card.title}
                description={card.description}
              />
            ))
          )}
        </div>
      </div>
    </section>
  )
}

export default HomeCard