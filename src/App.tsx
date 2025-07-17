import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import mobileBackground from "./assets/images/background-pattern-mobile.svg";
import desktopBackground from "./assets/images/background-pattern-desktop.svg";
import iconStar from "./assets/images/icon-star.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <main>
        {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}

        <picture className="mobile-header">
          <source media="( width >= 650px )" srcSet={desktopBackground} />
          <source media="( width <= 375px )" srcSet={mobileBackground} />
          <img
            src={mobileBackground}
            alt="mobile background"
            srcSet={mobileBackground}
          />
        </picture>

        <article className="overpass-font faq-article">
          <div>
            <img src={iconStar} alt="" srcSet={iconStar} />
            <h1>FAQs</h1>
          </div>

          <p>What is Frontend Mentor, and how will it help me?</p>

          <p>
            Frontend Mentor offers realistic coding challenges to help
            developers improve their frontend coding skills with projects in
            HTML, CSS, and JavaScript. It's suitable for all levels and ideal
            for portfolio building.
          </p>

          <p>Is Frontend Mentor free?</p>

          <p>
            Yes, Frontend Mentor offers both free and premium coding challenges,
            with the free option providing access to a range of projects
            suitable for all skill levels.
          </p>

          <p>Can I use Frontend Mentor projects in my portfolio?</p>

          <p>
            Yes, you can use projects completed on Frontend Mentor in your
            portfolio. It's an excellent way to showcase your skills to
            potential employers!
          </p>

          <p>How can I get help if I'm stuck on a Frontend Mentor challenge?</p>

          <p>
            The best place to get help is inside Frontend Mentor's Discord
            community. There's a help channel where you can ask questions and
            seek support from other community members.
          </p>
        </article>
      </main>
    </>
  );
}

export default App;
