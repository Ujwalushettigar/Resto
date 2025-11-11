import React from "react";
import Header from "./components/header";
import Footer from "./components/footer";
export default function Login() {
  return (
    <div>
      <div className="flex flex-col h-[2000px] w-full bg-white">
      <Header />
        <div>
          <div className="flex flex-row w-[1200px] h-[600px] bg-white  shadow-2xl rounded-2xl mt-20  ml-[150px]">
            <div className="h-full w-1/2 rounded-l-2xl">
              <img
                className="rounded-l-2xl"
                src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fthumb%2F14.jpg&w=3840&q=75"
              />
            </div>
            <div className="items-center justify-center flex flex-col w-1/2 p-10">
              <div className="text-3xl font-extrabold text-[#b68b3a] font-[Poppins]">
                WELCOME BACK
              </div>
              <div className="text-gray-600">
                Enter your email and password to continue
              </div>
              <input
                className="border-2 w-[300px] h-12 mt-10 rounded-lg p-3 bg-gray-300 text-black"
                type="text"
                placeholder="Email"
              />
              <input
                className="border-2 w-[300px] h-12 mt-5 rounded-lg p-3 bg-gray-300 text-black"
                type="password"
                placeholder="Password"
              />
              <button className="border-2 bg-[#b68b3a] w-[300px] h-12 mt-5 rounded-lg text-white hover:bg-black font-bold hover:text-white ">
                LOGIN
              </button>
              <div className="text-black text-2xl font-bold mt-3">
                Or Login With
              </div>
              <div className="flex flex-row">
                <button className="border-1  w-[140px] h-12 mt-3 rounded-lg text-black hover:bg-black font-bold hover:text-white flex flex-row ">
                  <img
                    className="h-[23px] w-[23px] ml-4 mt-2.5 rounded-full mr-2"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOAAAADhCAMAAADmr0l2AAAAeFBMVEUYd/L///8ifPMbefIAbfEAcvLN3vyDrveVufjR4fz8/f+QtvgAcPEAbPERdfIAavHH2vtSkvTh7P23z/q90/re6v3W5PxFjPTw9v7o8f6ZvPhdmPV4qPZnnfWiwfmnxfk3hfNxo/aKsvc0hPNCivSvyvnC1vsAY/G1olI7AAAEL0lEQVR4nO3da3OqMBSFYVFQqxC8a71fquf//8OjvdpqDbL2jklnvV860xkHnwElhNBWqn+8yt/OPPoNqFd79BvQjsDQIzD0CAw9AkOPwNAjMPQIDD0CQ4/A0CMw9AgMPQJDj8DQIzD0CAw9AkOPwNAjMPQIDD0CQ4/A0CMw9AgMPQJDj8DQI9BFJknSY/Gx088kMXKL5R8LNObISqvdzXa67w8Onc5h0F81G4uX2vHXiYjygUCTZkm3PRi2oitNRvvG+KiEkY8CmjQfT0fXaGe16u11DhofAjRJNt5PLLr3npe7LAG29QCgSZNtr5juradFVn4vOgea1Cyvfupu7saX0kLXwCSd3qs7VQsFmG8KfvS+V49Lb9EpMKl0yvCiaFP+a8YlMJ7d/eF7qwWcKtwBTV7q03eqX/4IdQc02aCsL+oC53pXQBPXS/smwA50BTTxU2lftEyBLTsC5iW/Pl9bI6NRN8BsD/h6ObJpJ8B0DviiNnKEOgGaNeKLsEf9XQDju64dfgYM0045AJYbXn82R64GXQDNDvK1wKkZfWBe/gx/aoAdofpA04V80QycdlIHZraZpdtNMnD72sA7duCkvmrPF4vFZrs8fH7vrqCTYEUfGB+K6Ybt3WlaO3ktjeNktnxFjtGJUW1gtRCvPv45/WlMmq9XrWf0CNUGps0ix+Ysv7qfTGqQK8G3lIF5gUFMJ/71VC5wE0YXWGQUur+++6TSBRY4QvvQxZA9XWBsPQkOdfefMtAY6w7caf9dMF2g9Sw/Rc/j1lSB1o8gMqNbMFWgdRgDzZcVSxWYPVuAVf2/zKcJNKnFN4IHYvZUgbZr+ab+EaoLXFiA+EjTniYwaViAgut9fk0TaJtO64HTLYVSBVom7DvBA/u3gXsH3zGqQNt5Xn+cVlEGWu6ZYXdVCqYKtEz5NrBJ+WIRCEQggQIRCEQggQJJAU16me3e7jy78qKzRPxCQNOdNi9qW25MDNqXrzlvKyEUAha6i3RvfYmxqhSwrQAsvxL9LI+B2Bq1jzwGbkWupjwGyrw1f4FCMzb+AhcywwBvgdBC7bO8BcIrgN7zFggt1D7LV+BQam2Cr0CxKw1fgWL/tMxT4EHstoWnQHQZ7Fd+AuFlsF/5CRRcfeEnUHD9k5dAydUXXgLBZ0G+5SOwJbk4wUcg+izIt4SAyXz0dFHd9sx87/I1x0aiy2ekJn6T+LJ/tod65vmVV8Wx6OqZR07dO5m7JxCIQAIFIhCIQAIFIhCIQAIFIhCIQAIFIhCIQAIFIhCIQAIFIhCIQAIFIhCIQAIFIhCIQAIFIhCIQAIFIhCIQAIFIhCIQAIFIhCIQAIFIhCIQAIFIhCIQAIFIhCIQAIFIhCIQAIFIhCIQAIFIhCIQAIFIhCIQAIFIhCIQAIFIhDIE2BNrbQetW4VNRQ3/lH1P1bKTACx20YqAAAAAElFTkSuQmCC"
                  />
                  <div className="mt-2">Facebook</div>
                </button>
                <button className="border-1 ml-5 w-[140px] h-12 mt-3 rounded-lg text-black hover:bg-black font-bold hover:text-white flex flex-row">
                  <img
                    className="h-[23px] w-[23px] ml-4 mt-2.5 rounded-full mr-2"
                    src="data:image/png;base64,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"
                  />
                  <div className="mt-2">Google</div>
                </button>
              </div>
              <div className="text-gray-600 mt-3">
                Don't Have An Account?{" "}
                <span className="text-red-500 underline font-bold">
                  Register Now
                </span>
              </div>
            </div>
          </div>
        </div>
       <Footer /> 
      </div>
    </div>
  );
}
