import React from 'react';
import Image from 'next/image';
import about from "../../public/assets/img/about (2).png";

const AboutHero = () => {
  return (
    <div className="bg-black text-white py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Column - Text Content */}
          <div>
            <div className="mb-6">
              <p className="text-sm mb-1">About Us</p>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">
                <span>Empowering </span>
                <span className="text-emerald-400">People</span>
                <span> By</span>
              </h1>
              <h2 className="text-3xl md:text-4xl font-bold">Keeping Them Well</h2>
            </div>
            
            <p className="text-gray-400 text-sm mb-8">
              Implementing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document.
            </p>
            
            {/* Machine Learning Sections */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="relative h-12 w-12">
                  <div className="absolute inset-0 bg-emerald-400 opacity-20 rounded-full"></div>
                  <div className="absolute inset-2 border-2 border-emerald-400 rounded-full"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-emerald-400 font-bold">75%</span>
                  </div>
                </div>
                <div>
                  <h3 className="font-medium">Machine Learning</h3>
                  <p className="text-gray-400 text-sm">
                    In publishing and graphic design, Lorem ipsum is a placeholder text commonly.
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="relative h-12 w-12">
                  <div className="absolute inset-0 bg-emerald-400 opacity-20 rounded-full"></div>
                  <div className="absolute inset-2 border-2 border-emerald-400 rounded-full"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-emerald-400 font-bold">85%</span>
                  </div>
                </div>
                <div>
                  <h3 className="font-medium">Machine Learning</h3>
                  <p className="text-gray-400 text-sm">
                    In publishing and graphic design, Lorem ipsum is a placeholder text commonly.
                  </p>
                </div>
              </div>
            </div>
            
            <button className="mt-8 px-6 py-2 border border-gray-600 text-sm font-medium rounded hover:bg-gray-800 transition-colors">
              Click Here
            </button>
          </div>
          
          {/* Right Column - Image */}
          <div className="flex justify-center md:justify-end">
            <div className="relative w-full h-90 ">
              <Image 
                src={about} 
                alt="AI Visualization" 
                layout="fill" 
                objectFit="contain"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;