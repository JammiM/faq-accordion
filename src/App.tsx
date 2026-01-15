import FaqHeader from "./components/FaqHeader";
import FaqAccordion from "./components/FaqAccordion";

function App() {
  return (
    <>
      <main className="faq__main">
        <div className="bg-amber-300 bg-[url(./assets/images/background-pattern-mobile.svg)] md:bg-[url(./assets/images/background-pattern-desktop.svg)] h-80"></div>
        <article className=" container mx-auto max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl bg-white border border-gray-200 rounded-t-2xl overflow-hidden shadow-lg text-left mt-[-150px]">
          <FaqHeader />
          <FaqAccordion />
        </article>
      </main>
    </>
  );
}

export default App;
