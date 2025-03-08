import React from "react";
import { motion } from "framer-motion";
import {
  FaLightbulb,
  FaBolt,
  FaLock,
  FaHome,
  FaWifi,
  FaCogs,
  FaCamera,
  FaShieldAlt,
  FaPlug,
} from "react-icons/fa";

// Define a large number of floating icons
const floatingIcons = [
  { icon: FaLightbulb, color: "text-yellow-400" },
  { icon: FaBolt, color: "text-blue-400" },
  { icon: FaLock, color: "text-red-400" },
  { icon: FaHome, color: "text-teal-400" },
  { icon: FaWifi, color: "text-purple-400" },
  { icon: FaCogs, color: "text-green-400" },
  { icon: FaCamera, color: "text-pink-400" },
  { icon: FaShieldAlt, color: "text-orange-400" },
  { icon: FaPlug, color: "text-indigo-400" },
];

// Increase the number of icons for better distribution
const allIcons = [...floatingIcons, ...floatingIcons, ...floatingIcons, ...floatingIcons, ...floatingIcons]; // 5x more icons

const ParticlesBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {allIcons.map((item, index) => {
        const randomX = Math.random() * 100; // Random X position (spread across the screen)
        const randomDelay = Math.random() * 4; // Random start delay for a continuous effect
        const randomSize = Math.random() * 2 + 2; // Bigger icons (2x to 4x)
        const speed = Math.random() * 4 + 5; // Faster speed (5s to 9s)
        const opacity = Math.random() * 0.5 + 0.3; // Opacity between 0.3 to 0.8 for transparency

        return (
          <motion.div
            key={index}
            initial={{ y: "110vh", opacity }} // Start below screen with transparency
            animate={{ y: "-10vh", opacity }} // Move up beyond the top
            transition={{
              duration: speed, // Speed of floating
              repeat: Infinity, // Continuous movement
              ease: "linear",
              delay: randomDelay,
            }}
            className={`absolute ${item.color}`}
            style={{
              left: `${randomX}%`, // Random horizontal placement
              fontSize: `${randomSize}rem`, // Bigger icon sizes
            }}
          >
            <item.icon />
          </motion.div>
        );
      })}
    </div>
  );
};

export default ParticlesBackground;


