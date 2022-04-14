
import { CreateElementWithClassAndText } from "./utilities.js"
import {header} from "./index.js"



let arrayTitles= ["Buttermilk Flapjacks", "Brisket Sandwich", "Hotcakees & Sausage", "Bison Burger", "Buckwheat Cakes with Honeybread", "Mutton Stew", "Steel Cut Oaktmeal", "Wild Board Shoulder"];

let arrayDescription= ["Two flapjacks served with molasses and our signature sassafras-infused whipped cream. Fresh fruit additional $4.", 
"Slow-smoked beef brisket cut into thin slices, pickled okra, wild onions, tomatoes, and black bread. Served with a side salad or fried potatoes.",
"Cornmeal and molasses hotcakes served with sweet fennel pork sausage.",
"Potato bun, lettuce, tomato, wild onions, and pepper jack cheese. Served with a side salad or fried potatoes.",
"Two thick buckwheat cakes served with honey and our signature sassafras-infused whipped cream. Fresh fruit additional $4.",
"Tenderized mutton, carrots, celery, tomatoes, onion, rosemary, and black pepper. Served with two sourdough biscuits",
"Served with molasses, bananas, and fresh berries.",
"Pan-seared wild boar, cracked peppercorns, and red wine glaze. Served with hot corn cakes and a side salad."
]

let arrItems=[];

 function makeItems(arrayTitles, arrayDescription){

    arrayTitles.forEach((title, index)=>{
        let item = CreateElementWithClassAndText("div", "item", undefined);
        let header = CreateElementWithClassAndText("h2", undefined, title );
        let desc= CreateElementWithClassAndText("p", undefined, arrayDescription[index]);

        item.append(header, desc)
        arrItems.push(item);
    })
  
    

}



export function makeMenuTab(){
    console.log("menu button clicked")
    makeItems(arrayTitles, arrayDescription);
    let item_container= CreateElementWithClassAndText("div", "item_container", undefined);

    arrItems.forEach((element)=>{
        item_container.append(element);
    })

    let container= document.querySelector('.container');

    container.replaceChildren(header, item_container);


}