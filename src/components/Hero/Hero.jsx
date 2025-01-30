import React from 'react'
import Plants from '../../assets/plants.png'
import './Hero.css'

function Hero() {
  return (
    <div className='hero'>
      <div className="container">
        <div className="hero_inner">
          <div className="left">
            <span className="hero_span">
              Welcome to GreenShop
            </span>
            <h1 className="hero_h1">
              LET'S MAKE A BETTER <span className="hero_h1_span">PLANET</span>
            </h1>
            <p className="hero_p">
              We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!
            </p>
            <button className="hero_btn">SHOP NOW</button>
          </div>
          <div className="right">
            <img src={Plants} alt="plants" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
