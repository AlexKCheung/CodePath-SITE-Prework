/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

/*console.log("Hello, world!");*/

// global CONSTANTS
const clueHoldTime = 1000; // how long to hold
const cluePauseTime = 333; 
const nextClueWaitTime = 1000;

// global variables 
var pattern = [2, 2, 4, 3, 2, 1, 2, 4]; // 8 
// need to change pattern to generate random secret pattern
var progress = 0;
var gamePlaying = false;
// for sounds
var tonePlaying = false;
var volume = 0.5; // 0.0 - 1.0
// more
var guessCounter = 0;


function startGame() {
  // initalize game variables
  progress = 0;
  gamePlaying = true;
  
  // optional added
  // use random to generate random secret pattern
  for (let i = 0; i < 8; i++) {
    // inspired by https://developer.mozilla.org/en-US/docs/web/javascript/reference/global_objects/math/random
    // modified to fit for project, integer from 1-4
    pattern[i] = Math.floor(Math.random() * 4 + 1);
  }  
  
  // swap start and stop button functionality
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  
  playClueSequence();
}

function stopGame() {
  // modify game variables
  gamePlaying = false
  // swap start and stop button functionality
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");  
}

function lightButton(btn) {
  document.getElementById("button" + btn).classList.add("lit");
}
function clearButton(btn) {
  document.getElementById("button" + btn).classList.remove("lit");
}

function playSingleClue(btn) {
  if (gamePlaying) {
    lightButton(btn);
    playTone(btn, clueHoldTime);
    setTimeout(clearButton, clueHoldTime, btn);
  }
}

function playClueSequence() {
  //context.resume();
  guessCounter = 0;
  let delay = nextClueWaitTime;
  for (let i = 0; i <= progress; i++) {
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms");
    setTimeout(playSingleClue, delay, pattern[i]);
    delay += clueHoldTime;
    delay += cluePauseTime;
  }
}

function loseGame() {
  stopGame();
  alert("Game Over. You lost. Please try again.");
}
function winGame() {
  stopGame();
  alert("Game Over. You won!");
}

function guess(btn) {
  console.log("user guessed: " + btn);
  if (!gamePlaying) {
    return;
  }
  // game logic
  if (pattern[guessCounter] == btn) {
    if (guessCounter == progress) {
      if (progress == pattern.length - 1) {
        winGame();
      }
      else {
        progress += 1;
        playClueSequence();
      }
    }
    else {
      guessCounter += 1;
    }
}
  else {
    loseGame();
  }
  
  
}


// copy pasted: for generating sound
// Sound Synthesis Functions
const freqMap = {
  1: 261.6,
  2: 329.6,
  3: 392,
  4: 466.2
}
function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  context.resume()
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}
function startTone(btn){
  if(!tonePlaying){
    context.resume()
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    context.resume()
    tonePlaying = true
  }
}
function stopTone(){
  g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
  tonePlaying = false
}

// Page Initialization
// Init Sound Synthesizer
var AudioContext = window.AudioContext || window.webkitAudioContext 
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)