class Entity {
    constructor(xPos, yPos, type) {
        this.xPos =xPos;
        this.yPos = yPos;
        this.type = type;
    }

    render() {
        const Elm = document.createElement("div");
        Elm.className = `entity entity--${this.type}`;
        
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
      }
}