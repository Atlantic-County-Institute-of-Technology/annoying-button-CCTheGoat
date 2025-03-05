let text = document.getElementById("text");
let button1 = document.getElementById("button1");
button1.addEventListener("click", annoy);
const container = document.getElementById("button2");

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
    else if(clicks == 20) {
        text.innerHTML = "You don't Wanna Do This";
    }
    else if(clicks == 25) {
        text.innerHTML = "You have to stop or else";
        button1.classList.add("angwy");
    }
    else if(clicks == 50) {
        text.innerHTML = "I can't hold it back for much longer stop and run!";
        button1.classList.remove("angwy");
        const button2 = document.createElement("button2");
        button2.innerHTML = "PRESS ME";
        button2.classList.add("button1");
        button2.classList.add("button2");
        container.appendChild(button2);
    }
    else if(clicks == 60) {
        text.innerHTML = "The monster inside of me is speaking!";
    }
    else if(clicks == 70) {
        text.innerHTML = "It wants you gone!";
    }
    else if(clicks == 80) {
        text.innerHTML = "You running out of time stop before it's too late";
    }
    else if(clicks == 90) {
        text.innerHTML = "Stop before it's too late!";
    }
    else if(clicks == 95) {
        text.innerHTML = "The monster will eliminate you";
    }
    else if(clicks == 99) {
        text.innerHTML = "This is your final warning!";
    }
    else if(clicks == 100) {
        text.innerHTML = "gasp";
    }
    else if(clicks == 101) {
        text.innerHTML = "The monsters inside your house";
    }
    else if(clicks == 102) {
        text.innerHTML = "It's right behind you";
    }
    else if(clicks == 103) {
        text.innerHTML = "I tried to warn you";
    }
}