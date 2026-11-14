import { useEffect } from "react";
import "./App.css";
import { initReveal } from "./reveal";
import { ScrollProgress } from "./components/ScrollProgress";
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Other } from "./components/Other";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

function App() {
  // Start the scroll-reveal animations once the page has rendered
  useEffect(() => initReveal(), []);

  return (
    <div className="App">
      <ScrollProgress />
      <NavBar />
      <Banner />
      <Experience />
      <Projects />
      <Skills />
      <Other />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
