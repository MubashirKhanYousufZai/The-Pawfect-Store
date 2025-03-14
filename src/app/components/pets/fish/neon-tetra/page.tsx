import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { AiOutlineHeart } from 'react-icons/ai';

const NeonTetraPage = () => {
  return (
    <div className="bg-teal-100 min-h-screen flex items-center justify-center">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-16 mx-auto">
          <div className="flex flex-col md:flex-row bg-teal-50 rounded-lg shadow-lg overflow-hidden">
            
            {/* Product Image */}
            <div className="md:w-1/2">
              <Image
                alt="Neon Tetra"
                width={500}
                height={500}
                className="w-full h-full object-cover"
                src="/neontetra.jpeg" // Replace with the actual image path
              />
            </div>

            {/* Product Details */}
            <div className="md:w-1/2 p-8 flex flex-col justify-center">
              <h2 className="text-sm uppercase text-teal-500 tracking-widest font-semibold">
                The Pawfect Store
              </h2>
              <h1 className="text-gray-900 text-4xl font-bold mt-2">
                Neon Tetra 🌟
              </h1>
              <p className="text-gray-600 text-lg mt-4 leading-relaxed">
                The **Neon Tetra** is a small, vibrant freshwater fish known for its striking **neon blue coloration** and a 
                glowing red stripe that runs along its body. Native to the Amazon Basin, Neon Tetras are incredibly popular in 
                aquariums due to their beauty and peaceful nature. These fish are often kept in schools, where their vibrant colors 
                create a stunning display in any tank.

                Neon Tetras are **easy to care for**, making them an excellent choice for both beginner and experienced aquarium owners. 
                They thrive in **school groups**, creating a peaceful and lively presence in the tank. Their small size and **low-maintenance** 
                care requirements make them perfect for a variety of tank setups.

                Whether you are a beginner looking for an easy-to-care-for fish or a seasoned aquarist wanting a colorful addition to your 
                aquarium, the Neon Tetra is a perfect choice. 🌟✨
              </p>

              {/* Price and Buttons */}
              <div className="flex items-center mt-6">
                <span className="title-font font-bold text-3xl text-gray-900">$7.99</span>
                
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

export default NeonTetraPage;
