import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Blog from "./Blog";
import Contact from "./Contact";
import Error from "./Error";
import About from "./About";
import Navbar from "./Navbar";
import Myblog from "./Myblog";
console.log(BrowserRouter);
const Mainrouters = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog/:title" element ={<Myblog/>} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Mainrouters;
