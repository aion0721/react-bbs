import React from "react";
import "./Content.css";
import Thread from "./parts/Thread";

function Content() {
  return (
    <div className="content">
      <Thread />
      <Thread />
      <Thread />
    </div>
  );
}

export default Content;
