import React from "react";
import Sidebar from "./Sidebar";
import Content from "./Content";
import "./Container.css";

function container() {
  return (
    <div className="container">
      <Sidebar />
      <Content />
    </div>
  );
}

export default container;
