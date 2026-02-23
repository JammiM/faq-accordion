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
		<div className="mb-2 single-question border-b-[1px] border-b-faq-purple-100 pb-6 pt-2">
			<div className="flex justify-between items-center">
				<h2 className="text-1xl font-bold text-gray-900 hover:text-faq-highlight hover:cursor-pointer">{question}</h2>

				<button onClick={() => showAnswer(!faqAnswer)} aria-label={faqAnswer ? 'Hide Answer' : 'Display Answer'}>
					{faqAnswer ? <IconMinus /> : <IconExpand />}
				</button>
			</div>
			{faqAnswer ? <p className="text-faq-purple-600 pt-4">{answer}</p> : ''}
		</div>
	);
};

export default Question;
