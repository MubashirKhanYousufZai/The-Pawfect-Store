import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { AiOutlineHeart } from 'react-icons/ai';

const SulcataTortoisePage = () => {
  return (
    <div className="bg-teal-100 min-h-screen flex items-center justify-center">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-16 mx-auto">
          <div className="flex flex-col md:flex-row bg-teal-50 rounded-lg shadow-lg overflow-hidden">
            
            {/* Product Image */}
            <div className="md:w-1/2">
              <Image
                alt="Sulcata Tortoise"
                width={500}
                height={500}
                className="w-full h-full object-cover"
                src="/sulcata.jpeg" // Replace with the actual image path
              />
            </div>

            {/* Product Details */}
            <div className="md:w-1/2 p-8 flex flex-col justify-center">
              <h2 className="text-sm uppercase text-teal-500 tracking-widest font-semibold">
                The Pawfect Store
              </h2>
              <h1 className="text-gray-900 text-4xl font-bold mt-2">
                Sulcata Tortoise 🐢
              </h1>
              <p className="text-gray-600 text-lg mt-4 leading-relaxed">
                The **Sulcata Tortoise**, also known as the **African Spurred Tortoise**, is one of the largest species of 
                land tortoise and is native to the **Sahara Desert** in Africa. These tortoises are known for their distinctive 
                **large, domed shells** with spurs on their hind legs and are a **herbivorous** species, feeding primarily on 
                grasses, flowers, and some shrubs.

                **Sulcata Tortoises** can grow up to **30 inches in length** and weigh up to **100 pounds**, making them a 
                significant commitment for any potential pet owner. They require a spacious outdoor enclosure with plenty of 
                room to roam, as they are known to be active and enjoy basking in the sun. 

                They are relatively low-maintenance but need a warm climate and access to fresh food and water. Due to their 
                size and specific care needs, they are best suited for owners with **outdoor space** or those prepared for 
                long-term care, as they can live for 50+ years.

                With their unique appearance and gentle temperament, Sulcata Tortoises are a rewarding pet for experienced 
                reptile owners looking for a fascinating, long-living companion. 🐢✨
              </p>

              {/* Price and Buttons */}
              <div className="flex items-center mt-6">
                <span className="title-font font-bold text-3xl text-gray-900">$249.99</span>
                
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

export default SulcataTortoisePage;
