"use client"
import React from 'react'
import Image from 'next/image'
import img from "../../public/assets/img/ai.jpg"

const Ai = () => {
  return (
    <>
      {/* Desktop/Tablet Version */}
      <div className="relative w-full h-48 md:h-64 lg:h-80 overflow-hidden bg-black shadow-sm shadow-green-400 hidden sm:block">
        {/* Background - now restricted to left side */}
        <div className="absolute top-0 left-0 h-full w-1/2">
          <Image
            src={img}
            alt="AI Technology"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
        </div>
        
        {/* Content Overlay - text positioned on right side */}
        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-4 md:px-8">
            <div className="flex flex-col max-w-lg ml-auto">
              <h1 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
                Artificial Intelligence
                <br />
                Is The New Big Thing
                <br />
                In <span className="text-emerald-400">Technology</span>
              </h1>
              
              <div className="mt-6">
                <button className="bg-transparent hover:bg-emerald-400 hover:bg-opacity-20 text-white text-sm border border-gray-600 px-6 py-2 rounded-sm transition-all duration-300">
                  Click Here
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Version */}
      <div className="relative w-full overflow-hidden bg-black shadow-sm shadow-green-400 sm:hidden">
        <div className="flex flex-row">
          {/* Mobile Image - Left side, reduced size */}
          <div className="relative w-2/3 h-40">
            <Image
              src={img}
              alt="AI Technology"
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
          </div>
          
          {/* Mobile Content - Right side */}
          <div className="w-2/3 p-3 flex items-center">
            <div className="flex flex-col">
              <h1 className="text-white text-lg font-bold  ml-3 leading-tight">
                Artificial Intelligence
                <br />
                Is The New Big Thing
                <br />
                In <span className="text-emerald-400">Technology</span>
              </h1>
              
              <div className="mt-1 ml-3">
                <button className="bg-transparent hover:bg-emerald-400 hover:bg-opacity-20 text-white text-xs border border-gray-600 px-4 py-1 rounded-sm transition-all duration-300">
                  Click Here
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Ai