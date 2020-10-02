"use strict";

console.log("it works!");
const tileSize = 85;

const containerElm = document.querySelector(".container");
const stage = new Stage(10, 10);
stage.mount(containerElm);

const stageElm = containerElm.querySelector(".stage");


const wall1 = new Entity(3, 5, 'wall');
wall1.mount(stageElm);

const packman = new Packman("open", 1, 2, stage);
packman.mount(stageElm);

stage.entities.push(wall1);
console.log(stage.entities)