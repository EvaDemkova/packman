class Stage {
  constructor(width, height) {
    this.width = width;
    this.height = height;
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
}
