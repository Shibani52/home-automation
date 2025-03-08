import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { FaShoppingCart, FaSearch, FaBars, FaTimes } from "react-icons/fa";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-white/10 backdrop-blur-lg shadow-md py-4 fixed w-full top-0 z-50 transition-all duration-300">
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl md:text-3xl font-bold text-white">
          HomeAuto
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
          <nav className="flex space-x-4 lg:space-x-6 text-white font-medium">
            {["Home", "Category", "About", "Contact"].map((item) => (
              <NavLink
                key={item}
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className={({ isActive }) =>
                  `px-3 lg:px-4 py-2 rounded-lg transition-all duration-200 ${
                    isActive
                      ? "bg-blue-600 text-white shadow-md"
                      : "hover:text-blue-400"
                  }`
                }
              >
                {item}
              </NavLink>
            ))}
          </nav>

          {/* Search Bar */}
          <div className="relative w-44 sm:w-56 md:w-64 lg:w-72">
            <input
              type="text"
              className="w-full px-4 py-2 rounded-full bg-gray-200 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500"
              placeholder="Search..."
            />
            <FaSearch className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-600 cursor-pointer" />
          </div>

          {/* Cart Icon */}
          <NavLink to="/cart" className="relative text-white hover:text-blue-400">
            <FaShoppingCart size={24} />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">
              3
            </span>
          </NavLink>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-2xl text-white" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-40 transition-opacity ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={toggleMenu}
      ></div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 sm:w-80 bg-gray-900 text-white shadow-lg p-5 rounded-l-lg transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-white text-2xl z-50"
          onClick={toggleMenu}
        >
          <FaTimes />
        </button>

        {/* Navigation Links */}
        <nav className="flex flex-col mt-16 space-y-6 text-center">
          {["Home", "Category", "About", "Contact", "Cart"].map((item) => (
            <NavLink
              key={item}
              to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className="text-lg px-6 py-3 rounded-lg hover:bg-gray-700 transition"
              onClick={toggleMenu}
            >
              {item === "Cart" ? (
                <span className="flex justify-center items-center space-x-2">
                  <FaShoppingCart /> <span>Cart</span>
                </span>
              ) : (
                item
              )}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header;
