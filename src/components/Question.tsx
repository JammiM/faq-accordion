import IconExpand from '../assets/images/icon-plus.svg?react';
import IconMinus from '../assets/images/icon-minus.svg?react';
import { useState } from 'react';

interface Props {
	id: number;
	question: string;
	answer: string;
	isActive: boolean;
}

const Question = ({ id, question, answer, isActive }: Props) => {
	const [faqAnswer, showAnswer] = useState(isActive);

	function handleQuestionClick() {
		showAnswer(!faqAnswer);
	}

	return (
		<div className="single-question border-b-faq-purple-100 mb-2 pt-2 pb-6">
			<div className="flex items-center justify-between hover:cursor-pointer" onClick={handleQuestionClick}>
				<h2 className="text-1xl hover:text-faq-highlight font-bold text-gray-900 hover:cursor-pointer">
					<button
						type="button"
						aria-expanded={faqAnswer}
						className="text-left"
						aria-controls={`section-#${id.toString()}`}
						id={`accordion-#${id.toString()}`}
					>
						{question}
					</button>
				</h2>
				{faqAnswer ? <IconMinus /> : <IconExpand />}
			</div>

			{faqAnswer ? (
				<p
					className="text-faq-purple-600 fadeIn pt-4"
					id={`section-#${id.toString()}`}
					role="region"
					aria-labelledby={`accordion-#${id.toString()}`}
				>
					{answer}
				</p>
			) : (
				''
			)}
		</div>
	);
};

export default Question;
