const canv = document.getElementById("gc")
const ctx = canv.getContext("2d")
var myInterval

const particleCount = 100
let particles = []

const createParticles = (n) => {
    for (let i = 0; i < n; i++) {
        xDir = Math.random() * 2 - 1
        yDir = Math.random() * 2 - 1
        particles.push(
            new Particle(
                canv.width * 0.5,
                canv.height * 0.5,
                xDir,
                yDir
            )
        )
    }
}

const drawBackground = () => {
    ctx.fillStyle = "rgb(0, 0, 0)"
    ctx.fillRect(0, 0, canv.width, canv.height)
}

//p = new Particle(canv.width*0.5, canv.height * 0.5)

const setup = () => {
    createParticles(particleCount)
}

const draw = () => {
    drawBackground()
    for (let particle of particles) {
        console.log("particle:", particle)
        particle.update()
        particle.show()
    }
}

$(document).ready(() => {
    "use strict"
    document.addEventListener("keydown", keyPush)

    setup()
    start(draw)
});