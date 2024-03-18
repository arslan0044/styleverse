// import Modals from "../components/Modals";
import { proxy } from "valtio";

const state = proxy({
  color: "#EFBD48",
  current: null,
  item: {
    Rib_2X2_468gsm_FRONT_1962: "#808080",
    Knit_Cotton_Jersey_FRONT_1950: "#FF0080",
    front_main: "#FFF",
    sleves_L_R: "#EFBD48",
  },

  isLogoTexture: true,
  logoDecal: "/assets/pkoimon.png",
});

export default state;
