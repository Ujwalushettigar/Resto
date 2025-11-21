"use client";
import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import Video from "../components/video";
import About from "../components/about";
import Chef from "../components/chef";
export default function Blog() {
  return (
    <div>
      <div className="flex flex-col h-[4030px] w-full bg-white">
        <Navbar />
        <Header />
        <div className="absolute mt-60 ml-150 text-white font-bold font-playfair text-5xl">
          About Us
        </div>
        <div className="absolute mt-75 ml-160 text-white ">
          Home <span>&rsaquo;</span> About Us
        </div>
        <About />
        <Chef />
        <Video />
        
        <Footer />
      </div>
    </div>
  );
}
