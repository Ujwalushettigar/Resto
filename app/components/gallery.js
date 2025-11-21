export default function Gallery() {
  return (
    <div>
      <div className="bg-white w-full h-[700px]  items-center  ">
        <div className="text-[#b68b3a] text-2xl font-bold font-serif justify-self-center pt-16">
          FOOD ITEM
        </div>
        <div className="font-serif text-black text-5xl mt-5 font-bold justify-self-center">Our Food Gallery</div>
        <div className="flex flex-row justify-center h-[500px] bg-white w-full mt-7">
            <img className="h-full w-[500px] p-2" src="	https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fportfolio%2F2.jpg&w=1920&q=75"></img>
            <img className="h-full w-[500px] p-2" src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fportfolio%2F4.jpg&w=1920&q=75"></img>
            <img className="h-full w-[500px] p-2" src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fportfolio%2F3.jpg&w=1920&q=75"></img>
        </div>
      </div>
    </div>
  );
}
