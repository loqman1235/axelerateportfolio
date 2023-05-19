import About from "./components/About";
import Contact from "./components/Contact";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import Projects from "./components/Projects";
import Services from "./components/Services";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
