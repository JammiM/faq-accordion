import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import mobileBackground from "./assets/images/background-pattern-mobile.svg";
import desktopBackground from "./assets/images/background-pattern-desktop.svg";

import FaqHeader from "./components/FaqHeader";
import FaqAccordion from "./components/FaqAccordion";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <main className="faq__main container mx-auto px-4 bg-s-g-purple-100 ">
        <article className="max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl bg-white border border-amber-400  rounded overflow-hidden shadow-lg p-4 mx-auto   text-left">
          <FaqHeader />
          <FaqAccordion />
        </article>
      </main>
    </>
  );
}

export default App;
