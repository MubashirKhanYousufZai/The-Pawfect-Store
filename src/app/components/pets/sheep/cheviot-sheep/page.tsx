import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { AiOutlineHeart } from 'react-icons/ai';

const CheviotSheepPage = () => {
  return (
    <div className="bg-teal-100 min-h-screen flex items-center justify-center">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-16 mx-auto">
          <div className="flex flex-col md:flex-row bg-teal-50 rounded-lg shadow-lg overflow-hidden">
            
            {/* Product Image */}
            <div className="md:w-1/2">
              <Image
                alt="Cheviot Sheep"
                width={500}
                height={500}
                className="w-full h-full object-cover"
                src="/cheviot.jpeg" // Replace with the actual image path
              />
            </div>

            {/* Product Details */}
            <div className="md:w-1/2 p-8 flex flex-col justify-center">
              <h2 className="text-sm uppercase text-teal-500 tracking-widest font-semibold">
                The Pawfect Store
              </h2>
              <h1 className="text-gray-900 text-4xl font-bold mt-2">
                Cheviot Sheep 🐑
              </h1>
              <p className="text-gray-600 text-lg mt-4 leading-relaxed">
                The **Cheviot Sheep** is an ancient and hardy breed, originating from the **Cheviot Hills** in the borderlands 
                between England and Scotland. Known for their **adaptability**, they thrive in harsh climates and are perfect 
                for **extensive farming** systems. With their **distinctive white wool**, Cheviots are highly regarded for their 
                excellent meat quality and **resilient nature**.

                **Cheviots** are known for their **strong, independent personalities** and are often praised for their ability to 
                thrive in **rugged terrain**. The breed is particularly valued for its **high-quality wool**, which is used in 
                textiles due to its **durability** and **soft texture**. Additionally, their **meat** is tender and flavorful, 
                making them a sought-after choice for those looking for quality livestock.

                Whether you're interested in wool production or raising sheep for meat, the **Cheviot Sheep** provides a **reliable**, 
                **profitable** addition to any farm. 🐑✨
              </p>

              {/* Price and Buttons */}
              <div className="flex items-center mt-6">
                <span className="title-font font-bold text-3xl text-gray-900">$399.99</span>
                
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

export default CheviotSheepPage;
