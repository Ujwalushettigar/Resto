"use client"
import React from "react";
export default function Footer() {
  return (
    <div>
      <div className="pt-16 md:mt-100 mt-270 "></div>
      <div className="bg-gray-900 md:h-90 h-90 md:w-screen md:ml-0 md-2 w-100 md:flex md:flex-row flex flex-col md:justify-between  ml-3">
        <img
          src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fshape%2F9.png&w=640&q=75"
          className="h-90 w-98 pt-9 hidden md:block opacity-45"
        ></img>
        
        <img
          src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Flogo-light.png&w=750&q=75"
          className="h-24 md:mt-56 mt-5 w-38 md:ml-0 ml-28 mr-14"
        ></img>
      </div>

      <div className="justify-self-center md:h-120 h-280 md:w-6xl w-100  bg-black md:-mt-168 -mt-360 md:ml-0 ml-0">
        <div className="md:flex md:flex-row flex flex-col md:ml-0 ml-8 text-white justify-around  pt-10">
          <div>
            <div className="text-2xl font-semibold p-7 ">About Us</div>
            <div className="mt-3">Continued at zealously</div>
            <div className="mt-2.5">necessary is Surrounded</div>
            <div className="mt-2.5">sir motionless she end</div>
            <div className="mt-2.5">literature. Gay direction</div>
            <div className="mt-2.5">neglected.</div>
            <div className="flex flex-row gap-3 mt-4">
              <div className="bg-gray-400 w-8 h-8">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbQa_YZBOm5gy0DZnVez-5J3G3AFwdZ46Vcw&s"
                  className="w-7 h-7 justify-self-center mt-0.5"
                ></img>
              </div>
              <div className="bg-gray-400 w-8 h-8">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSCdHOcw26caVnIs7MlcSrzD3sjUkxmMpkGQ&s"
                  className="w-7 h-7 justify-self-center mt-0.5"
                ></img>
              </div>
              <div className="bg-gray-400 w-8 h-8">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOH6x3Yu4XLYtu4vuESZeD3bm4W5F6cpuOgA&s"
                  className="w-7 h-7 justify-self-center mt-0.5"
                ></img>
              </div>
            </div>
          </div>
          <div>
            <div className="text-2xl flex flex-col font-semibold pt-7 ">
              Explore
            </div>
            <div className="mt-8"> Company Profile</div>
            <div className="mt-2.5">About</div>
            <div className="mt-2.5">Help Center</div>
            <div className="mt-2.5">Career</div>
            <div className="mt-2.5">Features</div>
            <div className="mt-2.5">Contact</div>
          </div>
          <div className="flex flex-col">
            <div className="text-2xl font-semibold pt-7 ">Contact Info</div>
            <div className="mt-6">175 10h Street, Office</div>
            <div> 375 Berlin, De 21562</div>
            <div className="mt-5">+123 34598768 </div>
            <div className=""></div>
            <div>+554 34598734</div>
            <div className="mt-5">food@restan.com</div>
          </div>
          <div>
            <div className="text-2xl font-semibold pt-7 ">Newsletter</div>
            <div className="mt-8">Join our subscribers list to get</div>
            <div className="mt-2.5">the latest news and special</div>
            <div className="mt-2.5">offers</div>
            <div className="flex flex-col">
              <input
                className="h-8 md:mt-10 mt-2 w-50 "
                placeholder="Your Email"
                required
                type="email"
                name="email"
              ></input>
              <div className="flex flex-row gap-1.5">
                <input type="checkbox"></input>
              <div>I agree to the Privacy Policy</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}