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
			<div
				className="flex items-center justify-between hover:cursor-pointer"
				aria-expanded={faqAnswer}
				aria-controls={`section-#${id.toString()}`}
				id={`accordion-#${id.toString()}`}
				onClick={handleQuestionClick}
			>
				<h2 className="text-1xl hover:text-faq-highlight font-bold text-gray-900">{question}</h2>

				<button aria-label={faqAnswer ? 'Hide Answer' : 'Display Answer'} className="hover:cursor-pointer">
					{faqAnswer ? <IconMinus /> : <IconExpand />}
				</button>
			</div>

			{faqAnswer ? (
				<p
					id={`section-#${id.toString()}`}
					className="text-faq-purple-600 fadeIn pt-4"
					role="region"
					aria-labelledby={`accordion-#${id.toString()}`}
					aria-hidden={!faqAnswer}
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
