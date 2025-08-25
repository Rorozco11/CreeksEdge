'use client';

import Image from 'next/image';
import Navbar from './components/navbar';
import Footer from './components/footer';
import { useState, useEffect } from 'react';

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const images = [
    { src: '/images/image5.png', alt: 'Creek\'s Edge Landscape 5' },
    { src: '/images/image6.jpg', alt: 'Creek\'s Edge Landscape 6' },
    { src: '/images/image13.jpg', alt: 'Creek\'s Edge Landscape 13' },
    { src: '/images/image17.jpg', alt: 'Creek\'s Edge Landscape 17' },
    { src: '/images/image19.jpg', alt: 'Creek\'s Edge Landscape 19' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <>
        <Navbar />


      <main className="relative min-h-screen pt-20 bg-gray-900">
        {/* Full-screen slideshow container */}
        <div className="relative w-full h-screen">
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentImageIndex ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
                priority={index === 0}
                sizes="100vw"
              />
            </div>
          ))}
          
          {/* Text overlay - simple approach */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 text-center bg-transparent">
            <div className="text-6xl font-bold text-white mb-4 font-serif drop-shadow-lg bg-transparent">
              Creek's Edge
            </div>
            <p className="text-2xl text-white italic drop-shadow-lg">
              Bring Paradise to you
            </p>
          </div>

        
          {/* Image indicators - positioned at bottom */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentImageIndex 
                    ? 'bg-white scale-125' 
                    : 'bg-white bg-opacity-50 hover:bg-opacity-75'
                }`}
              />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}