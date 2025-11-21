
import React from "react"
export default function Chef(){
    return(
        <div>
             <div className="bg-gray-200 w-screen ">
        <div className="text-[#b68b3a] text-2xl font-bold font-serif justify-self-center pt-16">
          MASTER CHEFS
        </div>
        <div className="font-semibold text-black md:text-5xl text-4xl mt-8 justify-self-center">
          Meet Our Special Chefs
        </div>
        <div className="md:flex md:flex-row flex flex-col md:ml-0 ml-15 gap-15 justify-center mt-14">
          <div className="flex flex-col">
            <div className="border-3 border-gray-500 h-80 w-80  justify-items-center pt-4.5 rounded-full">
              <img
                src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fteam%2F1.jpg&w=1920&q=75"
                className="h-70 w-70 rounded-full"
              ></img>
            </div>
            <div className="bg-[#b68b3a] h-20 w-xs rounded-3xl mt-[-100px] text-white">
              <div className="text-2xl font-semibold justify-self-center mt-3">
                Alexander Petllo
              </div>
              <div className="font-medium  justify-self-center">
                ASSITANT CHEF
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="border-3 border-gray-500 h-80 w-80  justify-items-center pt-4.5 rounded-full">
              <img
                src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fteam%2F2.jpg&w=1920&q=75"
                className="h-70 w-70 rounded-full"
              ></img>
            </div>
            <div className="bg-[#b68b3a] h-20 w-xs rounded-3xl mt-[-100px] text-white">
              <div className="text-2xl font-semibold justify-self-center mt-3">
                Mendia Juxef
              </div>
              <div className="font-medium justify-self-center">
               BURGER KING
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="border-3 border-gray-500 h-80 w-80  justify-items-center pt-4.5 rounded-full">
              <img
                src="	https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fteam%2F3.jpg&w=1920&q=75"
                className="h-70 w-70 rounded-full"
              ></img>
            </div>
            <div className="bg-[#b68b3a] h-20 w-xs rounded-3xl mt-[-100px] text-white">
              <div className="text-2xl font-semibold justify-self-center mt-3">
                Petro William
              </div>
              <div className="font-medium  justify-self-center">
                MAIN CHEF
              </div>
            </div>
          </div>
        </div>
        <div className="h-12 w-2xl bg-gray-200 mt-24"></div>
      </div>
        </div>
    )
}
