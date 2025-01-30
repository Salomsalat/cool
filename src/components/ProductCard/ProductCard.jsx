import React, { useState } from "react";
import "./ProductCard.css";

function ProductCard({ name, price, sku }) {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="product-cards">
      <div className="product-info">
        <p className="product-name">{name}</p>
        <p className="product-sku">SKU: {sku}</p>
      </div>
      <p className="product-price">${price}</p>
      <div className="product-quantity">
        <button
          onClick={() => setQuantity(Math.max(quantity - 1, 1))}
          className="quantity-btn"
        >
          -
        </button>
        <span className="quantity-value">{quantity}</span>
        <button
          onClick={() => setQuantity(quantity + 1)}
          className="quantity-btn"
        >
          +
        </button>
      </div>
      <p className="product-total">${price * quantity}</p> 
    </div>
  );
}

export default ProductCard;
