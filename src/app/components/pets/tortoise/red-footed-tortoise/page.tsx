import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { AiOutlineHeart } from 'react-icons/ai';

const RedFootedTortoisePage = () => {
  return (
    <div className="bg-teal-100 min-h-screen flex items-center justify-center">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-16 mx-auto">
          <div className="flex flex-col md:flex-row bg-teal-50 rounded-lg shadow-lg overflow-hidden">
            
            {/* Product Image */}
            <div className="md:w-1/2">
              <Image
                alt="Red-Footed Tortoise"
                width={500}
                height={500}
                className="w-full h-full object-cover"
                src="/red-footed.jpeg" // Replace with the actual image path
              />
            </div>

            {/* Product Details */}
            <div className="md:w-1/2 p-8 flex flex-col justify-center">
              <h2 className="text-sm uppercase text-teal-500 tracking-widest font-semibold">
                The Pawfect Store
              </h2>
              <h1 className="text-gray-900 text-4xl font-bold mt-2">
                Red-Footed Tortoise 🐢
              </h1>
              <p className="text-gray-600 text-lg mt-4 leading-relaxed">
                The **Red-Footed Tortoise** is a fascinating and colorful species, native to the **rainforests and grasslands 
                of South America**. It is easily recognized by its **reddish-teal markings on its legs, head, and shell**, 
                making it one of the most attractive pet tortoises.
                
                This species is **omnivorous**, meaning it eats a mix of **fruits, flowers, leafy greens, and even protein** 
                like insects or small vertebrates. They usually grow between **10-16 inches** in length and have a gentle 
                temperament, making them great companions for dedicated reptile keepers.
                
                Red-Footed Tortoises **thrive in warm, humid environments** with plenty of shaded areas and access to fresh 
                water. With proper care, they can live up to **50 years or more**, providing a lifetime of companionship to 
                their owners.
                
                If you’re looking for a vibrant, intelligent, and easygoing pet, the Red-Footed Tortoise is an excellent choice! 🐢✨
              </p>

              {/* Price and Buttons */}
              <div className="flex items-center mt-6">
                <span className="title-font font-bold text-3xl text-gray-900">$169.99</span>
                
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

export default RedFootedTortoisePage;
