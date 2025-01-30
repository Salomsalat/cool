import React from "react";
import "./Newsletter.css";

const Newsletter = () => (
  <div className="newsletter">
    <h3>Would you like to join newsletters?</h3>
    <input type="email" placeholder="enter your email address..." />
    <button>Join</button>
    <p>
      We usually post offers and challenges in newsletters. We're your online
      houseplant destination. We offer a wide range of houseplants and accessories
      shipped directly from our (green)house to yours!
    </p>
  </div>
);

export default Newsletter;
