"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { useState } from "react";
export default function Header() {
  const router = useRouter();
  const [selectedOption, setSelectedOption] = useState(false);
  return (
    <div className="flex flex-col w-full h-[550px] bg-black">
      <div className="flex md:flex-row flex-col ">
        <button
          type="button"
          className="flex md:hidden flex-col gap-1 ml-10 md:ml-4 mt-15 md:mt-0"
          onClick={() => setSelectedOption(!selectedOption)}
        >
          <span className="h-0.5 w-6 bg-white"></span>
          <span className="h-0.5 w-6 bg-white"></span>
          <span className="h-0.5 w-6 bg-white"></span>
        </button>
        <img
          className="h-[70px] w-[130px] ml-25 md:ml-20 mt-[-30px] md:mt-10"
          src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Flogo-light.png&w=1920&q=75"
        />
        
        <div className={`flex-col md:flex-row ${selectedOption ? "flex" : "hidden"} md:flex `}>
          <select
            onChange={(e) => {
              router.push(e.target.value);
            }}
            className="ml-10 md:ml-70 mt-10 font-[15px] font-bold text-white"
          >
            <option value="/" className="border-none bg-white text-black">
              Home
            </option>
            <option value="/" className="border-none bg-white text-black">
              Home 1
            </option>
            <option value="/" className="border-none bg-white text-black">
              Home 2
            </option>
            <option value="/" className="border-none bg-white text-black">
              Home 3
            </option>
          </select>
          <select
            onChange={(e) => {
              router.push(e.target.value);
            }}
            className="ml-10 mt-10 border-none font-[15px] font-bold text-white"
          >
            <option value="option1" className="border-none bg-white text-black">
              Pages
            </option>
            <option value="/login" className="border-none bg-white text-black">
              Login
            </option>
            <option
              value="/register"
              className="border-none bg-white text-black"
            >
              Register
            </option>
            <option value="/about" className="border-none bg-white text-black">
              About Us
            </option>
          </select>
          <select
            onChange={(e) => {
              router.push(e.target.value);
            }}
            className="ml-10 mt-10 font-[15px] font-bold text-white"
          >
            <option value="/menu" className="border-none bg-white text-black">
              Menu
            </option>
            <option value="/menu" className="border-none bg-white text-black">
              Menu 1
            </option>
            <option className="border-none bg-white text-black">Menu 2</option>
            <option className="border-none bg-white text-black">Menu 3</option>
          </select>
          <select
            onChange={(e) => {
              router.push(e.target.value);
            }}
            className="ml-10 mt-10 font-[15px] font-bold text-white"
          >
            <option value="/blog" className="border-none bg-white text-black">
              Blog
            </option>
            <option value="/blog" className="border-none bg-white text-black">
              Blog 1
            </option>
            <option value="/blog" className="border-none bg-white text-black">
              Blog 2
            </option>
          </select>
          <select
            onChange={(e) => {
              router.push(e.target.value);
            }}
            className="ml-10 mt-10 font-[15px] font-bold text-white"
          >
            <option value="/shop" className="border-none bg-white text-black">
              Shop
            </option>
            <option value="/shop" className="border-none bg-white text-black">
              Shop 1
            </option>
          </select>
        </div>

        <img
          className="h-[55px] w-[55px] md:ml-50 ml-1 hidden md:block mt-17 rounded-full"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZhtcweV7RsoTQjXLNmQVP5rE1LA64-IXj3g&s"
        />
        <button className="border-2 bg-black mt-17 p-3 ml-7 w-40 hover:bg-white hidden md:block hover:text-black text-white">
          Reservation
        </button>
      </div>
      <div className="flex flex-row">
        <img
          className="h-[400px] w-full static"
          src="https://i.pinimg.com/1200x/70/83/0d/70830dba2119b6d55605efefe8e95e87.jpg"
        />
      </div>
    </div>
  );
}
