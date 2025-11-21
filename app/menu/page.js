"use client";
import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import Navbar from "../components/navbar";

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
        <div className="flex flex-col h-[1570px] w-full bg-gray-200 items-center">
           <div className="flex flex-row rounded-full h-16 w-[650px] bg-white mt-30">
            <button className="rounded-l-full bg-[#b68b3a] text-white">MAIN DISHES</button>
            <button className="rounded-l-full text-black bg-white">DESERTS</button>
            <button className="rounded-l-full text-black bg-white">SEA FOOD</button>
            <button className="rounded-l-full text-black bg-white">BEVERAGE</button>
           </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
