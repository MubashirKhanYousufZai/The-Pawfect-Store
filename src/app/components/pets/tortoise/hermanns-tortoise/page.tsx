import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { AiOutlineHeart } from 'react-icons/ai';

const HermannsTortoisePage = () => {
  return (
    <div className="bg-teal-100 min-h-screen flex items-center justify-center">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-16 mx-auto">
          <div className="flex flex-col md:flex-row bg-teal-50 rounded-lg shadow-lg overflow-hidden">
            
            {/* Product Image */}
            <div className="md:w-1/2">
              <Image
                alt="Hermann's Tortoise"
                width={500}
                height={500}
                className="w-full h-full object-cover"
                src="/hermanns.jpeg" // Replace with the actual image path
              />
            </div>

            {/* Product Details */}
            <div className="md:w-1/2 p-8 flex flex-col justify-center">
              <h2 className="text-sm uppercase text-teal-500 tracking-widest font-semibold">
                The Pawfect Store
              </h2>
              <h1 className="text-gray-900 text-4xl font-bold mt-2">
                Hermanns Tortoise 🐢
              </h1>
              <p className="text-gray-600 text-lg mt-4 leading-relaxed">
                The **Hermann's Tortoise** (Testudo hermanni) is a small, hardy species native to **Southern Europe**, particularly 
                found in Mediterranean regions. It is admired for its **golden-yellow shell with bold black markings**.
                
                Hermann's Tortoises are **herbivorous**, primarily feeding on **grasses, flowers, and leafy teals**. They typically 
                grow between **6-10 inches** in length, making them an ideal choice for those looking for a pet tortoise with 
                manageable size.
                
                This species prefers **warm, dry climates** and requires plenty of sunlight or UVB exposure for healthy growth. With 
                the right care, they can live for **50+ years**, making them a lifelong companion for reptile lovers.
                
                If you are searching for a **friendly, easy-to-care-for, and visually stunning** pet tortoise, Hermann's Tortoise is 
                an excellent option! 🐢✨
              </p>

              {/* Price and Buttons */}
              <div className="flex items-center mt-6">
                <span className="title-font font-bold text-3xl text-gray-900">$149.99</span>
                
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

export default HermannsTortoisePage;
