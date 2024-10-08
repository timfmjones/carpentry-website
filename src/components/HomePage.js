// src/components/HomePage.js
import React, { useState } from 'react';
import './HomePage.css';
import products from '../products';

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Filter products that are both popular and match the search term
  const popularProducts = products.filter(
    (product) => product.popular && product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="container">
      <h1>Popular Products</h1>
      <input
        type="text"
        placeholder="Search for products..."
        value={searchTerm}
        onChange={handleSearch}
        className="search-bar"
      />
      <div className="product-scroll">
        {popularProducts.map((product) => (
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

export default HomePage;
