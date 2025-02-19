// src/pages/Policies.jsx
import React from 'react';

function Policies() {
  const containerStyle = {
    padding: '2rem',
    maxWidth: '800px',
    margin: '0 auto',
    fontFamily: 'Arial, sans-serif',
    color: '#333',
  };

  const headerStyle = {
    textAlign: 'center',
    marginBottom: '2rem',
  };

  const sectionStyle = {
    marginBottom: '1.5rem',
    padding: '1rem',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
  };

  const sectionHeaderStyle = {
    borderBottom: '2px solid #ddd',
    paddingBottom: '0.5rem',
    marginBottom: '1rem',
    fontSize: '1.2rem',
    color: '#007bff',
  };

  const paragraphStyle = {
    lineHeight: 1.6,
    margin: '0.5rem 0',
  };

  return (
    <div style={containerStyle}>
      <h1 style={headerStyle}>Our Policies</h1>
      
      <section style={sectionStyle}>
        <h2 style={sectionHeaderStyle}>Shipping Policy</h2>
        <p style={paragraphStyle}>
          We offer fast and reliable shipping. Orders are processed within 24 hours of payment confirmation and are
          shipped promptly. Delivery times vary by location, with standard shipping taking between 3-7 business days.
        </p>
      </section>
      
      <section style={sectionStyle}>
        <h2 style={sectionHeaderStyle}>Returns Policy</h2>
        <p style={paragraphStyle}>
          If you're not completely satisfied with your purchase, you can return the item within 30 days for a full refund.
          Please ensure the item is in its original condition. For return instructions, please contact our support team.
        </p>
      </section>
      
      <section style={sectionStyle}>
        <h2 style={sectionHeaderStyle}>Privacy Policy</h2>
        <p style={paragraphStyle}>
          We value your privacy and are committed to protecting your personal information. All data is securely stored
          and will not be shared with third parties without your consent. Our security measures ensure that your shopping
          experience is safe and confidential.
        </p>
      </section>
    </div>
  );
}

export default Policies;

  