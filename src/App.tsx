import "./App.css";
import About from "./components/About";
import Carousel from "./components/Carousel";
import Contact from "./components/Contact";
import Feature from "./components/Feature";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Testimonials />
        <Carousel />
        <About />
        <Feature />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
