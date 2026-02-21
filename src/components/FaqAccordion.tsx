import faqsObject from "../questionsAndAnswers.json";
import Question from "./Question";

const FaqAccordion = () => {
  return (
    <section className="pt-5 px-[10px]">
      {faqsObject.map((singleFaq) => {
        return <Question key={singleFaq.id} {...singleFaq} />;
      })}
    </section>
  );
};

export default FaqAccordion;
