import "./App.css";
import Project from "./components/project";
import Navbar from "./components/navbar";
import ScrollReveal from "./components/reveal";
import About from "./components/About";
import MySkills from "./components/myskill";
import Hero from "./components/Hero";
import Journey from "./components/journey";
import Contact from "./components/contact";

function App() {
  return (
    <div className="p-0 m-0">
      <Navbar />
      <Hero id="Hero" />
      <About id="About" />
      <MySkills id="Skills" />
      <Project id="Project" />
      <Journey id="Journey" />
      <Contact id="Contact" />
    </div>
  );
}

export default App;
