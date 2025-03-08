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
import ParticlesBackground from "../components/ParticlesBackground";

import "tailwindcss/tailwind.css";

function Home() {
  return (
    <div className="relative w-full min-h-screen text-white overflow-hidden">
      {/* Particle Background */}
      <ParticlesBackground />

      {/* Flowing Lines (SVG Animation) */}
      <svg className="absolute top-0 left-0 w-full h-full opacity-10">
        <defs>
          <linearGradient id="techGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#1e3a8a" />
            <stop offset="100%" stopColor="#10b981" />
          </linearGradient>
        </defs>
        <path
          d="M0 100 Q 150 200 300 100 T 600 100 T 900 100 T 1200 100"
          stroke="url(#techGradient)"
          strokeWidth="2"
          fill="transparent"
        >
          <animate
            attributeName="d"
            values="M0 100 Q 150 200 300 100 T 600 100 T 900 100 T 1200 100; 
                    M0 150 Q 150 100 300 150 T 600 150 T 900 150 T 1200 150; 
                    M0 100 Q 150 200 300 100 T 600 100 T 900 100 T 1200 100"
            dur="5s"
            repeatCount="indefinite"
          />
        </path>
      </svg>

      {/* Background Image */}
      <div className="absolute inset-0 z-0 opacity-50 animate-fadeIn">
        <div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://source.unsplash.com/1600x900/?smart-home,technology')",
          }}
        ></div>
      </div>

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
                <category.icon className="text-2xl" />
                <span>{category.name}</span>
              </Link>
            ))}
          </div>
        </section>

        {/* Why Choose Us */}
        <section>
          <h2 className="text-3xl font-bold text-white inline-flex items-center">
            <FaStar className="mr-2 text-yellow-400 text-4xl" /> Why Choose Us?
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
                <feature.icon className="text-4xl text-blue-400 mb-3" />
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
