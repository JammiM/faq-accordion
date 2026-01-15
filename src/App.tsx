import "./App.css";
import FaqHeader from "./components/FaqHeader";
import FaqAccordion from "./components/FaqAccordion";

function App() {
  return (
    <>
      <main className="faq__main">
        <article className="max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl bg-white border border-gray-200  rounded overflow-hidden shadow-lg text-left">
          <FaqHeader />
          <FaqAccordion />
        </article>
      </main>
    </>
  );
}

export default App;
