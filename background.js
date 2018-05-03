"use strict";
/* 
    Author: Ty Ary
    Date: 5.1.18
    Filename: background.js

    funciton list
    ~~~~~~~~~~~~~

*/

//Global variables
var slideIndex = 1;
var slideCount = 5;
var autoAdv = setInterval(popFig, 4000);

//This will add source values to the order in the specified phoOrd array
function popFig() {
    if (slideIndex === 5) {
        slideIndex = 1;
    } else {
        slideIndex += 1;
    }
    document.getElementById("bgImage").src = "Images/demo" + slideIndex + ".jpg";
    document.getElementById("bgImage").classList.add("fade");
    setTimeout(function() {document.getElementById("bgImage").classList.remove("fade");}, 1000);
}
(() => { 
const objects = document.getElementsByClassName("asyncImage");

Array.from(objects).map((item) => {
    const img = new Image();
    img.src = item.dataset.src;
    img.onload = () => {
        item.classList.remove('asyncImage');
        return item.nodeName === 'IMG' ?
            item.src = item.dataset.src : item.style.backgroundImage = 'url(${item.dataset.src})';
    }
    });
})();