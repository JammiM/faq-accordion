import React from "react";

import faqsObject from "../questionsAndAnswers.json";
import ExpandButton from "./ExpandButton";

const FaqAccordion = () => {
  return (
    <section>
      {faqsObject.map((singleFaq) => {
        return (
          <div key={singleFaq.id} className="mb-2">
            <hr />{" "}
            <div className="flex justify-between items-center">
              <h2 className="text-1xl font-bold text-gray-900 hover:text-red-600 hover:cursor-pointer">
                {singleFaq.question}
              </h2>
              <ExpandButton />
            </div>
            <p className="text-gray-800">{singleFaq.answer}</p>
          </div>
        );
      })}
    </section>
  );
};

export default FaqAccordion;
