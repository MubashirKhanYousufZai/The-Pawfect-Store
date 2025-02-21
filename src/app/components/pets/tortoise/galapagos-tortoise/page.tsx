import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { AiOutlineHeart } from 'react-icons/ai';

const GalapagosTortoisePage = () => {
  return (
    <div className="bg-teal-100 min-h-screen flex items-center justify-center">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-16 mx-auto">
          <div className="flex flex-col md:flex-row bg-teal-50 rounded-lg shadow-lg overflow-hidden">
            
            {/* Product Image */}
            <div className="md:w-1/2">
              <Image
                alt="Galápagos Tortoise"
                width={500}
                height={500}
                className="w-full h-full object-cover"
                src="/galapagos.jpeg" // Replace with the actual image path
              />
            </div>

            {/* Product Details */}
            <div className="md:w-1/2 p-8 flex flex-col justify-center">
              <h2 className="text-sm uppercase text-teal-500 tracking-widest font-semibold">
                The Pawfect Store
              </h2>
              <h1 className="text-gray-900 text-4xl font-bold mt-2">
                Galápagos Tortoise 🐢
              </h1>
              <p className="text-gray-600 text-lg mt-4 leading-relaxed">
                The **Galápagos Tortoise** (Chelonoidis nigra) is one of the most **iconic and largest tortoise species**, native 
                to the **Galápagos Islands**. These ancient creatures are known for their **massive size, longevity, and slow-moving 
                nature**.
                
                Galápagos Tortoises are **herbivorous**, primarily feeding on **grasses, fruits, and cactus pads**. They can grow to 
                over **5 feet in length** and weigh more than **600 pounds**. With proper care, they can live for **150+ years**, 
                making them one of the longest-living vertebrates on Earth.
                
                This species requires a **large outdoor enclosure** with plenty of space to roam, a warm climate, and a proper diet 
                to thrive. Due to their size and specialized care needs, they are best suited for conservation programs and experienced 
                reptile keepers.
                
                If you are looking for a **legendary, giant tortoise** with a rich history and incredible lifespan, the Galápagos 
                Tortoise is a truly remarkable choice! 🐢✨
              </p>

              {/* Price and Buttons */}
              <div className="flex items-center mt-6">
                <span className="title-font font-bold text-3xl text-gray-900">$5,999.99</span>
                
                <div className="flex-grow flex justify-end items-center space-x-4">
                  <Link href="/components/payment">
                    <button className="text-white bg-teal-500 border-0 py-3 px-6 text-lg font-medium focus:outline-none hover:bg-teal-600 rounded-lg transition-all">
                      Buy Now
                    </button>
                  </Link>

                  {/* Wishlist Button with React Icons */}
                  <button className="rounded-full w-12 h-12 bg-gray-200 flex items-center justify-center text-gray-500 hover:text-red-500 hover:bg-gray-300 transition-all">
                    <AiOutlineHeart size={26} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GalapagosTortoisePage;
