// src/pages/About.jsx
import React from 'react';

function About() {
  return (
    <div style={containerStyle}>
      <header style={headerStyle}>
        <h1>About Our Company</h1>
      </header>
      <section style={contentStyle}>
        <p style={introStyle}>
          Welcome to Home Automation Store! We are dedicated to bringing the latest in smart home
          technology right to your doorstep.
        </p>
        <h2>Our Mission</h2>
        <p>
          Our mission is to enhance your lifestyle by providing innovative, reliable, and easy-to-use
          home automation solutions. We believe in creating smarter, safer, and more efficient homes.
        </p>
        <h2>Our Story</h2>
        <p>
          Founded in [Year], Home Automation Store started as a small startup with a passion for
          technology and innovation. Over the years, we've grown into a trusted provider of smart
          home products, thanks to our commitment to quality and customer satisfaction.
        </p>
        <h2>Why Choose Us?</h2>
        <ul style={listStyle}>
          <li>High-quality products from leading brands</li>
          <li>Exceptional customer support</li>
          <li>Competitive pricing with value-driven service</li>
        </ul>
      </section>
      <footer style={footerStyle}>
        <p>
          For more information, please contact us at{' '}
          <a href="mailto:info@homeautomationstore.com" style={linkStyle}>
            info@homeautomationstore.com
          </a>{' '}
          or call us at <strong>(123) 456-7890</strong>.
        </p>
      </footer>
    </div>
  );
}

const containerStyle = {
  padding: '2rem',
  fontFamily: 'Arial, sans-serif',
  color: '#333',
  lineHeight: 1.6,
};

const headerStyle = {
  borderBottom: '2px solid #ddd',
  marginBottom: '1.5rem',
};

const contentStyle = {
  marginBottom: '2rem',
};

const introStyle = {
  fontSize: '1.2rem',
  fontWeight: 'bold',
  marginBottom: '1rem',
};

const listStyle = {
  listStyleType: 'disc',
  paddingLeft: '1.5rem',
};

const footerStyle = {
  borderTop: '1px solid #ddd',
  paddingTop: '1rem',
  textAlign: 'center',
  fontSize: '0.9rem',
  color: '#777',
};

const linkStyle = {
  color: '#007bff',
  textDecoration: 'none',
};

export default About;
