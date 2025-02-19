// src/components/Header.jsx
import { Link } from 'react-router-dom';

function Header() {
  const headerStyle = {
    backgroundColor: '#ffffff',
    boxShadow: '0 2px 4px rgba(7, 7, 7, 0.1)',
    padding: '1rem 2rem',
  };

  const containerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  };

  const logoStyle = {
    fontSize: '1.8rem',
    fontWeight: 'bold',
    color: '#333',
    textDecoration: 'none',
  };

  const navStyle = {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '1rem',
  };

  const linkStyle = {
    color: '#333',
    textDecoration: 'none',
    fontSize: '1rem',
    transition: 'color 0.3s ease',
  };

  return (
    <header style={headerStyle}>
      <div style={containerStyle}>
        <div>
          <Link to="/" style={logoStyle}>
            Home Automation Store
          </Link>
        </div>
        <nav style={navStyle}>
          <Link to="/Home" style={linkStyle}>Home</Link>
          <Link to="/category" style={linkStyle}>Category</Link>
          <Link to="/about" style={linkStyle}>About</Link>
          <Link to="/contact" style={linkStyle}>Contact</Link>
          <Link to="/policies" style={linkStyle}>Policies</Link>
          <Link to="/payment" style={linkStyle}>Payment</Link>
          <Link to="/cart" style={linkStyle}>Cart</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
