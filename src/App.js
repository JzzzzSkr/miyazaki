import React, { Suspense, lazy } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";

const Character = lazy(() => import("./pages/characteres/Character"));
const Layout = lazy(() => import("./pages/layout/Layout"));
const Home = lazy(() => import("./pages/home/Home"));
const About = lazy(() => import("./pages/about/About"));
const Login = lazy(() => import("./pages/login/Login"));
const Totoro = lazy(() => import("./pages/recommend/totoro/Totoro"));
const Wind = lazy(() => import("./pages/recommend/wind/Wind"));
const Spirited = lazy(() => import("./pages/recommend/spirited/Spirited"));
const Kiki = lazy(() => import("./pages/recommend/kiki/Kiki"));
const Ponyo = lazy(() => import("./pages/recommend/ponyo/Ponyo"));
const Howl = lazy(() => import("./pages/recommend/howl/Howl"));
const Contact = lazy(() => import("./pages/contact/Contact"));

const App = () => {
  return (
    <HashRouter>
      <Suspense fallback={<div></div>}>
        <Routes>
          <Route path="/" element={<Layout />}>
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
      </Suspense>
    </HashRouter>
  );
};

export default App;
