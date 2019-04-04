// define color array that will be used to color the boxes

// ++++++++++++++++++++Variable Declaration++++++++++++++++++++++++++

// Create variable to track easy or hard mode.

var numSquares = 6; //initiate the variable at 6. use this to replace all the hard-coded number of squares.

var colors = generateRandomColors(numSquares); // this will call a funtion that generates an array of  random colors
//Depending on the mode of the game numSquares may be 3 - easy or 6 - hard.

//Select the squares

var squares = document.querySelectorAll(".square");

// define a picked color

var pickedColor = pickColor(); //Call the pickColor funtion to pick a random number from the array.

//select the content we'll use to display the picked color.
var colorDisplay = document.getElementById("pickedColor");

colorDisplay.textContent = pickedColor; //displays the picked color in the heading

// Select message area
var messageDispaly = document.querySelector("#message");

// select heading

var h1 = document.querySelector("h1"); //this will help us style the heading when user wins

// add a variable that selects the reset button

var reset = document.querySelector("#reset");



// +++++++++++++Stylying the colors of the squares++++++++++++++++++++++

//style each square with one background color from the array

    // loop through squares
    for (var i = 0; i < squares.length; i++) {
        // change colors
        squares[i].style.backgroundColor = colors[i];
 

// +++++++++++++++++Adding Event Listeners and logic++++++++++++++++++++++++++++++++
    //add an event listener to squares to detect when clicked.
    squares[i].addEventListener("click", function(){
        var clickedColor = this.style.backgroundColor;
        //compare clickedColor and pickedColor. If the same, alert Correct, if not, alert wrong

        if(clickedColor === pickedColor) {
            console.log("Picked Color:" + pickedColor);
            console.log("Clicked Color:" + clickedColor);
            messageDispaly.textContent = "Correct!";
            changeColors(clickedColor); //Call function that changes colors
           h1.style.background = pickedColor;
           reset.textContent = "Play again?"
        }
        else{
            console.log("Picked Color:" + pickedColor);
            console.log("Clicked Color:" + clickedColor);
            this.style.backgroundColor = "black"; //fade square.
            messageDispaly.textContent = "Try again!";
        }
    })
}


// Add funtionality that changes the colors of all the squares to the correct one when the right color is clicked.

// Write a funtion that loops through the squares and assigns the picked color.
// Call this funtion if the right color is picked.

function changeColors(color) {
    // loop through squares
    for (var i = 0; i < squares.length; i++) {
        // change colors
        squares[i].style.backgroundColor = color;
        
    }
    
}

// Create functionality to pick a random color

//we'll use Math.random and Math.floor. Math.floor removes the decimal numbers

function pickColor(num) { //pickColor needs an argument in order to determine # of random numbers to create
  var random = Math.floor(Math.random() * colors.length); //define a variable to store the random number
  return colors[random];
}

// Create a funtion that generates an array of random colors. 
//The array of colors that this function creates will be used to assign colors to the boxes.

//create an array

function generateRandomColors(num){

    //create an array of random colors by calling the randomColor() array
    var arr = [];

    // repeat this num times; Get randmom color and push to array

    for (i=0; i<num; i++){
       var arrColor = randomColor();
       arr.push(arrColor);
       }
   //return the array

   return arr;
    } 
    



//Create a funtion that creates rgb colors using the format rgb( , , )

function randomColor(){ //
    //generate a random red from 0 to 255
    var r = Math.floor(Math.random() * 256);
    //generate a random green from 0 to 255
    var g = Math.floor(Math.random() * 256);
   //generate a random blue from 0 to 255
   var b = Math.floor(Math.random() * 256);

   //return the rgb string
   var arrColor = "rgb(" + r + ", " + g + ", " + b + ")"; //generate the rgb color eg. rgb(255, 0, 0)
   return arrColor;
}

// ===============ADD EVENT LISTENER TO RESET BUTTON========================

reset.addEventListener("click", function(){
    // generate new colors to create an array of random colors in an array called color
  
    colors = generateRandomColors(numSquares);
 
    //generate new pickedColor by picking a random color from the colors array
   pickedColor = pickColor(); 
 
    // change the display to show the new pickedColor
    colorDisplay.textContent = pickedColor;
 
     // color the squares with the new random colors
     // loop through squares
     for (var i = 0; i < squares.length; i++) {
        // change colors
        squares[i].style.backgroundColor = colors[i];
        }

        //change the heading background back to the original color
        // h1.style.background = "red";// this doesn't work - why? - wrong syntax
        
        h1.style.backgroundColor = "steelblue";

        this.textContent = "New Colors";

        // clear the message "Correct"
        messageDispaly.textContent = "";
    }
   
    );


    // ================Add EASY / HARD functionality


    //  Easy
    var easy = document.querySelector("#easy");

    easy.addEventListener("click", function(){
       hard.classList.remove("selected");
       easy.classList.add("selected");

       //Set number of squares to 3
       numSquares = 3;

        // generate 3 boxes with 3 random colors
            colors = generateRandomColors(numSquares);

         // pick a new picked color
      
            pickedColor = pickColor(); 
      
        // display the picked color
      
              colorDisplay.textContent = pickedColor;
        
        // Color only 3 boxes by hiding the bottom three

     // loop through squares
    
     for ( var i = 0; i<squares.length; i++) {
        // change colors
        if(colors[i]){
            squares[i].style.backgroundColor = colors[i];
              }
              else{
                  squares[i].style.display = "none"; //hide bottom 3 squares
              }
     }
    //  end of for loop

    });

    // Hard
    var hard = document.querySelector("#hard");
    hard.addEventListener("click", function(){
       easy.classList.remove("selected");
       hard.classList.add("selected");

       //Set number of square to 6

       numSquares = 6;
       
    // generate 3 boxes with 3 random colors
    colors = generateRandomColors(numSquares);

    // pick a new picked color

     pickedColor = pickColor(); 

    // display the picked color

        colorDisplay.textContent = pickedColor;

    // Color 6 boxes and display the bottom three

   
        // loop through squares
    
        for ( var i = 0; i<squares.length; i++) {
            // change colors
            
                squares[i].style.backgroundColor = colors[i];
                squares[i].style.display = "block";// display all squares
       
         }
        //  end of for loop


    });


