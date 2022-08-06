import React from "react";
import Hero from "./components/Landing page/Hero";
import MiniCard from "./components/Landing page/MiniCard";
import Navbar from "./components/Landing page/Navbar";
import Mission from "./components/Landing page/Mission";
import About from "./components/Landing page/About";
import Advert from "./components/Landing page/Advert";
import Footer from "./components/Landing page/Footer";

const App = () => {
  return (
    <>
      <div className="mx-auto container">
        <Navbar />
        <Hero />
        <MiniCard />
        <Mission />
        <About />
        <Advert />
      </div>
      <Footer />
    </>
  );
};

export default App;
