import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {Helmet} from 'react-helmet'

import "./App.css";

import Footer from "./components/Footer";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import PrivacyPolicy from "./pages/PrivacyPolicy";

function App() {
  return (
    <>
      <Router>
      <Helmet>
        <title>Top Country Wedding Band | Book the Best Wedding Band in UK</title>
        <meta name="description" content="Looking for the perfect country band for your wedding? Book the best wedding band in the UK today. High-energy country music to make your big day unforgettable!" />
        <script type="application/ld+json">  
          {`
            "@context": "https://schema.org",
            "@type": "MusicGroup",
            "name": "The Sean Jackson Band",
            "genre": "Country",
            "url": "https://seanjacksonband.com",
            "sameAs": [
              "https://www.facebook.com/seanjacksonband",
              "https://www.youtube.com/@Seanyplank",
              "https://www.instagram.com/seanjacksonband/",
              "https://open.spotify.com/artist/6kj4yI8tHDI7knB4FQ0z7x?si=8iVMRsOhRZSGFJQg-AoJLQ",
            ],
            "contactPoint": {
              "@type": "ContactPoint",
              "contactType": "customer service",
              "email": "seanyboyjackson@gmail.com"
            }
        `}
  </script>
      </Helmet>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
