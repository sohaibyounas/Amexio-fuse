import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Services from "./Pages/Services";
import About from "./Pages/About";
import Insights from "./Pages/Insights";
import Contact from "./Pages/Contact";
import Work from "./Pages/Work";
import { MyProvider } from "./context/MyContext";

const App = () => {
  return (
    // use context provider here if needed
    <MyProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/work" element={<Work />} />
        </Routes>
      </Router>
    </MyProvider>
  );
};

export default App;
