import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import Footer from "./components/Footer";
export default function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <About />
      <Project />
      <Contact />
      <Footer />
    </main>
  );
}
