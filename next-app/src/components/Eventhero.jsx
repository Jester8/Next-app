"use client";
import React from 'react';
import Image from 'next/image';
import img from "../../public/assets/img/real2.jpeg";
import Link from 'next/link';

const Eventhero = () => {
  return (
    <div className="relative w-full">
      {/* Hero Background with Overlay */}
      <div className="relative h-64 md:h-72 w-full">  {/* Image with priority loading and fixed dimensions */}
      
        <div className="absolute inset-0 w-full h-full">
          <Image
            src={img}
            alt="About Us"
            fill
            className="object-cover"
            priority
            quality={100}
            style={{
              objectFit: 'cover',
              objectPosition: 'center'
            }}
          />
        </div>
        <div className="absolute inset-0 bg-gray bg-opacity-90">
          {/* Container for breadcrumbs and heading */}
          <div className="container mx-auto h-full px-4 flex flex-col justify-center">
            {/* Breadcrumbs */}
            <div className="flex items-center text-sm text-white mb-4 text-center">
              <Link href="/" className="hover:text-yellow-500 transition duration-300">
                Home
              </Link>
              <span className="mx-2">›</span>
              <span className="text-green-500">Events</span>
            </div>
            
            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Events
            </h1>
          </div>
        </div>
      </div>
      
      
    </div>
  );
}

export default Eventhero;