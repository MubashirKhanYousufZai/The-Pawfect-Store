import Image from "next/image";
import Link from "next/link";
import React from "react";

const tortoises = [
  {
    name: "Sulcata Tortoise",
    description: "A friendly and large tortoise, great for outdoor enclosures. 🏜️",
    imageUrl: "/sulcata.jpeg",
  },
  {
    name: "Leopard Tortoise",
    description: "Known for its unique shell patterns, a beauty among tortoises! 🌿",
    imageUrl: "/leopard.jpeg",
  },
  {
    name: "Red-Footed Tortoise",
    description: "A colorful and active tortoise, perfect for warm climates. 🍓",
    imageUrl: "/red-footed.jpeg",
  },
  {
    name: "Greek Tortoise",
    description: "A small and hardy tortoise, ideal for beginners. 🏺",
    imageUrl: "/greek.jpeg",
  },
  {
    name: "Hermanns Tortoise",
    description: "A friendly, easy-to-care-for species with a stunning shell. 🌾",
    imageUrl: "/hermanns.jpeg",
  },
  {
    name: "Indian Star Tortoise",
    description: "Famous for its star-patterned shell, a rare and exotic pet. ⭐",
    imageUrl: "/indian-star.jpeg",
  },
  {
    name: "Russian Tortoise",
    description: "A hardy and small tortoise, great for indoor enclosures. ❄️",
    imageUrl: "/russian.jpeg",
  },
  {
    name: "Aldabra Tortoise",
    description: "One of the largest tortoises in the world, truly majestic! 🏝️",
    imageUrl: "/aldabra.jpeg",
  },
  {
    name: "Galapagos Tortoise",
    description: "A living legend, known for its massive size and long lifespan! 🦕",
    imageUrl: "/galapagos.jpeg",
  },
  {
    name: "Egyptian Tortoise",
    description: "A small, rare tortoise, perfect for dry and warm habitats. 🏜️",
    imageUrl: "/egyptian.jpeg",
  },
];
// Explicitly define the type of the name parameter
const formatUrl = (name: string) => name.toLowerCase().replace(/\s+/g, '-'); // ✅ Fixes spaces in URLs

const Tortoise = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-16">
          <h1 className="text-3xl sm:text-4xl font-bold title-font mb-4 text-gray-900">
            TORTOISES 🐢
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-lg sm:text-xl text-gray-700">
            🐢 Discover our selection of tortoises, perfect for long-term companionship.  
            These slow-moving creatures bring calmness and charm to any home! 🌿✨
          </p>
        </div>
        <div className="flex flex-wrap -m-4 justify-center">
          {tortoises.map((tortoise) => (
            <div key={tortoise.name} className="p-4 lg:w-1/4 md:w-1/2 sm:w-full">
              <div className="h-full flex flex-col items-center text-center bg-yellow-100 shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 ease-in-out">
                <Image
                  alt={tortoise.name}
                  width={320}
                  height={320}
                  className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-6"
                  src={tortoise.imageUrl}
                />
                <div className="px-6 pb-6">
                <Link href={`/components/pets/tortoise/${formatUrl(tortoise.name)}`} passHref>
                    <h2 className="title-font font-semibold text-2xl text-gray-900 mb-2 hover:text-teal-500 transition-colors cursor-pointer">
                      {tortoise.name}
                    </h2>
                  </Link>
                  <p className="mb-4 text-lg text-gray-600">
                    🐢 <strong>{tortoise.description}</strong>
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

export default Tortoise;
