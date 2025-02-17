import Image from "next/image";
import Link from "next/link";
import React from "react";

const parrots = [
  {
    name: "Macaw Parrot",
    description: "Meet our stunning and intelligent Macaw parrots at The Pawfect Store - a vibrant companion for life! 🦜",
    imageUrl: "/macaw.jpeg",
  },
  {
    name: "Cockatoo Parrot",
    description: "Adopt a friendly and affectionate Cockatoo - full of charm and personality! 🦜",
    imageUrl: "/cockatoo.jpeg",
  },
  {
    name: "African Grey Parrot",
    description: "Known for their intelligence and ability to mimic speech, African Grey parrots make wonderful companions! 🦜",
    imageUrl: "/african-grey.jpeg",
  },
  {
    name: "Budgie Parrot",
    description: "Small but full of character! Budgies are playful and easy to train, making them great pets. 🦜",
    imageUrl: "/budgeri.jpeg",
  },
  {
    name: "Conure Parrot",
    description: "Our Conure parrots are social and energetic - a lively addition to your home! 🦜",
    imageUrl: "/conure.jpeg",
  },
  {
    name: "Lovebird Parrot",
    description: "Lovebirds are affectionate and colorful - a symbol of companionship and joy! 🦜",
    imageUrl: "/love-birds.jpeg",
  },
  {
    name: "Eclectus Parrot",
    description: "Beautiful and intelligent, Eclectus parrots are excellent talkers and affectionate companions! 🦜",
    imageUrl: "/eclectus.jpeg",
  },
  {
    name: "Parrotlet Parrot",
    description: "Tiny but fearless, Parrotlets are full of energy and personality! 🦜",
    imageUrl: "/parrotlet.jpeg",
  },
  {
    name: "Indian Ringneck Parrot",
    description: "Charming and intelligent, Indian Ringneck parrots are known for their talking ability! 🦜",
    imageUrl: "/indian-ringneck.jpeg",
  },
  {
    name: "Amazon Parrot",
    description: "Playful, talkative, and full of personality - Amazon parrots are wonderful lifelong companions! 🦜",
    imageUrl: "/amazon.jpeg",
  },
];

const Parrot = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-16">
          <h1 className="text-3xl sm:text-4xl font-bold title-font mb-4 text-gray-900">
            PARROTS 🦜
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-lg sm:text-xl text-gray-700">
            🦜 Discover your feathered friend at The Pawfect Store!  
            Our parrots are intelligent, colorful, and ready to bring joy into your home. 🌿
          </p>
        </div>
        <div className="flex flex-wrap -m-4 justify-center">
          {parrots.map((parrot) => (
            <div key={parrot.name} className="p-4 lg:w-1/4 md:w-1/2 sm:w-full">
              <div className="h-full flex flex-col items-center text-center bg-yellow-100 shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 ease-in-out">
                <Image
                  alt={parrot.name}
                  width={320}
                  height={320}
                  className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-6"
                  src={parrot.imageUrl}
                />
                <div className="px-6 pb-6">
                  <Link href={`/components/pets/parrot/${parrot.name.toLowerCase().replace(/\s+/g, "-")}`}>
                    <h2 className="title-font font-semibold text-2xl text-gray-900 mb-2">
                      {parrot.name}
                    </h2>
                  </Link>
                  <p className="mb-4 text-lg text-gray-600">
                    🦜 <strong>{parrot.description}</strong>
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

export default Parrot;
