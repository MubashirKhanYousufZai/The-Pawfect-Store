import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { AiOutlineHeart } from 'react-icons/ai';

const CorydorasCatfishPage = () => {
  return (
    <div className="bg-teal-100 min-h-screen flex items-center justify-center">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-16 mx-auto">
          <div className="flex flex-col md:flex-row bg-teal-50 rounded-lg shadow-lg overflow-hidden">
            
            {/* Product Image */}
            <div className="md:w-1/2">
              <Image
                alt="Corydoras Catfish"
                width={500}
                height={500}
                className="w-full h-full object-cover"
                src="/corydoras.jpeg" // Replace with the actual image path
              />
            </div>

            {/* Product Details */}
            <div className="md:w-1/2 p-8 flex flex-col justify-center">
              <h2 className="text-sm uppercase text-teal-500 tracking-widest font-semibold">
                The Pawfect Store
              </h2>
              <h1 className="text-gray-900 text-4xl font-bold mt-2">
                Corydoras Catfish 🐟
              </h1>
              <p className="text-gray-600 text-lg mt-4 leading-relaxed">
                The **Corydoras Catfish** is a popular and peaceful species of freshwater fish that is known for its **playful nature**, 
                **bottom-dwelling habits**, and **easy care**. Native to South America, these small, armored catfish are often found in schools 
                and are loved by aquarists for their **gentle disposition** and **cleaning behavior**.

                Corydoras are **social** fish that thrive in groups, making them a great addition to **community tanks**. They are often seen 
                scavenging the bottom of the tank for food, helping to keep the substrate clean. Their **small size** and **peaceful nature** 
                make them ideal for tanks of all sizes, and they are particularly compatible with other non-aggressive species.

                With their **distinctive barbels** and **silvery body**, Corydoras Catfish are not only functional but also a charming and 
                fun addition to any aquarium. Whether you're a beginner or an experienced aquarist, these catfish are sure to add charm and 
                activity to your tank. 🐟✨
              </p>

              {/* Price and Buttons */}
              <div className="flex items-center mt-6">
                <span className="title-font font-bold text-3xl text-gray-900">$7.99</span>
                
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

export default CorydorasCatfishPage;
