let a = document.getElementById("score-card")
let b = document.getElementById("score-card-away")

let count = 0
let awaycount = 0

function one() {
    a.textContent = count += 1 
}

function two() {
    a.textContent = count += 2
}

function three() {
    a.textContent = count += 3
}


function onea() {
    b.textContent = awaycount += 1 
}
function twoa() {
    b.textContent = awaycount += 2
}
function threea() {
    b.textContent = awaycount += 3
}
