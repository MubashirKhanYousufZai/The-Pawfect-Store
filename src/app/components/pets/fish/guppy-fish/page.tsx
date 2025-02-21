import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { AiOutlineHeart } from 'react-icons/ai';

const GuppyFishPage = () => {
  return (
    <div className="bg-teal-100 min-h-screen flex items-center justify-center">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-16 mx-auto">
          <div className="flex flex-col md:flex-row bg-teal-50 rounded-lg shadow-lg overflow-hidden">
            
            {/* Product Image */}
            <div className="md:w-1/2">
              <Image
                alt="Guppy Fish"
                width={500}
                height={500}
                className="w-full h-full object-cover"
                src="/guppy.jpeg" // Replace with the actual image path
              />
            </div>

            {/* Product Details */}
            <div className="md:w-1/2 p-8 flex flex-col justify-center">
              <h2 className="text-sm uppercase text-teal-500 tracking-widest font-semibold">
                The Pawfect Store
              </h2>
              <h1 className="text-gray-900 text-4xl font-bold mt-2">
                Guppy Fish 🐟
              </h1>
              <p className="text-gray-600 text-lg mt-4 leading-relaxed">
                The **Guppy Fish** is one of the most popular and colorful aquarium fish, often chosen for its **vivid colors**, 
                **small size**, and **playful nature**. These hardy fish are native to South America and are a great choice for both 
                beginner and experienced aquarists. Guppies come in a variety of colors, including shades of red, yellow, blue, and green, 
                making them a beautiful addition to any tank.

                Guppies are **easy to care for** and adapt well to a range of water conditions, making them a favorite for home aquariums. 
                They are **livebearers**, meaning they give birth to live young, which makes breeding them a fun and rewarding experience. 
                Known for their **active behavior**, Guppies are also very social and thrive in schools, providing a lively display in your tank.

                Whether you're looking for a **colorful addition** to your aquarium or a **low-maintenance fish** for your home, the Guppy Fish 
                is an excellent choice. 🐟✨
              </p>

              {/* Price and Buttons */}
              <div className="flex items-center mt-6">
                <span className="title-font font-bold text-3xl text-gray-900">$9.99</span>
                
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

export default GuppyFishPage;
