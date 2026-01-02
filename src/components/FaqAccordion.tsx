import React from "react";

import faqsObject from "../questionsAndAnswers.json";
import ExpandButton from "./ExpandButton";

const FaqAccordion = () => {
  return (
    <section>
      {faqsObject.map((singleFaq) => {
        return (
          <div className="mb-2">
            <div>
              <h2 className="text-1xl font-bold text-gray-900">
                {singleFaq.question}
              </h2>
              <span>
                <ExpandButton />
              </span>
            </div>
            <p>{singleFaq.answer}</p>
          </div>
        );
      })}
    </section>
  );
};

export default FaqAccordion;
