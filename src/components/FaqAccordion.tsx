import faqsObject from '../questionsAndAnswers.json';
import Question from './Question';

const FaqAccordion = () => {
	return (
		<section className="px-[10px] pt-5">
			{faqsObject.map((singleFaq) => {
				return <Question key={singleFaq.id} {...singleFaq} />;
			})}
		</section>
	);
};

export default FaqAccordion;
