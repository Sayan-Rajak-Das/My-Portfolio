import "./App.scss";
import Test from "./Test.jsx";
import Navbar from "./components/navbar/Navbar.jsx";
import Hero from "./components/hero/Hero.jsx";

const App = () => {
  return <div>
    <section id="Homepage">
      <Navbar />
      <Hero />  
    </section>
    <section id="Services">parallax</section>
    <section>Services</section>
    <section id="Portfolio">Parallax</section>
    <section>Portfolio1</section>
    <section>Portfolio2</section>
    <section>Portfolio3</section>
    <section id="Contact">Contact</section>

    {/* <Test />
    <Test /> */}
  </div>;
};

export default App;
