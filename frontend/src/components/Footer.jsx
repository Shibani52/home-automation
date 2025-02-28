// src/components/Footer.jsx
import React from "react";

function Footer() {
  return (
    <footer className="bg-black text-white text-center py-4">
      <p>&copy; {new Date().getFullYear()} Home Automation Store. All rights reserved.</p>
      <p className="mt-2">
        <a href="/privacy" className="text-yellow-400 hover:underline mx-2">Privacy Policy</a> | 
        <a href="/terms" className="text-yellow-400 hover:underline mx-2">Terms & Conditions</a>
      </p>
    </footer>
  );
}

export default Footer;


  