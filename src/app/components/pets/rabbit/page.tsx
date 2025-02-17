import Image from "next/image";
import Link from "next/link";
import React from "react";

const rabbits = [
  {
    name: "Himalayan Rabbit",
    description: "Himalayan rabbits are known for their friendly nature and striking color contrast. 🐇",
    imageUrl: "/himalayan.jpeg",
  },
  {
    name: "Mini Rex Rabbit",
    description: "Mini Rex rabbits are small, with soft, velvety fur and a calm disposition. 🐇",
    imageUrl: "/minirex.jpeg",
  },
  {
    name: "Holland Lop Rabbit",
    description: "Holland Lop rabbits are known for their cute floppy ears and affectionate nature. 🐇",
    imageUrl: "/hollandlop.jpeg"
  },
  {
    name: "Lionhead Rabbit",
    description: "Lionhead rabbits are friendly and unique, with a distinctive mane-like fur around their heads. 🐇",
    imageUrl: "/lionhead.jpeg",
  },
  {
    name: "English Angora Rabbit",
    description: "English Angora rabbits have beautiful, long, soft fur and are known for their gentle personalities. 🐇",
    imageUrl: "/englishangora.jpeg",
  },
  {
    name: "Mini Lop Rabbit",
    description: "Mini Lop rabbits are small, playful, and affectionate, with adorable floppy ears. 🐇",
    imageUrl: "/minilop.jpeg",
  },
  {
    name: "Himalayan Dutch Rabbit",
    description: "Himalayan Dutch rabbits have a striking combination of colors and a calm temperament. 🐇",
    imageUrl: "/himalayandutch.jpeg",
  },
  {
    name: "New Zealand Rabbit",
    description: "New Zealand rabbits are large, friendly, and ideal for families looking for an affectionate pet. 🐇",
    imageUrl: "/newzeeland.jpeg",
  },
  {
    name: "Californian Rabbit",
    description: "Californian rabbits are affectionate and thrive in environments with plenty of space and social interaction. 🐇",
    imageUrl: "/californian.jpeg",
  },
  {
    name: "Flemish Giant Rabbit",
    description: "Flemish Giant rabbits are one of the largest rabbit breeds, known for their gentle nature. 🐇",
    imageUrl: "/flemish.jpeg",
  },
];

const Rabbit = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-16">
          <h1 className="text-3xl sm:text-4xl font-bold title-font mb-4 text-gray-900">
            RABBITS 🐇
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-lg sm:text-xl text-gray-700">
            🐇 Discover the fluffy and friendly world of rabbits, perfect for companionship and fun. Find the ideal rabbit breed for your family! 🏡✨
          </p>
        </div>
        <div className="flex flex-wrap -m-4 justify-center">
          {rabbits.map((rabbit) => (
            <div key={rabbit.name} className="p-4 lg:w-1/4 md:w-1/2 sm:w-full">
              <div className="h-full flex flex-col items-center text-center bg-pink-100 shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 ease-in-out">
                <Image
                  alt={rabbit.name}
                  width={320}
                  height={320}
                  className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-6"
                  src={rabbit.imageUrl}
                />
                <div className="px-6 pb-6">
                  <Link href={`/components/pets/rabbit/${rabbit.name.toLowerCase().replace(/\s+/g, "-")}`}>
                    <h2 className="title-font font-semibold text-2xl text-gray-900 mb-2">
                      {rabbit.name}
                    </h2>
                  </Link>
                  <p className="mb-4 text-lg text-gray-600">
                    🐇 <strong>{rabbit.description}</strong>
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

export default Rabbit;
