import React, { useState } from "react";
// import Modals from "../components/Modals";
import Design from "../components/Design";
import Color from "../components/Color";
import { useSnapshot } from "valtio";
import state from "../store";
import Modals from "../components/Modals";
import Patterns from "../components/Patterns";
import Elements from "../components/Elements";
import ObjectsParts from "../components/ObjectsParts";
function Home() {
  const snap = useSnapshot(state)
  const data = [
    "/assets/car.png",

  ]
  const [component, setComponent] = useState(<Patterns />);
  return (
    <div className="mx-0 my-0 py-0 px-0  flex flex-row w-full ">
      <div className="w-[10%] bg-[#E76F71] h-[50vh] my-auto"></div>
      <div className=" w-[30%] h-[80vh] my-auto items-center bg-gradient-to-t to-[#535AC6] from-[#E76F71] rounded-2xl p-2">{component}</div>
      <div className=" w-[5%]  h-[50vh] items-center my-auto">
        <div className=" flex flex-col items-center justify-center gap-2">
          {/* <button onClick={(e) => setComponent(<Design />)}>Design</button> */}
          <button onClick={(e) => setComponent(<Patterns />)} className=" bg-red-600"> <img src="/assets/paint-brush.png" alt="" /></button>
          <button onClick={(e) => setComponent(<Color />)} className=" bg-pink-600 p-2"><img src="/assets/Color-picker.png" alt="" /></button>
          <button onClick={(e) => setComponent(<Elements />)} className=" bg-blue-600 p-2"><img src="/assets/Shapes-Icons.png" alt="" /></button>
          <button onClick={(e) => setComponent(<h1 className="text-8xl text-white">Text</h1>)} className=" bg-green-300 w-full h-16 flex items-center justify-center" > <h1 className=" text-white text-5xl font-extrabold">T</h1></button>
          <button className=" bg-green-500 w-full h-16 flex items-center justify-center" onClick={(e) => setComponent(<h1 className="text-8xl text-white">Upload</h1>)}>
            <svg fill="#fff" height="40px" width="40px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 374.116 374.116" xmlSpace="preserve">
              <g>
                <path d="M344.058,207.506c-16.568,0-30,13.432-30,30v76.609h-254v-76.609c0-16.568-13.432-30-30-30c-16.568,0-30,13.432-30,30
		v106.609c0,16.568,13.432,30,30,30h314c16.568,0,30-13.432,30-30V237.506C374.058,220.938,360.626,207.506,344.058,207.506z" />
                <path d="M123.57,135.915l33.488-33.488v111.775c0,16.568,13.432,30,30,30c16.568,0,30-13.432,30-30V102.426l33.488,33.488
		c5.857,5.858,13.535,8.787,21.213,8.787c7.678,0,15.355-2.929,21.213-8.787c11.716-11.716,11.716-30.71,0-42.426L208.271,8.788
		c-11.715-11.717-30.711-11.717-42.426,0L81.144,93.489c-11.716,11.716-11.716,30.71,0,42.426
		C92.859,147.631,111.855,147.631,123.57,135.915z" />
              </g>
            </svg>

          </button>
          <button onClick={(e) => setComponent(<h1 className="text-8xl text-white">Art Tools</h1>)} className=" bg-yellow-300"><img src="/assets/art-painting.png" alt="" /></button>
        </div>
      </div>
      <div className=" w-[25%]  h-screen  ">
        {/* {`snap.design`} */}
        <ObjectsParts />
      </div>
      <div className=" w-[30%]  h-screen flex flex-col items-center justify-center ">
        {/* {snap.design} */}
        <Modals />
        <div className=" text-xl text-white flex justify-evenly w-full"> 
        <div>Backword</div>
        <div>Download</div>
        <div>Forword</div>
        </div>
        <div className=" text-lg text-white flex justify-center gap-5"> 
        <div className=" uppercase bg-[#2A2D5A] py-2 px-5 border border-[#E76F71] rounded-xl">Clear</div>
        <div className=" uppercase bg-[#E76F71]  py-2 px-5 border rounded-xl">Add to cart</div>
        </div>
      </div>
      <div className="w-[5%] h-[50vh] my-auto">
        <div className='grid grid-cols-1  gap-3'>
          {data.map((e) => (

            <div className='rounded-full border-yellow-300 border-2   w-16 h-16 object-contain flex  items-center justify-center'                >
              <img src={e} alt="" />
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}

export default Home;
