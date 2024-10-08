import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ProductTypePage = () => {
  const { type } = useParams();
  const productsByType = {
    'chess-boards': [{ id: 1, name: 'Chess Board Deluxe' }],
    'picture-frames': [{ id: 2, name: 'Classic Picture Frame' }],
    'muskoka-chairs': [{ id: 3, name: 'Muskoka Chair' }],
    'kitchen': [{ id: 4, name: 'Kitchen Knife Set' }],
  };

  return (
    <div>
      <h1>{type.replace('-', ' ').toUpperCase()}</h1>
      <ul>
        {productsByType[type].map((product) => (
          <li key={product.id}>
            <Link to={`/product/${product.id}`}>{product.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductTypePage;
