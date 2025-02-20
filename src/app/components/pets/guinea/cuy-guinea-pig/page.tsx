import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { AiOutlineHeart } from 'react-icons/ai';

const CuyGuineaPigPage = () => {
  return (
    <div className="bg-teal-100 min-h-screen flex items-center justify-center">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-16 mx-auto">
          <div className="flex flex-col md:flex-row bg-teal-50 rounded-lg shadow-lg overflow-hidden">
            
            {/* Product Image */}
            <div className="md:w-1/2">
              <Image
                alt="Cuy Guinea Pig"
                width={500}
                height={500}
                className="w-full h-full object-cover"
                src="/cuyguinea.jpeg" // Replace with the actual image path
              />
            </div>

            {/* Product Details */}
            <div className="md:w-1/2 p-8 flex flex-col justify-center">
              <h2 className="text-sm uppercase text-teal-500 tracking-widest font-semibold">
                The Pawfect Store
              </h2>
              <h1 className="text-gray-900 text-4xl font-bold mt-2">
                Cuy Guinea Pig 🐹
              </h1>
              <p className="text-gray-600 text-lg mt-4 leading-relaxed">
                <strong>The Pawfect Store</strong> is excited to introduce the **Cuy Guinea Pig** 🐹, a large and robust breed 
                originally from the Andean region of South America. Known for their **size** and **muscular build**, Cuy Guinea Pigs 
                are often raised for meat in certain cultures, but they also make excellent pets for experienced guinea pig owners. 
                Their **docile** and **gentle** nature makes them easy to handle, and they are often more relaxed than other breeds. 
                While they may require more space than smaller guinea pig breeds, their calm demeanor and love of **socialization** 
                with other guinea pigs make them wonderful companions. Whether you are looking for a unique addition to your guinea pig 
                family or exploring the possibility of raising them for meat production, the Cuy Guinea Pig offers a distinct and rewarding experience. 🐹✨
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

export default CuyGuineaPigPage;
