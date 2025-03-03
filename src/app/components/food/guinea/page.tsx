import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaWhatsapp, FaLinkedinIn, FaGithub } from 'react-icons/fa';

const GuineaPigFoodPage = () => {
  const guineaPigFoods = [
    {
      name: 'Cavy Crunch 🐹',
      role: 'Guinea Pig Food',
      image: '/GF2.png',
      description: 'A tasty and crunchy blend for your little guinea pig!',
      price: 11.99,
    },
    {
      name: 'Veggie Bites 🥕',
      role: 'Guinea Pig Food',
      image: '/GF1.png',
      description: 'Fresh and healthy veggie-filled snacks for guinea pigs!',
      price: 13.99,
    },
    {
      name: 'Herbal Hay 🌿',
      role: 'Guinea Pig Food',
      image: '/GF3.png',
      description: 'A natural blend of herbs and hay for a healthy guinea pig!',
      price: 15.49,
    },
    {
      name: 'Cavy Feast 🥬',
      role: 'Guinea Pig Food',
      image: '/GF1.png',
      description: 'High-fiber, nutrient-packed mix for your guinea pigs best health!',
      price: 17.99,
    },
  ];

  return (
    <div className="bg-gradient-to-r from-teal-200 to-green-400 py-24">
      <section className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-4 leading-tight tracking-tight">
            HEALTHY FOOD FOR YOUR GUINEA PIG 🐹
          </h1>
          <p className="text-lg text-white max-w-2xl mx-auto leading-relaxed">
            Keep your guinea pig happy and healthy with our premium food blends,  
            rich in nutrients and flavor for a long, active life! 🌿🥕
          </p>
        </div>

        <div className="flex flex-wrap -m-4">
          {guineaPigFoods.map((food, index) => (
            <div key={index} className="p-4 sm:w-1/2 lg:w-1/4">
              <div className="flex flex-col items-center bg-white rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out">
                <div className="w-48 h-48 relative rounded-lg overflow-hidden mb-6">
                  <Image
                    width={206}
                    height={206}
                    alt={food.name}
                    className="object-cover object-center w-full h-full"
                    src={food.image}
                  />
                </div>

                <div className="flex-grow text-center p-4">
                  <h2 className="text-2xl font-semibold text-gray-900">{food.name}</h2>
                  <h3 className="text-lg text-gray-600 mb-3">{food.role}</h3>
                  <p className="text-gray-700 mb-4">{food.description}</p>
                  <p className="text-xl font-semibold text-teal-700 mb-6">
                    ${food.price.toFixed(2)}
                  </p>
                  
                  <div className="flex justify-center space-x-6 mb-6">
                    <a
                      href="https://wa.me/qr/FWX3BWWPABVRG1"
                      className="text-gray-500 hover:text-teal-500 transition-colors duration-300"
                    >
                      <FaWhatsapp className="w-6 h-6" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/mubashir-khan-538a662bb/"
                      className="text-gray-500 hover:text-teal-500 transition-colors duration-300"
                    >
                      <FaLinkedinIn className="w-6 h-6" />
                    </a>
                    <a
                      href="https://github.com/MubashirKhanYousufZai"
                      className="text-gray-500 hover:text-teal-500 transition-colors duration-300"
                    >
                      <FaGithub className="w-6 h-6" />
                    </a>
                  </div>

                  <Link href="/components/payment">
                    <button className="bg-teal-500 text-white py-2 px-8 rounded-full hover:bg-teal-600 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-teal-600 focus:ring-opacity-50">
                      Buy Now
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default GuineaPigFoodPage;
