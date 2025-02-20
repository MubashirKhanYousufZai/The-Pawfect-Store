import Image from "next/image";
import Link from "next/link";
import React from "react";

const hens = [
  {
    name: "Rhode Island Red",
    description: "Hardy and friendly, the Rhode Island Red is a great layer of brown eggs. 🥚",
    imageUrl: "/rhode.jpeg",
  },
  {
    name: "Leghorn Chicken",
    description: "Leghorns are energetic and excellent egg layers, producing white eggs year-round. 🥚",
    imageUrl: "/leghorn.jpeg",
  },
  {
    name: "Plymouth Rock",
    description: "A calm and docile breed, Plymouth Rocks are great for both eggs and meat. 🐔",
    imageUrl: "/plymouth.jpeg",
  },
  {
    name: "Silkie Chicken",
    description: "Silkie chickens are known for their fluffy feathers and sweet temperament. 🐥",
    imageUrl: "/silkie.jpeg",
  },
  {
    name: "Orpington Chicken",
    description: "Orpingtons are friendly and make great pets while providing plenty of eggs. 🥚",
    imageUrl: "/orpington.jpeg",
  },
  {
    name: "Sussex Chicken",
    description: "A traditional British breed, Sussex chickens are excellent for eggs and companionship. 🐔",
    imageUrl: "/sussex.jpeg",
  },
  {
    name: "Brahma Chicken",
    description: "Majestic and large, Brahma chickens are cold-hardy and great egg layers. 🥚",
    imageUrl: "/brahma.jpeg",
  },
  {
    name: "Wyandotte Chicken",
    description: "Beautifully feathered and productive, Wyandottes are great backyard hens. 🐔",
    imageUrl: "/wyandotte.jpeg",
  },
  {
    name: "Easter Egger Chicken",
    description: "Easter Eggers lay colorful eggs in shades of blue, green, and pink! 🌈",
    imageUrl: "/easter-egger.jpeg",
  },
  {
    name: "Cochin Chicken",
    description: "Fluffy and friendly, Cochins are known for their feathered feet and gentle nature. 🐥",
    imageUrl: "/cochin.jpeg",
  },
];


// Explicitly define the type of the name parameter
const formatUrl = (name: string) => name.toLowerCase().replace(/\s+/g, '-'); // ✅ Fixes spaces in URLs

const Hen = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-16">
          <h1 className="text-3xl sm:text-4xl font-bold title-font mb-4 text-gray-900">
            HENS (CHICKENS) 🐔
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-lg sm:text-xl text-gray-700">
            🐔 Find the perfect chicken for your backyard!  
            Our hens are friendly, productive, and ready to provide fresh eggs daily. 🥚✨
          </p>
        </div>
        <div className="flex flex-wrap -m-4 justify-center">
          {hens.map((hen) => (
            <div key={hen.name} className="p-4 lg:w-1/4 md:w-1/2 sm:w-full">
              <div className="h-full flex flex-col items-center text-center bg-orange-100 shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 ease-in-out">
                <Image
                  alt={hen.name}
                  width={320}
                  height={320}
                  className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-6"
                  src={hen.imageUrl}
                />
                <div className="px-6 pb-6">
                <Link href={`/components/pets/hen/${formatUrl(hen.name)}`} passHref>
                    <h2 className="title-font font-semibold text-2xl text-gray-900 mb-2 hover:text-teal-500 transition-colors cursor-pointer">
                      {hen.name}
                    </h2>
                  </Link>
                  <p className="mb-4 text-lg text-gray-600">
                    🐔 <strong>{hen.description}</strong>
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

export default Hen;
