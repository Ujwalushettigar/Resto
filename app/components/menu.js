export default function MenuPage() {
  return (
    <div>
      <div className="flex flex-col relative w-full h-[400px] bg-black items-center">
        <img
          className="w-full h-[450px] opacity-10"
          src="https://static.wixstatic.com/media/ba2cd3_9c03a9f721764cc08302dd8557ca0bc4~mv2.jpg/v1/fill/w_980,h_454,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/ba2cd3_9c03a9f721764cc08302dd8557ca0bc4~mv2.jpg"
        ></img>

        <div className="flex flex-row absolute rounded-full h-16 w-[650px] bg-white mt-30">
          <button className=" bg-[#b68b3a] font-bold text-white pl-6 pr-6 rounded-l-full">
            MAIN DISHES
          </button>
          <button className=" bg-gray-600 font-bold text-white  pl-11 pr-11">
            DESERTS
          </button>
          <button className=" font-bold bg-gray-600 text-white   pl-11 pr-11">
            SEA FOOD
          </button>
          <button className=" font-bold text-white bg-gray-600   pl-11 pr-9 rounded-r-full">
            BEVERAGE
          </button>
        </div>
      </div>
      <div className="w-full h-[500px] bg-white">
      <div className="flex flex-row absolute bg-gray-600 h-[600px] w-[1300px] justify-self-center mt-[-150px] ">
        <div>
          <img
            className="h-full w-40%"
            src="https://img.freepik.com/premium-photo/roasted-chicken-photo_1170530-5846.jpg"
          ></img>
        </div>
        <div className="flex flex-col p-8">
          <div className="flex flex-row mb-5">
            <div className="border-2 border-white text-white p-2 ml-[550px] mt-[40px]">
              Half
            </div>
            <div className="border-2 border-white text-white p-2 ml-2 mt-[40px]">
              Full
            </div>
          </div>
          <div className="flex flex-row ">
            <img
              className="h-15 w-15 rounded-full"
              src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ffood%2F1.jpg&w=640&q=75"
            ></img>
            <div className="flex flex-col">
              <div className="text-2xl font-bold ml-5 text-white font-serif">
                Chicken Alfredo   ===============   $20 $40
              </div>
              <div className="text-gray-400 ml-5">Ricotta / goat cheese / beetroot<span className="ml-[250px]">Free Drinks</span></div>
            </div>
          </div>
          <div className="flex flex-row mt-9">
            <img
              className="h-15 w-15 rounded-full"
              src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ffood%2F2.jpg&w=640&q=75"
            ></img>
            <div className="flex flex-col">
              <div className="text-2xl font-bold ml-5 text-white font-serif">
                Fish Chips   ===================  $36 $70
              </div>
              <div className="text-gray-400 ml-5">Atlantic / chips / salad / tartare<span className="ml-[260px]">Free Drinks</span></div>
            </div>
          </div>
          <div className="flex flex-row mt-9">
            <img
              className="h-15 w-15 rounded-full"
              src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ffood%2F3.jpg&w=640&q=75"
            ></img>
            <div className="flex flex-col">
              <div className="text-2xl font-bold ml-5 text-white font-serif">
                Ebony Fillet Steak  =============  $44 $85
              </div>
              <div className="text-gray-400 ml-5">Truffle mash / pepper sauce<span className="ml-[270px]">Free Drinks</span></div>
            </div>
          </div>
          <div className="flex flex-row mt-9">
            <img
              className="h-15 w-15 rounded-full"
              src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ffood%2F4.jpg&w=640&q=75"
            ></img>
            <div className="flex flex-col">
              <div className="text-2xl font-bold ml-5 text-white font-serif">
                Chicken Grill  =================  $20 $40
              </div>
              <div className="text-gray-400 ml-5">Ricotta / goat cheese / beetroot<span className="ml-[250px]">Free Drinks</span></div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}
