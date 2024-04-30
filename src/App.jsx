import React from "react";
import Home from "./pages/Home";
import Canvas from "./components/Canvas";
function App() {
  const img =[
    '/icons/cart.png',
    '/icons/menu.png',
    '/icons/profile.png',
  ]
  return (
    <>
      <div>
        <div className=" w-full flex justify-end ">
          {img.map((e)=>(
             <div className="w-16">
             <img src={e} alt={e} />
           </div>
          ))}
     
        </div>
      </div>
      <Home />
      {/* <div className=" w-[100vh] h-[100vh] mx-auto flex justify-center items-center">
        <Canvas width={700} height={500} />
      </div> */}
    </>
  );
}

export default App;
