export default function Blogpage() {
    return (
        <div className=" flex flex-col items-center h-[800px] w-full bg-white mt-20">
            <div className=" text-[#b68b3a] ">
              <div className="ml-23 mt-4 text-2xl">NEWS & BLOG</div>
              <div className="text-black mt-3 text-4xl">
                Our Latest News & Blog
              </div>
            </div>
            <div className="flex flex-row mt-13 h-[650px] w-full  bg-white items-center justify-center space-x-8">
              <div className="flex flex-col h-[650px] w-[600px] bg-white items-center">
                <img
                  className="w-full h-[420px]"
                  src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fblog%2F1.jpg&w=1920&q=75"
                ></img>
                <div className="flex flex-row w-[550px] h-[250px] bg-white mt-[-50px] shadow-2xl">
                  <div className="text-[#b68b3a] flex flex-col  mt-10 ml-10">
                    <div>BY MD SOHAG BURGER ,FOOD</div>
                    <div className="text-black text-3xl font-bold mt-3">
                      Picked up a Brussels burger Sprouts with ham
                    </div>
                    <div className="mt-3">READ MORE</div>
                  </div>
                  <div className="bg-[#b68b3a] flex flex-col w-18 h-18 mt-[-20px] ml-[450px] absolute">
                    <div className="font-bold ml-6 text-white mt-2">24</div>
                    <div className="ml-4 text-white">DEC</div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col h-[650px] w-[600px] bg-white items-center">
                <img
                  className="w-full h-[420px]"
                  src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fblog%2F2.jpg&w=1920&q=75"
                ></img>
                <div className="flex flex-row w-[550px] h-[250px] bg-white mt-[-50px] shadow-2xl">
                  <div className="text-[#b68b3a] flex flex-col  mt-10 ml-10">
                    <div>BY MD SOHAG BURGER ,FOOD</div>
                    <div className="text-black text-3xl font-bold mt-3">
                      This prefabricated passive house highly sustainable
                    </div>
                    <div className="mt-3">READ MORE</div>
                  </div>
                  <div className="bg-[#b68b3a] flex flex-col w-18 h-18 mt-[-20px] ml-[450px] absolute">
                    <div className="font-bold ml-6 text-white mt-2">18</div>
                    <div className="ml-4 text-white">NOV</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
    );
}