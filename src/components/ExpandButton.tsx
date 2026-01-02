import React from "react";
import iconExpand from "../assets/images/icon-plus.svg";
import iconMinus from "../assets/images/icon-minus.svg";

const ExpandButton = () => {
  return (
    <button className="hover:bg-purple-200 hover:border">
      {/* // <button className="border-purple-200 text-purple-600 hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700"> */}
      <img src={iconExpand} alt="" srcSet={iconExpand} />
    </button>
  );
};

export default ExpandButton;
