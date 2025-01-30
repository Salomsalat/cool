import React from 'react';
import { NavLink } from 'react-router-dom';
import sale from '../../assets/plantik.jpg';
import './Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="container">
        <div className="categories">
          <h3>Categories</h3>
          <ul>
            <li>
              <NavLink to="/house-plants" activeclassname="active" className="category-link">
                House Plants <span className="count">(33)</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/potter-plants" activeclassname="active" className="category-link">
                Potter Plants <span className="count">(12)</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/seeds" activeclassname="active" className="category-link">
                Seeds <span className="count">(65)</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/small-plants" activeclassname="active" className="category-link">
                Small Plants <span className="count">(39)</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/big-plants" activeclassname="active" className="category-link">
                Big Plants <span className="count">(23)</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/succulents" activeclassname="active" className="category-link">
                Succulents <span className="count">(17)</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/terrariums" activeclassname="active" className="category-link">
                Terrariums <span className="count">(19)</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/gardening" activeclassname="active" className="category-link">
                Gardening <span className="count">(13)</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/accessories" activeclassname="active" className="category-link">
                Accessories <span className="count">(18)</span>
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="price-range">
          <h3>Price Range</h3>
          <input type="range" min="39" max="1230" />
          <p>Price: <span>$39 - $1230</span></p>
          <button className="filter-button">Filter</button>
        </div>
        <div className="sizes">
          <h3>Size</h3>
          <ul>
            <li>
              <NavLink to="/small" activeclassname="active" className="size-link">
                Small <span className="count">(119)</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/medium" activeclassname="active" className="size-link">
                Medium <span className="count">(86)</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/large" activeClassName="active" className="size-link">
                Large <span className="count">(78)</span>
              </NavLink>
            </li>
          </ul>
        </div>
          <img className='wowqq' src={sale}/>
      </div>
    </div>
  );
}

export default Sidebar;
