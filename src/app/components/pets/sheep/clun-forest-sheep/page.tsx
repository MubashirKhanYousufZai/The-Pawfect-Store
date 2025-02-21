import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { AiOutlineHeart } from 'react-icons/ai';

const ClunForestSheepPage = () => {
  return (
    <div className="bg-teal-100 min-h-screen flex items-center justify-center">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-16 mx-auto">
          <div className="flex flex-col md:flex-row bg-teal-50 rounded-lg shadow-lg overflow-hidden">
            
            {/* Product Image */}
            <div className="md:w-1/2">
              <Image
                alt="Clun Forest Sheep"
                width={500}
                height={500}
                className="w-full h-full object-cover"
                src="/clunforest.jpeg" // Replace with the actual image path
              />
            </div>

            {/* Product Details */}
            <div className="md:w-1/2 p-8 flex flex-col justify-center">
              <h2 className="text-sm uppercase text-teal-500 tracking-widest font-semibold">
                The Pawfect Store
              </h2>
              <h1 className="text-gray-900 text-4xl font-bold mt-2">
                Clun Forest Sheep 🐑
              </h1>
              <p className="text-gray-600 text-lg mt-4 leading-relaxed">
                The **Clun Forest Sheep** is a distinctive British breed, known for its **hardiness**, **adaptability**, and 
                **outstanding meat production**. Originating from the **Clun Valley** in Shropshire, England, Clun Forest Sheep 
                are highly valued for their **resilience** in various climates, making them well-suited for rough grazing conditions.

                Known for their **lean, flavorful lamb**, Clun Forest Sheep are ideal for **meat production**. Their **dense wool** 
                is also prized for its **quality and durability**, making them a dual-purpose breed. The **quiet, docile temperament** 
                of Clun Forest Sheep makes them easy to handle, even in larger flocks.

                These sheep are particularly well-suited for **sustainable farming**, thriving in **harder grazing systems** and 
                offering great potential for both **meat and wool** production. Whether you're raising them for **breeding** or 
                **meat**, Clun Forest Sheep are a reliable choice for any farm. 🐑✨
              </p>

              {/* Price and Buttons */}
              <div className="flex items-center mt-6">
                <span className="title-font font-bold text-3xl text-gray-900">$549.99</span>
                
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

export default ClunForestSheepPage;
