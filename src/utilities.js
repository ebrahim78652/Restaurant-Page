
export function CreateElementWithClassAndText(elementType,className, text){
    let newElement= document.createElement(elementType);

    if(className){
        newElement.classList.add(className);

    }
    if(text){
        newElement.textContent = text;
    }
    console.log(newElement)

    return newElement;
}