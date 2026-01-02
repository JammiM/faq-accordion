import React from "react";

import iconStar from "../assets/images/icon-star.svg";

const FaqHeader = () => {
  return (
    <header>
      <img src={iconStar} alt="" srcSet={iconStar} />
      <h1 className="text-3xl font-bold mb-4 text-gray-900">FAQs</h1>
    </header>
  );
};

export default FaqHeader;
