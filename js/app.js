import { ImgsMod } from "./ImgsModule.js";
import { SliderMod } from "./sliderMoudle.js";

let GetImgs = new ImgsMod();

GetImgs.ImgsGall();

let NavSlider = new SliderMod();
NavSlider.IMgslistner();
NavSlider.SliderSec();
NavSlider.rightArrow();
NavSlider.leftArrow();