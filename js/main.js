// Pendiente: 
/* 
* 1. Generar darkmode
* 2. Generar randomizer de colores
3. Generar colorpicker ¿?
*/ 

import {structure, togglerMode, colorRandomizer} from './toggler.js'

setDarkModeTrigger()
function setDarkModeTrigger(){
    structure.togglerBtnDm.addEventListener('click', () => {
        togglerMode.setDarkMode()
    }) 
}

setLightModeTrigger()
function setLightModeTrigger(){
    structure.togglerBtnLm.addEventListener('click', () => {
        togglerMode.setLightMode();
    }) 
}

randomizeColors()
function randomizeColors(){
    structure.paletteBtn.addEventListener('click', colorRandomizer.updateColor);
} 

// structure.paletteBtn.addEventListener('mouseover', () => {
//     colorRandomizer.updateColor()
//     structure.paletteBtn.style.background = `${gradientColor}`
// })

console.dir(structure.paletteBtn)