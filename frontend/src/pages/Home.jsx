import React from 'react';
import { Link } from 'react-router-dom';
import { FaStar } from "react-icons/fa";

function Home() {
  return (
    // Full-width background wrapper
    <div
      className="relative w-full min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('https://img.freepik.com/premium-photo/home-automation-system-with-voiceactivated-features-smart-lighting-created-with-generative-ai_124507-184907.jpg?ga=GA1.1.136295044.1740081924&semt=ais_hybrid')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Content container with padding */}
      <div className="px-6 py-12 text-center text-gray-900 min-h-screen">

        {/* Header Section */}
        <header className="mb-10">
          <h1 className="text-4xl font-extrabold text-white drop-shadow-lg">
            Welcome to Our Home Automation Store
          </h1>
          <p className="mt-3 text-lg text-gray-200">
            Discover smart solutions for your home and transform your everyday living.
          </p>
          <Link 
            to="/products" 
            className="mt-6 inline-block px-8 py-3 text-lg font-semibold text-white bg-yellow-400 rounded-lg shadow-lg transition-all duration-300 hover:scale-105 hover:bg-yellow-500"
          >
            Browse All Products 🚀
          </Link>
        </header>

        {/* Featured Categories Section */}
        <section className="mb-10">
          <h2 className="text-3xl font-bold text-white">🔥 Featured Categories</h2>
          <nav className="flex flex-wrap justify-center gap-6 mt-6">
            <Link 
              to="/category/smart-light-bulbs" 
              className="px-6 py-3 text-lg font-semibold text-white bg-blue-500 rounded-lg shadow-lg transition-transform duration-300 hover:scale-110 hover:bg-blue-600"
            >
              💡 Smart Light Bulbs
            </Link>
            <Link 
              to="/category/smart-plugs" 
              className="px-6 py-3 text-lg font-semibold text-white bg-green-500 rounded-lg shadow-lg transition-transform duration-300 hover:scale-110 hover:bg-green-600"
            >
              🔌 Smart Plugs
            </Link>
            <Link 
              to="/category/home-security-cameras" 
              className="px-6 py-3 text-lg font-semibold text-white bg-red-500 rounded-lg shadow-lg transition-transform duration-300 hover:scale-110 hover:bg-red-600"
            >
              📹 Security Cameras
            </Link>
          </nav>
        </section>

        {/* Why Choose Us Section */}
        <section className="mb-10">
      <div className="relative text-center py-6">
        {/* Icon and Text */}
        <h2 className="inline-flex items-center text-3xl font-bold text-white relative z-10">
          <FaStar className="mr-2 text-yellow-400 text-4xl" />
          Why Choose Us?
        </h2>

        {/* Semi-transparent background */}
        <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>
      </div>

          <div className="flex flex-wrap justify-center gap-6 mt-6">
            <div className="w-80 border border-white bg-white/20 backdrop-blur-md p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <h3 className="text-xl font-semibold text-white">✅ Quality Products</h3>
              <p className="text-gray-200 mt-2">
                Our products are sourced from trusted manufacturers, ensuring top-notch quality and reliability.
              </p>
            </div>
            <div className="w-80 border border-white bg-white/20 backdrop-blur-md p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <h3 className="text-xl font-semibold text-white">💰 Competitive Prices</h3>
              <p className="text-gray-200 mt-2">
                Get the best deals without compromising on quality—value for your money!
              </p>
            </div>
            <div className="w-80 border border-white bg-white/20 backdrop-blur-md p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <h3 className="text-xl font-semibold text-white">🎧 Excellent Support</h3>
              <p className="text-gray-200 mt-2">
                Our dedicated support team is always ready to assist you.
              </p>
            </div>
          </div>
        </section>

      </div> 
    </div>
  );
}

export default Home;