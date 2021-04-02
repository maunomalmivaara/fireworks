var myInterval

const start = (toDo) => {
    myInterval = setInterval(toDo, 1000/15)
}

const pause = () => {
    if (myInterval) {
        clearInterval(myInterval)
        myInterval = null
    }
}