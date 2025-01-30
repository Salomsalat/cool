import React from 'react';
import './MainContent.css';
import { NavLink } from 'react-router-dom';
import Items from '../Items/Items';

function MainContent() {
  return (
    <div className="main-content">
      <div className="tabs">
        <NavLink 
          to="/" 
          className={({ isActive }) => (isActive ? "active-tab" : "wowomg")}>
          All Plants
        </NavLink>
        <NavLink 
          to="/new-arrivals" 
          className={({ isActive }) => (isActive ? "active-tab" : "wowomg")}>
          New Arrivals
        </NavLink>
        <NavLink 
          to="/sale" 
          className={({ isActive }) => (isActive ? "active-tab" : "wowomg")}>
          Sale
        </NavLink>
        <div className="sort">
          <label>Sort by:</label>
          <select>
            <option>Default sorting</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
          </select>
        </div>
      </div>
      <Items />
    </div>
  );
}

export default MainContent;
