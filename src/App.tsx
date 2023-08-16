import "./App.css";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Carousel />
      </main>
      <Footer />
    </>
  );
}

export default App;
