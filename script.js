// global constants
const cluePauseTime = 500; //how long to pause in between clues
const nextClueWaitTime = 1500; //how long to wait before starting playback of the clue sequence
//Global Variables
var lengthOfPattern = 7;
var pattern = new Array(lengthOfPattern);
var progress = 0;
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5; //must be between 0.0 and 1.0
var guessCounter = 0;
var clueHoldTime = 500; //how long to hold each clue's light/sound
var mistakes = 0;
var strikes = 3;
var timeleft = 80;

function createPattern() {
  for (let i = 0; i <= lengthOfPattern; i++) {
    pattern[i] = Math.floor(Math.random() * Math.floor(5)) + 1;
  }
}

function startGame() {
  //initialize game variables
  progress = 0;
  mistakes = 0;
  gamePlaying = true;
  // swap the Start and Stop buttons
  document.getElementById("GameSound").play();
  document.getElementById("GameSound").loop = true;
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  document.getElementById("countDown").classList.remove("hidden");
  createPattern();
  console.log(pattern);
  playClueSequence();
  startCountDown();

}

function stopGame() {
  //initialize game variables
  progress = 0;
  guessCounter= 0;
  gamePlaying = false;
  clueHoldTime = 500;
  timeleft = 80;
  document.getElementById("GameSound").pause();
  document.getElementById("GameSound").currentTime = 0;

  // swap the Start and Stop buttons
  document.getElementById("stopBtn").classList.add("hidden");
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("countDown").classList.add("hidden");

}

function playTone(btn, len) {
  document.getElementById("buttonAudio").play();
  tonePlaying = true;
  setTimeout(function() {
    stopTone(btn);
  }, len);
}

function startTone(btn) {
  if (!tonePlaying) {
    document.getElementById("buttonAudio").play();
    tonePlaying = true;
  }
  document.getElementById("image"+btn).classList.remove("hidden");
}
function stopTone(btn) {
  document.getElementById("buttonAudio").pause();
  document.getElementById("buttonAudio").currentTime = 0;
  tonePlaying = false;
  document.getElementById("image"+btn).classList.add("hidden");

}

//Page Initialization
// Init Sound Synthesizer
var context = new AudioContext();
var o = context.createOscillator();
var g = context.createGain();
g.connect(context.destination);
g.gain.setValueAtTime(0, context.currentTime);
o.connect(g);
o.start(0);

function lightButton(btn) {
  document.getElementById("button" + btn).classList.add("lit");
  document.getElementById("image"+btn).classList.remove("hidden");

}

function clearButton(btn) {
  document.getElementById("button" + btn).classList.remove("lit");
  document.getElementById("image"+btn).classList.add("hidden");
}

function playSingleClue(btn) {
  if (gamePlaying) {
    lightButton(btn);
    playTone(btn, clueHoldTime);
    setTimeout(clearButton, clueHoldTime, btn);
  }
}

function startCountDown() {
  var downloadTimer = setInterval(function(){
  if(timeleft <= 0){
    clearInterval(downloadTimer);
    document.getElementById("countDown").innerHTML = "Finished";
    loseGame();
  }
  else if(gamePlaying == false) {
    clearInterval(downloadTimer);
    timeleft = 80;
    document.getElementById("countDown").innerHTML = timeleft + " seconds remaining to guess";

  } else {
    document.getElementById("countDown").innerHTML = timeleft + " seconds remaining to guess";
    timeleft -= 1;
  }
  }, 1000);
}

function playClueSequence() {
  guessCounter = 0;
  let delay = nextClueWaitTime; //set delay to initial wait time
  for (let i = 0; i <= progress; i++) {
    // for each clue that is revealed so far
    setTimeout(playSingleClue, delay, pattern[i]); // set a timeout to play that clue
    delay += clueHoldTime;
    delay += cluePauseTime;
  }
  clueHoldTime -= 35;          
}

function guess(btn) {
  if (!gamePlaying) {
    return;
  }

  if (pattern[guessCounter] == btn) {
    if (guessCounter == progress) {
      if (progress == pattern.length - 1) {
        winGame();
      } else {
        progress++;
        playClueSequence();

      }
    } else {
      guessCounter++;

    }
  } else {
    mistakes++;
    clueHoldTime += 30;
    playClueSequence();

  }
  if (mistakes == strikes) {
    loseGame();
  }
}

function loseGame() {
  stopGame();
  alert("Game Over. You lost.");
}

function winGame() {
  stopGame();
  alert("Game Over. You won!");
}
