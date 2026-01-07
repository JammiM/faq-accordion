import React from "react";

import iconStar from "../assets/images/icon-star.svg";

const FaqHeader = () => {
  return (
    <header className="flex justify-start items-center">
      <img
        className=""
        src={iconStar}
        alt="Frequently asked questions"
        srcSet={iconStar}
      />
      <h1 className="text-3xl font-bold text-gray-900">FAQs</h1>
    </header>
  );
};

export default FaqHeader;
