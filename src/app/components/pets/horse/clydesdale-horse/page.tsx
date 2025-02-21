import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { AiOutlineHeart } from 'react-icons/ai';

const ClydesdaleHorsePage = () => {
  return (
    <div className="bg-teal-100 min-h-screen flex items-center justify-center">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-16 mx-auto">
          <div className="flex flex-col md:flex-row bg-teal-50 rounded-lg shadow-lg overflow-hidden">
            
            {/* Product Image */}
            <div className="md:w-1/2">
              <Image
                alt="Clydesdale Horse"
                width={500}
                height={500}
                className="w-full h-full object-cover"
                src="/clydesdale.jpeg" // Replace with the actual image path
              />
            </div>

            {/* Product Details */}
            <div className="md:w-1/2 p-8 flex flex-col justify-center">
              <h2 className="text-sm uppercase text-teal-500 tracking-widest font-semibold">
                The Pawfect Store
              </h2>
              <h1 className="text-gray-900 text-4xl font-bold mt-2">
                Clydesdale Horse 🐴
              </h1>
              <p className="text-gray-600 text-lg mt-4 leading-relaxed">
                The **Clydesdale Horse** is a stunning breed known for its **powerful stature**, **graceful movement**, and 
                **impressive history**. Originating from Scotland, these gentle giants are best known for their **large, muscular build** 
                and distinctive **feathering** on their legs. 

                Clydesdales were originally bred for **draft work** and have long been a symbol of strength and reliability, 
                especially used in farming, logging, and as **workhorses**. Today, they are often seen in **parades**, as well as in the 
                **showring** where their majestic presence and calm demeanor make them popular among horse lovers worldwide. 

                Their **friendly temperament** and **loving nature** make them wonderful companions, suitable for families or individuals 
                who appreciate the grandeur of these magnificent horses. If you are seeking a **noble and powerful** horse with a kind 
                heart, the **Clydesdale Horse** is the breed for you! 🐴✨
              </p>

              {/* Price and Buttons */}
              <div className="flex items-center mt-6">
                <span className="title-font font-bold text-3xl text-gray-900">$5,000.00</span>
                
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

export default ClydesdaleHorsePage;
