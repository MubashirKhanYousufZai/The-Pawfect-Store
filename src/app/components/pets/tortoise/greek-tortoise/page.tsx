import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { AiOutlineHeart } from 'react-icons/ai';

const GreekTortoisePage = () => {
  return (
    <div className="bg-teal-100 min-h-screen flex items-center justify-center">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-16 mx-auto">
          <div className="flex flex-col md:flex-row bg-teal-50 rounded-lg shadow-lg overflow-hidden">
            
            {/* Product Image */}
            <div className="md:w-1/2">
              <Image
                alt="Greek Tortoise"
                width={500}
                height={500}
                className="w-full h-full object-cover"
                src="/greek.jpeg" // Replace with the actual image path
              />
            </div>

            {/* Product Details */}
            <div className="md:w-1/2 p-8 flex flex-col justify-center">
              <h2 className="text-sm uppercase text-teal-500 tracking-widest font-semibold">
                The Pawfect Store
              </h2>
              <h1 className="text-gray-900 text-4xl font-bold mt-2">
                Greek Tortoise 🐢
              </h1>
              <p className="text-gray-600 text-lg mt-4 leading-relaxed">
                The **Greek Tortoise** (Testudo graeca) is a small, hardy species native to **Southern Europe, North Africa, 
                and parts of the Middle East**. It is known for its **beautifully patterned shell** with a mix of golden, 
                brown, and black hues.
                
                Greek Tortoises are **herbivorous**, feeding primarily on **grasses, weeds, and leafy greens**. They typically 
                grow to around **5-8 inches** in length, making them one of the more manageable tortoise species for pet owners.
                
                These tortoises **thrive in dry, warm climates** and require a well-draining substrate and plenty of sunlight 
                for proper shell development. With proper care, they can live for **50+ years**, making them a lifetime 
                commitment for dedicated reptile keepers.
                
                If you’re looking for a **small, low-maintenance, and charming** pet tortoise, the Greek Tortoise is an excellent 
                choice! 🐢✨
              </p>

              {/* Price and Buttons */}
              <div className="flex items-center mt-6">
                <span className="title-font font-bold text-3xl text-gray-900">$139.99</span>
                
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

export default GreekTortoisePage;
