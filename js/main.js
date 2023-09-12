// Pendiente: 
/* 
1. Generar darkmode
2. Generar randomizer de colores
3. Generar colorpicker ¿?
*/ 

import {structure, togglerMode} from './toggler.js'

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

