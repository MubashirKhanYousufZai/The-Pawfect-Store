import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { AiOutlineHeart } from 'react-icons/ai';

const RedEaredSliderTurtlePage = () => {
  return (
    <div className="bg-teal-100 min-h-screen flex items-center justify-center">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-16 mx-auto">
          <div className="flex flex-col md:flex-row bg-teal-50 rounded-lg shadow-lg overflow-hidden">
            
            {/* Product Image */}
            <div className="md:w-1/2">
              <Image
                alt="Red-Eared Slider Turtle"
                width={500}
                height={500}
                className="w-full h-full object-cover"
                src="/redearslider.jpeg" // Replace with the actual image path
              />
            </div>

            {/* Product Details */}
            <div className="md:w-1/2 p-8 flex flex-col justify-center">
              <h2 className="text-sm uppercase text-teal-500 tracking-widest font-semibold">
                The Pawfect Store
              </h2>
              <h1 className="text-gray-900 text-4xl font-bold mt-2">
                Red-Eared Slider Turtle 🐢
              </h1>
              <p className="text-gray-600 text-lg mt-4 leading-relaxed">
                The **Red-Eared Slider Turtle** is one of the most popular and widely recognized freshwater turtles. Known for their 
                distinctive **red markings** behind their ears, these turtles are **active**, **intelligent**, and adaptable to both 
                **aquatic** and **semi-aquatic** environments.

                Native to the United States, Red-Eared Sliders are often found in ponds, lakes, and rivers, where they enjoy basking in the sun 
                and swimming in the water. They are **omnivorous**, feeding on a mix of aquatic plants, small fish, and invertebrates. As pets, 
                they are **easy to care for** as long as their habitat is properly maintained, providing both a water area and a dry basking spot.

                Red-Eared Sliders can live for many years, making them a long-term companion for those who are prepared to meet their care needs. 
                Whether you are new to turtle ownership or have experience, the Red-Eared Slider Turtle is a fascinating and **low-maintenance** 
                pet that will thrive in a well-kept environment. 🐢✨
              </p>

              {/* Price and Buttons */}
              <div className="flex items-center mt-6">
                <span className="title-font font-bold text-3xl text-gray-900">$29.99</span>
                
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

export default RedEaredSliderTurtlePage;
