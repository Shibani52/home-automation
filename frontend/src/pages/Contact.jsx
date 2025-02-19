// src/pages/Contact.jsx
import React from 'react';

function Contact() {
  const containerStyle = {
    padding: '2rem',
    fontFamily: 'Arial, sans-serif',
    color: '#333',
    maxWidth: '800px',
    margin: '0 auto',
  };

  const headerStyle = {
    marginBottom: '1.5rem',
  };

  const infoStyle = {
    lineHeight: 1.6,
    marginBottom: '2rem',
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    maxWidth: '400px',
  };

  const inputStyle = {
    padding: '0.75rem',
    fontSize: '1rem',
    borderRadius: '4px',
    border: '1px solid #ccc',
  };

  const textareaStyle = {
    ...inputStyle,
    height: '100px',
    resize: 'vertical',
  };

  const buttonStyle = {
    padding: '0.75rem',
    fontSize: '1rem',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can integrate your email service or backend API to send the message
    alert('Your message has been sent!');
  };

  return (
    <div style={containerStyle}>
      <h1 style={headerStyle}>Customer Service & Contact</h1>
      <div style={infoStyle}>
        <p>If you have any questions or need assistance, please feel free to reach out to us.</p>
        <p>
          <strong>Email:</strong>{' '}
          <a href="mailto:support@example.com" style={{ color: '#007bff' }}>
            support@example.com
          </a>
        </p>
        <p>
          <strong>Phone:</strong> (123) 456-7890
        </p>
        <p>
          <strong>Address:</strong> 1234 Smart Home Ave, Innovation City, CA 90210
        </p>
      </div>
      <h2>Send Us a Message</h2>
      <form style={formStyle} onSubmit={handleSubmit}>
        <input type="text" placeholder="Your Name" style={inputStyle} required />
        <input type="email" placeholder="Your Email" style={inputStyle} required />
        <textarea placeholder="Your Message" style={textareaStyle} required />
        <button type="submit" style={buttonStyle}>
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;

  