import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Gives from './components/about/page'
import Contact from './components/contact/page'

const Home = () => {
  return (
    <section className="text-gray-700 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center max-w-screen-xl">
        
        {/* Left Content Section */}
        <div className="lg:w-1/2 md:w-1/2 w-full lg:pr-12 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center gap-6">
          <h1 className="title-font sm:text-5xl text-4xl font-extrabold text-gray-900 leading-tight max-w-lg">
            Welcome to <span className="text-teal-500">The Pawfect Store</span> - 
            Where Every Pet is Treated Like Royalty! 🐾✨
          </h1>
          <p className="text-lg leading-relaxed max-w-lg text-gray-600">
            Your furry, feathery, or scaly companion deserves nothing but **the best.**  
            Thats why we bring you a **premium selection** of pet essentials from 
            **luxuriously cozy beds** to **nutritious gourmet treats,** playful toys,  
            and trendy accessories, all designed to make tails wag and hearts happy. 💕
          </p>
          <p className="text-lg leading-relaxed max-w-lg text-gray-600">
            Every item in our collection is crafted with **love, care, and quality**  
            to ensure **comfort, durability, and style** for your beloved companions.  
            Because when it comes to your pets, only **pure PAWFECTION** will do! 🐶🐱🐾
          </p>
          <div className="flex justify-center">
            <Link href="/shop">
              <button 
                className="inline-flex text-white bg-teal-500 border-0 py-3 px-8 text-lg font-semibold rounded-lg 
                focus:outline-none hover:bg-teal-600 transition duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
                aria-label="Shop Now"
              >
                🛍️ Treat Your Pet Now!
              </button>
            </Link>
          </div>
          <h2 className="text-3xl font-semibold text-gray-900 mt-8 max-w-lg text-center md:text-left">
            🎁 Because **Every Pet Deserves to be Pawfect!** ✨
          </h2>
        </div>

        {/* Right Image Section */}
        <div className="lg:w-1/2 md:w-1/2 w-5/6">
          <Image 
            width={640} 
            height={480}
            className="object-cover object-center rounded-xl shadow-lg"
            alt="The Pawfect Store Logo"
            src="/logo.webp"
            priority
          />
        </div>
      </div>
      <Gives/>
      <Contact/>
    </section>
  )
}

export default Home
