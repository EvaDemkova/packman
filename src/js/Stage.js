class Stage {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.entities = [];
  }
  render() {
    const elm = document.createElement("div");
    elm.className = "stage";
    return elm;

  }
  mount(parent) {
    this.element = this.render();
    parent.appendChild(this.element);
    this.update();
  }
  update() {
    this.element.style.width = `${this.width * tileSize}px`;
    this.element.style.height = `${this.height * tileSize}px`;
  }

  collisionDetection(x, y) {
    for(let i = 0; i < this.entities.length; i++) {
      if (this.entities[i].xPos === x && this.entities[i].yPos === y) {
        return this.entities[i];
      } else {
        return null;
      }
    }
  }
}
