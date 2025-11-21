"use client";
// import Login from './login';
import { useRouter } from "next/navigation";
import React from "react";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Header from "./components/header";
import Blogpage from "./components/blog";
import Video from "./components/video";
import About from "./components/about";
// import Register from './register';

export default function Home() {
  const router = useRouter();
  return (
    <div>
      <div className="flex flex-col h-[7700px] w-full bg-white dark:bg-gray-800">
        <Navbar />
        <Header />
        <div className="flex flex-col h-[3900px] w-full bg-white dark:bg-gray-800">
          
        </div>
        <About />
        <Video />
        <Blogpage />
        <Footer />
      </div>
    </div>
  );
}
