import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { Strategy } from "./components/Strategy";
import { Team } from "./components/Team";
import { Projects } from "./components/Projects";
import { Testimonials } from "./components/Testimonials";
import { FAQs } from "./components/FAQs";
import { Footer } from "./components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <main>
        <Nav />
        <Hero />
        <Services />
        <Strategy />
        <Team />
        <Projects />
        <Testimonials />
        <FAQs />
      </main>

      <Footer />
    </>
  );
}

export default App;
