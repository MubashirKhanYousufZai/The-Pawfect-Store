import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { AiOutlineHeart } from 'react-icons/ai';

const AmethystinePythonPage = () => {
  return (
    <div className="bg-teal-100 min-h-screen flex items-center justify-center">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-16 mx-auto">
          <div className="flex flex-col md:flex-row bg-teal-50 rounded-lg shadow-lg overflow-hidden">
            
            {/* Product Image */}
            <div className="md:w-1/2">
              <Image
                alt="Amethystine Python"
                width={500}
                height={500}
                className="w-full h-full object-cover"
                src="/amethystine.jpeg" // Replace with the actual image path
              />
            </div>

            {/* Product Details */}
            <div className="md:w-1/2 p-8 flex flex-col justify-center">
              <h2 className="text-sm uppercase text-teal-500 tracking-widest font-semibold">
                The Pawfect Store
              </h2>
              <h1 className="text-gray-900 text-4xl font-bold mt-2">
                Amethystine Python 🐍
              </h1>
              <p className="text-gray-600 text-lg mt-4 leading-relaxed">
                The **Amethystine Python** (*Morelia amethistina*), also known as the **Jungle Carpet Python**, is a **massive, arboreal snake** 
                native to the tropical forests of **New Guinea, Indonesia, and parts of Australia**. This **beautiful, powerful snake** 
                is known for its **gorgeous iridescent purple and gold** coloration, making it a sought-after reptile for enthusiasts.  

                Amethystine Pythons are **active climbers** and **aggressive feeders**, requiring an **expansive vertical enclosure** 
                with adequate branches and hiding spots. While they are known for their strong temperaments, they are also incredibly 
                intelligent and **adapt well to a consistent and caring routine**.  

                As one of the largest non-venomous snakes, **Amethystine Pythons** can grow to over **20 feet** and require proper 
                space to thrive. Their **docile nature** in captivity makes them a prized species for experienced snake keepers.  
              </p>

              {/* Price and Buttons */}
              <div className="flex items-center mt-6">
                <span className="title-font font-bold text-3xl text-gray-900">$899.99</span>
                
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

export default AmethystinePythonPage;
