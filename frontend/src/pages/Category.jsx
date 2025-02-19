// src/pages/Category.jsx
import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

function Category() {
  const { categoryName } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Only fetch products if a category is provided.
    if (!categoryName) return;

    setLoading(true);
    axios
      .get(`http://localhost:5000/api/products?category=${categoryName}`)
      .then((response) => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
        setLoading(false);
      });
  }, [categoryName]);

  const containerStyle = {
    padding: '2rem',
    fontFamily: 'Arial, sans-serif',
    color: '#333',
  };

  const headerStyle = {
    marginBottom: '1.5rem',
    textTransform: 'capitalize',
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
    gap: '1rem',
    listStyle: 'none',
    padding: 0,
  };

  const productCardStyle = {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '1rem',
    textAlign: 'center',
    backgroundColor: '#f9f9f9',
  };

  const productImageStyle = {
    maxWidth: '100%',
    height: 'auto',
    marginBottom: '0.5rem',
  };

  // If no category is specified, show an "All Categories" page.
  if (!categoryName) {
    return (
      <div style={containerStyle}>
        <h1 style={headerStyle}>All Categories</h1>
        <p>Select a category to view products:</p>
        <ul>
          <li>
            <Link to="/category/smart-light-bulbs">Smart Light Bulbs</Link>
          </li>
          <li>
            <Link to="/category/smart-thermostats">Smart Thermostats</Link>
          </li>
          {/* Add more category links as needed */}
        </ul>
      </div>
    );
  }

  return (
    <div style={containerStyle}>
      <h1 style={headerStyle}>{categoryName.replace('-', ' ')}</h1>
      {loading ? (
        <p>Loading products...</p>
      ) : products.length ? (
        <ul style={gridStyle}>
          {products.map((product) => (
            <li key={product._id} style={productCardStyle}>
              <Link
                to={`/product/${product._id}`}
                style={{ textDecoration: 'none', color: '#007bff' }}
              >
                <h2>{product.name}</h2>
                {product.image && (
                  <img
                    src={product.image}
                    alt={product.name}
                    style={productImageStyle}
                  />
                )}
              </Link>
              <p>
                <strong>Price:</strong> ${product.price}
              </p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No products available in this category.</p>
      )}
    </div>
  );
}

export default Category;