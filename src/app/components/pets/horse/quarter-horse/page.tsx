import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { AiOutlineHeart } from 'react-icons/ai';

const QuarterHorsePage = () => {
  return (
    <div className="bg-teal-100 min-h-screen flex items-center justify-center">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-16 mx-auto">
          <div className="flex flex-col md:flex-row bg-teal-50 rounded-lg shadow-lg overflow-hidden">
            
            {/* Product Image */}
            <div className="md:w-1/2">
              <Image
                alt="Quarter Horse"
                width={500}
                height={500}
                className="w-full h-full object-cover"
                src="/quarter.jpeg" // Replace with the actual image path
              />
            </div>

            {/* Product Details */}
            <div className="md:w-1/2 p-8 flex flex-col justify-center">
              <h2 className="text-sm uppercase text-teal-500 tracking-widest font-semibold">
                The Pawfect Store
              </h2>
              <h1 className="text-gray-900 text-4xl font-bold mt-2">
                Quarter Horse 🐎
              </h1>
              <p className="text-gray-600 text-lg mt-4 leading-relaxed">
                The **Quarter Horse** is one of the most popular and versatile horse breeds in the world. Renowned for its 
                **speed**, especially in **short-distance sprints**, Quarter Horses excel in **rodeo sports**, **barrel racing**, 
                and **reining**. Originating from the **United States**, this breed is named after its exceptional ability to 
                sprint a quarter mile faster than any other breed. 

                Known for their **muscular build**, **calm temperament**, and **intelligence**, Quarter Horses are also excellent 
                working cattle horses, often used in **ranching** and **herding**. Their versatility extends to pleasure riding, 
                as they are both **gentle** and **easy to train**, making them ideal for riders of all levels. 

                With their **short, powerful legs** and **compact build**, Quarter Horses are perfect for those seeking a 
                reliable and hardworking companion. Whether you are interested in competitive sports or looking for a loyal 
                companion, the **Quarter Horse** is a fantastic choice. 🐎✨
              </p>

              {/* Price and Buttons */}
              <div className="flex items-center mt-6">
                <span className="title-font font-bold text-3xl text-gray-900">$10,000.00</span>
                
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

export default QuarterHorsePage;
