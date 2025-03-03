import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { AiOutlineHeart } from 'react-icons/ai';

const FriesianHorsePage = () => {
  return (
    <div className="bg-teal-100 min-h-screen flex items-center justify-center">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-16 mx-auto">
          <div className="flex flex-col md:flex-row bg-teal-50 rounded-lg shadow-lg overflow-hidden">
            
            {/* Product Image */}
            <div className="md:w-1/2">
              <Image
                alt="Friesian Horse"
                width={500}
                height={500}
                className="w-full h-full object-cover"
                src="/friesian.jpeg" // Replace with the actual image path
              />
            </div>

            {/* Product Details */}
            <div className="md:w-1/2 p-8 flex flex-col justify-center">
              <h2 className="text-sm uppercase text-teal-500 tracking-widest font-semibold">
                The Pawfect Store
              </h2>
              <h1 className="text-gray-900 text-4xl font-bold mt-2">
                Friesian Horse 🐴
              </h1>
              <p className="text-gray-600 text-lg mt-4 leading-relaxed">
                The **Friesian Horse** is a majestic breed known for its **graceful movements** and **stunning black coat**. 
                Originating from the **Friesland region of the Netherlands**, Friesians were originally bred for both **warfare** 
                and **draft work**. Today, they are revered for their **elegant appearance**, athleticism, and gentle nature, 
                making them popular in **dressage** and **carriage driving**.

                These horses are often described as having a **fairy-tale-like quality** due to their long, flowing manes and tails, 
                combined with their **powerful build**. Their temperament is calm, loyal, and willing, making them excellent 
                companions for riders of all skill levels. Friesians excel in a variety of disciplines, including **equestrian sports**, 
                and their striking beauty also makes them a favorite in the **film and television industry**.

                Whether you are looking for a **stunning show horse** or a **graceful companion**, the **Friesian Horse** is sure 
                to impress with its elegance and charm. 🐴✨
              </p>

              {/* Price and Buttons */}
              <div className="flex items-center mt-6">
                <span className="title-font font-bold text-3xl text-gray-900">$15,000.00</span>
                
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

export default FriesianHorsePage;
