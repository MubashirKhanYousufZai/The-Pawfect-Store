import Image from "next/image";
import Link from "next/link";
import React from "react";

const turtles = [
  {
    name: "Red-Eared Slider Turtle",
    description: "A popular pet turtle, known for its distinctive red ear markings. 🐢",
    imageUrl: "/redearslider.jpeg",
  },
  {
    name: "Box Turtle",
    description: "A small and docile species, Box Turtles are perfect for indoor or outdoor care. 🌿",
    imageUrl: "/box.jpeg",
  },
  {
    name: "Eastern Painted Turtle",
    description: "A vibrant and hardy turtle species with colorful markings. 🎨",
    imageUrl: "/eastern.jpeg",
  },
  {
    name: "Musk Turtle",
    description: "Known for its small size and unique odor, the Musk Turtle is a great beginner pet! 🐢",
    imageUrl: "/musk.jpeg",
  },
  {
    name: "Yellow-Bellied Slider Turtle",
    description: "A beautiful and active species, the Yellow-Bellied Slider is great for aquatic setups. 💦",
    imageUrl: "/yellowbailedslider.jpeg",
  },
  {
    name: "African Sideneck Turtle",
    description: "A fascinating turtle with a unique head movement, perfect for aquarium setups. 🌍",
    imageUrl: "/africansideneck.jpeg",
  },
  {
    name: "Map Turtle",
    description: "This turtle is named for the intricate map-like patterns on its shell. 🗺️",
    imageUrl: "/map.jpeg",
  },
  {
    name: "Spiny Softshell Turtle",
    description: "A unique softshell turtle with spiny projections on its carapace. 🌾",
    imageUrl: "/spiny.jpeg",
  },
  {
    name: "Leatherback Sea Turtle",
    description: "A majestic sea turtle, known for its large size and deep ocean habits. 🌊",
    imageUrl: "/leatherback.jpeg",
  },
  {
    name: "Chinese Pond Turtle",
    description: "A small, adaptable species known for its striking appearance. 🐾",
    imageUrl: "/chinese.jpeg",
  },
];
// Explicitly define the type of the name parameter
const formatUrl = (name: string) => name.toLowerCase().replace(/\s+/g, '-'); // ✅ Fixes spaces in URLs

const Turtle = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-16">
          <h1 className="text-3xl sm:text-4xl font-bold title-font mb-4 text-gray-900">
            TURTLES 🐢
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-lg sm:text-xl text-gray-700">
            🐢 Explore our incredible collection of turtles, perfect for both land and aquatic environments.  
            Whether you are looking for a pet turtle or a companion for your aquarium, we have it all! 🌊✨
          </p>
        </div>
        <div className="flex flex-wrap -m-4 justify-center">
          {turtles.map((turtle) => (
            <div key={turtle.name} className="p-4 lg:w-1/4 md:w-1/2 sm:w-full">
              <div className="h-full flex flex-col items-center text-center bg-green-100 shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 ease-in-out">
                <Image
                  alt={turtle.name}
                  width={320}
                  height={320}
                  className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-6"
                  src={turtle.imageUrl}
                />
                <div className="px-6 pb-6">
                <Link href={`/components/pets/turtle/${formatUrl(turtle.name)}`} passHref>
                    <h2 className="title-font font-semibold text-2xl text-gray-900 mb-2 hover:text-teal-500 transition-colors cursor-pointer">
                      {turtle.name}
                    </h2>
                  </Link>
                  <p className="mb-4 text-lg text-gray-600">
                    🐢 <strong>{turtle.description}</strong>
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

export default Turtle;
