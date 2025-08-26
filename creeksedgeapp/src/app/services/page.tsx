'use client';

import Image from 'next/image';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import { useState, useEffect } from 'react';

interface Service {
  title: string;
  description: string;
  descriptionPopup: string;
}

export default function Services() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const services: Service[] = [
    {
      title: "Native Plant Design",
      description: "We work to bring the beautiful new england aesthetic back to your home, with the plants that have thrived here for centuries!",
      descriptionPopup: "Pollinator meadows, rain gardens, and food forests are all encompassing in our native plant design and installation. our work is centered around getting rid of invasive plants that are from other countries and can aggressively take over landscapes. Removing invasive species will give opportunities for native species to out compete and rejuvenate New England landscape."
    },
    {
      title: "Invasive Species Removal",
      description: "Mechanical removal, Foliar spraying, Cut & Dab treatment, basal bark application.",
      descriptionPopup: "Invasive plants are everywhere in New England, coming from many other countries across the world and acting as very aggressive plants. The aggressiveness of these species can prevent the health and growth of our New England native plants as well as decrease food sources for our native fauna. between hand pulling, digging out and chemical treatment we are on a mission to help you remove species which are aggressive and non native from your landscape."
    },
    {
      title: "Wildlife Pond",
      description: "Add a true oasis to your backyard! Waterfalls, ponds and water features bring aesthetics and a soothing calm.",
      descriptionPopup: "Along with a cool escape from the summer heat, a pond can be a true hotspot for amphibians, songbirds, and dragonflies, all important pest predators. Attracting these types of critters will start to keep away the unwanted pests such as ticks and mosquitoes due to a prime food source and habitat provided for them. Moving waters create a background noise that is relaxing and will keep the water clean of pests and algae."
    },
    {
      title: "Song Bird, Bat Boxes, and Owl Boxes",
      description: "We work to bring the beautiful new england aesthetic back to your home, with the plants that have thrived here for centuries!",
      descriptionPopup: "Providing habitat for our wild friends is very beneficial due to lots of damage being done to trees in which they live in naturally. Giving a home for these species can separate them from critters who are also trying to use trees as homes. One of the most common habitats for birds, bats and owls are hollowed out trees which can be very vulnerable to storm damage and with that can be very dangerous not only to your family and home but dangerous to the animals. Giving them external home will let others know there is something using this space as a home which means it should not be altered as well as eliminating some of those dangers."
    }
  ];

  const openModal = (service: Service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedService(null);
  };

  // Close modal when clicking outside
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <>
      <Navbar />
      
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-amber-50 pt-28 pb-12 px-4">              
        <div className="max-w-6xl mx-auto">
         

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 cursor-pointer hover:shadow-lg transition-shadow duration-300"
                onClick={() => openModal(service)}
              >
                    {service.title === "Native Plant Design" ? (
                      <Image src="/images/image12.jpg" alt="Native Plant Design" width={800} height={800} />
                    ) 
                    : service.title === "Invasive Species Removal" ? (
                      <Image src="/images/image15.jpg" alt="Invasive Species Removal" width={800} height={800} />
                    )
                    : service.title === "Wildlife Pond" ? (
                      <Image src="/images/image6.jpg" alt="Wildlife Pond" width={800} height={800} />
                    )
                    : service.title === "Song Bird, Bat Boxes, and Owl Boxes" ? (
                      <Image src="/images/image7.jpg" alt="Song Bird, Bat Boxes, and Owl Boxes" width={800} height={800} />
                    )
                    : null
                  }
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

      {/* Modal Popup */}
      {isModalOpen && selectedService && (
        <div 
          className="fixed inset-0 flex items-center justify-center z-50 p-4 bg-cover bg-center"
          style={{
            backgroundImage: `url(${
              selectedService.title === "Native Plant Design" ? "/images/image12.jpg" :
              selectedService.title === "Invasive Species Removal" ? "/images/image15.jpg" :
              selectedService.title === "Wildlife Pond" ? "/images/image6.jpg" :
              selectedService.title === "Song Bird, Bat Boxes, and Owl Boxes" ? "/images/image7.jpg" :
              ""
            })`
          }}
          onClick={handleBackdropClick}
        >
          <div className="bg-white/95 backdrop-blur-sm rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto shadow-2xl">
           
            {/* Modal Header */}
            <div className="relative p-6 border-b border-gray-200">
              <button
                onClick={closeModal}
                className="absolute left-6 top-1/2 -translate-y-1/2 text-green-600 hover:text-green-800 text-2xl font-bold w-8 h-8 flex items-center justify-center rounded-full hover:bg-green-100 transition-colors"
              >
                ×
              </button>
              <h2 className="text-2xl font-semibold text-green-800 font-serif text-center px-12">
                {selectedService.title}
              </h2>
            </div>
            
            {/* Modal Content */}
            <div className="p-6">
              <p className="text-gray-700 leading-relaxed text-base">
                {selectedService.descriptionPopup}
              </p>
            </div>
          </div>
        </div>
      )}
      
      <Footer />
    </>
  );
}
