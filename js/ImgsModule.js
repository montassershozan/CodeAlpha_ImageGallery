import { ImgsOfGallery } from "./VarsModule.js"

export class ImgsMod {

    ImgsArr = [
        { src: 'Imgs/work-1.jpg' },
        { src: 'Imgs/work-2.jpg' },
        { src: 'Imgs/work-3.jpg' },
        { src: 'Imgs/work-4.jpg' },
        { src: 'Imgs/work-5.jpg' },
        { src: 'Imgs/work-6.jpg' }
    ]
    io = 0;
    ImgsGall() {
        let divs = '';
        for (let i = 0; i < this.ImgsArr.length; i++) {
            divs += `
        <div class="imgsGs">
        <img src='${this.ImgsArr[i].src}' alt="workphoto" title="Press On Photo" class="SliderPho1">
        </div>
        `}
        ImgsOfGallery.innerHTML = divs;
    }
}