// src/components/ProductCard.jsx
import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <div className="product-card" style={styles.card}>
      <img
        src={product.image}
        alt={product.name}
        style={styles.image}
      />
      <h3 style={styles.title}>
        <Link to={`/product/${product._id}`} style={styles.link}>
          {product.name}
        </Link>
      </h3>
      <p style={styles.description}>
        {product.description.length > 50
          ? product.description.substring(0, 50) + "..."
          : product.description}
      </p>
      <p style={styles.price}>${product.price}</p>
      {/* You can add an "Add to Cart" button here if desired */}
    </div>
  );
}

const styles = {
  card: {
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "1rem",
    margin: "1rem",
    width: "250px",
    textAlign: "center",
  },
  image: {
    maxWidth: "100%",
    height: "auto",
    marginBottom: "0.5rem",
  },
  title: {
    marginBottom: "0.5rem",
  },
  link: {
    textDecoration: "none",
    color: "#333",
  },
  description: {
    fontSize: "0.9rem",
    marginBottom: "0.5rem",
  },
  price: {
    fontWeight: "bold",
  },
};

export default ProductCard;
