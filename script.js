let text = document.getElementById("text");
let button1 = document.getElementById("button1");
button1.addEventListener("click", annoy);

let clicks = 0;

function annoy() {
    clicks++;
    if(clicks == 1) {
        text.innerHTML = "Hey! Stop that!";
    }
    else if(clicks == 5) {
        text.innerHTML = "I said stop that!";
    }
    else if(clicks == 10) {
        text.innerHTML = "I will find you.";
    }
}