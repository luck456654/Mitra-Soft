import axios from "axios";
import React, { useState } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Galery from "./components/Galery.jsx";
import AboutUs from "./components/AboutUs.jsx";
import PaintInfo from "./components/PaintInfo.jsx";

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Routes>
          <Route exact path="/galery" element={<Galery />}></Route>
          <Route exact path="/aboutus" element={<AboutUs />}></Route>
          <Route exact path="/paintinfo" element={<PaintInfo />}></Route>
        </Routes>
      </div>
    </HashRouter>
  );
}
export default App;