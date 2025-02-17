import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const cows = [
  {
    name: "Holstein Cow",
    description: "Meet our classic Holstein cows at The Farm Fresh Store - known for their high milk production! 🐄",
    imageUrl: "/holstein.jpeg"
  },
  {
    name: "Jersey Cow",
    description: "Adopt a Jersey cow from The Farm Fresh Store - known for their rich, creamy milk! 🐄",
    imageUrl: "/jersey.jpeg"
  },
  {
    name: "Angus Cow",
    description: "Meet our Angus cows at The Farm Fresh Store - known for their high-quality beef! 🐄",
    imageUrl: "/augus.jpeg"
  },
  {
    name: "Hereford Cow",
    description: "Meet our Hereford cows at The Farm Fresh Store - known for their hardiness and beef production! 🐄",
    imageUrl: "/hereford.jpeg"
  },
  {
    name: "Highland Cow",
    description: "Our Highland cows are known for their long horns and shaggy coats. Adopt one today! 🐄",
    imageUrl: "/highland.jpeg",
  },
  {
    name: "Brown Swiss Cow",
    description: "Our Brown Swiss cows are incredibly robust and known for their dual-purpose of milk and beef. 🐄",
    imageUrl: "/brown-swiss.jpeg",
  },
  {
    name: "Galloway Cow",
    description: "Discover the unique and hardy nature of our Galloway cows. They're full of life! 🐄",
    imageUrl: "/galloway.jpeg",
  },
  {
    name: "Brahman Cow",
    description: "Adopt a majestic Brahman cow today - with their iconic long horns and robust nature! 🐄",
    imageUrl: "/brahman.jpeg",
  },
  {
    name: "Sibi Cow",
    description: "Our Sibi cows are known for their height markings. Adopt one for a friendly companion. 🐄",
    imageUrl: "/sibi.jpeg",
  },
  {
    name: "Cholistani Cow",
    description: "Our Cholistani cows are Beautifull, dual-purpose cows perfect for small farms. Adopt one for a loving companion. 🐄",
    imageUrl: "/cholistani.jpeg",
  },
];

const Cow = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-16">
          <h1 className="text-3xl sm:text-4xl font-bold title-font mb-4 text-gray-900">
            COWs 🐄
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-lg sm:text-xl text-gray-700">
            🐮 Discover your new farm friend at The Farm Fresh Store!
            Each cow is lovingly raised, ready to bring joy and productivity to your farm. 🐮
          </p>
        </div>
        <div className="flex flex-wrap -m-4 justify-center">
          {cows.map((cow) => (
            <div key={cow.name} className="p-4 lg:w-1/4 md:w-1/2 sm:w-full">
              <div className="h-full flex flex-col items-center text-center bg-green-100 shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 ease-in-out">
                <Image
                  alt={cow.name}
                  width={320}
                  height={320}
                  className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-6"
                  src={cow.imageUrl}
                />
                <div className="px-6 pb-6">
                  <Link href={`/components/pets/cow/${cow.name.toLowerCase().replace(' ', '-')}`}>
                    <h2 className="title-font font-semibold text-2xl text-gray-900 mb-2">
                      {cow.name}
                    </h2>
                  </Link>
                  <p className="mb-4 text-lg text-gray-600">
                    🐮 <strong>{cow.description}</strong>
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

export default Cow;