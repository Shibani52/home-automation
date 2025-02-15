// client/src/App.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products from the backend
    axios.get('http://localhost:5000/api/products')
      .then(response => setProducts(response.data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Home Automation Products</h1>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {products.map(product => (
          <li key={product._id} style={{ marginBottom: '1rem', border: '1px solid #ccc', padding: '1rem' }}>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p><strong>Category:</strong> {product.category}</p>
            <p><strong>Price:</strong> ${product.price}</p>
            {product.image && <img src={product.image} alt={product.name} width="150" />}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
