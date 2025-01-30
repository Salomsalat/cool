import React from "react";
import "./Services.css";
import Group from '../../assets/Group.png'

const Services = () => (
  <div className="services">
    <div className="service">
        <img src={Group} alt="" />
      <h3>Garden Care</h3>
      <p>We are an online plant shop offering a wide range of cheap and trendy plants.</p>
    </div>
    <div className="service">
    <img src={Group} alt="" />
      <h3>Plant Renovation</h3>
      <p>We are an online plant shop offering a wide range of cheap and trendy plants.</p>
    </div>
    <div className="service">
    <img src={Group} alt="" />
      <h3>Watering Garden</h3>
      <p>We are an online plant shop offering a wide range of cheap and trendy plants.</p>
    </div>
  </div>
);

export default Services;
