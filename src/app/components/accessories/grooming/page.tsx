"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlineHeart } from "react-icons/ai";

const GroomingKitPage = () => {
  return (
    <div className="bg-gradient-to-br from-teal-50 to-purple-100 min-h-screen flex items-center justify-center">
      <section className="w-full max-w-6xl px-6 py-16">
        <div className="flex flex-col md:flex-row bg-white rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.08)] overflow-hidden transition-all duration-300">

          {/* Image Side */}
          <div className="md:w-1/2 h-80 md:h-auto">
            <Image
              src="/grooming.jpeg" // ✅ Replace or ensure this exists in your public folder
              alt="Complete Grooming Kit"
              width={600}
              height={600}
              className="w-full h-full object-cover object-center"
              priority
            />
          </div>

          {/* Info Side */}
          <div className="md:w-1/2 p-8 md:p-10 flex flex-col justify-center space-y-6">
            <div>
              <h2 className="text-sm uppercase tracking-widest text-teal-600 font-semibold">
                The Pawfect Store
              </h2>
              <h1 className="text-gray-900 text-4xl md:text-5xl font-extrabold mt-2 leading-tight">
                Grooming Kit ✂️
              </h1>
            </div>

            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              Maintain your pets style and hygiene with our <strong>complete grooming kit</strong>. 
              Includes <span className="text-teal-600 font-medium">safety scissors</span>, 
              <span className="text-teal-600 font-medium">detangling brush</span>, 
              <span className="text-teal-600 font-medium">nail clippers</span>, and 
              more — all packed in a portable pouch. Its like a spa day, every day!
            </p>

            {/* Price + Actions */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mt-4 space-y-4 sm:space-y-0">
              <span className="text-3xl font-bold text-gray-900">$34.95</span>

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

export default GroomingKitPage;
