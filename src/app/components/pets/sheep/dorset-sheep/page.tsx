import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { AiOutlineHeart } from 'react-icons/ai';

const DorsetSheepPage = () => {
  return (
    <div className="bg-teal-100 min-h-screen flex items-center justify-center">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-16 mx-auto">
          <div className="flex flex-col md:flex-row bg-teal-50 rounded-lg shadow-lg overflow-hidden">
            
            {/* Product Image */}
            <div className="md:w-1/2">
              <Image
                alt="Dorset Sheep"
                width={500}
                height={500}
                className="w-full h-full object-cover"
                src="/dorset.jpeg" // Replace with the actual image path
              />
            </div>

            {/* Product Details */}
            <div className="md:w-1/2 p-8 flex flex-col justify-center">
              <h2 className="text-sm uppercase text-teal-500 tracking-widest font-semibold">
                The Pawfect Store
              </h2>
              <h1 className="text-gray-900 text-4xl font-bold mt-2">
                Dorset Sheep 🐑
              </h1>
              <p className="text-gray-600 text-lg mt-4 leading-relaxed">
                The **Dorset Sheep** is a versatile and highly regarded breed, known for its **rapid growth**, **high fertility**, 
                and **outstanding meat production**. Originating in **Southern England**, Dorsets are highly valued by farmers 
                for their ability to produce **high-quality lamb** and their adaptability to various farming systems.

                These sheep are known for their **excellent mothering ability**, with ewes that are attentive and protective of their lambs. 
                Dorsets are also **unique in their ability to breed out of season**, making them highly efficient in lamb production. 

                With their **docile temperament**, they are easy to handle and well-suited for both small and large-scale farming operations. 
                Whether you're looking to raise them for meat production or breeding, Dorset Sheep are a reliable and profitable choice for any farm. 🐑✨
              </p>

              {/* Price and Buttons */}
              <div className="flex items-center mt-6">
                <span className="title-font font-bold text-3xl text-gray-900">$499.99</span>
                
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

export default DorsetSheepPage;
