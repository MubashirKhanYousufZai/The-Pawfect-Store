import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const pakistaniGoats = [
  {
    name: "Beetal Goat",
    description: "Meet the majestic Beetal goat from Pakistan, known for its high milk yield and impressive size! 🐐",
    imageUrl: "/beetal.jpeg",
  },
  {
    name: "Kamori Goat",
    description: "Discover the Kamori goat, a prized breed from Sindh, Pakistan, famous for its unique color patterns and adaptability! 🐐",
    imageUrl: "/kamori.jpeg",
  },
  {
    name: "Dera Din Panah Goat",
    description: "Introducing the Dera Din Panah goat, a resilient breed from Punjab, Pakistan, known for its meat production and hardiness! 🐐",
    imageUrl: "/dear-din-panah.jpeg",
  },
  {
    name: "Pahari Goat",
    description: "Meet the Pahari goat from the mountainous regions of Pakistan, a breed known for its adaptability to harsh environments! 🐐",
    imageUrl: "/pahari.jpeg",
  },
  {
    name: "Chappar Goat",
    description: "The Chappar goat from Pakistan, a breed known for its fine fiber and meat production, perfect for diverse climates! 🐐",
    imageUrl: "/chappar.jpeg",
  },
  {
    name: "Teddy Goat",
    description: "The Teddy Goat from Pakistan, a very cute breed and it is known for its adorable appearance and friendly nature! 🐐",
    imageUrl: "/teddy.jpeg",
  },
  {
    name: "Barbari Goat",
    description: "Our Barbari goats are known for their prolific breeding and meat production - a profitable breed for any farmer! 🐐",
    imageUrl: "/barbari.jpeg",
  },
  {
    name: "Nachi Goat",
    description: "Adopt a Nachi goat today, originating from Rajasthan, India, and also popular in Pakistan, known for its dual-purpose of meat and milk! 🐐",
    imageUrl: "/nachi.jpeg",
  },
  {
    name: "Surti Goat",
    description: "Discover the Surti goat from the Surti region, known for its rich milk and high-quality fiber! 🐐",
    imageUrl: "/surti.jpeg",
  },
  {
    name: "Gulati Goat",
    description: "Meet the Gulati goat, known for its impressive horns and high milk production. Adopt one for a profitable experience! 🐐",
    imageUrl: "/gulati.jpeg",
  },
];

const Goat = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-16">
          <h1 className="text-3xl sm:text-4xl font-bold title-font mb-4 text-gray-900">
           Goats 🐐
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-lg sm:text-xl text-gray-700">
            Check Out our goats for higher breed quality 🐐
          </p>
        </div>
        <div className="flex flex-wrap -m-4 justify-center">
          {pakistaniGoats.map((goat) => (
            <div key={goat.name} className="p-4 lg:w-1/4 md:w-1/2 sm:w-full">
              <div className="h-full flex flex-col items-center text-center bg-green-100 shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 ease-in-out">
                <Image
                  alt={goat.name}
                  width={320}
                  height={320}
                  className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-6"
                  src={goat.imageUrl}
                />
                <div className="px-6 pb-6">
                  <Link href={`/components/pets/goat/${goat.name.toLowerCase().replace(' ', '-')}`}>
                    <h2 className="title-font font-semibold text-2xl text-gray-900 mb-2">
                      {goat.name}
                    </h2>
                  </Link>
                  <p className="mb-4 text-lg text-gray-600">
                    🐐 <strong>{goat.description}</strong>
                  </p>
                  <button className="bg-teal-500 text-white px-6 py-2 rounded-full text-lg hover:bg-teal-600 transition-all duration-200">
                    <a href="/components/payment">Buy Now</a>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Goat;