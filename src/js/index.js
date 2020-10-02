"use strict";

console.log("it works!");

let positionX = window.innerWidth / 2;
const tileSize = 85;

const containerElm = document.querySelector(".container");
const stage = new Stage(10, 10);
stage.mount(containerElm);

const stageElm = containerElm.querySelector(".stage");
const packman = new Packman("open", 1, 2);
packman.mount(stageElm);
