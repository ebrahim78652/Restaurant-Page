import './styles.css'
import { CreateElementWithClassAndText } from "./utilities.js"
import logo from './assets/logo.jpg'
import {makeGalleryTab} from './gallerytab.js'
import {makeMenuTab} from './menutab.js'

//when this function is run: the homepage is built.




export let header = (function header (){
    let header_logo=(function (){

        let header_logo= CreateElementWithClassAndText("div","header_logo", undefined);
        let img= new Image();
        img.src=logo;
    
        header_logo.append(img);
        return header_logo;

    })()
    
    let header_rightlinks=(function createLinks(){
        let home= CreateElementWithClassAndText("a", "home", "Home");
        let gallery= CreateElementWithClassAndText("a", "gallery","Gallery");
        let menus= CreateElementWithClassAndText("a", "menus", "Menus");
        gallery.addEventListener("click", makeGalleryTab);
        home.addEventListener("click", makeHomeTab);
        menus.addEventListener("click", makeMenuTab);
    
        let li1= CreateElementWithClassAndText("li", undefined, undefined);
        let li2= CreateElementWithClassAndText("li", undefined, undefined);
        let li3= CreateElementWithClassAndText("li", undefined, undefined);
    
        let ul= CreateElementWithClassAndText("ul", undefined, undefined);
    
        let header_rightlinks= CreateElementWithClassAndText("div", "header_rightlinks", undefined);
    
    
        li1.append(home);
        li2.append(gallery);
        li3.append(menus);
        ul.append(li1, li2, li3);
        header_rightlinks.append(ul);
        return header_rightlinks;
    })()

    let header= CreateElementWithClassAndText("header", undefined, undefined);
    header.append(header_logo, header_rightlinks);

    return header;
})();


let mainBody= function (){
    let main_container= CreateElementWithClassAndText("div", "main_container", undefined);
    let mainElement = CreateElementWithClassAndText("main", "main", undefined);
    let main_content = CreateElementWithClassAndText("div", "main_content", undefined);
    mainElement.append(CreateElementWithClassAndText("div", "main_background", undefined), main_content);

    main_container.append(mainElement);
    return mainElement;
   

}();


 (function addMainContent () {
    //let mainElement = CreateElementWithClassAndText("main", undefined, undefined)

    (function createMainContent() {

       // let main_content = CreateElementWithClassAndText("div", "main_content", undefined);

        let eat = CreateElementWithClassAndText("div", "eat", "EAT");
        let drink = CreateElementWithClassAndText("div", "drink", "DRINK");
        let enjoy = CreateElementWithClassAndText("div", "enjoy", "ENJOY");

        mainBody.childNodes[1].append(eat, drink, enjoy);

        //return main_content;

    })()

    //mainElement.append(CreateElementWithClassAndText("div", "main_background", undefined), main_content_div);

    //return mainElement;

})();


function makeHomeTab(){
    console.log("Home btn clicked");
    let container= document.querySelector('.container');

    container.replaceChildren(header, mainBody);
}

makeHomeTab();


