"use client";
import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import MenuPage from "../components/menu";
export default function Menu() {
  return (
    <div>
      <div className="flex flex-col h-[2942px] w-full bg-white">
        <Navbar />
        <Header />
        <div className="absolute mt-75 ml-140 text-white font-bold font-playfair text-5xl">
          Restaurent Best Food
        </div>
        <div className="absolute mt-88 ml-150 text-white ">
          Home <span>&rsaquo;</span> Menu
        </div>
        
        <MenuPage />
        <Footer />
      </div>
    </div>
  );
}
