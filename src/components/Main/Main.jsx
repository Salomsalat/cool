import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import MainContent from "../MainContent/MainContent";
import "./Main.css";

function Main() {
  return (
    <div>
      <div className="container">
        <div className="main_page">
          <Sidebar />
          <MainContent />
        </div>
      </div>
    </div>
  );
}

export default Main;

