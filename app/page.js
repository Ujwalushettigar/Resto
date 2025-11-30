"use client";

import { useRouter } from "next/navigation";
import React from "react";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Header from "./components/head";
import Blogpage from "./components/blog";
import Video from "./components/video";
import About from "./components/about";
import Chef from "./components/chef";
import MenuPage from "./components/menu";
import Gallery from "./components/gallery";


export default function Home() {
  const router = useRouter();
  return (
    <div>
      <div className="md:flex md:flex-col h-[6700px] w-full bg-white dark:bg-gray-800">
        <Navbar />
        <Header />
        <About />
        <MenuPage />
        <Gallery />
        <Chef />
        <Video />
        <Blogpage />
        <Footer />
      </div>
    </div>
  );
}
