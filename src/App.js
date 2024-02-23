import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";


import Character from "./pages/characteres/Character";
import Layout from "./pages/layout/Layout";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Login from "./pages/login/Login";
import Totoro from "./pages/recommend/totoro/Totoro";
import Wind from "./pages/recommend/wind/Wind";
import Spirited from "./pages/recommend/spirited/Spirited";
import Kiki from "./pages/recommend/kiki/Kiki";
import Ponyo from "./pages/recommend/ponyo/Ponyo";
import Howl from "./pages/recommend/howl/Howl";
import Contact from "./pages/contact/Contact";

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="totoro" element={<Totoro />} />
          <Route path="wind" element={<Wind />} />
          <Route path="spirited" element={<Spirited />} />
          <Route path="kiki" element={<Kiki />} />
          <Route path="ponyo" element={<Ponyo />} />
          <Route path="howl" element={<Howl />} />
          <Route path="characters" element={<Character />} />
          <Route path="contact" element={<Contact />} />
        </Route>

        <Route path="/login" element={<Login />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
