import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { AiOutlineHeart } from 'react-icons/ai';

const TexelGuineaPigPage = () => {
  return (
    <div className="bg-teal-100 min-h-screen flex items-center justify-center">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-16 mx-auto">
          <div className="flex flex-col md:flex-row bg-teal-50 rounded-lg shadow-lg overflow-hidden">
            
            {/* Product Image */}
            <div className="md:w-1/2">
              <Image
                alt="Texel Guinea Pig"
                width={500}
                height={500}
                className="w-full h-full object-cover"
                src="/texelguinea.jpeg" // Replace with the actual image path
              />
            </div>

            {/* Product Details */}
            <div className="md:w-1/2 p-8 flex flex-col justify-center">
              <h2 className="text-sm uppercase text-teal-500 tracking-widest font-semibold">
                The Pawfect Store
              </h2>
              <h1 className="text-gray-900 text-4xl font-bold mt-2">
                Texel Guinea Pig 🐹
              </h1>
              <p className="text-gray-600 text-lg mt-4 leading-relaxed">
                <strong>The Pawfect Store</strong> proudly presents the adorable **Texel Guinea Pig** 🐹, a breed famous for its 
                luxurious, **curly coat**. Texels are not only one of the most stunning guinea pig breeds but also have a friendly 
                and social personality, making them excellent pets for families, children, and guinea pig enthusiasts alike. Their 
                curls give them a unique, teddy bear-like appearance that sets them apart from other guinea pig breeds. Though their 
                coats require regular grooming to prevent matting, they are relatively easy to care for compared to other long-haired 
                guinea pig breeds. Texels are gentle, affectionate, and love interaction, making them great companions that enjoy human 
                attention. Whether you are new to guinea pig care or a seasoned owner, the Texel Guinea Pig will bring joy and charm to 
                your home. 🐹💖✨
              </p>

              {/* Price and Buttons */}
              <div className="flex items-center mt-6">
                <span className="title-font font-bold text-3xl text-gray-900">$49.99</span>
                
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

export default TexelGuineaPigPage;
