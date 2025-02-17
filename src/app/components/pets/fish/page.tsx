import Image from "next/image";
import Link from "next/link";
import React from "react";

const fishes = [
  {
    name: "Goldfish",
    description: "The classic, vibrant Goldfish is a beautiful and low-maintenance aquatic companion. 🐠",
    imageUrl: "/goldfish.jpeg",
  },
  {
    name: "Betta Fish",
    description: "Known for their stunning colors and flowing fins, Betta Fish are a visual delight! 🌊",
    imageUrl: "/betta.jpeg",
  },
  {
    name: "Guppy Fish",
    description: "Guppies are colorful, hardy, and easy to care for, perfect for beginners! 🌟",
    imageUrl: "/guppy.jpeg",
  },
  {
    name: "Angelfish",
    description: "Elegant and graceful, Angelfish add beauty and charm to any aquarium. 🏝️",
    imageUrl: "/angel.jpeg",
  },
  {
    name: "Neon Tetra",
    description: "Bright and lively, Neon Tetras bring a glowing effect to any fish tank. ✨",
    imageUrl: "/neontetra.jpeg",
  },
  {
    name: "Discus Fish",
    description: "The king of aquariums, Discus Fish are stunning and require expert care. 👑",
    imageUrl: "/discus.jpeg",
  },
  {
    name: "Molly Fish",
    description: "Friendly and adaptable, Mollies are great community fish for any tank. 🌊",
    imageUrl: "/molly.jpeg",
  },
  {
    name: "Platy Fish",
    description: "Vibrant and active, Platies bring energy and color to freshwater tanks. 🏞️",
    imageUrl: "/platy.jpeg",
  },
  {
    name: "Oscar Fish",
    description: "A bold and intelligent species, Oscar Fish can recognize their owners! 🤯",
    imageUrl: "/oscar.jpeg",
  },
  {
    name: "Corydoras Catfish",
    description: "A peaceful bottom-dweller, perfect for keeping your tank clean and tidy. 🧹",
    imageUrl: "/corydoras.jpeg",
  },
];

const Fish = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-16">
          <h1 className="text-3xl sm:text-4xl font-bold title-font mb-4 text-gray-900">
            AQUARIUM FISHES 🐠
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-lg sm:text-xl text-gray-700">
            🐠 Bring your aquarium to life with our beautiful collection of freshwater and tropical fish!  
            Find the perfect aquatic pet for your home. 🌊✨
          </p>
        </div>
        <div className="flex flex-wrap -m-4 justify-center">
          {fishes.map((fish) => (
            <div key={fish.name} className="p-4 lg:w-1/4 md:w-1/2 sm:w-full">
              <div className="h-full flex flex-col items-center text-center bg-blue-100 shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 ease-in-out">
                <Image
                  alt={fish.name}
                  width={320}
                  height={320}
                  className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-6"
                  src={fish.imageUrl}
                />
                <div className="px-6 pb-6">
                  <Link href={`/components/pets/fish/${fish.name.toLowerCase().replace(/\s+/g, "-")}`}>
                    <h2 className="title-font font-semibold text-2xl text-gray-900 mb-2">
                      {fish.name}
                    </h2>
                  </Link>
                  <p className="mb-4 text-lg text-gray-600">
                    🐟 <strong>{fish.description}</strong>
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

export default Fish;
