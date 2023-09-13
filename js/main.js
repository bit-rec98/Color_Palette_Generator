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
    structure.grandientPaletteBtn.addEventListener('click', colorRandomizer.getGradientColor);
    structure.solidPaletteBtn.addEventListener('click', colorRandomizer.getSolidColor);
} 
