"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlineHeart } from "react-icons/ai";

const LeashPage = () => {
  return (
    <div className="bg-gradient-to-br from-teal-50 to-teal-100 min-h-screen flex items-center justify-center">
      <section className="text-gray-600 body-font w-full">
        <div className="container mx-auto px-6 py-16">
          <div className="flex flex-col md:flex-row bg-white rounded-3xl shadow-2xl overflow-hidden transition-all duration-300">

            {/* Left: Image */}
            <div className="md:w-1/2 h-96 md:h-auto">
              <Image
                alt="Premium Dog Leash"
                src="/leash.jpeg" // ✅ Replace with your actual image
                width={600}
                height={600}
                className="w-full h-full object-cover object-center"
              />
            </div>

            {/* Right: Content */}
            <div className="md:w-1/2 p-8 md:p-10 flex flex-col justify-center space-y-6">
              <div>
                <h2 className="text-sm uppercase tracking-widest text-teal-600 font-semibold">
                  The Pawfect Store
                </h2>
                <h1 className="text-gray-900 text-4xl md:text-5xl font-extrabold mt-2 leading-tight">
                  Premium Dog Leash 🐶
                </h1>
              </div>

              <p className="text-lg text-gray-700 leading-relaxed">
                Walk your pup with confidence using our <strong>tangle-free</strong> and 
                <strong> ultra-comfortable</strong> leash. Designed with <span className="text-teal-500 font-medium">durable nylon</span>, 
                a <span className="text-teal-500 font-medium">padded handle</span>, and a <span className="text-teal-500 font-medium">360° rotating clasp</span> — this leash is perfect for 
                daily strolls or adventures in the park.
              </p>

              {/* Price + Actions */}
              <div className="flex items-center justify-between mt-4">
                <span className="text-3xl font-bold text-gray-900">$19.99</span>

                <div className="flex items-center space-x-4">
                  <Link href="/components/payment">
                    <button className="bg-teal-500 hover:bg-teal-600 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 shadow-md hover:shadow-xl">
                      Buy Now
                    </button>
                  </Link>

                  <button
                    aria-label="Add to Wishlist"
                    className="rounded-full w-12 h-12 bg-gray-200 flex items-center justify-center text-gray-500 hover:text-red-500 hover:bg-gray-300 transition-all"
                  >
                    <AiOutlineHeart size={26} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LeashPage;
