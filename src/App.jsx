import React from "react";
import Home from "./pages/Home";
import Canvas from "./components/Canvas";
function App() {
  return (
    <>
      <Home />
      <div className=" w-[100vh] h-[100vh] mx-auto flex justify-center items-center">
        <Canvas width={700} height={500} />
      </div>
    </>
  );
}

export default App;
