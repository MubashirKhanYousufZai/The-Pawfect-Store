import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { AiOutlineHeart } from 'react-icons/ai';

const ThoroughbredHorsePage = () => {
  return (
    <div className="bg-teal-100 min-h-screen flex items-center justify-center">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-16 mx-auto">
          <div className="flex flex-col md:flex-row bg-teal-50 rounded-lg shadow-lg overflow-hidden">
            
            {/* Product Image */}
            <div className="md:w-1/2">
              <Image
                alt="Thoroughbred Horse"
                width={500}
                height={500}
                className="w-full h-full object-cover"
                src="/thoroughbed.jpeg" // Replace with the actual image path
              />
            </div>

            {/* Product Details */}
            <div className="md:w-1/2 p-8 flex flex-col justify-center">
              <h2 className="text-sm uppercase text-teal-500 tracking-widest font-semibold">
                The Pawfect Store
              </h2>
              <h1 className="text-gray-900 text-4xl font-bold mt-2">
                Thoroughbred Horse 🏇
              </h1>
              <p className="text-gray-600 text-lg mt-4 leading-relaxed">
                The **Thoroughbred Horse** is a breed revered for its **speed**, **agility**, and **competitive spirit**. Known 
                worldwide for dominating in horse racing, the Thoroughbred is also highly sought after for **show jumping**, 
                **dressage**, and **eventing**.

                With a **sleek, athletic build**, these horses are bred for **performance** and are renowned for their **endurance** 
                and **intelligence**. Whether you're an **equestrian** looking for a partner for competitive sports, or a racing enthusiast, 
                the **Thoroughbred Horse** provides unmatched **speed**, **power**, and **heart** in the arena. 

                These horses boast a variety of solid colors, but are typically seen in shades of **bay**, **chestnut**, and **gray**. 
                Their spirit, beauty, and precision make them a favorite among **professional riders** and **horse racing enthusiasts** alike.
                🏇✨
              </p>

              {/* Price and Buttons */}
              <div className="flex items-center mt-6">
                <span className="title-font font-bold text-3xl text-gray-900">$2,500.00</span>
                
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

export default ThoroughbredHorsePage;
