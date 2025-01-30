import React from "react";
import Header from "../Header/Header";
import ProductCard from "../ProductCard/ProductCard";
import "./Shop.css";
import Item from "../Item/Item";
import Footer from "../Footer/Footer";
import { NavLink } from "react-router-dom";

function Shop() {
  const products = [
    { name: "Barberton Daisy", price: 119, quantity: 2, total: 238, sku: "1995751877966" },
    { name: "Barberton Daisy", price: 139, quantity: 6, total: 834, sku: "1995751877966" },
    { name: "Barberton Daisy", price: 179, quantity: 1, total: 179, sku: "1995751877966" },
  ];

  return (
    <div className="shop-page">
      <Header />
      <div className="shop">
        <div className="container">
          <div className="breadcrumb">Home / Shop / Shopping Cart</div>

          <div className="main-contentq">
            <div className="products">
              <ul className="products-list">
                <li className="products-item">Products</li>
                <li className="products-item">Price</li>
                <li className="products-item">Quantity</li>
                <li className="products-item">Total</li>
              </ul>
              <div className="products-container">
                {products.map((product, index) => (
                  <ProductCard
                    key={index}
                    name={product.name}
                    price={product.price}
                    quantity={product.quantity}
                    total={product.total}
                    sku={product.sku}
                  />
                ))}
              </div>
            </div>

            <div className="cart-totals">
              <h2 className="cart-totals-header">Cart Totals</h2>

              <div className="coupon-input">
                <label htmlFor="coupon-code">Coupon Apply</label>
                <input
                  className="input-field"
                  placeholder="Enter coupon code here..."
                  type="text"
                  id="coupon-code"
                />
              </div>

              <div className="totals-summary">
                <div className="summary-item">
                  <p>Subtotal</p>
                  <p>$2,683.00</p>
                </div>
                <div className="summary-item">
                  <p>Coupon Discount</p>
                  <p>(-) 00.00</p>
                </div>
                <div className="summary-item">
                  <p>Shipping</p>
                  <div className="alo">
                  <p>
                    $16.00
                  </p>
                     <span className="shipping-details">View shipping charge</span>
                  </div>
                </div>
                <div className="summary-item total-amount">
                  <p>Total</p>
                  <p>$2,699.00</p>
                </div>
              </div>

           <div className="ll">
           <NavLink to={'/checkout'} className="checkout-button">Proceed to Checkout</NavLink>
           <span className="continue-shopping">Ccamcaontinue Shopping</span>
           </div>
            </div>
          </div>
          <h1 className="shop-h1">You may be interesed in</h1>
          <hr />
          <Item/>
        </div>
        <Footer/>
      </div>
    </div>
  );
}

export default Shop;
