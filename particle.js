class Particle {
    // Particle class

    constructor(xPos, yPos, xVel, yVel, color) {
        // Constructor function. Gets called once, when the particle is created.
        // Assigns values to the particle objects attributes
        this.pos = {
            x: xPos,
            y: yPos
        }
        this.color = color
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
        // Updates the particles position:
        this.pos.x += this.vel.x
        this.pos.y += this.vel.y
    }
}