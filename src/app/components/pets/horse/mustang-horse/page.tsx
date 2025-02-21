import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { AiOutlineHeart } from 'react-icons/ai';

const MustangHorsePage = () => {
  return (
    <div className="bg-teal-100 min-h-screen flex items-center justify-center">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-16 mx-auto">
          <div className="flex flex-col md:flex-row bg-teal-50 rounded-lg shadow-lg overflow-hidden">
            
            {/* Product Image */}
            <div className="md:w-1/2">
              <Image
                alt="Mustang Horse"
                width={500}
                height={500}
                className="w-full h-full object-cover"
                src="/mustang.jpeg" // Replace with the actual image path
              />
            </div>

            {/* Product Details */}
            <div className="md:w-1/2 p-8 flex flex-col justify-center">
              <h2 className="text-sm uppercase text-teal-500 tracking-widest font-semibold">
                The Pawfect Store
              </h2>
              <h1 className="text-gray-900 text-4xl font-bold mt-2">
                Mustang Horse 🐎
              </h1>
              <p className="text-gray-600 text-lg mt-4 leading-relaxed">
                The **Mustang Horse** is a symbol of **freedom** and **adventure**, known for its strength, stamina, and 
                wild spirit. Originating from the **western United States**, these horses are descendants of the 
                **Spanish horses** brought over by explorers, but have adapted to the rugged terrain of the American 
                wilderness for centuries.

                Mustangs are **wild horses** that live in **herds**, exhibiting a remarkable ability to survive in harsh 
                environments. These horses are highly independent, yet capable of forming strong bonds with those who earn their 
                trust. Known for their **endurance**, **loyalty**, and **resilience**, Mustangs embody the untamed spirit of the 
                American wilderness. 

                With their **versatility** and **beautifully muscular build**, Mustangs make great companions for those looking for 
                a horse with a sense of adventure. Whether for **trail riding**, **ranch work**, or as a loving partner in 
                equestrian sports, the **Mustang Horse** is a breed that stands the test of time. 🐎✨
              </p>

              {/* Price and Buttons */}
              <div className="flex items-center mt-6">
                <span className="title-font font-bold text-3xl text-gray-900">$7,500.00</span>
                
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

export default MustangHorsePage;
