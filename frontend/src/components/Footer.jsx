// src/components/Footer.jsx
import React from 'react';

function Footer() {
  const footerStyle = {
    backgroundColor: '#f8f8f8',
    textAlign: 'center',
    padding: '1rem 0',
    borderTop: '1px solid #ddd',
    marginTop: '2rem',
    fontSize: '0.9rem',
    color: '#777',
  };

  const linkStyle = {
    color: '#777',
    textDecoration: 'none',
    margin: '0 0.5rem',
  };

  return (
    <footer style={footerStyle}>
      <p>&copy; {new Date().getFullYear()} Home Automation Store. All rights reserved.</p>
      <p>
        <a href="/privacy" style={linkStyle}>Privacy Policy</a> | 
        <a href="/terms" style={linkStyle}>Terms &amp; Conditions</a>
      </p>
    </footer>
  );
}

export default Footer;

  