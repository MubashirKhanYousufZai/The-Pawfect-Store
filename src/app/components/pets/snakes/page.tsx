import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Snakes = [
  {
    name: "Burmese Python",
    description: "One of the largest snakes in the world, the Burmese Python is native to Southeast Asia and known for its massive size. 🐍",
    imageUrl: "/burmeseP.jpeg",
  },
  {
    name: "Reticulated Python",
    description: "The longest snake species, Reticulated Pythons are found in Southeast Asia and are known for their striking patterns. 🐍",
    imageUrl: "/reticulated.jpeg",
  },
  {
    name: "Ball Python",
    description: "Native to sub-Saharan Africa, Ball Pythons are popular pets due to their docile nature and attractive patterns. 🐍",
    imageUrl: "/ball.jpeg",
  },
  {
    name: "Indian Python",
    description: "Indian Pythons are found in the Indian subcontinent and are known for their agility and powerful constricting abilities. 🐍",
    imageUrl: "/indian.jpeg",
  },
  {
    name: "Burmese Python",
    description: "One of the largest snakes in the world, the Burmese Python is native to Southeast Asia and known for its massive size. 🐍",
    imageUrl: "/burmesePS.jpeg",
  },
  {
    name: "Blood Python",
    description: "Blood Pythons are found in Southeast Asia and are known for their striking red and brown patterns. 🐍",
    imageUrl: "/blood.jpeg",
  },
  {
    name: "Green Tree Python",
    description: "Native to Australia and New Guinea, Green Tree Pythons are known for their vibrant green color and arboreal habits. 🐍",
    imageUrl: "/green.jpeg",
  },
  {
    name: "Macklot's Python",
    description: "Macklot's Pythons are found in Indonesia and are known for their distinctive pattern and aggressive behavior. 🐍",
    imageUrl: "/macklots.jpeg",
  },
  {
    name: "Amethystine Python",
    description: "The Amethystine Python is a non-venomous snake found in Australia and New Guinea, known for its striking pattern and large size. 🐍",
    imageUrl: "/amethystine.jpeg",
  },
  {
    name: "Bismarck Ringed Python",
    description: "Bismarck Ringed Pythons are found in Papua New Guinea and are known for their distinctive ringed pattern. 🐍",
    imageUrl: "/bismarck.jpeg",
  },
];

const Pythons = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-16">
          <h1 className="text-3xl sm:text-4xl font-bold title-font mb-4 text-gray-900">
            Pythons 🐍
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-lg sm:text-xl text-gray-700">
            Explore the fascinating world of pythons! From the massive Burmese Python to the vibrant Green Tree Python, discover the unique characteristics and habitats of these incredible snakes. 🐍
          </p>
        </div>
        <div className="flex flex-wrap -m-4 justify-center">
          {Snakes.map((python) => (
            <div key={python.name} className="p-4 lg:w-1/4 md:w-1/2 sm:w-full">
              <div className="h-full flex flex-col items-center text-center bg-green-100 shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 ease-in-out">
                <Image
                  alt={python.name}
                  width={320}
                  height={320}
                  className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-6"
                  src={python.imageUrl}
                />
                <div className="px-6 pb-6">
                  <Link href={`/components/pets/python/${python.name.toLowerCase().replace(' ', '-')}`}>
                    <h2 className="title-font font-semibold text-2xl text-gray-900 mb-2">
                      {python.name}
                    </h2>
                  </Link>
                  <p className="mb-4 text-lg text-gray-600">
                    🐍 <strong>{python.description}</strong>
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

export default Pythons;