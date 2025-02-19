import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Category from './pages/Category';
import Product from './pages/Product';
import Cart from './pages/Cart';
import About from './pages/About';
import Contact from './pages/Contact';
import Policies from './pages/Policies';
import Payment from './pages/Payment';

function App() {
  return (
    <CartProvider>
      <Router>
        {/* Ensure Header is always at the top */}
        <Header />  

        {/* Main Content */}
        <main style={{ minHeight: "80vh", padding: "20px" }}>
          <Routes>
            <Route path="home/" element={<Home />} />
            <Route path="/category/:categoryName?" element={<Category />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/policies" element={<Policies />} />
            <Route path="/payment" element={<Payment />} />
          </Routes>
        </main>

        {/* Ensure Footer stays at the bottom */}
        <Footer />
      </Router>
    </CartProvider>
  );
}

export default App;