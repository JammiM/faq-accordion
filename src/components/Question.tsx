import IconExpand from "../assets/images/icon-plus.svg?react";
import IconMinus from "../assets/images/icon-minus.svg?react";
import { useState } from "react";

interface Props {
  id: number;
  question: string;
  answer: string;
  isActive: boolean;
}

const Question = ({ id, question, answer, isActive }: Props) => {
  const [faqAnswer, showAnswer] = useState(isActive);

  return (
    <div className="mb-2">
      <hr />{" "}
      <div className="flex justify-between items-center">
        <h2 className="text-1xl font-bold text-gray-900 hover:text-red-600 hover:cursor-pointer">
          {question}
        </h2>

        <button onClick={() => showAnswer(!faqAnswer)}>
          {faqAnswer ? <IconMinus /> : <IconExpand />}
        </button>
      </div>
      {faqAnswer ? <p className="text-gray-800">{answer}</p> : ""}
    </div>
  );
};

export default Question;
