import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-gradient-to-r from-[rgba(128,0,128,0.7)] via-[rgba(255,105,180,0.7)] to-[rgba(255,165,0,0.7)] text-white shadow-md py-4 fixed w-full top-0 z-50">
  <div className="container mx-auto px-6 flex items-center justify-between">


  
        {/* Logo on the left */}
        <Link
          to="/"
          className="text-2xl font-bold no-underline hover:no-underline flex items-center space-x-3 whitespace-nowrap mr-10"
        >
          Home Automation Store
        </Link>

        {/* Desktop Nav + Cart in the center/right (hidden on mobile) */}
        <div className="hidden md:flex items-center space-x-8">
          {/* Nav Items in the center */}
          <nav className="flex space-x-6">
            {["Home", "Category", "About", "Contact", "Policies", "Payment"].map(
              (item) => (
                <NavLink
                  key={item}
                  to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  className={({ isActive }) =>
                    `px-4 py-2 rounded-lg no-underline hover:no-underline transition-all duration-200 ${
                      isActive
                        ? "bg-yellow-400 text-black font-bold shadow-lg"
                        : "text-white hover:bg-gray-900"
                    }`
                  }
                >
                  {item}
                </NavLink>
              )
            )}
          </nav>

          {/* Cart Link on the far right */}
          <NavLink
            to="/cart"
            className={({ isActive }) =>
              `px-4 py-2 rounded-lg flex items-center no-underline hover:no-underline transition-all duration-200 ${
                isActive
                  ? "bg-yellow-400 text-black font-bold shadow-lg"
                  : "text-white hover:bg-gray-900"
              }`
            }
          >
            <FaShoppingCart className="mr-2" />
            Cart
          </NavLink>
        </div>

        {/* Mobile Menu Button (shown on smaller screens) */}
        <button
          className="md:hidden text-3xl hover:opacity-80"
          onClick={toggleMenu}
        >
          ☰
        </button>
      </div>

      {/* Mobile Navigation (slide-down menu) */}
      {isOpen && (
        <nav className="md:hidden bg-gray-900 text-white shadow-md py-4 w-full transition-all duration-300">
          <ul className="flex flex-col items-center space-y-3">
            {["Home", "Category", "About", "Contact", "Policies", "Payment", "Cart"].map(
              (item) => (
                <li key={item}>
                  <NavLink
                    to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className="px-4 py-2 rounded-lg no-underline hover:no-underline transition-all duration-200 hover:bg-gray-800"
                    onClick={toggleMenu}
                  >
                    {item === "Cart" ? (
                      <span className="flex items-center">
                        <FaShoppingCart className="mr-1" />
                        Cart
                      </span>
                    ) : (
                      item
                    )}
                  </NavLink>
                </li>
              )
            )}
          </ul>
        </nav>
      )}
    </header>
  );
}

export default Header;
