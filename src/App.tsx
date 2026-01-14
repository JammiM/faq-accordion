import "./App.css";
import FaqHeader from "./components/FaqHeader";
import FaqAccordion from "./components/FaqAccordion";

function App() {
  return (
    <>
      <main className="faq__main container mx-auto px-4 bg-s-g-purple-100 ">
        <article className="max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl bg-white border border-gray-200  rounded overflow-hidden shadow-lg p-4 mx-auto   text-left">
          <FaqHeader />
          <FaqAccordion />
        </article>
      </main>
    </>
  );
}

export default App;
