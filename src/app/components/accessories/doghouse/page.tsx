"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlineHeart } from "react-icons/ai";

const DogHousePage = () => {
  return (
    <div className="bg-gradient-to-br from-teal-50 to-amber-100 min-h-screen flex items-center justify-center">
      <section className="w-full max-w-6xl px-6 py-16">
        <div className="flex flex-col md:flex-row bg-white rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.08)] overflow-hidden transition-all duration-300">

          {/* Left: Product Image */}
          <div className="md:w-1/2 h-80 md:h-auto">
            <Image
              src="/doghouse.jpeg" // ✅ Make sure this image exists in your /public folder
              alt="Cozy Dog House"
              width={600}
              height={600}
              className="w-full h-full object-cover object-center"
              priority
            />
          </div>

          {/* Right: Product Content */}
          <div className="md:w-1/2 p-8 md:p-10 flex flex-col justify-center space-y-6">
            <div>
              <h2 className="text-sm uppercase tracking-widest text-teal-500 font-semibold">
                The Pawfect Store
              </h2>
              <h1 className="text-gray-900 text-4xl md:text-5xl font-extrabold mt-2 leading-tight">
                Cozy Dog House 🏡
              </h1>
            </div>

            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              Give your furry friend the comfort they deserve with our <strong>insulated wooden dog house</strong>. 
              Designed for all seasons, it features <span className="text-teal-500 font-medium">weather-resistant material</span>, 
              a <span className="text-teal-500 font-medium">raised floor</span> for ventilation, and a <span className="text-teal-500 font-medium">removable roof</span> for easy cleaning.
            </p>

            {/* Price and CTA */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mt-4 space-y-4 sm:space-y-0">
              <span className="text-3xl font-bold text-gray-900">$89.99</span>

              <div className="flex items-center space-x-4">
                <Link href="/components/payment">
                  <button className="bg-teal-500 hover:bg-teal-600 text-white font-semibold px-6 py-3 rounded-xl shadow hover:shadow-lg transition-all duration-300">
                    Buy Now
                  </button>
                </Link>

                <button
                  aria-label="Add to Wishlist"
                  className="w-12 h-12 rounded-full bg-gray-200 hover:bg-gray-300 text-gray-500 hover:text-red-500 flex items-center justify-center transition-all"
                >
                  <AiOutlineHeart size={24} />
                </button>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default DogHousePage;
