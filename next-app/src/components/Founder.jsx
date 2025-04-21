"use client";
import React from 'react';
import Image from 'next/image';
import img from "../../public/assets/img/founder.jpg";
import { motion } from 'framer-motion';

const Founder = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div 
      className="container mx-auto px-4 py-16 md:py-24"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Founder Image */}
        <motion.div 
          className="relative h-80 md:h-96 rounded-xl overflow-hidden shadow-xl"
          variants={itemVariants}
        >
          <Image
            src={img}
            alt="Adesioye Taiwo - Founder of NEXT"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </motion.div>

        {/* Founder Content */}
        <motion.div 
          className="space-y-6"
          variants={containerVariants}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-gray-200"
            variants={itemVariants}
          >
            Meet Our Founder
          </motion.h2>
          
          <motion.p 
            className="text-md text-gray-100 leading-relaxed"
            variants={itemVariants}
          >
            Adesioye Taiwo is the visionary founder of NEXT, a pioneering initiative committed to equipping young Africans with essential tech skills from an early age.
          </motion.p>
          
          <motion.p 
            className="text-md text-gray-100 leading-relaxed"
            variants={itemVariants}
          >
            With a deep passion for education, innovation, and the future of work, he launched NEXT to bridge the gap between traditional schooling and the demands of the digital age.
          </motion.p>
          
          <motion.p 
            className="text-md text-gray-100 leading-relaxed"
            variants={itemVariants}
          >
            Under his leadership, NEXT is transforming how students engage with technology, empowering the next generation of creators, problem-solvers, and leaders across the continent.
          </motion.p>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Founder;