import React from "react";
import "./Controls.css";

//components
import Game from "./Controls";

const Controls = () => {
  return (
    <div className="controls">
        <button className="btn btn-large">Previous 100</button>
        <button className="btn btn-large">Next 100</button>
    </div>
  );
};

export default Controls;