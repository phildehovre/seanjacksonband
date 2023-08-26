import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

import Footer from "./components/Footer";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import Feature from "./components/Feature";
import SocialsPage from "./pages/SocialsPage";
import AboutPage from "./pages/AboutPage";
import PrivacyPolicy from "./pages/PrivacyPolicy";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<Feature />} />
          <Route path="/socials" element={<SocialsPage />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
