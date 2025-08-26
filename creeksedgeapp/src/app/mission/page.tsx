'use client';

import Image from 'next/image';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

export default function Mission() {
  return (
    <>
      <Navbar />
      
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-amber-50 pt-28 pb-12 px-4">
        <div className="max-w-6xl mx-auto">
          
          {/* Our Mission Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <div className="flex flex-col justify-center">
              <h1 className="text-4xl font-bold text-gray-900 font-serif mb-6">
                Our Mission
              </h1>
              <p className="text-gray-700 leading-relaxed text-lg">
                Our goal at Creeks Edge is to re-integrate the historic New England landscape back into our yards and lives. Our ecosystems are in distress! Complex ecological webs have been replaced by single-species deserts that require intense chemical and water use to keep 'pristine'. We want to bring life back into our lawns.
              </p>
              <p className="text-gray-700 leading-relaxed text-lg mt-4">
                The system is broken. Many of the ornamentals used in traditional landscaping have escaped into the wild and wreaked havoc. Today, invasive species cost billions of dollars in economic damage annually, along with destroying the habitats they invade. Without a proper balance of plants and animals, unwanted pest species such as mosquitoes, ticks, and mice all thrive in these broken systems. Restore the balance. Natural pest control without any of the deadly chemicals.
              </p>
              <p className="text-gray-700 leading-relaxed text-lg mt-4">
                We look to build a unified and connected pathway of ecosystem gardens that allow for people and nature to thrive hand in hand, all while making your land a talking point within the neighborhood.
              </p>
            </div>
            <div className="bg-gray-300 rounded-lg flex items-center justify-center min-h-96">
                <Image src="/images/image21.jpg" alt="Our mission" width={800} height={800} />
            </div>
          </div>

          {/* Learn the Land Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-gray-300 rounded-lg flex items-center justify-center min-h-96 order-2 lg:order-1">
                <Image src="/images/image14.png" alt="Our mission" width={800} height={800} />
            </div>
            <div className="flex flex-col justify-center order-1 lg:order-2">
              <h2 className="text-4xl font-bold text-gray-900 font-serif mb-6">
                Learn the Land
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                The New England landscape is one of immense diversity and uniquity. Before the mass clearcutting that went on in the 1800s, our land was home to some of the oldest and most diverse forests in the world.
              </p>
              <p className="text-gray-700 leading-relaxed text-lg mt-4">
                Four hundred year old white pines, sprawling meadows, pristine creeks and streams zigzagging the landscape—this is what made New England. Our rocky soils held the keys to life for countless amphibians, turtles, song birds, and pollinating insects. Fields of asters breaking into towering oaks. Endless fields of rudbeckia leading into the shade of hundreds of sugar maples.
              </p>
              <p className="text-gray-700 leading-relaxed text-lg mt-4">
                This is New England. Our 120+ native species of trees is one of the most diverse in the entire continent, along with over 2000 herbaceous species. We see this in our stunning fall foliage, winter wonders, and beautiful spring and summers. Fall back in love with our landscape and bring a piece of it back to you.
              </p>
            </div>
          </div>

        </div>
      </div>
      
      <Footer />
    </>
  );
}
