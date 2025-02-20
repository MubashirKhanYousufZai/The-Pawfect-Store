import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { AiOutlineHeart } from 'react-icons/ai';

const CochinChickenPage = () => {
  return (
    <div className="bg-teal-100 min-h-screen flex items-center justify-center">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-16 mx-auto">
          <div className="flex flex-col md:flex-row bg-teal-50 rounded-lg shadow-lg overflow-hidden">
            
            {/* Product Image */}
            <div className="md:w-1/2">
              <Image
                alt="Cochin Chicken"
                width={500}
                height={500}
                className="w-full h-full object-cover"
                src="/cochin.jpeg" // Replace with the actual image path
              />
            </div>

            {/* Product Details */}
            <div className="md:w-1/2 p-8 flex flex-col justify-center">
              <h2 className="text-sm uppercase text-teal-500 tracking-widest font-semibold">
                The Pawfect Store
              </h2>
              <h1 className="text-gray-900 text-4xl font-bold mt-2">
                Cochin Chicken 🐔
              </h1>
              <p className="text-gray-600 text-lg mt-4 leading-relaxed">
                <strong>The Pawfect Store</strong> proudly presents the charming **Cochin Chicken** 🐔, a breed known for its 
                **fluffy feathers** and **docile temperament**. Cochins are large, heavy birds that are often raised more for 
                their beauty and friendly nature than for egg production. Their **feathered legs** and **full, soft plumage** make them 
                one of the most visually striking breeds, perfect for adding a touch of elegance to your flock. While Cochins are not 
                the most prolific egg layers, they still produce **large brown eggs** and are known for their calm and sweet personality, 
                making them great pets, especially for families with children. Whether you are raising them for show, as ornamental birds, 
                or simply as companions, Cochins are sure to impress. 🌸🐓✨
              </p>

              {/* Price and Buttons */}
              <div className="flex items-center mt-6">
                <span className="title-font font-bold text-3xl text-gray-900">$22.99</span>
                
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

export default CochinChickenPage;
