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
      <div className="flex flex-row absolute bg-gray-700 h-[600px] w-[1300px] justify-self-center mt-[-150px]">
        
      </div>
    </div>
  );
}
