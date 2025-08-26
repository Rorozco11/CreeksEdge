'use client';

import Image from 'next/image';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import { useState } from 'react';

interface Service {
  title: string;
  description: string;
  descriptionPopup: string;
  icon: string;
  color: string;
}

export default function Services() {
  const [expandedService, setExpandedService] = useState<number | null>(null);

  const services: Service[] = [
    {
      title: "Native Plant Design",
      description: "We work to bring the beautiful new england aesthetic back to your home, with the plants that have thrived here for centuries!",
      descriptionPopup: "Pollinator meadows, rain gardens, and food forests are all encompassing in our native plant design and installation. our work is centered around getting rid of invasive plants that are from other countries and can aggressively take over landscapes. Removing invasive species will give opportunities for native species to out compete and rejuvenate New England landscape.",
      icon: "🌱",
      color: "green"
    },
    {
      title: "Invasive Species Removal",
      description: "Mechanical removal, Foliar spraying, Cut & Dab treatment, basal bark application.",
      descriptionPopup: "Invasive plants are everywhere in New England, coming from many other countries across the world and acting as very aggressive plants. The aggressiveness of these species can prevent the health and growth of our New England native plants as well as decrease food sources for our native fauna. between hand pulling, digging out and chemical treatment we are on a mission to help you remove species which are aggressive and non native from your landscape.",
      icon: "🌿",
      color: "emerald"
    },
    {
      title: "Wildlife Pond",
      description: "Add a true oasis to your backyard! Waterfalls, ponds and water features bring aesthetics and a soothing calm.",
      descriptionPopup: "Along with a cool escape from the summer heat, a pond can be a true hotspot for amphibians, songbirds, and dragonflies, all important pest predators. Attracting these types of critters will start to keep away the unwanted pests such as ticks and mosquitoes due to a prime food source and habitat provided for them. Moving waters create a background noise that is relaxing and will keep the water clean of pests and algae.",
      icon: "💧",
      color: "blue"
    },
    {
      title: "Song Bird, Bat Boxes, and Owl Boxes",
      description: "We work to bring the beautiful new england aesthetic back to your home, with the plants that have thrived here for centuries!",
      descriptionPopup: "Providing habitat for our wild friends is very beneficial due to lots of damage being done to trees in which they live in naturally. Giving a home for these species can separate them from critters who are also trying to use trees as homes. One of the most common habitats for birds, bats and owls are hollowed out trees which can be very vulnerable to storm damage and with that can be very dangerous not only to your family and home but dangerous to the animals. Giving them external home will let others know there is something using this space as a home which means it should not be altered as well as eliminating some of those dangers.",
      icon: "🦉",
      color: "amber"
    }
  ];

  const toggleService = (index: number) => {
    setExpandedService(expandedService === index ? null : index);
  };

  const getColorClasses = (color: string) => {
    const colorMap = {
      green: 'from-green-400 to-emerald-600',
      emerald: 'from-emerald-400 to-teal-600',
      blue: 'from-blue-400 to-cyan-600',
      amber: 'from-amber-400 to-orange-600'
    };
    return colorMap[color as keyof typeof colorMap] || 'from-green-400 to-emerald-600';
  };

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-amber-50 pt-28">
        <div className="absolute inset-0 bg-black/5"></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20">
          
          {/* Page Header */}
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 font-serif mb-4 sm:mb-6">
              Our Services
            </h1>
            <div className="w-20 sm:w-24 md:w-32 h-0.5 sm:h-1 bg-gradient-to-r from-green-400 to-emerald-600 mx-auto rounded-full mb-6 sm:mb-8"></div>
            <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed px-4">
              Discover our comprehensive range of ecological restoration and landscape design services, 
              each crafted to bring the natural beauty of New England back to your property.
            </p>
          </div>

          {/* Services Grid */}
          <div className="space-y-6 sm:space-y-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className={`bg-white rounded-xl sm:rounded-2xl shadow-lg overflow-hidden border border-gray-100 transition-all duration-500 ${
                  expandedService === index ? 'shadow-2xl scale-[1.01] sm:scale-[1.02]' : 'hover:shadow-xl hover:scale-[1.005] sm:hover:scale-[1.01]'
                }`}
              >
                {/* Service Header */}
                <div 
                  className="cursor-pointer"
                  onClick={() => toggleService(index)}
                >
                  <div className="relative">
                    {/* Background Image */}
                    <div className="h-48 sm:h-56 md:h-64 relative overflow-hidden">
                      {service.title === "Native Plant Design" ? (
                        <Image src="/images/image12.jpg" alt="Native Plant Design" width={800} height={800} className="w-full h-full object-cover" />
                      ) 
                      : service.title === "Invasive Species Removal" ? (
                        <Image src="/images/image15.jpg" alt="Invasive Species Removal" width={800} height={800} className="w-full h-full object-cover" />
                      )
                      : service.title === "Wildlife Pond" ? (
                        <Image src="/images/image6.jpg" alt="Wildlife Pond" width={800} height={800} className="w-full h-full object-cover" />
                      )
                      : service.title === "Song Bird, Bat Boxes, and Owl Boxes" ? (
                        <Image src="/images/image7.jpg" alt="Song Bird, Bat Boxes, and Owl Boxes" width={800} height={800} className="w-full h-full object-cover" />
                      )
                      : null
                      }
                      {/* Gradient Overlay */}
                      <div className={`absolute inset-0 bg-gradient-to-r ${getColorClasses(service.color)} opacity-20`}></div>
                      
                      {/* Icon and Title */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center text-white">
                          <div className="text-4xl sm:text-5xl md:text-6xl mb-3 sm:mb-4 drop-shadow-lg">{service.icon}</div>
                          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold font-serif drop-shadow-lg px-4">
                            {service.title}
                          </h3>
                        </div>
                      </div>
                      
                      {/* Expand/Collapse Indicator */}
                      <div className="absolute top-4 sm:top-6 right-4 sm:right-6">
                        <div className={`w-8 sm:w-10 h-8 sm:h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-transform duration-300 ${
                          expandedService === index ? 'rotate-180' : ''
                        }`}>
                          <svg className="w-4 sm:w-5 h-4 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Service Preview */}
                  <div className="p-6 sm:p-8">
                    <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Expanded Content */}
                <div className={`overflow-hidden transition-all duration-500 ${
                  expandedService === index ? 'max-h-[500px] sm:max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="p-6 sm:p-8 pt-0">
                    <div className="border-t border-gray-200 pt-6 sm:pt-8">
                      <h4 className="text-lg sm:text-xl font-semibold text-gray-900 font-serif mb-3 sm:mb-4">
                        Detailed Overview
                      </h4>
                      <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                        {service.descriptionPopup}
                      </p>
                      
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12 sm:mt-16 md:mt-20 bg-gradient-to-r from-green-600 to-emerald-700 rounded-xl sm:rounded-2xl p-8 sm:p-10 md:p-12 text-white">
            <h3 className="text-2xl sm:text-3xl font-bold font-serif mb-3 sm:mb-4">
              Ready to Transform Your Landscape?
            </h3>
            <p className="text-lg sm:text-xl mb-6 sm:mb-8 opacity-90">
              Let&apos;s discuss how we can bring the natural beauty of New England to your property.
            </p>
            <a 
              href="tel:203-848-0296" 
              className="inline-block bg-white text-green-700 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-gray-100 transform transition-all duration-300 hover:scale-105 text-sm sm:text-base"
            >
              Contact Us Today
            </a>
          </div>

        </div>
      </div>
      
      <Footer />
    </>
  );
}
