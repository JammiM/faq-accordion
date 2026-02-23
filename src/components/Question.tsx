import IconExpand from '../assets/images/icon-plus.svg?react';
import IconMinus from '../assets/images/icon-minus.svg?react';
import { useState } from 'react';

interface Props {
	id: number;
	question: string;
	answer: string;
	isActive: boolean;
}

const Question = ({ question, answer, isActive }: Props) => {
	const [faqAnswer, showAnswer] = useState(isActive);

	return (
		<div className="single-question border-b-faq-purple-100 mb-2 border-b-[1px] pt-2 pb-6">
			<div className="flex items-center justify-between">
				<h2 className="text-1xl hover:text-faq-highlight font-bold text-gray-900 hover:cursor-pointer">{question}</h2>

				<button
					type="button"
					onClick={() => showAnswer(!faqAnswer)}
					aria-label={faqAnswer ? 'Hide Answer' : 'Display Answer'}
				>
					{faqAnswer ? <IconMinus /> : <IconExpand />}
				</button>
			</div>
			{faqAnswer ? <p className="text-faq-purple-600 pt-4">{answer}</p> : ''}
		</div>
	);
};

export default Question;
