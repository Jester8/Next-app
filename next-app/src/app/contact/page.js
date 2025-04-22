'use client'; 

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Krumbs from '@/components/Krumbs';
import Image from 'next/image';
import img from "../../../public/assets/img/img4.jpeg";
import { Send, Phone, Mail, MapPin } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    // Reset form after submission
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Navbar />
      <Krumbs />
      <main className="flex-grow">
        <div className="w-full py-12 px-4 md:px-8 lg:px-16">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-white">Contact Us</h1>
          
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Image and Contact Info Section */}
            <div className="bg-gray-900 p-6 rounded-lg">
              <div className="relative h-64 w-full mb-6 overflow-hidden rounded-lg">
                <div className="absolute inset-0  to-transparent z-10 rounded-lg" />
                <Image 
                  src={img} 
                  alt="Contact Us" 
                  fill
                  className="object-cover"
                />
              </div>
              
              <h2 className="text-2xl font-semibold mb-6 white">Get In Touch</h2>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Phone className="mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h3 className="font-medium">Phone</h3>
                    <p className="text-white">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Mail className=" mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h3 className="font-medium ">Email</h3>
                    <p className=" ">contact@yourcompany.com</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <MapPin className=" mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h3 className="font-medium ">Address</h3>
                    <p className="">123 Business Street, Suite 100<br />City, State 12345</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form Section */}
            <div className="bg-gray-900 p-6 rounded-lg shadow-md">
              {submitted ? (
                <div className="p-4 rounded-mdtext-center h-full flex items-center justify-center">
                  <div>
                    <h3 className="text-xl font-medium mb-2">Thank you!</h3>
                    <p>Your message has been sent successfully. We will get back to you soon.</p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 bg-gray-800 border
                   "
                      placeholder="Your name"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 bg-gray-800 border
            "
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-2 bg-gray-800 "
                      placeholder="How can we help?"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="5"
                      className="w-full px-4 py-2 bg-gray-800  rounded-md 
                    "
                      placeholder="Please describe your inquiry in detail..."
                      required
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-green-700 text-white py-2 px-6 rounded-md hover:bg-green-600 transition-colors flex items-center justify-center space-x-2"
                  >
                    <span>Send Message</span>
                    <Send size={16} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}