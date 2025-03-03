import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { AiOutlineHeart } from 'react-icons/ai';

const OscarFishPage = () => {
  return (
    <div className="bg-teal-100 min-h-screen flex items-center justify-center">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-16 mx-auto">
          <div className="flex flex-col md:flex-row bg-teal-50 rounded-lg shadow-lg overflow-hidden">
            
            {/* Product Image */}
            <div className="md:w-1/2">
              <Image
                alt="Oscar Fish"
                width={500}
                height={500}
                className="w-full h-full object-cover"
                src="/oscar.jpeg" // Replace with the actual image path
              />
            </div>

            {/* Product Details */}
            <div className="md:w-1/2 p-8 flex flex-col justify-center">
              <h2 className="text-sm uppercase text-teal-500 tracking-widest font-semibold">
                The Pawfect Store
              </h2>
              <h1 className="text-gray-900 text-4xl font-bold mt-2">
                Oscar Fish 🐟
              </h1>
              <p className="text-gray-600 text-lg mt-4 leading-relaxed">
                The **Oscar Fish** is a striking and **intelligent** freshwater fish known for its **vibrant colors** and **strong personality**. 
                Native to South America, Oscars are highly popular among aquarium enthusiasts due to their **interactive nature** and 
                **beautiful appearance**. They come in a variety of colors, including red, orange, and black, with some having striking patterns.

                Oscars are **aggressive** and **territorial**, making them best suited for larger aquariums or tanks with other similar species. 
                They are **omnivorous**, eating a wide variety of foods, including pellets, live foods, and even smaller fish. Their high intelligence 
                allows them to recognize their owners, and many aquarists enjoy the **bonding experience** with these fish.

                If you are looking for a **highly interactive** fish with a **bold personality**, the Oscar Fish is a perfect choice for an aquarium 
                that can accommodate its size and temperament. 🐟✨
              </p>

              {/* Price and Buttons */}
              <div className="flex items-center mt-6">
                <span className="title-font font-bold text-3xl text-gray-900">$19.99</span>
                
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

export default OscarFishPage;
