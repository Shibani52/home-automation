// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1>Welcome to Our Home Automation Store</h1>
        <p style={styles.subTitle}>
          Discover smart solutions for your home and transform your everyday living.
        </p>
        <Link to="/products" style={styles.browseButton}>
          Browse All Products
        </Link>
      </header>

      <section style={styles.section}>
        <h2>Featured Categories</h2>
        <nav style={styles.nav}>
          <Link to="/category/smart-light-bulbs" style={styles.navLink}>
            Smart Light Bulbs
          </Link>
          <Link to="/category/smart-plugs" style={styles.navLink}>
            Smart Plugs
          </Link>
          <Link to="/category/home-security-cameras" style={styles.navLink}>
            Security Cameras
          </Link>
        </nav>
      </section>

      <section style={styles.section}>
        <h2>Why Choose Us?</h2>
        <div style={styles.features}>
          <div style={styles.featureBox}>
            <h3>Quality Products</h3>
            <p>
              Our products are sourced from trusted manufacturers, ensuring the best quality and reliability.
            </p>
          </div>
          <div style={styles.featureBox}>
            <h3>Competitive Prices</h3>
            <p>
              Enjoy the best prices without compromising on quality—get the best value for your money.
            </p>
          </div>
          <div style={styles.featureBox}>
            <h3>Excellent Support</h3>
            <p>
              Our dedicated support team is here to help you with any queries or issues you may have.
            </p>
          </div>
        </div>
      </section>

      <footer style={styles.footer}>
        <p>&copy; {new Date().getFullYear()} Home Automation Store. All rights reserved.</p>
      </footer>
    </div>
  );
}

const styles = {
  container: {
    padding: '2rem',
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
    color: '#333',
  },
  header: {
    marginBottom: '2rem',
  },
  subTitle: {
    fontSize: '1.2rem',
    color: '#555',
  },
  browseButton: {
    display: 'inline-block',
    marginTop: '1rem',
    padding: '0.5rem 1.5rem',
    backgroundColor: '#007bff',
    color: '#fff',
    borderRadius: '5px',
    textDecoration: 'none',
  },
  section: {
    marginBottom: '2rem',
  },
  nav: {
    display: 'flex',
    justifyContent: 'center',
    gap: '1rem',
    flexWrap: 'wrap',
    marginTop: '1rem',
  },
  navLink: {
    padding: '0.5rem 1rem',
    backgroundColor: '#28a745',
    color: '#fff',
    textDecoration: 'none',
    borderRadius: '5px',
  },
  features: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '2rem',
    marginTop: '1rem',
  },
  featureBox: {
    flex: '1 1 250px',
    border: '1px solid #ddd',
    padding: '1rem',
    borderRadius: '5px',
    textAlign: 'left',
  },
  footer: {
    marginTop: '2rem',
    padding: '1rem',
    backgroundColor: '#f8f8f8',
  },
};

export default Home;

