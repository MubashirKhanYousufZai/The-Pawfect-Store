import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { AiOutlineHeart } from 'react-icons/ai';

const YellowBelliedSliderTurtlePage = () => {
  return (
    <div className="bg-teal-100 min-h-screen flex items-center justify-center">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-16 mx-auto">
          <div className="flex flex-col md:flex-row bg-teal-50 rounded-lg shadow-lg overflow-hidden">
            
            {/* Product Image */}
            <div className="md:w-1/2">
              <Image
                alt="Yellow-Bellied Slider Turtle"
                width={500}
                height={500}
                className="w-full h-full object-cover"
                src="/yellowbailedslider.jpeg" // Replace with the actual image path
              />
            </div>

            {/* Product Details */}
            <div className="md:w-1/2 p-8 flex flex-col justify-center">
              <h2 className="text-sm uppercase text-teal-500 tracking-widest font-semibold">
                The Pawfect Store
              </h2>
              <h1 className="text-gray-900 text-4xl font-bold mt-2">
                Yellow-Bellied Slider Turtle 🐢
              </h1>
              <p className="text-gray-600 text-lg mt-4 leading-relaxed">
                The **Yellow-Bellied Slider Turtle** is a beautiful and active freshwater turtle known for its **bright yellow markings** 
                on its underside, giving it its name. Native to the southeastern United States, this turtle thrives in a variety of aquatic 
                environments, from lakes to ponds and slow-moving rivers.

                Yellow-Bellied Sliders are **omnivores**, feeding on a mix of aquatic plants, small fish, insects, and even algae. They 
                are often seen basking in the sun to regulate their body temperature. In captivity, they require a **well-maintained water 
                area**, along with a dry basking spot to rest and absorb UVB light. 

                These turtles are well-known for their **curious and playful nature**, making them great pets for turtle enthusiasts. 
                With proper care, the Yellow-Bellied Slider Turtle can live for many years and become a beloved companion in your home. 🐢✨
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

export default YellowBelliedSliderTurtlePage;
