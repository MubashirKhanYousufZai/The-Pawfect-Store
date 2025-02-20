import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { AiOutlineHeart } from 'react-icons/ai';

const PeruvianGuineaPigPage = () => {
  return (
    <div className="bg-teal-100 min-h-screen flex items-center justify-center">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-16 mx-auto">
          <div className="flex flex-col md:flex-row bg-teal-50 rounded-lg shadow-lg overflow-hidden">
            
            {/* Product Image */}
            <div className="md:w-1/2">
              <Image
                alt="Peruvian Guinea Pig"
                width={500}
                height={500}
                className="w-full h-full object-cover"
                src="/peruvianguinea.jpeg" // Replace with the actual image path
              />
            </div>

            {/* Product Details */}
            <div className="md:w-1/2 p-8 flex flex-col justify-center">
              <h2 className="text-sm uppercase text-teal-500 tracking-widest font-semibold">
                The Pawfect Store
              </h2>
              <h1 className="text-gray-900 text-4xl font-bold mt-2">
                Peruvian Guinea Pig 🐹
              </h1>
              <p className="text-gray-600 text-lg mt-4 leading-relaxed">
                <strong>The Pawfect Store</strong> proudly presents the **Peruvian Guinea Pig** 🐹, known for its stunning 
                long, silky coat. This breed is one of the most beautiful guinea pig varieties, with its long, flowing fur 
                that requires regular care and attention. Peruvian Guinea Pigs are gentle, social, and affectionate, making them 
                excellent companions for families, children, or individuals looking for a friendly pet. While their long fur 
                requires regular grooming, it’s worth the effort to maintain their gorgeous appearance. These guinea pigs are 
                calm and enjoy human interaction, making them fun and rewarding pets to care for. Whether you’re an experienced 
                guinea pig owner or a first-time pet parent, the Peruvian Guinea Pig will bring beauty, love, and joy into your home. 
                🐹💖✨
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

export default PeruvianGuineaPigPage;
