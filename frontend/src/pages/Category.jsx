import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function Category() {
  const { categoryName } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!categoryName) return;

    setLoading(true);
    setError(null);

    axios
      .get(`http://localhost:5000/api/products?category=${categoryName}`)
      .then((response) => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setError("Failed to load products. Please try again.");
        setLoading(false);
      });
  }, [categoryName]);

  if (!categoryName) {
    return (
      <div className="p-6 font-sans text-gray-800">
        <h1 className="text-3xl font-bold mb-4">All Categories</h1>
        <p className="mb-3">Select a category to view products:</p>
        <ul className="list-disc ml-5">
          <li>
            <Link
              to="/category/smart-light-bulbs"
              className="text-blue-600 hover:underline"
            >
              Smart Light Bulbs
            </Link>
          </li>
          <li>
            <Link
              to="/category/smart-thermostats"
              className="text-blue-600 hover:underline"
            >
              Smart Thermostats
            </Link>
          </li>
        </ul>
      </div>
    );
  }

  return (
    <div className="p-6 font-sans text-gray-800">
      <h1 className="text-3xl font-bold mb-4 capitalize">{categoryName.replace("-", " ")}</h1>

      {loading && <p className="text-blue-600">Loading products...</p>}
      {error && <p className="text-red-600">{error}</p>}

      {!loading && !error && (
        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6">
          {products.length > 0 ? (
            products.map((product) => (
              <Link
                key={product._id}
                to={`/product/${product._id}`}
                className="block border rounded-lg shadow-lg hover:shadow-xl transition p-4 bg-white"
              >
                {product.image && (
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-40 object-cover rounded-md mb-3"
                  />
                )}
                <h2 className="text-xl font-semibold text-gray-900">{product.name}</h2>
                <p className="text-gray-700 mt-2">
                  <strong>Price:</strong> ${product.price}
                </p>
              </Link>
            ))
          ) : (
            <p className="text-gray-600">No products available in this category.</p>
          )}
        </div>
      )}
    </div>
  );
}

export default Category;
