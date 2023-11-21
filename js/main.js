// Pendiente: 
/* 
* 1. Generar darkmode
* 2. Generar randomizer de colores
3. Generar colorpicker ¿?
*/ 

import {structure, togglerMode, colorRandomizer} from './toggler.js'

setDarkModeTrigger();
function setDarkModeTrigger(){
    structure.togglerBtnDm.addEventListener('click', () => {
        togglerMode.setDarkMode();
    });
    structure.togglerBtnDm.addEventListener('mouseover', () => {
        structure.togglerBtnDm.style.cursor = 'pointer';
    });
};

setLightModeTrigger();
function setLightModeTrigger(){
    structure.togglerBtnLm.addEventListener('click', () => {
        togglerMode.setLightMode();
    });
    structure.togglerBtnLm.addEventListener('mouseover', () => {
        structure.togglerBtnLm.style.cursor = 'pointer';
    });
};

randomizeColors();
function randomizeColors(){
    structure.gradientPaletteBtn.addEventListener('click', colorRandomizer.getGradientColor);
    structure.solidPaletteBtn.addEventListener('click', colorRandomizer.getSolidColor);
};

handleEffects();
function handleEffects(){
    structure.solidPaletteBtn.addEventListener('mouseover', () => {
        structure.solidPaletteBtn.style.cursor = 'pointer';
        structure.solidPaletteBtn.style.boxShadow = '0px 0px 10px #222';
        structure.solidPaletteBtn.style.transition = 'all .3s'; 
    });
    structure.solidPaletteBtn.addEventListener('mouseout', () => {
        structure.solidPaletteBtn.style.boxShadow = '0px 0px 10px transparent';
        structure.solidPaletteBtn.style.transition = 'all .3s'; 
    });

    structure.gradientPaletteBtn.addEventListener('mouseover', () => {
        structure.gradientPaletteBtn.style.cursor = 'pointer';
        structure.gradientPaletteBtn.style.boxShadow = '0px 0px 10px #222';
        structure.gradientPaletteBtn.style.transition = 'all .3s';
    });
    structure.gradientPaletteBtn.addEventListener('mouseout', () => {
        structure.gradientPaletteBtn.style.boxShadow = '0px 0px 10px transparent';
        structure.gradientPaletteBtn.style.transition = 'all .3s';
    });

    structure.togglerBtnDm.addEventListener('mouseover', () => {
        structure.togglerBtnDm.style.cursor = 'pointer';
        structure.togglerBtnDm.style.boxShadow = '0px 0px 15px #222';
        structure.togglerBtnDm.style.transition = 'all .3s';
    });

    structure.togglerBtnDm.addEventListener('mouseout', () => {
        structure.togglerBtnDm.style.cursor = 'pointer';
        structure.togglerBtnDm.style.boxShadow = '0px 0px 15px transparent';
        structure.togglerBtnDm.style.transition = 'all .3s';
    });

    structure.togglerBtnLm.addEventListener('mouseover', () => {
        structure.togglerBtnLm.style.cursor = 'pointer';
        structure.togglerBtnLm.style.boxShadow = '0px 0px 15px #222';
        structure.togglerBtnLm.style.transition = 'all .3s';
    });

    structure.togglerBtnLm.addEventListener('mouseout', () => {
        structure.togglerBtnLm.style.cursor = 'pointer';
        structure.togglerBtnLm.style.boxShadow = '0px 0px 15px transparent';
        structure.togglerBtnLm.style.transition = 'all .3s';
    });
};

function copyColorsToClipboard(colorCode) {
    if (colorCode.trim() === "") {
        // Optionally, you can show an error message to the user
        const errorToast = Swal.mixin({
            toast: true,
            position: "center",
            iconColor: "#222222",
            color: "#222222",
            background: "#e63946",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
        });

        errorToast.fire({
            icon: "error",
            title: "Color code is empty, nothing to copy"
        });
    } else {
        navigator.clipboard.writeText(colorCode);

        // Optionally, you can show a success message to the user
        const successToast = Swal.mixin({
            toast: true,
            position: "center",
            iconColor: "#222222",
            color: "#222222",
            background: "#198754",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
        });

        successToast.fire({
            icon: "success",
            title: "Color code copied to clipboard"
        });
    }
}

structure.copySolidColorBtn.addEventListener('click', () => {
    const solidColorCode = document.getElementById('solidColorPicker').value;
    copyColorsToClipboard(solidColorCode);
});

structure.copyGradientColorsBtn.addEventListener('click', () => {
    const gradientColorCode = document.getElementById('gradientColorPicker').value;
    copyColorsToClipboard(gradientColorCode);
});


