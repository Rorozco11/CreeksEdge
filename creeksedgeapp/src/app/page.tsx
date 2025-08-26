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
  { src: '/images/image7.jpg', alt: 'Creek\'s Edge Landscape 7' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <>

        <Navbar />
      <main className="relative min-h-screen pt-20 ">
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
          
          {/* Text overlay - modern design approach */}
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <div className="text-center max-w-4xl mx-auto px-4 sm:px-8">
              {/* Main title with elegant styling */}
              <div className="mb-6 sm:mb-8">
                <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white font-serif tracking-tight drop-shadow-2xl mb-3 sm:mb-4">
                  Creek&apos;s Edge
                </h1>
                <div className="w-16 sm:w-20 md:w-24 h-0.5 sm:h-1 bg-gradient-to-r from-green-400 to-emerald-600 mx-auto rounded-full shadow-lg"></div>
              </div>
              
              {/* Subtitle with sophisticated backdrop */}
              <div className="relative">
                <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light italic tracking-wide px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 bg-gradient-to-r from-white via-green-100 to-white bg-clip-text text-transparent drop-shadow-lg">
                  Bring Paradise to you
                </p>
              </div>      
            </div>
          </div>

          

          

        
          {/* Image indicators - positioned at bottom */}
          <div className="absolute bottom-2 sm:bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 sm:space-x-3 z-20">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full transition-all duration-300 ${
                  index === currentImageIndex 
                    ? 'bg-white scale-125' 
                    : 'bg-white bg-opacity-50 hover:bg-opacity-75'
                }`}
              />
            ))}
          </div>
        </div>
      </main>
     
     {/* Learn the Land & Our Mission Section */}
     <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-green-50 via-emerald-50 to-amber-50">
       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
           {/* Learn the Land Card */}
           <div className="group bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
             <div className="h-48 sm:h-56 md:h-64 overflow-hidden">
               <Image 
                 src="/images/sc1.jpg" 
                 alt="Learn the Land" 
                 width={600} 
                 height={400} 
                 className="w-full h-full object-cover transition-transform duration-500" 
               />
             </div>

             <div className="p-6 sm:p-8">
               <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 font-serif">Learn the Land</h3>
               <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                 Discover the rich natural heritage of New England landscapes. From ancient white pines to native wildflowers, 
                 understand the ecological diversity that makes this region unique.
               </p>
               <a 
                 href="/mission#learn-the-land" 
                 className="inline-block bg-green-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold hover:bg-green-700 transform transition-all duration-300 hover:scale-105 text-sm sm:text-base"
               >
                 Learn more
               </a>
             </div>
           </div>
           
           {/* Our Mission Card */}
           <div className="group bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
             <div className="h-48 sm:h-56 md:h-64 bg-gradient-to-br from-blue-400 to-cyan-600 flex items-center justify-center">
             <Image 
                 src="/images/image16.jpg" 
                 alt="Our Mission" 
                 width={600} 
                 height={100} 
                 className="w-full h-full object-cover transition-transform duration-500" 
               />
             </div>
             <div className="p-6 sm:p-8">
               <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 font-serif">Our Mission</h3>
               <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                 We&apos;re dedicated to re-integrating historic New England landscapes into modern properties. 
                 Creating sustainable ecosystems that bring paradise to your doorstep.
               </p>
               <a 
                 href="/mission" 
                 className="inline-block bg-blue-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold hover:bg-blue-700 transform transition-all duration-300 hover:scale-105 text-sm sm:text-base"
               >
                 Learn more
               </a>
             </div>
           </div>
         </div>
       </div>
     </section>
     
      <Footer />
    </>
  );
}