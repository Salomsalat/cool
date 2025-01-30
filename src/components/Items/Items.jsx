import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import plant from '../../assets/blogplants.png'
import './Items.css';

function Items() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get('https://greenshop-c00c.onrender.com/api/flowers')
      .then((response) => setProducts(response.data))
  }, []);

  return (
    <div className="product-grid">
      {products.map((product) => (
        <div className="product-card" key={product._id}>
          <div className="product-image">
            <img src={plant} alt={product.name} />
            <div className="hover-icons">
              <Link to={`/product/${product._id}`}>
                <button>🛒</button>
              </Link>
              <button className="kichik">❤</button>
              <button>🔍</button>
            </div>
          </div>
          <h3>{product.name}</h3>
          <p>${product.price.toFixed(2)}</p>
        </div>
      ))}
    </div>
  );
}

export default Items;
