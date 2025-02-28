import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap for global styles
import "./index.css"; // Your own custom styles
import App from "./App.jsx";
import { CartProvider } from "./context/CartContext.jsx"; // Ensure CartProvider wraps App

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </StrictMode>
);
