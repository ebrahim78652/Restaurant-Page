
import { CreateElementWithClassAndText } from "./utilities.js"
import {header} from "./index.js"

import pic1 from './assets/unspecified-1.jpg'
import pic2 from './assets/unspecified-2.jpg'
import pic3 from './assets/unspecified-3.jpg'
import pic4 from './assets/unspecified-4.jpg'
import pic5 from './assets/unspecified-7.jpg'
import pic6 from './assets/unspecified-12.jpg'

function makeGrid(arg1, arg2, arg3, className){
    let fig1=CreateElementWithClassAndText("figure", undefined, undefined);
    let fig2=CreateElementWithClassAndText("figure", undefined, undefined);
    let fig3=CreateElementWithClassAndText("figure", undefined, undefined);
    let grid_one=CreateElementWithClassAndText("div", className, undefined);

    let img1 = new Image();
    let img2 = new Image();
    let img3 = new Image();

    img1.src=arg1;
    img2.src=arg2;
    img3.src=arg3;

    fig1.append(img1);
    fig2.append(img2);
    fig3.append(img3);

    grid_one.append(fig1, fig2, fig3);
    return grid_one;
}


let grid_one= makeGrid(pic1, pic5, pic3, "grid_one")
let grid_two= makeGrid(pic4, pic6, pic2, "grid_two")



export function makeGalleryTab(){
    console.log("gallery btn clicked");
    let container= document.querySelector('.container');
    container.replaceChildren(header, grid_one, grid_two);
    
}