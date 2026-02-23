import FaqHeader from './components/FaqHeader';
import FaqAccordion from './components/FaqAccordion';

function App() {
	return (
		<main className="faq__main">
			<div className="h-80 bg-[url(./assets/images/background-pattern-mobile.svg)] md:bg-[url(./assets/images/background-pattern-desktop.svg)]"></div>
			<article className="container mx-auto mt-[-150px] max-w-sm overflow-hidden rounded-2xl border border-gray-200 bg-white px-4 text-left shadow-lg md:max-w-md lg:max-w-lg xl:max-w-xl">
				<FaqHeader />
				<FaqAccordion />
			</article>
		</main>
	);
}

export default App;
