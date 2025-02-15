import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <h1>Welcome to Home Automation Store</h1>
      <p>Browse our smart home automation products.</p>
      <Link to="/category/smart-light-bulbs">Smart Light Bulbs</Link><br />
      <Link to="/category/smart-plugs">Smart Plugs</Link><br />
      <Link to="/category/home-security">Home Security</Link><br />
    </div>
  );
}

export default HomePage;
