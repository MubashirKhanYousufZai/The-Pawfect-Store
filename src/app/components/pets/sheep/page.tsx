import Image from "next/image";
import Link from "next/link";
import React from "react";

const sheeps = [
  {
    name: "Merino Sheep",
    description: "Renowned for its fine wool, Merino sheep are highly valued in the wool industry. 🐑",
    imageUrl: "/merino.jpeg",
  },
  {
    name: "Suffolk Sheep",
    description: "Known for their muscular build and excellent meat quality, Suffolk sheep are a popular choice for farmers. 🌾",
    imageUrl: "/suffolk.jpeg",
  },
  {
    name: "Dorset Sheep",
    description: "Dorset sheep are known for their high fertility rate and adaptability in various climates. 🌍",
    imageUrl: "/dorset.jpeg",
  },
  {
    name: "Cheviot Sheep",
    description: "Cheviot sheep are hardy and versatile, with great wool and meat quality. 🐑",
    imageUrl: "/cheviot.jpeg",
  },
  {
    name: "Lincoln Sheep",
    description: "Lincoln sheep are known for their large size and high-quality wool production. 🌿",
    imageUrl: "/lincoln.jpeg",
  },
  {
    name: "Hampshire Sheep",
    description: "Hampshire sheep are valued for their meat production and rapid growth. 🐏",
    imageUrl: "/hamsphire.jpeg",
  },
  {
    name: "Romney Sheep",
    description: "Romney sheep are known for their strong wool and hardiness, perfect for various farming conditions. 🌱",
    imageUrl: "/romney.jpeg",
  },
  {
    name: "Jacob Sheep",
    description: "Jacob sheep are unique with their distinct black and white markings and are prized for their wool and meat. 🌸",
    imageUrl: "/jacob.jpeg",
  },
  {
    name: "Texel Sheep",
    description: "Texel sheep are popular for their lean meat and excellent carcass conformation. 🐑",
    imageUrl: "/texel.jpeg",
  },
  {
    name: "Clun Forest Sheep",
    description: "Clun Forest sheep are a hardy breed known for their ability to thrive in difficult terrains. 🌄",
    imageUrl: "/clunforest.jpeg",
  },
];

const Sheep = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-16">
          <h1 className="text-3xl sm:text-4xl font-bold title-font mb-4 text-gray-900">
            SHEEP 🐑
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-lg sm:text-xl text-gray-700">
            🐑 Discover the diverse and hardworking breeds of sheep, perfect for wool production, meat, and farming.  
            Find the ideal sheep breed for your needs! 🌿✨
          </p>
        </div>
        <div className="flex flex-wrap -m-4 justify-center">
          {sheeps.map((sheep) => (
            <div key={sheep.name} className="p-4 lg:w-1/4 md:w-1/2 sm:w-full">
              <div className="h-full flex flex-col items-center text-center bg-gray-100 shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 ease-in-out">
                <Image
                  alt={sheep.name}
                  width={320}
                  height={320}
                  className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-6"
                  src={sheep.imageUrl}
                />
                <div className="px-6 pb-6">
                  <Link href={`/components/pets/sheep/${sheep.name.toLowerCase().replace(/\s+/g, "-")}`}>
                    <h2 className="title-font font-semibold text-2xl text-gray-900 mb-2">
                      {sheep.name}
                    </h2>
                  </Link>
                  <p className="mb-4 text-lg text-gray-600">
                    🐑 <strong>{sheep.description}</strong>
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

export default Sheep;
