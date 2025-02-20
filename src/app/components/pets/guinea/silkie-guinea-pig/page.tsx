import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { AiOutlineHeart } from 'react-icons/ai';

const SilkieGuineaPigPage = () => {
  return (
    <div className="bg-teal-100 min-h-screen flex items-center justify-center">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-16 mx-auto">
          <div className="flex flex-col md:flex-row bg-teal-50 rounded-lg shadow-lg overflow-hidden">
            
            {/* Product Image */}
            <div className="md:w-1/2">
              <Image
                alt="Silkie Guinea Pig"
                width={500}
                height={500}
                className="w-full h-full object-cover"
                src="/silkieguinea.jpeg" // Replace with the actual image path
              />
            </div>

            {/* Product Details */}
            <div className="md:w-1/2 p-8 flex flex-col justify-center">
              <h2 className="text-sm uppercase text-teal-500 tracking-widest font-semibold">
                The Pawfect Store
              </h2>
              <h1 className="text-gray-900 text-4xl font-bold mt-2">
                Silkie Guinea Pig 🐹
              </h1>
              <p className="text-gray-600 text-lg mt-4 leading-relaxed">
                <strong>The Pawfect Store</strong> is delighted to offer the elegant **Silkie Guinea Pig** 🐹, known for its 
                soft, flowing coat that requires regular grooming to maintain its beautiful shine. Unlike other long-haired guinea 
                pigs, Silkie Guinea Pigs have a smooth, flowing coat that runs straight down their bodies, giving them a sleek and 
                luxurious appearance. These guinea pigs are not only visually stunning but also have a gentle, friendly, and affectionate 
                nature. Silkie Guinea Pigs are calm and enjoy being handled, making them ideal for families, children, and those new 
                to guinea pig care. While they require consistent grooming to keep their fur in top condition, their sweet temperament 
                makes them incredibly rewarding to care for. Whether you are an experienced guinea pig owner or a first-time pet parent, 
                the Silkie Guinea Pig will bring beauty and joy to your home. 🐹💖✨
              </p>

              {/* Price and Buttons */}
              <div className="flex items-center mt-6">
                <span className="title-font font-bold text-3xl text-gray-900">$39.99</span>
                
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

export default SilkieGuineaPigPage;
