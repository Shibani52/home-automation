import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

function CategoryPage() {
  const { category } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/products/category/${category}`)
      .then(response => setProducts(response.data))
      .catch(error => console.error(error));
  }, [category]);

  return (
    <div>
      <h1>{category.replace("-", " ").toUpperCase()}</h1>
      {products.map((product) => (
        <div key={product._id}>
          <Link to={`/product/${product._id}`}>
            <h2>{product.name}</h2>
            <img src={product.image} alt={product.name} width="150" />
          </Link>
          <p>${product.price}</p>
        </div>
      ))}
    </div>
  );
}

export default CategoryPage;
