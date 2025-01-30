import React, { useState, useEffect } from "react";
import { useParams, Outlet } from "react-router-dom";
import Header from "../Header/Header";
import { NavLink } from "react-router-dom";
import "./ProductDetails.css";
import rasm from "../../assets/blogplants.png";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedSize, setSelectedSize] = useState("L");
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    setLoading(true);
    fetch(`https://greenshop-c00c.onrender.com/api/flowers/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching product:", error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <>
        <Header />
        <div className="container">
          <h1>Loading...</h1>
        </div>
      </>
    );
  }

  if (!product) {
    return (
      <>
        <Header />
        <div className="container">
          <h1>Product not found!</h1>
        </div>
      </>
    );
  }

  return (
    <>
      <Header />
      <div className="container">
        <div className="breadcrumb">Home / Shop</div>
        <div className="product-details-wrapper">
          <div className="image-section">
            <div className="thumbnail-images">
              {product.image.map((index) => (
                <img key={index} src={rasm} alt={product.name} />
              ))}
            </div>
            <img src={rasm} alt={product.name} className="main-image" />
          </div>
          <div className="details-section">
            <h1 className="product-name">{product.name}</h1>
            <div className="erm">
              <h2 className="product-price">${product.price.toFixed(2)}</h2>
              <div className="review-section">
                ★★★★☆{" "}
                <span className="review-count">(19 Customer Reviews)</span>
              </div>
            </div>
            <div className="short-description">
              <h3>Short Description:</h3>
              <p>{product.description}</p>
            </div>
            <div className="size-options">
              <h4>Size:</h4>
              <div className="sizes">
                {["S", "M", "L", "X"].map((size) => (
                  <button
                    key={size}
                    className="size-button"
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
            <div className="shush">
              <div className="quantity-section">
                <button
                  className="quantity-btn"
                  onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
                >
                  -
                </button>
                <input className="wa" type="text" value={quantity} readOnly />
                <button
                  className="quantity-btn"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  +
                </button>
              </div>
              <div className="actions">
                <button className="btn buy-now">BUY NOW</button>
                <NavLink to={"/shop"} className="btn add-to-cart">
                  ADD TO CART
                </NavLink>
                <button className="btn wishlist-button">💚</button>
              </div>
            </div>
            <div className="sku-info">
              <p>
                <strong>SKU:</strong> {product.sku}
              </p>
              <p>
                <strong>Categories:</strong> {product.category.join(", ")}
              </p>
              <p>
                <strong>Tags:</strong> Home, Garden, Plants
              </p>
            </div>
          </div>
        </div>
        <div className="product-extra-details">
          <ul className="product-tabs">
            <li>
              <NavLink
                className="wowmm"
                to={`description`}
                activeClassName="active-tab"
              >
                Product Description
              </NavLink>
            </li>
            <li>
              <NavLink
                className="wowmm"
                to={`reviews`}
                activeClassName="active-tab"
              >
                Reviews (19)
              </NavLink>
            </li>
          </ul>
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default ProductDetails;
