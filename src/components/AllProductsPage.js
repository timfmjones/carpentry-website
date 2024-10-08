// src/components/AllProductsPage.js
import React from 'react';
import products from '../products';
import './AllProductsPage.css';

const AllProductsPage = () => {
  return (
    <div className="container">
      <h1>All Products</h1>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProductsPage;
