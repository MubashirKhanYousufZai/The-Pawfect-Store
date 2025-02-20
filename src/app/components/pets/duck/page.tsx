import Image from "next/image";
import Link from "next/link";
import React from "react";

const ducks = [
  {
    name: "Pekin Duck",
    description: "Pekin ducks are known for their calm nature and large size. They are great for both eggs and meat. 🦆",
    imageUrl: "/pekin.jpeg",
  },
  {
    name: "Mallard Duck",
    description: "Mallard ducks are vibrant, friendly, and one of the most well-known duck species. 🦆",
    imageUrl: "/mallard.jpeg",
  },
  {
    name: "Indian Runner Duck",
    description: "Indian Runner ducks are known for their upright posture and excellent egg-laying abilities. 🦆",
    imageUrl: "/indianrunner.jpeg",
  },
  {
    name: "Khaki Campbell Duck",
    description: "Khaki Campbell ducks are highly prized for their egg production and friendly disposition. 🦆",
    imageUrl: "/khaki.jpeg",
  },
  {
    name: "Rouen Duck",
    description: "Rouen ducks are large, robust ducks with a beautiful appearance, often used for meat production. 🦆",
    imageUrl: "/rouen.jpeg",
  },
  {
    name: "Muscovy Duck",
    description: "Muscovy ducks are unique with their red facial features and quiet, gentle nature. 🦆",
    imageUrl: "/muscovy.jpeg",
  },
  {
    name: "Cayuga Duck",
    description: "Cayuga ducks are known for their dark plumage and egg-laying abilities. 🦆",
    imageUrl: "/cayuga.jpeg",
  },
  {
    name: "Swedish Duck",
    description: "Swedish ducks are hardy, friendly, and excellent for both egg production and meat. 🦆",
    imageUrl: "/swedish.jpeg",
  },
  {
    name: "Call Duck",
    description: "Call ducks are small and friendly, perfect for ornamental purposes and companionship. 🦆",
    imageUrl: "/call.jpeg",
  },
  {
    name: "Buff Duck",
    description: "Buff ducks are gentle, friendly, and excellent for both eggs and meat. 🦆",
    imageUrl: "/buff.jpeg",
  },
];

// Explicitly define the type of the name parameter
const formatUrl = (name: string) => name.toLowerCase().replace(/\s+/g, '-'); // ✅ Fixes spaces in URLs

const Duck = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-16">
          <h1 className="text-3xl sm:text-4xl font-bold title-font mb-4 text-gray-900">
            DUCKS 🦆
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-lg sm:text-xl text-gray-700">
            🦆 Explore our beautiful and friendly ducks, perfect for companionship, egg-laying, or ornamental purposes.  
            Find the perfect duck breed for your home! 🏡
          </p>
        </div>
        <div className="flex flex-wrap -m-4 justify-center">
          {ducks.map((duck) => (
            <div key={duck.name} className="p-4 lg:w-1/4 md:w-1/2 sm:w-full">
              <div className="h-full flex flex-col items-center text-center bg-blue-100 shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 ease-in-out">
                <Image
                  alt={duck.name}
                  width={320}
                  height={320}
                  className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-6"
                  src={duck.imageUrl}
                />
                <div className="px-6 pb-6">
                <Link href={`/components/pets/duck/${formatUrl(duck.name)}`} passHref>
                    <h2 className="title-font font-semibold text-2xl text-gray-900 mb-2 hover:text-teal-500 transition-colors cursor-pointer">
                      {duck.name}
                    </h2>
                  </Link>
                  <p className="mb-4 text-lg text-gray-600">
                    🦆 <strong>{duck.description}</strong>
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

export default Duck;
