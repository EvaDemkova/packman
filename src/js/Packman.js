"use strict";

class Packman {
  constructor(mouth, xPos, yPos) {
    this.mouth = mouth;
    this.xPos = xPos;
    this.yPos = yPos;
  }

  render() {
    const Elm = document.createElement("div");
    Elm.className = "entity entity--pac pacboy-active-light";

    document.addEventListener("keydown", (event) => {
      this.direction = event.code.substring(5).toLowerCase();
      this.move();
    });

    return Elm;
  }

  mount(parent) {
    this.element = this.render();
    parent.appendChild(this.element);
    this.update();
  }

  update() {
    this.element.style.left = `${this.xPos * tileSize}px`;
    this.element.style.top = `${this.yPos * tileSize}px`;
    this.element.className = `entity entity--pac pacboy-active-light entity--pac--${this.direction} entity--pac--${this.mouth}`;
  }

  move() {
    if (this.mouth === "open") {
      this.mouth = "closed";
    } else {
      this.mouth = "open";
    }
    let newX = this.xPos;
    let newY = this.yPos;
    if (this.direction === "right") {
      newX++;
    } else if (this.direction === "left") {
      newX--;
    } else if (this.direction === "up") {
      newY--;
    } else if (this.direction === "down") {
      newY++;
    }

    // entity cannot leave borders of the stage
    if (newX >= 0 && newX < stage.width) {
      this.xPos = newX;
    }
    if (newY >= 0 && newY < stage.height) {
      this.yPos = newY;
    }
    this.update();
  }
}
