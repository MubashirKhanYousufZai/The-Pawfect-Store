import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { AiOutlineHeart } from 'react-icons/ai';

const PlatyFishPage = () => {
  return (
    <div className="bg-teal-100 min-h-screen flex items-center justify-center">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-16 mx-auto">
          <div className="flex flex-col md:flex-row bg-teal-50 rounded-lg shadow-lg overflow-hidden">
            
            {/* Product Image */}
            <div className="md:w-1/2">
              <Image
                alt="Platy Fish"
                width={500}
                height={500}
                className="w-full h-full object-cover"
                src="/platy.jpeg" // Replace with the actual image path
              />
            </div>

            {/* Product Details */}
            <div className="md:w-1/2 p-8 flex flex-col justify-center">
              <h2 className="text-sm uppercase text-teal-500 tracking-widest font-semibold">
                The Pawfect Store
              </h2>
              <h1 className="text-gray-900 text-4xl font-bold mt-2">
                Platy Fish 🐠
              </h1>
              <p className="text-gray-600 text-lg mt-4 leading-relaxed">
                The **Platy Fish** is a vibrant and hardy freshwater fish, known for its **colorful appearance**, **small size**, and 
                **active nature**. Native to Central America, Platies come in a variety of colors, including red, orange, yellow, 
                and blue. Their lively movements and cheerful demeanor make them a popular choice for both beginners and experienced aquarists.

                Platies are **livebearers**, meaning they give birth to live young, which can be a fascinating experience for aquarium owners. 
                They are also known for being **peaceful** and thrive in **community tanks** with other non-aggressive species. Their small size 
                and **easy care** requirements make them perfect for tanks of all sizes, and they adapt well to a range of water conditions.

                Whether you're a beginner looking for a **colorful and easy-to-care-for fish** or an experienced aquarist wanting an **energetic addition** 
                to your aquarium, the Platy Fish is an excellent choice. 🐠✨
              </p>

              {/* Price and Buttons */}
              <div className="flex items-center mt-6">
                <span className="title-font font-bold text-3xl text-gray-900">$4.99</span>
                
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

export default PlatyFishPage;
