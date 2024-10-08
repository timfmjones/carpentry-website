// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, NavLink } from 'react-router-dom';
import HomePage from './components/HomePage';
import AllProductsPage from './components/AllProductsPage';
import ProductTypePage from './components/ProductTypePage';
import ProductModal from './components/ProductModal';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/" className="logo">Tim Jones Carpentry</Link>
          <NavLink to="/" activeClassName="active">Home</NavLink>
          <NavLink to="/all-products" activeClassName="active">All Products</NavLink>
          <NavLink to="/products/chess-boards" activeClassName="active">Chess Boards</NavLink>
          <NavLink to="/products/picture-frames" activeClassName="active">Picture Frames</NavLink>
          <NavLink to="/products/muskoka-chairs" activeClassName="active">Muskoka Chairs</NavLink>
          <NavLink to="/products/kitchen" activeClassName="active">Kitchen</NavLink>
        </nav>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/all-products" element={<AllProductsPage />} />
          <Route path="/products/:type" element={<ProductTypePage />} />
          <Route path="/product/:id" element={<ProductModal />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
