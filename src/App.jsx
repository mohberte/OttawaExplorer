import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// import components
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import WhyUs from "./components/WhyUs";
import Companies from "./components/Companies";
import Pricing from "./components/Pricing";


// import pages
import Home from "./pages/Home";
import About from "./pages/About";
import OurApp from "./pages/OurApp";

const App = () => {
  return (
    <div className="overflow-x-hidden">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact="true" path="/" element={<Home />} />
          <Route exact="true" path="/about" element={<About />} />
          <Route exact="true" path="/app" element={<OurApp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
