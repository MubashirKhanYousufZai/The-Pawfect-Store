import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const cats = [
  {
    name: "Persian Cat",
    description: "Meet our elegant Persian cats at The Pawfect Store - the perfect blend of beauty and charm! 😻",
    imageUrl: "/persian.jpeg"
  },
  {
    name: "Burmese Cat",
    description: "Adopt a playful and affectionate Burmese cat from The Pawfect Store - the perfect companion for your home! 😻",
    imageUrl: "/burmese.jpeg"
  },
  {
    name: "Maine Coon Cat",
    description: "Meet our majestic Maine Coon cats at The Pawfect Store - large in size, but big in love and loyalty! 😻",
    imageUrl: "/maine.jpeg"
  },
  {
    name: "Siamese Cat",
    description: "Fall in love with our vocal and affectionate Siamese cats at The Pawfect Store - where personality meets elegance! 😻",
    imageUrl: "/siamese.jpeg"
  },
  {
    name: "Scottish Fold Cat",
    description: "Our Scottish Fold cats are known for their unique folded ears and sweet nature. Adopt one today! 😻",
    imageUrl: "/scottish.jpeg",
  },
  {
    name: "Ragdoll Cat",
    description: "Our Ragdoll cats are incredibly affectionate and laid-back - perfect companions for your home. 😻",
    imageUrl: "/ragdoll.jpeg",
  },
  {
    name: "Bengal Cat",
    description: "Discover the wild beauty and personality of our Bengal cats. They're full of energy and love! 😻",
    imageUrl: "/bengal.jpeg",
  },
  {
    name: "Sphynx Cat",
    description: "Adopt an affectionate and unique Sphynx cat today - with no fur but tons of love to give! 😻",
    imageUrl: "/sphynx.jpeg",
  },
  {
    name: "Abyssinian Cat",
    description: "Our Abyssinian cats are playful and full of energy. Adopt one for an active, loving companion. 😻",
    imageUrl: "/abyssinian.jpeg",
  },
  {
    name: "Birman Cat",
    description: "Our Birman cats are playful and full of energy. Adopt one for an active, loving companion. 😻",
    imageUrl: "/birman.jpeg",
  },
];

const page = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-16">
          <h1 className="text-3xl sm:text-4xl font-bold title-font mb-4 text-gray-900">
            CATs 🐈
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-lg sm:text-xl text-gray-700">
            🐱 Discover your new purr-fect feline companion at The Pawfect Store! 
            Each cat is lovingly raised, ready to bring joy and warmth to your home. 😻
          </p>
        </div>
        <div className="flex flex-wrap -m-4 justify-center">
          {cats.map((cat) => (
            <div key={cat.name} className="p-4 lg:w-1/4 md:w-1/2 sm:w-full">
              <div className="h-full flex flex-col items-center text-center bg-green-100 shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 ease-in-out">
                <Image
                  alt={cat.name}
                  width={320}
                  height={320}
                  className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-6"
                  src={cat.imageUrl}
                />
                <div className="px-6 pb-6">
                  <Link href={`/components/pets/cat/${cat.name.toLowerCase().replace(' ', '-')}`}>
                    <h2 className="title-font font-semibold text-2xl text-gray-900 mb-2">
                      {cat.name}
                    </h2>
                  </Link>
                  <p className="mb-4 text-lg text-gray-600">
                    🐱 <strong>{cat.description}</strong>
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

export default page;
