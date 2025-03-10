//This block of code lets my text, image and button be able to be seen as well as begins my clicks function
let text = document.getElementById("text");
let MrC = document.getElementById("MrC");
let button1 = document.getElementById("button1");
button1.addEventListener("click", annoy);
//starts my clicks at 0
let clicks = 0;
//counts my number of clicks, adds my audios after a certain amount of clicks as well as my image and changes button color
function annoy() {
    clicks++;
    if(clicks == 1) {
        text.innerHTML = "Hey! Stop that!";
        let chezburger = new Audio('assets/chezburger.mp3');
        chezburger.play();
    }
    else if(clicks == 5) {
        text.innerHTML = "I said stop that!";
        let chezburger = new Audio('assets/chezburger.mp3');
        chezburger.play();
    }
    else if(clicks == 10) {
        text.innerHTML = "It will find you.";
        button1.classList.add("scared");
    }
    else if(clicks == 20) {
        text.innerHTML = "You don't Wanna Do This";
    }
    else if(clicks == 25) {
        text.innerHTML = "You have to stop or else it'll get us both";
        let michealmyers = new Audio('assets/michealmyers.mp3');
        michealmyers.play();
    }
    else if(clicks == 50) {
        text.innerHTML = "I can't hold it back for much longer stop and run!";

    }
    else if(clicks == 60) {
        text.innerHTML = "The creature inside of me is speaking!";
        let IMSOUGLY = new Audio('assets/IMSOUGLY.mp3');
        IMSOUGLY.play();
    }
    else if(clicks == 70) {
        text.innerHTML = "It wants you!";
        let JBLspeaker = new Audio('assets/JBLspeaker.mp3');
        JBLspeaker.play();
    }
    else if(clicks == 80) {
        text.innerHTML = "You running out of time stop before it's too late";
    }
    else if(clicks == 90) {
        text.innerHTML = "Stop Now!";
    }
    else if(clicks == 95) {
        text.innerHTML = "It will eliminate you";
    }
    else if(clicks == 99) {
        text.innerHTML = "This is your final warning!";
    }
    else if(clicks == 100) {
        text.innerHTML = "gasp";
    }
    else if(clicks == 101) {
        text.innerHTML = "The monsters armed and dangerous";
        let armedanddangerous = new Audio('assets/armedanddangerous.mp3');
    armedanddangerous.play();
    }
    else if(clicks == 101) {
        text.innerHTML = "It's inside your house";
    }
    else if(clicks == 102) {
        text.innerHTML = "It's right behind you";
    }
    else if(clicks == 103) {
        text.innerHTML = "I tried to warn you";
        button1.classList.remove("scared");
    }
    else if(clicks == 104) {
        text.innerHTML = "sigh";
        button1.classList.add("acceptsfate");
    }
    else if(clicks == 105) {
        text.innerHTML = "Now it's after me";
    }
    else if(clicks == 106) {
        text.innerHTML = "ahhhhhh, it's here";
        MrC.style.display = "block";
    }
    else if(clicks == 106) {
        text.innerHTML = "goodbye, world";
        let LETmeKNOW = new Audio('assets/LETmeKNOW.mp3');
    LETmeKNOW.play();
    }
}