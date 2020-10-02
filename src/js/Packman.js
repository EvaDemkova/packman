"use strict";

class Packman {
  constructor(mouth, xPos, yPos, stage) {
    this.mouth = mouth;
    this.xPos = xPos;
    this.yPos = yPos;
    this.stage = stage;
    this.score = 0;
    this.alive = true;
  }

  render() {
    const Elm = document.createElement("div");
    Elm.className = "entity entity--pac pacboy-active-light";
    Elm.innerHTML += `<p class="entity--pac__score">Eva:${this.score}</p>`;

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
    if (this.alive) {
      this.element.style.left = `${this.xPos * tileSize}px`;
      this.element.style.top = `${this.yPos * tileSize}px`;
      this.element.className = `entity entity--pac pacboy-active-light entity--pac--${this.direction} entity--pac--${this.mouth}`;
      this.scoreElm = this.element.querySelector(".entity--pac__score");
      this.scoreElm.textContent = `Eva: ${this.score}`;
    } else {
      this.element.className = `entity  entity--tomb`;
    }
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

    const entityNeighbour = this.stage.collisionDetection(newX, newY);
    if (entityNeighbour !== null) {
      if (entityNeighbour.type === "apple") {
        this.score++;
        this.stage.removeEntity(entityNeighbour);
        if (this.score === 10) {
          alert("You won!!!!");
        }
      }
      if (entityNeighbour.type === "bomb") {
        const explode = Math.round(Math.random());
        if (explode === 1) {
          this.stage.removeEntity(entityNeighbour);
        } else {
          this.element.className = "entity entity--tomb";
          this.alive = false;
          this.scoreElm.style.display = "none";
        }
      }
      //mysli na to!!!!!
      if (entityNeighbour.type === "wall") {
        return;
      }
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
