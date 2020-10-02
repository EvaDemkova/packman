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
                this.moveRight();   
            } else if(event.code === 'ArrowLeft') {
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
        this.element.classList.toggle('entity--pac--closed');
        this.element.style.left = `${positionX}px`;
    }

    moveRight() {
        positionX += tileSize;
    }

    moveLeft() {
        positionX -= tileSize;
    }


}


