"use client";
import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";

export default function Shop() {
  return (
    <div>
      <div className="flex flex-col h-[2942px] w-full bg-white">
        <Header />
        <div className="absolute mt-75 ml-140 text-white font-bold font-playfair text-5xl">
          Shop
        </div>
        <div className="absolute mt-88 ml-150 text-white ">
          Home <span>&rsaquo;</span> Shop
        </div>
        <div className="flex flex-col h-[1570px] w-full bg-gray-200 items-center  ">
          <div className="flex flex-row mt-20 h-50 w-[1300px] items-center ">
            <button className="h-15 w-15 border-gray-300 rounded-xl bg-[#b68b3a] text-black ml-3 hover:text-white hover:bg-[#b68b3a]"></button>
            <button className="h-15 w-15 border-gray-300 rounded-xl bg-gray-100 text-black ml-3 hover:text-white hover:bg-[#b68b3a]"></button>
            <div className="text-gray-500 ml-[770px]">
              Showing 1-8 of 20 results
            </div>
            <select className="text-black ml-7 p-3">
              <option>Sort by Latest</option>
              <option>Sort by Recent</option>
              <option>Sort by Popular</option>
              <option>Sort by Relevant</option>
            </select>
          </div>
          <div className="flex flex-row w-[1300px] h-[500px] items-center">
            <div className="flex flex-col w-[320px] h-[470px] bg-white rounded-2xl m-2 items-center">
                <img
                className="h-1/2 w-[250px] mt-10"
                src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fshop%2F1.png&w=1080&q=75"
              ></img>
              <div className="text-gray-700">CHEESE,PIZZA</div>
              <div className="font-fairplay font-bold text-2xl text-black mt-1">
               Margherita Pizza
              </div>
              <div className="text-[#b68b3a] text-2xl font-bold mt-2">
                $12.00
              </div>
              <button className="border-[1px] p-3 items-center justify-center text-black h-10 w-50 rounded-full mt-5 mb-5 flex flex-row hover:bg-[#b68b3a] hover:text-white ">
                <img
                  className="h-7 w-7 rounded-full mr-2"
                  src="data:image/png;base64,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"
                ></img>
                ADD TO CART
              </button>
            </div>
            <div className="flex flex-col w-[320px] h-[470px] bg-white rounded-2xl m-2 items-center">
                <img
                className="h-1/2 w-[250px] mt-10"
                src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fshop%2F2.png&w=1080&q=75"
              ></img>
              <div className="text-gray-700">CREAMY,BURGER</div>
              <div className="font-fairplay font-bold text-2xl text-black mt-1">
               Chiken Burger
              </div>
              <div className="text-[#b68b3a] text-2xl font-bold mt-2">
                $8.00
              </div>
              <button className="border-[1px] p-3 items-center justify-center text-black h-10 w-50 rounded-full mt-5 mb-5 flex flex-row hover:bg-[#b68b3a] hover:text-white ">
                <img
                  className="h-7 w-7 rounded-full mr-2"
                  src="data:image/png;base64,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"
                ></img>
                ADD TO CART
              </button>
            </div>
            <div className="flex flex-col w-[320px] h-[470px] bg-white rounded-2xl m-2 items-center">
                 <img
                className="h-1/2 w-[250px] mt-10"
                src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fshop%2F3.png&w=1080&q=75"
              ></img>
              <div className="text-gray-700">BEEF,STEAK</div>
              <div className="font-fairplay font-bold text-2xl text-black mt-1">
               Grilled Flank Steak
              </div>
              <div className="text-[#b68b3a] text-2xl font-bold mt-2">
                $14.00
              </div>
              <button className="border-[1px] p-3 items-center justify-center text-black h-10 w-50 rounded-full mt-5 mb-5 flex flex-row hover:bg-[#b68b3a] hover:text-white ">
                <img
                  className="h-7 w-7 rounded-full mr-2"
                  src="data:image/png;base64,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"
                ></img>
                ADD TO CART
              </button>
            </div>
            <div className="flex flex-col w-[320px] h-[470px] bg-white rounded-2xl m-2 items-center">
                <img
                className="h-1/2 w-[250px] mt-10"
                src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fshop%2F5.png&w=1080&q=75"
              ></img>
              <div className="text-gray-700">BBQ,MEAT</div>
              <div className="font-fairplay font-bold text-2xl text-black mt-1">
               Barbecue Chicken
              </div>
              <div className="text-[#b68b3a] text-2xl font-bold mt-2">
                $8.00
              </div>
              <button className="border-[1px] p-3 items-center justify-center text-black h-10 w-50 rounded-full mt-5 mb-5 flex flex-row hover:bg-[#b68b3a] hover:text-white ">
                <img
                  className="h-7 w-7 rounded-full mr-2"
                  src="data:image/png;base64,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"
                ></img>
                ADD TO CART
              </button>
            </div>
          </div>
          <div className="flex flex-row w-[1300px] h-[500px] items-center">
            <div className="flex flex-col w-[320px] h-[470px] bg-white rounded-2xl m-2 items-center">
              <img
                className="h-1/2 w-[250px] mt-10"
                src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fshop%2F8.png&w=1080&q=75"
              ></img>
              <div className="text-gray-700">FOOD,ROLL</div>
              <div className="font-fairplay font-bold text-2xl text-black mt-1">
                Vegetable Roll
              </div>
              <div className="text-[#b68b3a] text-2xl font-bold mt-2">
                $25.00
              </div>
              <button className="border-[1px] p-3 items-center justify-center text-black h-10 w-50 rounded-full mt-5 mb-5 flex flex-row hover:bg-[#b68b3a] hover:text-white ">
                <img
                  className="h-7 w-7 rounded-full mr-2"
                  src="data:image/png;base64,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"
                ></img>
                ADD TO CART
              </button>
            </div>
            <div className="flex flex-col w-[320px] h-[470px] bg-white rounded-2xl m-2 items-center">
                <img
                className="h-1/2 w-[250px] mt-10"
                src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fshop%2F6.png&w=1080&q=75"
              ></img>
              <div className="text-gray-700">PASTA,SPICY</div>
              <div className="font-fairplay font-bold text-2xl text-black mt-1">
                Creamy Pasta
              </div>
              <div className="text-[#b68b3a] text-2xl font-bold mt-2">
                $18.00
              </div>
              <button className="border-[1px] p-3 items-center justify-center text-black h-10 w-50 rounded-full mt-5 mb-5 flex flex-row hover:bg-[#b68b3a] hover:text-white ">
                <img
                  className="h-7 w-7 rounded-full mr-2"
                  src="data:image/png;base64,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"
                ></img>
                ADD TO CART
              </button>
            </div>
            <div className="flex flex-col w-[320px] h-[470px] bg-white rounded-2xl m-2 items-center">
                <img
                className="h-1/2 w-[250px] mt-10"
                src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fshop%2F7.png&w=1080&q=75"
              ></img>
              <div className="text-gray-700">MEAT,SHAWARMA</div>
              <div className="font-fairplay font-bold text-2xl text-black mt-1">
                Chicken Shawarma
              </div>
              <div className="text-[#b68b3a] text-2xl font-bold mt-2">
                $3.00
              </div>
              <button className="border-[1px] p-3 items-center justify-center text-black h-10 w-50 rounded-full mt-5 mb-5 flex flex-row hover:bg-[#b68b3a] hover:text-white ">
                <img
                  className="h-7 w-7 rounded-full mr-2"
                  src="data:image/png;base64,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"
                ></img>
                ADD TO CART
              </button>
            </div>
            <div className="flex flex-col w-[320px] h-[470px] bg-white rounded-2xl m-2 items-center">
                <img
                className="h-1/2 w-[250px] mt-10"
                src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fshop%2F4.png&w=1080&q=75"
              ></img>
              <div className="text-gray-700">SANDWICH,CHICKEN</div>
              <div className="font-fairplay font-bold text-2xl text-black mt-1">
                Submarine Sandwich
              </div>
              <div className="text-[#b68b3a] text-2xl font-bold mt-2">
                $6.00
              </div>
              <button className="border-[1px] p-3 items-center justify-center text-black h-10 w-50 rounded-full mt-5 mb-5 flex flex-row hover:bg-[#b68b3a] hover:text-white ">
                <img
                  className="h-7 w-7 rounded-full mr-2"
                  src="data:image/png;base64,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"
                ></img>
                ADD TO CART
              </button>
            </div>
          </div>
          <div className="flex flex-row h-[100px] w-[1000px] items-center justify-center mt-20">
            <button className="h-15 w-15 border-[1px] rounded-full bg-gray-100 font-bold text-black  hover:text-white hover:bg-[#b68b3a]">&lt;&lt;</button>
            <button className="h-15 w-15 border-[1px] rounded-full bg-gray-100 font-bold text-black ml-3 hover:text-white hover:bg-[#b68b3a]">1</button>
            <button className="h-15 w-15 border-[1px] rounded-full bg-gray-100 text-black font-bold ml-3 hover:text-white hover:bg-[#b68b3a]">2</button>
            <button className="h-15 w-15 border-[1px] rounded-full bg-gray-100 text-black ml-3 font-bold hover:text-white hover:bg-[#b68b3a]">3</button>
            <button className="h-15 w-15 border-[1px] rounded-full bg-gray-100 text-black ml-3 font-bold hover:text-white hover:bg-[#b68b3a]">&gt;&gt;</button>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
