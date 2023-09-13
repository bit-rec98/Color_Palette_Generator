import {getRandomColor} from './colorRandomizer.js'

const structure = {
    h1: document.getElementById('mainTitle'),
    h3: document.getElementById('footerTitle'),
    a: document.getElementsByTagName('a'),
    label: document.getElementsByTagName('label'),
    togglerBtnDm: document.getElementById('togglerBtnDm'),
    togglerBtnLm: document.getElementById('togglerBtnLm'),
    inputSolid: document.getElementById('solidColorPicker'),
    inputGradient: document.getElementById('gradientColorPicker'),
    solidPaletteBtn: document.getElementById('solidPaletteBtn'),
    grandientPaletteBtn: document.getElementById('gradientPaletteBtn'),
    body: document.getElementById('bodyId'),
    header: document.getElementById('headerId'),
    footer: document.getElementById('footerId'),
    button: document.getElementsByTagName('button')
}

const togglerMode = {
    setDarkMode: function(){
        structure.h1.style.color = '#f5f5f5';
        structure.h3.style.color = '#f5f5f5';
        for(let i = 0; i < structure.a.length; i++){
            structure.a[i].style.color = '#f5f5f5';
        }
        for(let i = 0; i < structure.label.length; i++){
            structure.label[i].style.color = '#f5f5f5';
        }
        structure.header.style.background = '#222222';
        structure.footer.style.background = '#222222';
        for(let i = 0; i < structure.button.length; i++){
            structure.button[i].style.background = '#222222';
            structure.button[i].style.color = '#f5f5f5';
        }
        structure.togglerBtnLm.style.display = 'block';
        structure.togglerBtnDm.style.display = 'none';
    },
    setLightMode: function(){
        structure.h1.style.color = '#222222';
        structure.h3.style.color = '#222222';
        for(let i = 0; i < structure.a.length; i++){
            structure.a[i].style.color = '#222222';
        }
        for(let i = 0; i < structure.label.length; i++){
            structure.label[i].style.color = '#222222';
        }
        structure.header.style.background = '#f5f5f5';
        structure.footer.style.background = '#f5f5f5';
        for(let i = 0; i < structure.button.length; i++){
            structure.button[i].style.background = '#f5f5f5';
            structure.button[i].style.color = '#222222';
        }
        structure.togglerBtnLm.style.display = 'none';
        structure.togglerBtnDm.style.display = 'block';
    }
}

const colorRandomizer = {
    getGradientColor: function(){
        let randomColor_A = getRandomColor();
        let randomColor_B = getRandomColor();
        const gradientColor = `linear-gradient(270deg, ${randomColor_A}, ${randomColor_B})`;
        structure.body.style.background = gradientColor;
        structure.inputGradient.value = `${randomColor_A}, ${randomColor_B}`;
        return gradientColor
    },
    getSolidColor: function(){
        let randomSolidColor = getRandomColor();
        structure.body.style.background = randomSolidColor;
        structure.inputSolid.value = `${randomSolidColor}`;
    }
}

export {structure, togglerMode, colorRandomizer}