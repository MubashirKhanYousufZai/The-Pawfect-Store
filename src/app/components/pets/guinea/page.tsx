import Image from "next/image";
import Link from "next/link";
import React from "react";

const guineaPigs = [
  {
    name: "American Guinea Pig",
    description: "The American Guinea Pig is known for its smooth, short coat and friendly nature. 🐹",
    imageUrl: "/americanguinea.jpeg",
  },
  {
    name: "Abyssinian Guinea Pig",
    description: "Abyssinian Guinea Pigs have unique rosettes in their fur, making them stand out. 🐹",
    imageUrl: "/abyssinianguinea.jpeg",
  },
  {
    name: "Peruvian Guinea Pig",
    description: "Peruvian Guinea Pigs have long, silky fur that requires extra care but looks stunning. 🐹",
    imageUrl: "/peruvianguinea.jpeg",
  },
  {
    name: "Teddy Guinea Pig",
    description: "Teddy Guinea Pigs have a dense, plush coat and a sweet temperament. 🐹",
    imageUrl: "/teddyguinea.jpeg",
  },
  {
    name: "Texel Guinea Pig",
    description: "Texel Guinea Pigs have long, curly fur, making them one of the most unique breeds. 🐹",
    imageUrl: "/texelguinea.jpeg",
  },
  {
    name: "Silkie Guinea Pig",
    description: "Silkie Guinea Pigs have long, soft fur that flows like a beautiful mane. 🐹",
    imageUrl: "/silkieguinea.jpeg",
  },
  {
    name: "Rex Guinea Pig",
    description: "Rex Guinea Pigs have a dense, woolly coat and a lovable personality. 🐹",
    imageUrl: "/rexguinea.jpeg",
  },
  {
    name: "Himalayan Guinea Pig",
    description: "Himalayan Guinea Pigs are albino with red eyes and adorable dark markings. 🐹",
    imageUrl: "/himalayanguinea.jpeg",
  },
  {
    name: "Coronet Guinea Pig",
    description: "Coronet Guinea Pigs have long fur with a single rosette on their forehead. 🐹",
    imageUrl: "/coronetguinea.jpeg",
  },
  {
    name: "Cuy Guinea Pig",
    description: "Cuy Guinea Pigs are much larger than standard guinea pigs but just as affectionate. 🐹",
    imageUrl: "/cuyguinea.jpeg",
  },
];

// Explicitly define the type of the name parameter
const formatUrl = (name: string) => name.toLowerCase().replace(/\s+/g, '-'); // ✅ Fixes spaces in URLs

const GuineaPig = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-16">
          <h1 className="text-3xl sm:text-4xl font-bold title-font mb-4 text-gray-900">
            GUINEA PIGS 🐹
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-lg sm:text-xl text-gray-700">
            🐹 Discover the adorable and friendly world of guinea pigs! These small pets bring love and joy to any home. 🏡✨
          </p>
        </div>
        <div className="flex flex-wrap -m-4 justify-center">
          {guineaPigs.map((guineaPig) => (
            <div key={guineaPig.name} className="p-4 lg:w-1/4 md:w-1/2 sm:w-full">
              <div className="h-full flex flex-col items-center text-center bg-orange-100 shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 ease-in-out">
                <Image
                  alt={guineaPig.name}
                  width={320}
                  height={320}
                  className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-6"
                  src={guineaPig.imageUrl}
                />
                <div className="px-6 pb-6">
                  <Link href={`/components/pets/guinea/${formatUrl(guineaPig.name)}`} passHref>
                    <h2 className="title-font font-semibold text-2xl text-gray-900 mb-2 hover:text-teal-500 transition-colors cursor-pointer">
                      {guineaPig.name}
                    </h2>
                  </Link>
                  <p className="mb-4 text-lg text-gray-600">
                    🐹 <strong>{guineaPig.description}</strong>
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

export default GuineaPig;
