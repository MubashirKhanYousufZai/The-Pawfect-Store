import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const dogs = [
  {
    name: "Golden Retriever Dog",
    description: "Meet our friendly and loyal Golden Retriever dogs at The Pawfect Store - the perfect companion for your home! 🐕",
    imageUrl: "/GRDog.jpeg" // Added leading slash
  },
  {
    name: "French Bulldog Dog",
    description: "Adopt a playful and affectionate French Bulldog from The Pawfect Store - the perfect companion for your apartment! 🐕",
    imageUrl: "/FBDog.jpeg" // Added leading slash
  },
  {
    name: "German Shepherd Dog",
    description: "Meet our intelligent and loyal German Shepherd dogs at The Pawfect Store - large in size, but big in love and loyalty! 🐕",
    imageUrl: "/GSDog.jpeg" // Added leading slash
  },
  {
    name: "Poodle Dog",
    description: "Fall in love with our intelligent and elegant Poodle dogs at The Pawfect Store - where personality meets style! 🐕",
    imageUrl: "/poodle.jpeg" // Added leading slash
  },
  {
    name: "Boxer Dog",
    description: "Our Boxer dogs are known for their playful and energetic nature. Adopt one today! 🐕",
    imageUrl: "/boxer.jpeg", // Added leading slash
  },
  {
    name: "Bulldog Dog",
    description: "Our Bulldog dogs are incredibly affectionate and laid-back - perfect companions for your home. 🐕",
    imageUrl: "/bulldog.jpeg", // Added leading slash
  },
  {
    name: "Pug Dog",
    description: "Discover the unique and loving personality of our Pug dogs. They're full of energy and love! 🐕",
    imageUrl: "/pug.jpeg", // Added leading slash
  },
  {
    name: "Shih Tzu Dog",
    description: "Adopt an affectionate and outgoing Shih Tzu dog today - with a loving and friendly personality! 🐕",
    imageUrl: "/shihtzu.jpeg", // Added leading slash
  },
  {
    name: "Dachshund Dog",
    description: "Our Dachshund dogs are playful and full of energy. Adopt one for an active, loving companion. 🐕",
    imageUrl: "/dachshund.jpeg", // Added leading slash
  },
  {
    name: "Beagle Dog",
    description: "Our Beagle dogs are playful and full of energy. Adopt one for an active, loving companion. 🐕",
    imageUrl: "/beagle.jpeg", // Added leading slash
  },
];

const Dog = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-16">
          <h1 className="text-3xl sm:text-4xl font-bold title-font mb-4 text-gray-900">
            DOGs 🐕
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-lg sm:text-xl text-gray-700">
            🐶 Discover your new best friend at The Pawfect Store!
            Each dog is lovingly raised, ready to bring joy and companionship to your home. 🐾
          </p>
        </div>
        <div className="flex flex-wrap -m-4 justify-center">
          {dogs.map((dog) => (
            <div key={dog.name} className="p-4 lg:w-1/4 md:w-1/2 sm:w-full">
              <div className="h-full flex flex-col items-center text-center bg-green-100 shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 ease-in-out">
                <Image
                  alt={dog.name}
                  width={320}
                  height={320}
                  className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-6"
                  src={dog.imageUrl}
                />
                <div className="px-6 pb-6">
                  <Link href={`/components/pets/dog/${dog.name.toLowerCase().replace(' ', '-')}`}>
                    <h2 className="title-font font-semibold text-2xl text-gray-900 mb-2">
                      {dog.name}
                    </h2>
                  </Link>
                  <p className="mb-4 text-lg text-gray-600">
                    🐶 <strong>{dog.description}</strong>
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

export default Dog;