export default function Video() {
    return(
        <div>
            <div className="bg-white h-[700px] w-full flex flex-row">
                {/* <img className="h-[400px] w-[600px] ml-[900px] mt-[200px]" src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fshape%2F4.png&w=3840&q=75"></img> */}
                <div className="flex flex-col">
                    <div className="text-[120px] ml-15 mt-10 text-gray-200 font-serif">RESTAN</div>
                    <div className="ml-15 mt-[-42px]"><iframe width="760" height="506" src="https://www.youtube.com/embed/F3zw1Gvn4Mk" title="Mr Fox Restaurant Promo Video"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>              
                </div>
                <div className="flex flex-col w-[700px] bg-white h-[500px] mt-20 ml-[-130px] shadow-2xl">
                    <div className="text-black text-3xl font-bold ml-20 mt-20">Opening Hours</div>
                    <div className="text-gray-500 ml-20 mr-20 mt-2">A relaxing and pleasant atmosphere, good jazz, dinner, and cocktails. The Patio Time Bar opens in the center..</div>
                    <div className="mt-7 ml-20 text-black text-xl font-bold">Sunday To Tuesday:<span className="ml-53">10:00 - 09:00</span></div>
                    <div className="mt-4 ml-20 text-black text-xl font-bold">Wednesday To Thursday:<span className="ml-41">11:30 - 10:30</span></div>
                    <div className="mt-4 ml-20 text-black text-xl font-bold">Friday & Saturday:<span className="ml-57">10:30 - 12:00</span></div>
                    <div className="mt-10 flex flex-row">
                        <div className=" ml-20 bg-[#b68b3a] rounded-full">
                            <img className="h-18 w-18 p-3 " src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ficon%2F6.png&w=128&q=75"></img>
                            </div>
                            <div className="flex flex-col">
                                <div className="text-gray-500  mt-2 ml-5">Call Anytime</div>
                                <div className="text-black font-bold text-xl ml-5">+964733-378901</div>
                            </div>
                        
                    </div>
                </div>
    
                <div></div>
            </div>
        </div>
    );
} 