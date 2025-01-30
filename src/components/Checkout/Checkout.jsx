import React from "react";
import Header from "../Header/Header";
import "./Checkout.css";
import plantcha from '../../assets/blogplants.png'
import Footer from "../Footer/Footer";

function Checkout() {
  return (
    <div className="checkout-page">
      <Header />
      <div className="container">
        <div className="checkout-content">
          <div className="billing-details">
            <h2>Billing Address</h2>
            <form className="billing-form">
              <div className="form-group">
                <div className="input-box">
                  <label>First Name *</label>
                  <input type="text" placeholder="First Name" />
                </div>
                <div className="input-box">
                  <label>Last Name *</label>
                  <input type="text" placeholder="Last Name" />
                </div>
              </div>

              <div className="form-group">
                <div className="input-box">
                  <label>Country / Region *</label>
                  <select>
                    <option>Select a country / region</option>
                  </select>
                </div>
                <div className="input-box">
                  <label>Town / City *</label>
                  <input type="text" placeholder="Town / City" />
                </div>
              </div>

              <div className="form-group">
                <div className="input-box">
                  <label>Street Address *</label>
                  <input type="text" placeholder="House number and street name" />
                  <input type="text" placeholder="Apartment, suite, unit, etc. (optional)" />
                </div>
              </div>

              <div className="form-group">
                <div className="input-box">
                  <label>State *</label>
                  <select>
                    <option>Select a state</option>
                  </select>
                </div>
                <div className="input-box">
                  <label>Zip *</label>
                  <input type="text" placeholder="Zip Code" />
                </div>
              </div>

              <div className="form-group">
                <div className="input-box">
                  <label>Email Address *</label>
                  <input type="email" placeholder="Email" />
                </div>
                <div className="input-box">
                  <label>Phone Number *</label>
                  <select>
                    <option>+966</option>
                  </select>
                  <input type="text" placeholder="Phone Number" />
                </div>
              </div>

              <div className="different-address">
                <input type="checkbox" id="different-address" />
                <label htmlFor="different-address">Ship to a different address?</label>
              </div>

              <div className="input-box">
                <label>Order Notes (Optional)</label>
                <textarea></textarea>
              </div>
            </form>
          </div>

          <div className="order-summary">
            <h2>Your Order</h2>
            <div className="order-items">
              <div className="order-item">
                <img className="qqww" src={plantcha} alt="" />
                <p className="rr">Barberton Daisy <span>(x2)</span></p>
                <p className="price">$238.00</p>
              </div>
              <div className="order-item">
                <img className="qqww" src={plantcha} alt="" />
                <p className="rr">Blushing Bromeliad <span>(x2)</span></p>
                <p className="price">$834.00</p>
              </div>
              <div className="order-item">
                <img className="qqww" src={plantcha} alt="" />
                <p className="rr">Aluminum Plant <span>(x2)</span></p>
                <p className="price">$1,611.00</p>
              </div>
            </div>

            <div className="order-summary-details">
              <p>Subtotal: <span>$2,683.00</span></p>
              <p>Coupon Discount: <span>(-) 00.00</span></p>
              <p className="">Shipping: <span className="pcha">$16.00 <a className="omgcool" href="#">View shipping charge</a></span></p>
              <p className="total-amount">Total: <span>$2,699.00</span></p>
            </div>

            <h3>Payment Method</h3>
            <div className="payment-options">
              <label><input type="radio" name="payment" /> PayPal</label>
              <label><input type="radio" name="payment" /> Direct Bank Transfer</label>
              <label><input type="radio" name="payment" checked /> Cash on Delivery</label>
            </div>

            <button className="place-order">Place Order</button>
          </div>
        </div>
      </div>
        <Footer/>
    </div>
  );
}

export default Checkout;
