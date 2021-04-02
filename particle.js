class Particle {
    // Particle class

    constructor(xPos, yPos, xVel, yVel, colorArray) {
        // Constructor function. Gets called once, when the particle is created.
        // Assigns values to the particle objects attributes
        this.pos = {
            x: xPos,
            y: yPos
        }
        this.alpha = 1.0
        this.red = colorArray[0]
        this.green = colorArray[1]
        this.blue = colorArray[2]
        this.color = `rgba(${this.red}, ${this.green}, ${this.blue}, 1.0)`
        this.radius = 2
        this.vel = {
            x: xVel,
            y: yVel
        }
    }

    show() {
        // Draws the particle:
        ctx.beginPath()
        ctx.fillStyle = this.color
        ctx.arc(this.pos.x, this.pos.y, this.radius, 0, 2 * Math.PI)
        ctx.fill()
    }

    update() {
        this.updatePosition()
        this.updateColor()
    }

    updatePosition() {
        // Updates the particles position:
        this.pos.x += this.vel.x
        this.pos.y += this.vel.y
    }

    updateColor() {
        this.alpha *= 0.98
        this.color = `rgba(${this.red}, ${this.green}, ${this.blue}, ${this.alpha})`
    }
}