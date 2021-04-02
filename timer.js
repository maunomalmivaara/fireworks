var myInterval

const start = (toDo) => {
    // Starts timer, calls toDo() over and over again with intervals
    myInterval = setInterval(toDo, 1000/15)
}

const pause = () => {
    // If there is a timer, pauses it
    if (myInterval) {
        clearInterval(myInterval)
        myInterval = null
    }
}