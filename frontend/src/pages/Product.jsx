import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { useCart } from "../context/CartContext";

function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/products/${id}`)
      .then((response) => {
        console.log("Fetched Product Data:", response.data);
        setProduct(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching product:", error);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Loading product...</p>;
  if (!product) return <p>Product not found.</p>;

  return (
    <div style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
      <h1>{product.name}</h1>
      <img
        src={product.image || "default-image.jpg"}
        alt={product.name}
        style={{ maxWidth: "100%", height: "auto", borderRadius: "8px" }}
      />
      <p>{product.description}</p>
      <p>
        <strong>Price:</strong> ${product.price}
      </p>

      {/* Debugging - Displaying Product ID */}
      <p>
        <strong>Product ID:</strong> {product.id}
      </p>

      {/* Add to Cart Button */}
      <button
        style={{
          padding: "10px 20px",
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          cursor: "pointer",
          borderRadius: "5px",
        }}
        onClick={() => {
          console.log("Adding to cart:", product);
          addToCart({ ...product, id: String(product.id) });
        }}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default Product;
