const canv = document.getElementById("gc")
const ctx = canv.getContext("2d")
var myInterval

const particleCount = 50
let particles = []

const colorPalette = [
    [127,255,212],
    [230,230,250],
    [144,238,144],
    [255,192,203],
    [255,250,205]
]

const createParticles = (n) => {
    // Function for creating n particles
    for (let i = 0; i < n; i++) {
        xDir = Math.random() * 2 - 1
        yDir = Math.random() * 2 - 1
        const colorArray = colorPalette[Math.floor(Math.random() * colorPalette.length)]
        particles.push(
            new Particle(
                canv.width * 0.5,
                canv.height * 0.5,
                xDir,
                yDir,
                colorArray
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