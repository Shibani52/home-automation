import React from "react";
import { Link } from "react-router-dom";
import {
  FaStar,
  FaCheckCircle,
  FaHeadset,
  FaBolt,
  FaLock,
  FaLightbulb,
} from "react-icons/fa";
import ParticlesBackground from "../components/ParticlesBackground"; // Updated file name
import "tailwindcss/tailwind.css";

function Home() {
  return (
    <div className="relative w-full min-h-screen text-white overflow-hidden bg-gradient-to-b from-navy-900 to-navy-700">
      {/* Floating Icons in the Background */}
      <ParticlesBackground className="animate-floatUp" />

      {/* Content */}
      <div className="relative z-10 px-6 py-16 text-center min-h-screen flex flex-col items-center justify-center">
        <header className="mb-12">
          <h1 className="text-5xl font-extrabold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-300 drop-shadow-lg">
            Smart Living Starts Here
          </h1>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto animate-fadeIn">
            Transform your home with cutting-edge automation. Discover
            convenience, security, and efficiency like never before.
          </p>
          <Link
            to="/products"
            className="mt-6 inline-block px-8 py-3 text-lg font-semibold text-white bg-blue-600 rounded-xl shadow-lg transition-all duration-300 hover:scale-110 hover:bg-blue-700 hover:shadow-2xl"
          >
            Explore Products ⚡
          </Link>
        </header>

        {/* Featured Categories */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white">🌟 Featured Categories</h2>
          <div className="flex flex-wrap justify-center gap-6 mt-6">
            {[
              {
                name: "Smart Lights",
                icon: FaLightbulb,
                color: "bg-yellow-500",
                link: "/category/smart-light-bulbs",
              },
              {
                name: "Smart Plugs",
                icon: FaBolt,
                color: "bg-green-500",
                link: "/category/smart-plugs",
              },
              {
                name: "Security Systems",
                icon: FaLock,
                color: "bg-red-500",
                link: "/category/home-security-cameras",
              },
            ].map((category, index) => (
              <Link
                key={index}
                to={category.link}
                className={`flex items-center space-x-3 px-6 py-3 text-lg font-semibold text-white rounded-lg shadow-lg transition-transform duration-300 hover:scale-110 hover:shadow-xl ${category.color}`}
              >
                {React.createElement(category.icon, { className: "text-2xl animate-floatUp" })}
                <span>{category.name}</span>
              </Link>
            ))}
          </div>
        </section>

        {/* Why Choose Us */}
        <section>
          <h2 className="text-3xl font-bold text-white inline-flex items-center">
            <FaStar className="mr-2 text-yellow-400 text-4xl animate-floatUp" /> Why Choose Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            {[
              {
                title: "Premium Quality",
                icon: FaCheckCircle,
                desc: "Top-tier smart home devices for ultimate reliability.",
              },
              {
                title: "24/7 Support",
                icon: FaHeadset,
                desc: "Expert support available anytime to assist you.",
              },
              {
                title: "Secure & Trusted",
                icon: FaLock,
                desc: "Best-in-class security ensures your home is safe.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="w-80 border border-white bg-white/10 backdrop-blur-md p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex flex-col items-center text-center"
              >
                {React.createElement(feature.icon, { className: "text-4xl text-blue-400 mb-3 animate-floatUp" })}
                <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                <p className="text-gray-300 mt-2">{feature.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
