import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { AiOutlineHeart } from 'react-icons/ai';

const BoxTurtlePage = () => {
  return (
    <div className="bg-teal-100 min-h-screen flex items-center justify-center">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-16 mx-auto">
          <div className="flex flex-col md:flex-row bg-teal-50 rounded-lg shadow-lg overflow-hidden">
            
            {/* Product Image */}
            <div className="md:w-1/2">
              <Image
                alt="Box Turtle"
                width={500}
                height={500}
                className="w-full h-full object-cover"
                src="/box.jpeg" // Replace with the actual image path
              />
            </div>

            {/* Product Details */}
            <div className="md:w-1/2 p-8 flex flex-col justify-center">
              <h2 className="text-sm uppercase text-teal-500 tracking-widest font-semibold">
                The Pawfect Store
              </h2>
              <h1 className="text-gray-900 text-4xl font-bold mt-2">
                Box Turtle 🐢
              </h1>
              <p className="text-gray-600 text-lg mt-4 leading-relaxed">
                The **Box Turtle** is a fascinating and hardy terrestrial turtle known for its **unique ability** to completely 
                **close** its shell, providing protection from predators. Native to North America, Box Turtles are known for their 
                **distinctive markings** and **slow, deliberate movement**. 

                Box Turtles are **omnivorous**, feeding on a variety of foods including fruits, vegetables, insects, and even small 
                invertebrates. They require a **well-maintained habitat** with access to both dry and moist areas to regulate their 
                body temperature. As they are terrestrial, they spend most of their time on land, although they may enjoy a shallow 
                water area for drinking and bathing.

                Known for their **long lifespan** and gentle nature, Box Turtles make great pets for those who are willing to 
                invest in their care. They thrive in **outdoor enclosures** and can live for many decades with the right environment. 
                A Box Turtle can bring years of enjoyment and companionship to a well-prepared pet owner. 🐢✨
              </p>

              {/* Price and Buttons */}
              <div className="flex items-center mt-6">
                <span className="title-font font-bold text-3xl text-gray-900">$49.99</span>
                
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

export default BoxTurtlePage;
