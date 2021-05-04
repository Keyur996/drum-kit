// for check index.js imported
// console.log("Hello From index.js");

const drums = document.querySelectorAll(".drum");

drums.forEach(drum => {
    drum.addEventListener("click", (e) => {
        playDrum(e.target.innerText);
        buttonAnimation(e.target.innerText);
    });
});

// keypress event
document.addEventListener("keypress", (e) => {
    playDrum(e.key);
    buttonAnimation(e.key);
});

playDrum = (key) => {
    switch (key) {
        case "w":
            new Audio("./sounds/tom-1.mp3").play();
            break;
        case "a":
            new Audio("./sounds/tom-2.mp3").play();
            break;
        case "s":
            new Audio("./sounds/tom-3.mp3").play();
            break;
        case "d":
            new Audio("./sounds/tom-4.mp3").play();
            break;
        case "j":
            new Audio("./sounds/snare.mp3").play();
            break;
        case "k":
            new Audio("./sounds/kick-bass.mp3").play();
            break;
        case "l":
            new Audio("./sounds/crash.mp3").play();
            break;
        default:
            break;
    }
}

buttonAnimation = (key) => {
    const button = document.querySelector("." + key);
    button.classList.add("pressed");
    setTimeout(() => button.classList.remove("pressed"), 100);
}