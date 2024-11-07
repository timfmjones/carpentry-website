import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Modal from 'react-modal';

const productDetails = {
  1: { name: 'Chess Board Deluxe', material: 'Wood', otherInfo: 'Handcrafted' },
  2: { name: 'Classic Picture Frame', material: 'Oak', otherInfo: 'Engraved' },
  // Add more product details as needed
};

const ProductModal = () => {
  const { id } = useParams();
  const product = productDetails[id];
  const navigate = useNavigate();

  if (!product) {
    return <p>No Product Found.</p>;
  }

  const closeModal = () => {
    navigate(-1);
  };

  return (
    <Modal isOpen={true} onRequestClose={closeModal}>
      <h2>{product.name}</h2>
      <p>Material used: {product.material}</p>
      <p>{product.otherInfo}</p>
      <button onClick={closeModal}>Close</button>
    </Modal>
  );
};

export default ProductModal;
