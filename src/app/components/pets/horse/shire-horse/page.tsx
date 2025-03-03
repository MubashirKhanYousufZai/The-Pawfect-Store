import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { AiOutlineHeart } from 'react-icons/ai';

const ShireHorsePage = () => {
  return (
    <div className="bg-teal-100 min-h-screen flex items-center justify-center">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-16 mx-auto">
          <div className="flex flex-col md:flex-row bg-teal-50 rounded-lg shadow-lg overflow-hidden">
            
            {/* Product Image */}
            <div className="md:w-1/2">
              <Image
                alt="Shire Horse"
                width={500}
                height={500}
                className="w-full h-full object-cover"
                src="/shire.jpeg" // Replace with the actual image path
              />
            </div>

            {/* Product Details */}
            <div className="md:w-1/2 p-8 flex flex-col justify-center">
              <h2 className="text-sm uppercase text-teal-500 tracking-widest font-semibold">
                The Pawfect Store
              </h2>
              <h1 className="text-gray-900 text-4xl font-bold mt-2">
                Shire Horse 🐴
              </h1>
              <p className="text-gray-600 text-lg mt-4 leading-relaxed">
                The **Shire Horse** is one of the largest and most majestic horse breeds in the world, known for its 
                towering height and **gentle temperament**. Originating in England, Shires were historically used for 
                **heavy farm work** and **draft purposes**. These impressive horses are famous for their strong, muscular 
                build and their striking white **feathering** around their lower legs.

                Shire Horses are not only known for their power and size but also for their **calm nature** and **kind disposition**. 
                Their versatility and hard-working attitude make them perfect for various tasks, including pulling carriages, 
                farm work, and even participation in horse shows. Shires have a loyal following due to their **gentle giants** 
                nature, making them wonderful companions.

                Whether you are looking to add a powerful working horse to your farm or a stunning show horse to your collection, 
                the **Shire Horse** is an exceptional breed that will not disappoint. 🐴✨
              </p>

              {/* Price and Buttons */}
              <div className="flex items-center mt-6">
                <span className="title-font font-bold text-3xl text-gray-900">$12,000.00</span>
                
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

export default ShireHorsePage;
