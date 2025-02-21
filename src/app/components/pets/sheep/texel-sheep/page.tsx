import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { AiOutlineHeart } from 'react-icons/ai';

const TexelSheepPage = () => {
  return (
    <div className="bg-teal-100 min-h-screen flex items-center justify-center">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-16 mx-auto">
          <div className="flex flex-col md:flex-row bg-teal-50 rounded-lg shadow-lg overflow-hidden">
            
            {/* Product Image */}
            <div className="md:w-1/2">
              <Image
                alt="Texel Sheep"
                width={500}
                height={500}
                className="w-full h-full object-cover"
                src="/texel.jpeg" // Replace with the actual image path
              />
            </div>

            {/* Product Details */}
            <div className="md:w-1/2 p-8 flex flex-col justify-center">
              <h2 className="text-sm uppercase text-teal-500 tracking-widest font-semibold">
                The Pawfect Store
              </h2>
              <h1 className="text-gray-900 text-4xl font-bold mt-2">
                Texel Sheep 🐑
              </h1>
              <p className="text-gray-600 text-lg mt-4 leading-relaxed">
                The **Texel Sheep** is a popular and high-performing breed, renowned for its **muscular build**, **fast growth**, 
                and **excellent meat quality**. Originating from the **Texel Island in the Netherlands**, Texels are known for their 
                ability to produce **lean, flavorful lamb** with excellent carcass conformation, making them a favorite for meat producers.

                Known for their **hardiness** and **adaptability**, Texels thrive in various climates, from cooler to warmer regions. 
                Their **efficient growth rate** and **outstanding feed conversion** make them a highly sought-after breed for **commercial farming**.

                Texel Sheep are also recognized for their **calm nature**, making them easy to handle and a great choice for both new 
                and experienced farmers. Whether raising them for **meat production** or **breeding**, Texel Sheep offer significant 
                rewards and are an excellent investment for any farm. 🐑✨
              </p>

              {/* Price and Buttons */}
              <div className="flex items-center mt-6">
                <span className="title-font font-bold text-3xl text-gray-900">$599.99</span>
                
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

export default TexelSheepPage;
