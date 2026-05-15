
import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import StoreDetail from './pages/StoreDetail';
import ProductDetail from './pages/ProductDetail';
import SearchResults from './pages/SearchResults';
import CartPage from './pages/Cart';
import { CartProvider } from './CartContext';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <CartProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/store/:id" element={<StoreDetail />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/search" element={<SearchResults />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="*" element={<Home />} />
            </Routes>
          </main>
          <div className="mt-auto">
            <Footer />
          </div>
        </div>
      </Router>
    </CartProvider>
  );
};

export default App;
