import React from 'react';
import rasmcha from '../../assets/blogplants.png'
import './Item.css';

function Item() {
  const products = [
    { name: "Beach Spider Lily", price: 129.0, image: "https://via.placeholder.com/150" },
    { name: "Blushing Bromeliad", price: 139.0, image: "https://via.placeholder.com/150" },
    { name: "Aluminum Plant", price: 179.0, image: "https://via.placeholder.com/150" },
    { name: "Bird's Nest Fern", price: 99.0, image: "https://via.placeholder.com/150" },
    { name: "Chinese Evergreen", price: 39.0, image: "https://via.placeholder.com/150" },
  ];

  return (
    <div className="item-container">
      {products.map((product, index) => (
        <div key={index} className="item-card">
          <img src={rasmcha} alt={product.name} className="item-image" />
          <h3 className="item-name">{product.name}</h3>
          <p className="item-price">${product.price.toFixed(2)}</p>
        </div>
      ))}
    </div>
  );
}

export default Item;
