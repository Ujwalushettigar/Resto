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
import Chef from "./components/chef";
// import Register from './register';

export default function Home() {
  const router = useRouter();
  return (
    <div>
      <div className="flex flex-col h-[7700px] w-full bg-white dark:bg-gray-800">
        <Navbar />
        <Header />
        <About />
        <div className="flex flex-col h-[2000px] w-full bg-white dark:bg-gray-800">
          
        </div>
        <Chef />
        <Video />
        <Blogpage />
        <Footer />
      </div>
    </div>
  );
}
