const canv = document.getElementById("gc")
const ctx = canv.getContext("2d")
var myInterval

const particleCount = 100
let particles = []
const colors = ["aquamarine", "lavender", "lightgreen", "lightpink", "lemonchiffon"]

const createParticles = (n) => {
    // Function for creating n particles
    for (let i = 0; i < n; i++) {
        xDir = Math.random() * 2 - 1
        yDir = Math.random() * 2 - 1
        color = colors[Math.floor(Math.random() * colors.length)]
        particles.push(
            new Particle(
                canv.width * 0.5,
                canv.height * 0.5,
                xDir,
                yDir,
                color
            )
        )
    }
}

const drawBackground = () => {
    ctx.fillStyle = "rgb(0, 0, 0)"
    ctx.fillRect(0, 0, canv.width, canv.height)
}

// Gets called once in the start:
const setup = () => {
    createParticles(particleCount)
}

// Gets called over and over again:
const draw = () => {
    drawBackground()
    for (let particle of particles) {
        console.log("particle:", particle)
        particle.update()
        particle.show()
    }
}

// Is called once documents are ready:
$(document).ready(() => {
    "use strict"
    document.addEventListener("keydown", keyPush)

    setup()
    start(draw)
});