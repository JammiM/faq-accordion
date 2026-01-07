import React from "react";
import iconExpand from "../assets/images/icon-plus.svg";
import iconMinus from "../assets/images/icon-minus.svg";

const ExpandButton = () => {
  return (
    <button>
      <img src={iconExpand} alt="Expand accordion" srcSet={iconExpand} />
    </button>
  );
};

export default ExpandButton;
