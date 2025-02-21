import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { AiOutlineHeart } from 'react-icons/ai';

const LeopardTortoisePage = () => {
  return (
    <div className="bg-teal-100 min-h-screen flex items-center justify-center">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-16 mx-auto">
          <div className="flex flex-col md:flex-row bg-teal-50 rounded-lg shadow-lg overflow-hidden">
            
            {/* Product Image */}
            <div className="md:w-1/2">
              <Image
                alt="Leopard Tortoise"
                width={500}
                height={500}
                className="w-full h-full object-cover"
                src="/leopard.jpeg" // Replace with the actual image path
              />
            </div>

            {/* Product Details */}
            <div className="md:w-1/2 p-8 flex flex-col justify-center">
              <h2 className="text-sm uppercase text-teal-500 tracking-widest font-semibold">
                The Pawfect Store
              </h2>
              <h1 className="text-gray-900 text-4xl font-bold mt-2">
                Leopard Tortoise 🐢
              </h1>
              <p className="text-gray-600 text-lg mt-4 leading-relaxed">
                The **Leopard Tortoise** is one of the most beautiful species of land tortoises, native to **Eastern and 
                Southern Africa**. Known for its **distinctive patterned shell**, which resembles the markings of a leopard, 
                this tortoise is a true eye-catcher. The patterns can range from yellow to dark brown, with spots or streaks 
                covering its shell.

                This species is **herbivorous**, primarily feeding on grasses, leaves, and flowers. It is a relatively 
                **medium-sized tortoise**, typically reaching lengths of around 12-18 inches, though some individuals can grow 
                slightly larger. 

                Leopard Tortoises are **relatively easy to care for** compared to other species, but they require a spacious 
                outdoor enclosure with access to both shaded and sunny areas. They also enjoy **basking** and need a **warm 
                climate** to thrive. These tortoises can live for **50+ years**, making them long-term companions for dedicated 
                reptile enthusiasts.

                With their calm temperament and stunning appearance, Leopard Tortoises make excellent pets for owners who 
                are committed to providing them with the right care and environment. 🐢✨
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

export default LeopardTortoisePage;
