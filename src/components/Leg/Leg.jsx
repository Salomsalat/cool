import React from "react";
import legimg from "../../assets/leg-plant.png";
import legimg2 from "../../assets/leg-plant2.png";

import "./Leg.css";

function Leg() {
  return (
    <div className="container">
      <div className="leg">
        <div className="right">
          <div className="right_main">
            <img className="imgcha" src={legimg} alt="" />
            <div className="right_text">
              <h1 className="right_h1">SUMMER CACTUS & SUCCULENTS</h1>
              <p className="right_p">
                We are an online shop offering a wide range of cheap and trendy
                plants
              </p>
              <button className="right_btn">Find more →</button>
            </div>
          </div>
        </div>{" "}
        <div className="left">
          <div className="left_main">
            <img className="imgcha" src={legimg2} alt="" />
            <div className="left_text">
              <h1 className="left_h1">SUMMER CACTUS & SUCCULENTS</h1>
              <p className="left_p">
                We are an online shop offering a wide range of cheap and trendy
                plants
              </p>
              <button className="left_btn">Find more →</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Leg;
