var numberOfSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#messageDisplay");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
  setupModeButtons();
  setupSquares();
  reset();
}

function setupModeButtons(){
  for(var i = 0;i < modeButtons.length;i++){
    modeButtons[i].addEventListener("click", function(){
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");
      this.classList.add("selected");
      this.textContent === "Easy" ? numberOfSquares = 3: numberOfSquares = 6;
      reset();
    });
  }
}

function setupSquares(){
  for(var i = 0; i < squares.length; i++){
    //add click listeners to squares
    squares[i].addEventListener("click", function(){
      //grab color of picked color
      var clickedColor = this.style.backgroundColor;
      //compare color to pickedColor
      if(clickedColor === pickedColor){
        messageDisplay.textContent = "Correct";
        resetButton.textContent = "Play Again?";
        changeColors(clickedColor);
        h1.style.backgroundColor = clickedColor;
      }else {
        this.style.backgroundColor = "#232323";
        messageDisplay.textContent ="Try Again";
      }
    });
  }
}

function reset(){
  colors = generateRandomColors(numberOfSquares);
  //pick a new random color from array
  pickedColor = pickColor();
  // change colorDisplay to match pickedColor
  colorDisplay.textContent = pickedColor;
  //reset h1 backgroundColor
  h1.style.backgroundColor = "rgb(80, 205, 251)";
  //change reset button text
  resetButton.textContent = "New Colors";
  messageDisplay.textContent = "";
  //change color of squares
  for (var i = 0; i < squares.length; i++){
    if(colors[i]){
      squares[i].style.display = "block";
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display ="none";
    }
  }
}

// RESET BUTTON
resetButton.addEventListener("click", function(){
  reset();
});

function changeColors(color){
  for(var i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = color;
  }
}

function pickColor(){
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num){
  //make an array
  var arr = [];
  //loop num times
  for(var i = 0; i < num; i++){
    // get random color and push into arr
    arr.push(randomColor());
  }
  // return that array
  return arr;
}

function randomColor(){
  //pick a red from 0-255
  var r = Math.floor(Math.random() * 256);
  //pick a green from 0-255
  var g = Math.floor(Math.random() * 256);
  //pick a blue from 0-255
  var b = Math.floor(Math.random() * 256);
  //build rgb string and return it
  return "rgb(" + r +", " + g +", "+ b+")";
}
