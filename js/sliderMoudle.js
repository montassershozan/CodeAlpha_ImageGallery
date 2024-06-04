import { ImgsMod } from "./ImgsModule.js";
import { leftArrow, rightArrow, imgD, SliderPho, SliderPho1, ImgsOfGallery, sliderSec } from "./VarsModule.js";

let io = new ImgsMod();

export class SliderMod {



    IMgslistner() {
        ImgsOfGallery.addEventListener('click', function (e) {
            let PressTarg = e.target.getAttribute('src');
            SliderPho.setAttribute('src', PressTarg)
            sliderSec.style.display = "block";
            rightArrow(PressTarg);
        })
    }

    SliderSec() {
        sliderSec.addEventListener('click', function (e) {
            e.stopPropagation();
            sliderSec.style.display = "none"
        })
    }

    rightArrow(){
        rightArrow.addEventListener('click', function (e) {
            e.stopPropagation();
            if(io.io < ImgsOfGallery.children.length ){
            let PressT = ImgsOfGallery.children[io.io++].children[0];
            console.log(PressT);
            let PressTarg = PressT.getAttribute('src');
            console.log(PressTarg);
            SliderPho.setAttribute('src', PressTarg)
            }
            sliderSec.style.display = "block";
        })
    }
    leftArrow(){
        leftArrow.addEventListener('click', function (e) {
            e.stopPropagation();
            if(io.io > 0 ){
            let PressT = ImgsOfGallery.children[io.io--].children[0];
            let PressTarg = PressT.getAttribute('src');
            console.log(PressTarg);
            SliderPho.setAttribute('src', PressTarg)
            }
            sliderSec.style.display = "block";
        })
    }   
}