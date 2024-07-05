import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Plans from "./Components/Plans";
import Amenities from "./Components/Amenities";
import Footer from "./Components/Footer";
import PrimeLocation from "./Components/PrimeLocation";
import Home from "./Components/Home";
import Price from "./Components/Price";
import Specifications from "./Components/Specifications";
import Media from "./Components/Media";
const ScrollToSection = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);

  return null;
};

function App() {
  return (
    <div>
      <ScrollToSection />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/plans" element={<Plans />} />
        <Route path="/amenities" element={<Amenities />} />
        <Route path="/location" element={<PrimeLocation />} />
        <Route path="/price" element={<Price />} />
        <Route path="/specifications" element={<Specifications />} />
        <Route path="/media" element={<Media />} />

        {/* Add other routes here */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
