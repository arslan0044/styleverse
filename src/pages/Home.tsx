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
  const icons = [
    '/icons/hoodie_icon.png',
    '/icons/zip_up_hoodie_icon.png',
    '/icons/headband_icon.png',
  ]
  const [component, setComponent] = useState(<Patterns />);
  return (
    <div className="mx-0 my-0 py-0 px-0  flex flex-row w-full ">
      <div className="w-[7%] h-[60vh] my-auto relative overflow-hidden flex flex-col">
         <div className="w-32 h-[80%]  bg-[#E76F71] absolute border rounded-3xl flex justify-start flex-col gap-2 items-center">
         {icons.map((e)=>(
          <>
          <div className="w-16 bg-[#6C1D3E] shadow-lg shadow-[#6C1D3E] border rounded-2xl h-16 items-center justify-center flex">
            <img src={e} alt={e} />
          </div>
          </>
         ))}
        </div>
        <div className="h-[92%] w-full flex justify-end absolute items-end  "><img className="w-fit h-fit" src="/icons/book.png" alt="" /></div>
        </div>
      <div className=" w-[30%] h-[80vh] my-auto items-center bg-gradient-to-t to-[#535AC6] from-[#E76F71] rounded-2xl p-2">{component}</div>
      <div className=" w-[5%]  h-[50vh] items-center my-auto">
        <div className=" flex flex-col items-center justify-center gap-2">
          {/* <button onClick={(e) => setComponent(<Design />)}>Design</button> */}
          <button onClick={(e) => setComponent(<Patterns />)} className=" bg-red-600"> <img src="/assets/paint-brush.png" alt="" /></button>
          <button onClick={(e) => setComponent(<Color />)} className=" bg-pink-600 p-2"><img src="/icons/patterns_icon.png" alt="" /></button>
          <button onClick={(e) => setComponent(<Elements />)} className=" bg-blue-600 p-2"><img src="/assets/Shapes-Icons.png" alt="" /></button>
          <button onClick={(e) => setComponent(<h1 className="text-8xl text-white">Text</h1>)} className=" bg-green-300 w-full h-16 flex items-center justify-center" > <img src="/icons/text_icon.png" alt="" /></button>
          <button className=" bg-green-500 w-full h-16 flex items-center justify-center" onClick={(e) => setComponent(<h1 className="text-8xl text-white">Upload</h1>)}>
           <img src="/icons/photo_upload_icon.png" alt="" />
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
        <div className=" text-xl text-white flex justify-around w-full">
          <div className="w-24"><img src="/icons/undo.png" alt="" /></div>
          <div className="w-24"><img src="/icons/save.png" alt="" /></div>
          <div className="w-24"><img src="/icons/redo.png" alt="" /></div>
        </div>
        <div className=" text-lg text-white flex justify-center gap-5">
          <div className=" uppercase bg-[#2A2D5A] py-2 px-5 border border-[#E76F71] rounded-xl">Clear</div>
          <div className=" uppercase bg-[#E76F71]  py-2 px-5 border rounded-xl">Add to cart</div>
        </div>
      </div>
      <div className="w-[5%] h-[50vh] my-auto">
        <div className='flex flex-col justify-end items-end h-full gap-2'>
          {data.map((e) => (

            <div className='rounded-full border-yellow-300 border-2   w-16 h-16 object-contain flex  items-center justify-center'                >
              <img src={e} alt="" />
            </div>
          ))}
          <div className='rounded-full border-yellow-300 border-2   w-16 h-16 object-contain flex  items-center justify-center'                >
            <img src={'/icons/save.png'} alt="" />
          </div>

        </div>
      </div>
    </div>
  );
}

export default Home;
