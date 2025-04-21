"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import logo from "../../public/assets/logo/logo.png"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="w-full bg-black py-4 px-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="text-white text-3xl font-bold">
            NEXT
          </Link>
        </div>

        {/* Navigation Links - Desktop */}
        <div className="hidden md:flex items-center space-x-8">
          <NavLink href="/" active>Home</NavLink>
          <NavLink href="/about">About</NavLink>
          <NavLink href="/events">Events</NavLink>
          <NavLink href="/contact">Contact</NavLink>
         
        </div>

        {/* Contact Us Button - Desktop */}
        <div className="hidden md:block">
          <Link href="https://chat.whatsapp.com/CjtXm6u9yOt2fnCR2DzloZ" className="border border-white text-white hover:bg-white/10 transition-colors duration-300 rounded-full px-6 py-2">
            Join us
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 focus:outline-none z-50"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <motion.span 
            className="w-6 h-0.5 bg-white block"
            animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
          />
          <motion.span 
            className="w-6 h-0.5 bg-white block"
            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
          <motion.span 
            className="w-6 h-0.5 bg-white block"
            animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <motion.div 
        className="md:hidden fixed inset-0 bg-black z-40 pt-20 px-6"
        initial={{ opacity: 0, y: "-100%" }}
        animate={isOpen ? 
          { opacity: 1, y: 0 } : 
          { opacity: 0, y: "-100%", transition: { delay: 0.2 } }
        }
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <div className="flex flex-col space-y-6 items-center text-xl">
          <MobileNavLink href="/" active onClick={toggleMenu}>Home</MobileNavLink>
          <MobileNavLink href="/about" onClick={toggleMenu}>About</MobileNavLink>
          <MobileNavLink href="/events" onClick={toggleMenu}>Events</MobileNavLink>
    
         
          
          <div className="pt-4">
            <Link 
              href="/contact" 
              className="border border-white text-white hover:bg-white/10 transition-colors duration-300 rounded-full px-8 py-3"
              onClick={toggleMenu}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </motion.div>
    </nav>
  )
}

// Helper component for navigation links
const NavLink = ({ href, children, active = false }) => {
  return (
    <Link 
      href={href} 
      className={`${
        active ? 'text-green-500' : 'text-white'
      } hover:text-green-500 transition-colors duration-300`}
    >
      {children}
    </Link>
  )
}
const MobileNavLink = ({ href, children, active = false, onClick }) => {
  return (
    <Link 
      href={href} 
      className={`${
        active ? 'text-green-500' : 'text-white'
      } hover:text-green-500 transition-colors duration-300 text-center w-full`}
      onClick={onClick}
    >
      {children}
    </Link>
  )
}

export default Navbar