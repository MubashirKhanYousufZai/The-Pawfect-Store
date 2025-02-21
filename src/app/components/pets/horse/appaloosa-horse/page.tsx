import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { AiOutlineHeart } from 'react-icons/ai';

const AppaloosaHorsePage = () => {
  return (
    <div className="bg-teal-100 min-h-screen flex items-center justify-center">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-16 mx-auto">
          <div className="flex flex-col md:flex-row bg-teal-50 rounded-lg shadow-lg overflow-hidden">
            
            {/* Product Image */}
            <div className="md:w-1/2">
              <Image
                alt="Appaloosa Horse"
                width={500}
                height={500}
                className="w-full h-full object-cover"
                src="/appaloosa.jpeg" // Replace with the actual image path
              />
            </div>

            {/* Product Details */}
            <div className="md:w-1/2 p-8 flex flex-col justify-center">
              <h2 className="text-sm uppercase text-teal-500 tracking-widest font-semibold">
                The Pawfect Store
              </h2>
              <h1 className="text-gray-900 text-4xl font-bold mt-2">
                Appaloosa Horse 🐴
              </h1>
              <p className="text-gray-600 text-lg mt-4 leading-relaxed">
                The **Appaloosa Horse** is a unique and beautiful breed known for its distinctive **spotted coat** and 
                vibrant personality. Originating from the **Nez Perce Tribe** in the Pacific Northwest, these horses are deeply 
                intertwined with the history and culture of Native American tribes. The Appaloosa’s striking coat patterns, 
                ranging from speckled to blanket-like designs, make each one truly **one-of-a-kind**.

                Appaloosas are not just beautiful but also known for their **strength**, **intelligence**, and **versatility**. 
                These horses are commonly used in **western riding**, **trail riding**, and **reining**, thanks to their 
                agility and quick reflexes. Their **calm temperament** and **willingness to work** make them great companions 
                for riders of all levels, whether for competitive sports or leisure riding. 

                The **Appaloosa Horse** has earned a reputation as a **reliable** and **spirited** breed, making it an ideal 
                addition to any stable. Whether you are looking for a stunning trail companion or a show ring contender, the 
                Appaloosa will exceed your expectations. 🐴✨
              </p>

              {/* Price and Buttons */}
              <div className="flex items-center mt-6">
                <span className="title-font font-bold text-3xl text-gray-900">$9,000.00</span>
                
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

export default AppaloosaHorsePage;
