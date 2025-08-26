'use client';

import Image from 'next/image';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import { useState, useEffect } from 'react';

export default function Services() {
  const services = [
    {
      title: "Native Plant Design",
      description: "We work to bring the beautiful new england aesthetic back to your home, with the plants that have thrived here for centuries!"
    },
    {
      title: "Invasive Species Removal",
      description: "Mechanical removal, Foliar spraying, Cut & Dab treatment, basal bark application."
    },
    {
      title: "Wildlife Pond",
      description: "Add a true oasis to your backyard! Waterfalls, ponds and water features bring aesthetics and a soothing calm."
    },
    {
      title: "Song Bird, Bat Boxes, and Owl Boxes",
      description: "We work to bring the beautiful new england aesthetic back to your home, with the plants that have thrived here for centuries!"
    }
  ];

  return (
    <>
      <Navbar />
      
      <div className="min-h-screen bg-gray-50 pt-28 pb-12 px-4">              
        <div className="max-w-6xl mx-auto">
          {/* Services Title */}
          <h1 className="text-4xl font-bold text-gray-900 font-serif text-center mb-12">
            Services
          </h1>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
                {/* Image Placeholder */}
                <div className="w-full h-48 bg-gray-300 flex items-center justify-center">
                  <span className="text-gray-500 text-sm">Image Placeholder</span>
                </div>
                
                {/* Service Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-green-800 text-center font-serif mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  );
}
