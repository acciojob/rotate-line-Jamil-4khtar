//your JS code here. If required.
let line = document.getElementById('line');

let angle = 2;
function rotateLine() {
    line.style.transform = rotate(`${angle}deg`);
}

setInterval(rotateLine, 20);
