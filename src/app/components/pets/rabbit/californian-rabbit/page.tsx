import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { AiOutlineHeart } from 'react-icons/ai';

const CalifornianRabbitPage = () => {
  return (
    <div className="bg-teal-100 min-h-screen flex items-center justify-center">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-16 mx-auto">
          <div className="flex flex-col md:flex-row bg-teal-50 rounded-lg shadow-lg overflow-hidden">
            
            {/* Product Image */}
            <div className="md:w-1/2">
              <Image
                alt="Californian Rabbit"
                width={500}
                height={500}
                className="w-full h-full object-cover"
                src="/californian.jpeg" // Replace with the actual image path
              />
            </div>

            {/* Product Details */}
            <div className="md:w-1/2 p-8 flex flex-col justify-center">
              <h2 className="text-sm uppercase text-teal-500 tracking-widest font-semibold">
                The Pawfect Store
              </h2>
              <h1 className="text-gray-900 text-4xl font-bold mt-2">
                Californian Rabbit 🐇
              </h1>
              <p className="text-gray-600 text-lg mt-4 leading-relaxed">
                <strong>The Pawfect Store</strong> introduces the elegant **Californian Rabbit** 🐇, a breed known for its 
                **distinctive color pattern** with a white body and darker points on the ears, nose, feet, and tail. This breed is 
                renowned for its **friendly** and **gentle nature**, making it a wonderful pet for families, children, and experienced 
                rabbit owners. With a calm temperament and playful personality, the Californian Rabbit enjoys spending time with its 
                human companions. Though originally bred for meat production, its charming personality and attractive markings make it 
                a popular choice for pet lovers. 🐰💖✨ Whether you are an experienced rabbit owner or just getting started, the Californian 
                Rabbit is an ideal choice for your home.
              </p>

              {/* Price and Buttons */}
              <div className="flex items-center mt-6">
                <span className="title-font font-bold text-3xl text-gray-900">$59.99</span>
                
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

export default CalifornianRabbitPage;
