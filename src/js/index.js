"use strict";

console.log("it works!");
const tileSize = 85;

const containerElm = document.querySelector(".container");
const stage = new Stage(15, 10);
stage.mount(containerElm);

const stageElm = containerElm.querySelector(".stage");

const packman = new Packman("open", 0, 0, stage);
packman.mount(stageElm);

fetch(
  `http://bootcamp.podlomar.org/api/pacman?width=${stage.width}&height=${stage.height}`
)
  .then((resp) => resp.json())
  .then((json) => {
    for (let i = 0; i < json.walls.length; i++) {
      const wall = new Entity(json.walls[i].x, json.walls[i].y, "wall");
      wall.mount(stageElm);
      stage.entities.push(wall);
    }
    for (let i = 0; i < 10; i++) {
      const apple = new Entity(json.apples[i].x, json.apples[i].y, "apple");
      apple.mount(stageElm);
      stage.entities.push(apple);
    }
    for (let i = 0; i < json.bombs.length; i++) {
      const bomb = new Entity(json.bombs[i].x, json.bombs[i].y, "bomb");
      bomb.mount(stageElm);
      stage.entities.push(bomb);
    }
  });
