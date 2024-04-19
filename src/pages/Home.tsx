import React, { useState } from "react";
// import Modals from "../components/Modals";
import Design from "../components/Design";
import Color from "../components/Color";
import { useSnapshot } from "valtio";
import state from "../store";
import Modals from "../components/Modals";
import Patterns from "../components/Patterns";
import Elements from "../components/Elements";
function Home() {
  const snap = useSnapshot(state)

  const [component, setComponent] = useState(<Patterns />);
  return (
    <div className="mx-0 my-0 py-0 px-0  flex flex-row w-full ">
      <div className=" w-[30%] h-[80vh] my-auto items-center ">{component}</div>
      <div className=" w-[5%]  h-[50vh] items-center my-auto">
        <div className=" flex flex-col items-center justify-center gap-3">
          {/* <button onClick={(e) => setComponent(<Design />)}>Design</button> */}
          <button onClick={(e) => setComponent(<Patterns />)} className=" bg-red-600"> <img src="/assets/paint-brush.png" alt="" /></button>
          <button onClick={(e) => setComponent(<Elements />)}>Element</button>
          <button onClick={(e) => setComponent(<Color />)}>Color</button>
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
      <div className=" w-[50%]  h-screen ">
        {/* {snap.design} */}
        <Modals />
      </div>
    </div>
  );
}

export default Home;
