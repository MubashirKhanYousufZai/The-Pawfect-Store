import Image from "next/image";
import Link from "next/link";
import React from "react";

const horses = [
  {
    name: "Arabian Horse",
    description: "Known for their elegance and stamina, Arabian horses are a true symbol of beauty. 🐎",
    imageUrl: "/arabianhorse.jpeg",
  },
  {
    name: "Thoroughbred Horse",
    description: "Famous for their speed and agility, Thoroughbreds excel in racing and competition. 🏇",
    imageUrl: "/thoroughbed.jpeg",
  },
  {
    name: "Clydesdale Horse",
    description: "Large, strong, and gentle, Clydesdales are a majestic breed with a calm temperament. 🐴",
    imageUrl: "/clydesdale.jpeg",
  },
  {
    name: "Mustang Horse",
    description: "Wild and free-spirited, Mustangs are an iconic breed of American horses. 🌄",
    imageUrl: "/mustang.jpeg",
  },
  {
    name: "Appaloosa Horse",
    description: "Appaloosas are known for their unique coat patterns and calm nature. 🌟",
    imageUrl: "/appaloosa.jpeg",
  },
  {
    name: "Shire Horse",
    description: "One of the largest horse breeds, Shires are known for their impressive strength and size. 💪",
    imageUrl: "/shire.jpeg",
  },
  {
    name: "Friesian Horse",
    description: "With their black coats and long manes, Friesians are known for their striking appearance and elegance. 🌑",
    imageUrl: "/friesian.jpeg",
  },
  {
    name: "Quarter Horse",
    description: "Quarter Horses are highly versatile and well-regarded for their speed and agility in short-distance racing. 🏆",
    imageUrl: "/quarter.jpeg",
  },
  {
    name: "Shetland Pony",
    description: "Small but sturdy, Shetland Ponies are friendly, intelligent, and perfect for young riders. 🐴",
    imageUrl: "/shetland.jpeg",
  },
  {
    name: "Welsh Pony",
    description: "Known for their beauty and endurance, Welsh Ponies are small yet strong, great for various disciplines. 🌳",
    imageUrl: "/welsh.jpeg",
  },
];

const Horse = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-16">
          <h1 className="text-3xl sm:text-4xl font-bold title-font mb-4 text-gray-900">
            HORSES 🐎
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-lg sm:text-xl text-gray-700">
            🐎 Discover the magnificence of our horse collection, perfect for riding, companionship, and admiration.  
            Each horse is unique in spirit and strength, ready to find a home with you! 🌟✨
          </p>
        </div>
        <div className="flex flex-wrap -m-4 justify-center">
          {horses.map((horse) => (
            <div key={horse.name} className="p-4 lg:w-1/4 md:w-1/2 sm:w-full">
              <div className="h-full flex flex-col items-center text-center bg-brown-100 shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 ease-in-out">
                <Image
                  alt={horse.name}
                  width={320}
                  height={320}
                  className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-6"
                  src={horse.imageUrl}
                />
                <div className="px-6 pb-6">
                  <Link href={`/components/pets/horse/${horse.name.toLowerCase().replace(/\s+/g, "-")}`}>
                    <h2 className="title-font font-semibold text-2xl text-gray-900 mb-2">
                      {horse.name}
                    </h2>
                  </Link>
                  <p className="mb-4 text-lg text-gray-600">
                    🐎 <strong>{horse.description}</strong>
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

export default Horse;
