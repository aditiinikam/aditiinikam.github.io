// create an array containing the 4 colors
var buttonColors=["red", "blue", "green", "yellow"];
//an array to create a pattern for the Simon game
var gamePattern=[];
//an array to store the pattern clicked by the user
var userClickedPattern=[];

var started=false;  //a variable to keep a track if the game has started or not
var level=0;


$(document).keypress(function(){
  if (!started) {
    //the h1 title starts out saying "Press A Key to Start", when the game has started, change this to say "Level 0".
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});


//new function called checkAnswer() to take one input with the name currentLevel
function checkAnswer(currentLevel) {
    //check if the most recent user answer is the same as the game pattern. If so then log "success", otherwise log "wrong".
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
      console.log("success");
      //if the user got the most recent answer right, then check that they have finished their sequence with another if statement.
      if (userClickedPattern.length === gamePattern.length){
        //call nextSequence() after a 1000 millisecond delay.
        setTimeout(function () {
          nextSequence();
        }, 1000);
      }
    }
    else {
      // play the audio for wrong pattern
      var audio=new Audio("sounds/wrong.mp3");
      audio.play();
      // adding the gameover class and timeout
      $("body").addClass("game-over");
      setTimeout(function () {
        $("body").removeClass("game-over");
      }, 200);

      $("#level-title").text("Game Over, Press any key to restart.");
      startOver();
    }
}


//reseting the values of started, gamepattern, lavel
function startOver(){
  started=false;
  gamePattern=[];
  level=0;
}


//generating a sequence for the user to follow
function nextSequence(){
  //once nextSequence() is triggered, reset the userClickedPattern to an empty array ready for the next level.
  userClickedPattern = [];

  level++;
  $("#level-title").text("Level " + level);

  var randomNumber=Math.random();
  randomNumber=randomNumber*4;
  randomNumber=Math.floor(randomNumber);

  // fetching the a color stored at the index generated randomly
  var randomColor=buttonColors[randomNumber];
  gamePattern.push(randomColor);  //pushing the color into the array

  // the blink effect and the sounds
  $("#"+randomColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
  // var audio=new Audio("sounds/"+randomColor+'.mp3');
  // audio.play();
  playSound(randomColor);
}


// a function handler to detect a click event
$(".btn").click(function(){
  //stores the id of the clicked button i.e the color
  var userChosenColor=$(this).attr("id");
  animatePress(userChosenColor);
  playSound(userChosenColor);
  // appends it to the array
  userClickedPattern.push(userChosenColor);
  checkAnswer(userClickedPattern.length-1);
});


// a function to play the sound on click
function playSound(name){
  $("#"+name).click(function(){
    var audio=new Audio("sounds/"+name+".mp3");
    audio.play();
  });
}


//to animate when pressed
function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}
