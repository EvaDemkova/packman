'use strict'

class Packman {
    constructor(mouth, xPos, yPos) {
        this.mouth = mouth;
        this.xPos = xPos;
        this.yPos = yPos;
    }

    render() {
        const Elm = document.createElement('div');
        Elm.className = ('entity entity--pac pacboy-active-light');
        
        document.addEventListener('keydown', (event) => {
            if(event.code === 'ArrowRight') {
                this.direction = 'right'
                this.moveRight();   
            } else if(event.code === 'ArrowLeft') {
                this.direction = 'left';
                this.moveLeft();
            }
            this.update();
        });

        return Elm;
    }

    mount(parent) {
        this.element = this.render();
        parent.appendChild(this.element);
        this.update();
    }

    update() {
        this.element.style.left = `${this.xPos}px`;
        this.element.className = `entity entity--pac pacboy-active-light entity--pac--${this.direction}`
        this.element.classList.toggle('entity--pac--closed');
    }

    moveRight() {
        this.xPos += tileSize;
    }    

    moveLeft() {
        this.xPos -= tileSize;
    }
    

}


