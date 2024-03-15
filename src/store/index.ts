import Modals from "../components/Modals";
import { proxy } from "valtio";
// import Design from '../components/Design';
// const design = <Modals/>
const state = proxy({
  color: "#EFBD48",
  current: null,
  item: {
    Rib_2X2_468gsm_FRONT_1962: "#808080",
    Knit_Cotton_Jersey_FRONT_1950: "#FF0080",
    middal: "#EFBD48",
  },
  // design: <Modals/>,
  //   intro: true,
  //   isLogoTexture: true,
  //   isFullTexture: false,
  //   logoDecal: './threejs.png',
  //   fullDecal: './threejs.png',
});

export default state;
