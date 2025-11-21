"use client";
import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
export default function Blog() {
  return (
    <div>
      <div className="flex flex-col h-[4120px] w-full bg-white">
        <Navbar />
        <Header />
        <div className="absolute mt-60 ml-140 text-white font-bold font-playfair text-5xl">
          Blog Standard
        </div>
        <div className="absolute mt-75 ml-160 text-white ">
          Home <span>&rsaquo;</span> Blog Standard
        </div>
        <div className="flex flex-col h-[2750px] w-full bg-white items-center  ">
          <div className="flex flex-col h-[800px] w-[1000px] bg-white shadow-2xl  rounded-2xl mt-20">
            <div className="h-1/2 w-full rounded-l-2xl">
              <img
                className="rounded-t-2xl"
                src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fblog%2F1-full.jpg&w=3840&q=75"
              />
            </div>
            <div className="mt-35 ml-10 mr-10">
              <div className="flex flex-row">
                <div className="text-[#b68b3a]">
                  &#128197;<span>12 August, 2024</span>
                </div>
                <div className="ml-10 text-[#b68b3a]">
                  &#128100;<span>John Baus</span>
                </div>
              </div>
              <div className="text-black font-bold text-4xl font-fairplay mt-4">
                Picked up a Brussels burger Sprouts.
              </div>
              <div className="mt-4 text-gray-500">
                Bndulgence diminution so discovered mr apartments. Are off under
                folly death wrote cause her way spite. Plan upon yet way get
                cold spot its week. Almost do am or limits hearts. Resolve
                parties but why she shewing. She sang know now
              </div>
              <button className="border-2 bg-[#b68b3a] w-48 h-12 mt-5 rounded-full text-white hover:bg-black font-bold hover:text-white ">
                Read More
              </button>
            </div>
          </div>
          <div className="flex flex-col h-[800px] w-[1000px] bg-white shadow-2xl  rounded-2xl mt-20">
            <div className="h-1/2 w-full rounded-l-2xl">
              <img
                className="rounded-t-2xl"
                src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fblog%2F2-full.jpg&w=3840&q=75"
              />
            </div>
            <div className="mt-35 ml-10 mr-10">
              <div className="flex flex-row">
                <div className="text-[#b68b3a]">
                  &#128197;<span>13 August, 2024</span>
                </div>
                <div className="ml-10 text-[#b68b3a]">
                  &#128100;<span>Admin</span>
                </div>
              </div>
              <div className="text-black font-bold text-4xl font-fairplay mt-4">
                This prefabricated passive house highly
              </div>
              <div className="mt-4 text-gray-500">
                Bndulgence diminution so discovered mr apartments. Are off under
                folly death wrote cause her way spite. Plan upon yet way get
                cold spot its week. Almost do am or limits hearts. Resolve
                parties but why she shewing. She sang know now
              </div>
              <button className="border-2 bg-[#b68b3a] w-48 h-12 mt-5 rounded-full text-white hover:bg-black font-bold hover:text-white ">
                Read More
              </button>
            </div>
          </div>
          <div className="flex flex-col h-[800px] w-[1000px] bg-white shadow-2xl  rounded-2xl mt-20">
            <div className="h-1/2 w-full rounded-l-2xl">
              <img
                className="rounded-t-2xl"
                src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fblog%2F3-full.jpg&w=3840&q=75"
              />
            </div>
            <div className="mt-35 ml-10 mr-10">
              <div className="flex flex-row">
                <div className="text-[#b68b3a]">
                  &#128197;<span>14 August, 2024</span>
                </div>
                <div className="ml-10 text-[#b68b3a]">
                  &#128100;<span>John Baus</span>
                </div>
              </div>
              <div className="text-black font-bold text-4xl font-fairplay mt-4">
                Overcame breeding point concerns has.
              </div>
              <div className="mt-4 text-gray-500">
                Bndulgence diminution so discovered mr apartments. Are off under
                folly death wrote cause her way spite. Plan upon yet way get
                cold spot its week. Almost do am or limits hearts. Resolve
                parties but why she shewing. She sang know now
              </div>
              <button className="border-2 bg-[#b68b3a] w-48 h-12 mt-5 rounded-full text-white hover:bg-black font-bold hover:text-white ">
                Read More
              </button>
            </div>
          </div>
          <div className="flex flex-row h-[100px] w-[1000px] items-center justify-center mt-20">
            <button className="h-15 w-15 border=[1px] font-bold rounded-xl bg-gray-100 text-black">&lt;&lt;</button>
            <button className="h-15 w-15 border=[1px] font-bold rounded-xl bg-gray-100 text-black ml-3 hover:text-white hover:bg-[#b68b3a]">1</button>
            <button className="h-15 w-15 border=[1px] font-bold rounded-xl bg-gray-100 text-black ml-3 hover:text-white hover:bg-[#b68b3a]">2</button>
            <button className="h-15 w-15 border=[1px] font-bold rounded-xl bg-gray-100 text-black ml-3 hover:text-white hover:bg-[#b68b3a]">3</button>
            <button className="h-15 w-15 border=[1px] font-bold rounded-xl bg-gray-100 text-black ml-3 ">&gt;&gt;</button>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
