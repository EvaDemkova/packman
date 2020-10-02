'use strict';

console.log('it works!');


let positionX = window.innerWidth / 2;
const tileSize = 85;

const containerElm = document.querySelector('.container');
const packman = new Packman('open', 150, 150);
packman.mount(containerElm);
