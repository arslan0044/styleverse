import React, { useState } from "react";
// import Modals from "../components/Modals";
import Design from "../components/Design";
import Color from "../components/Color";
import { useSnapshot } from "valtio";
import state from "../store";
import Modals from "../components/Modals";
function Home() {
  const snap = useSnapshot(state)

  const [component, setComponent] = useState(<Design />);
  return (
    <div className="mx-0 my-0 py-0 px-0  flex flex-row w-full ">
      <div className=" w-[10%]  h-screen bg-green-500">
        <div className=" flex flex-col items-center justify-center">
          <button onClick={(e) => setComponent(<Design />)}>Design</button>
          <button onClick={(e) => setComponent(<Color />)}>Color</button>
          <button
            onClick={(e) => setComponent(<h1 className="text-5xl uppercase">patterns</h1>)}
          >
            Pattron
          </button>
          <button
            onClick={(e) => setComponent(<h1 className="text-5xl">Element</h1>)}
          >
            Element
          </button>
          <button
            onClick={(e) => setComponent(<h1 className="text-5xl">Text</h1>)}
          >
            Text
          </button>
          <button
            onClick={(e) => setComponent(<h1 className="text-5xl">Upload</h1>)}
          >
            Upload
          </button>
          <button
            onClick={(e) =>
              setComponent(<h1 className="text-5xl">Art Tools</h1>)
            }
          >
            Art Tools
          </button>
        </div>
      </div>
      <div className=" w-[40%]  ">{component}</div>
      <div className=" w-[50%]  h-screen ">
        {/* {snap.design} */}
        <Modals/>
      </div>
    </div>
  );
}

export default Home;
