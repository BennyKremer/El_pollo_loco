let canvas;
let world;
let keyboard = new Keyboard();
let intervalIds = [];
let soundOff = false;
let lastMoved;
let sound = new Audio('audio/music.mp3');
let background_sound = new Audio ('audio/background_music.mp3');
let chicken_sound = new Audio('audio/chicken.mp3');
let hurt = new Audio('audio/hurt.mp3');
let game_over = new Audio('audio/game_over.mp3');


///function playBGSound() {
 //   background_sound.volume = 0.1;
 //   if (!soundOff) {
 //       background_sound.play();
  //  } else if (soundOff) {
  //      background_sound.pause();
  //  }
//}

function init() {
    canvas = document.getElementById("canvas");
    world = new World(canvas, keyboard);
}

function startGame() {
    document.getElementById('startScreen').classList.add('d-none');
    document.getElementById('canvas').classList.remove('d-none');
    document.getElementById('startButton').classList.add('d-none');
    document.getElementById('reloadButton').classList.remove('d-none');
    sound.play();
    sound.volume = 0.2;
    background_sound.play();
    background_sound.volume = 0.05;
}



function reloadGame() {
    document.getElementById('startScreen').classList.remove('d-none');
    document.getElementById('canvas').classList.add('d-none');
    document.getElementById('reloadButton').classList.add('d-none');
    document.getElementById('startButton').classList.remove('d-none');
}






window.addEventListener("keydown", (e) => {

    if(e.keyCode == 32) {
        keyboard.SPACE = true;
    }

    if(e.keyCode == 37) {
        keyboard.LEFT = true;
    }

    if(e.keyCode == 38) {
        keyboard.UP = true;
    }

    if(e.keyCode == 39) {
        keyboard.RIGHT = true;
    }

    if(e.keyCode == 40) {
        keyboard.DOWN = true;
    }

    if(e.keyCode == 68) {
        keyboard.D = true;
    }

});


window.addEventListener("keyup", (e) => {

    if(e.keyCode == 32) {
        keyboard.SPACE = false;
    }

    if(e.keyCode == 37) {
        keyboard.LEFT = false;
    }

    if(e.keyCode == 38) {
        keyboard.UP = false;
    }

    if(e.keyCode == 39) {
        keyboard.RIGHT = false;
    }

    if(e.keyCode == 40) {
        keyboard.DOWN = false;
    }

    if(e.keyCode == 68) {
        keyboard.D = false;
    }
});