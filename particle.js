class Particle {
    constructor(xPos, yPos, xVel, yVel) {
        this.pos = {
            x: xPos,
            y: yPos
        }
        this.color = "rgb(255, 255, 255)"
        this.radius = 2
        this.vel = {
            x: xVel,
            y: yVel
        }
    }

    show() {
        ctx.beginPath()
        ctx.fillStyle = this.color
        ctx.arc(this.pos.x, this.pos.y, this.radius, 0, 2 * Math.PI)
        ctx.fill()
    }

    update() {
        this.pos.x += this.vel.x
        this.pos.y += this.vel.y
    }
}