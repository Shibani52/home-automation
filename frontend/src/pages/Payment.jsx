// src/pages/Payment.jsx
import React, { useState } from 'react';

function Payment() {
  const [paymentInfo, setPaymentInfo] = useState({
    cardHolder: '',
    cardNumber: '',
    expiry: '',
    cvv: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPaymentInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder for actual payment gateway integration (e.g., Stripe, PayPal)
    alert("Payment processing... (This is a placeholder)");
  };

  const containerStyle = {
    padding: '2rem',
    maxWidth: '500px',
    margin: '0 auto',
    fontFamily: 'Arial, sans-serif',
    color: '#333',
  };

  const headerStyle = {
    textAlign: 'center',
    marginBottom: '1.5rem',
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  };

  const inputStyle = {
    padding: '0.75rem',
    fontSize: '1rem',
    borderRadius: '4px',
    border: '1px solid #ccc',
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

  return (
    <div style={containerStyle}>
      <h1 style={headerStyle}>Payment</h1>
      <p style={{ textAlign: 'center' }}>
        Complete your purchase by entering your payment details below.
      </p>
      <form style={formStyle} onSubmit={handleSubmit}>
        <input
          type="text"
          name="cardHolder"
          placeholder="Card Holder Name"
          value={paymentInfo.cardHolder}
          onChange={handleChange}
          style={inputStyle}
          required
        />
        <input
          type="text"
          name="cardNumber"
          placeholder="Card Number"
          value={paymentInfo.cardNumber}
          onChange={handleChange}
          style={inputStyle}
          required
        />
        <input
          type="text"
          name="expiry"
          placeholder="Expiry Date (MM/YY)"
          value={paymentInfo.expiry}
          onChange={handleChange}
          style={inputStyle}
          required
        />
        <input
          type="text"
          name="cvv"
          placeholder="CVV"
          value={paymentInfo.cvv}
          onChange={handleChange}
          style={inputStyle}
          required
        />
        <button type="submit" style={buttonStyle}>
          Pay Now
        </button>
      </form>
    </div>
  );
}

export default Payment;

  