import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { AiOutlineHeart } from 'react-icons/ai';

const SpinySoftshellTurtlePage = () => {
  return (
    <div className="bg-teal-100 min-h-screen flex items-center justify-center">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-16 mx-auto">
          <div className="flex flex-col md:flex-row bg-teal-50 rounded-lg shadow-lg overflow-hidden">
            
            {/* Product Image */}
            <div className="md:w-1/2">
              <Image
                alt="Spiny Softshell Turtle"
                width={500}
                height={500}
                className="w-full h-full object-cover"
                src="/spiny.jpeg" // Replace with the actual image path
              />
            </div>

            {/* Product Details */}
            <div className="md:w-1/2 p-8 flex flex-col justify-center">
              <h2 className="text-sm uppercase text-teal-500 tracking-widest font-semibold">
                The Pawfect Store
              </h2>
              <h1 className="text-gray-900 text-4xl font-bold mt-2">
                Spiny Softshell Turtle 🐢
              </h1>
              <p className="text-gray-600 text-lg mt-4 leading-relaxed">
                The **Spiny Softshell Turtle** is a distinctive species known for its **flattened, leathery shell**, which lacks 
                the hard scutes that are typical of many other turtles. Native to North America, this turtle is commonly found 
                in rivers, lakes, and ponds with sandy or muddy bottoms where it can easily burrow.

                Spiny Softshell Turtles are **omnivores**, feeding on aquatic plants, fish, and small invertebrates. These turtles 
                are highly **aquatic** and spend most of their time swimming or basking on riverbanks. They are also known for 
                their **aggressive nature** when threatened, but are generally calm when given the proper environment.

                In captivity, Spiny Softshell Turtles require a **large aquatic enclosure** with both a basking area and plenty of 
                space to swim. Their **unique appearance** and **active lifestyle** make them fascinating and rewarding pets for 
                turtle enthusiasts. 🐢✨
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

export default SpinySoftshellTurtlePage;
