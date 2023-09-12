import * as randomizer from './colorRandomizer.js'



const structure = {
    h1: document.getElementById('mainTitle'),
    h3: document.getElementById('footerTitle'),
    a: document.getElementsByTagName('a'),
    togglerBtnDm: document.getElementById('togglerBtnDm'),
    togglerBtnLm: document.getElementById('togglerBtnLm'),
    paletteBtn: document.getElementById('paletteBtn'),
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
        const colorMainBg = `linear-gradient(270deg, red, orange)`;
        structure.body.style.background = colorMainBg;
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
        const colorMainBg = `linear-gradient(270deg, green, blue)`;
        structure.body.style.background = colorMainBg;
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

export {structure, togglerMode}