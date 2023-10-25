"use strict";

// ===================================================
//        JS-Vertiefung – Project Backgrounds
// ===================================================

console.log("%c JS-Vertiefung – Project Backgrounds", "color: tomato");


const body = document.body;

const changeColor = () => {
    const inputColor = document.querySelector('#color').value;
    
    body.style.backgroundColor = inputColor;
}

