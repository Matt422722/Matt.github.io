//This variable keeps track of whose turn it is.
let activePlayer = 'X';
//This array stores an array of moves. We use this to determine win conditions.
let selectedSquares = [];

//This function is for placing an x or o in a square.
function placeXOrO(squareNumber) {
    //This condition ensures a square hasn’t been selected already.
    if (!selectedSquares.some(element => element.includes(squareNumber))) {
        //This variable retrieves the HTML element id that was clicked.
        let select = document.getElementById(squareNumber);
        //This condition checks whose turn it is.
        if (activePlayer === 'X') {
            //If activePlayer is 'X', the x.png is placed in HTML
            select.style.backgroundImage = 'url("images/x.png")';
        } else {
            //If activePlayer is 'O', the o.png is placed in HTML
            select.style.backgroundImage = 'url("images/o.png")';
        }
        //squareNumber and activePlayer are concatenated together and added to the array.
        selectedSquares.push(squareNumber + activePlayer);
        //Check for any win conditions.
        checkWinConditions();
        //Switch the active player.
        activePlayer = activePlayer === 'X' ? 'O' : 'X';
    }
}

//global audio function
function playSound(audioURL) {
    let audio = new Audio(audioURL);
    audio.play().catch(error => {
        console.log('Play prevented. Waiting for user interaction.');
    });
}

document.addEventListener('click', function() {
    playSound('./media/winGame.mp3');
});

//Check if it is the computer's turn.
if (activePlayer === 'O') {
    // Disable clicking during computer's turn.
    disableClick();

    // Wait 1 second before the computer places an image and re-enables click.
    setTimeout(function () {
        computersTurn();
    }, 1000);
}
//This function results in a random square being selected by the computer.
function computersTurn() {
    let success = false;
    let pickASquare;
    while (!success) {
        //Random number between 0 and 8 is selected.
        pickASquare = String(Math.floor(Math.random() * 9));
        //If the square hasn't been selected yet, mark it.
        if (placeXOrO(pickASquare)) {
            success = true;
        }
    }
}

//Define the audio function globally
function audio(audioURL) {
    let sound = new Audio(audioURL);
    sound.play().catch(function(err) {
        console.log('Error playing audio:', err);
    });
}


//This function parses the selectedSquares array to search for win conditions.
//drawWinLine() function is called to draw a line on the screen if the condition is met.
function checkWinConditions() {
    //X 0, 1, 2 condition.
    if (arrayIncludes('0X', '1X', '2X')) { drawWinLine(50, 100, 558, 100) }
    //X 3, 4, 5 condition.
    else if (arrayIncludes('3X', '4X', '5X')) { drawWinLine(50, 304, 558, 304) }
    //X 6, 7, 8 condition.
    else if (arrayIncludes('6X', '7X', '8X')) { drawWinLine(50, 508, 558, 508) }
    //X 0, 3, 6 condition.
    else if (arrayIncludes('0X', '3X', '6X')) { drawWinLine(100, 50, 100, 558) }
    //X 1, 4, 7 condition.
    else if (arrayIncludes('1X', '4X', '7X')) { drawWinLine(304, 50, 304, 558) }
    //X 2, 5, 8 condition.
    else if (arrayIncludes('2X', '5X', '8X')) { drawWinLine(508, 50, 508, 558) }
    //X 6, 4, 2 condition.
    else if (arrayIncludes('6X', '4X', '2X')) { drawWinLine(100, 508, 510, 90) }
    //X 0, 4, 8 condition.
    else if (arrayIncludes('0X', '4X', '8X')) { drawWinLine(100, 100, 520, 520) }
    //O 0, 1, 2 condition.
    else if (arrayIncludes('0O', '1O', '2O')) { drawWinLine(50, 100, 558, 100) }
    //O 3, 4, 5 condition.
    else if (arrayIncludes('3O', '4O', '5O')) { drawWinLine(50, 304, 558, 304) }
    //O 6, 7, 8 condition.
    else if (arrayIncludes('6O', '7O', '8O')) { drawWinLine(50, 508, 558, 508) }
    //O 0, 3, 6 condition.
    else if (arrayIncludes('0O', '3O', '6O')) { drawWinLine(100, 50, 100, 558) }
    //O 1, 4, 7 condition.
    else if (arrayIncludes('1O', '4O', '7O')) { drawWinLine(304, 50, 304, 558) }

    //O 2, 5, 8 condition.
    else if (arrayIncludes('2O', '5O', '8O')) { drawWinLine(508, 50, 508, 558) }
    //O 6, 4, 2 condition.
    else if (arrayIncludes('6O', '4O', '2O')) { drawWinLine(100, 508, 510, 90) }
    //O 0, 4, 8 condition.
    else if (arrayIncludes('0O', '4O', '8O')) { drawWinLine(100, 100, 520, 520) }
    //This condition checks for a tie. If none of the above conditions are met and 9 squares are selected the code executes.
    else if (selectedSquares.length >= 9) {
    //This function plays the tie game sound.
    audio('./media/tie.mp3');
    //This function sets a .3 second timer before the resetGame is called.
    setTimeout(function () { resetGame(); }, 500);
    }

}


//This function checks if an array includes 3 strings. It is used to check for each win condition.
function arrayIncludes(squareA, squareB, squareC) {
    // These 3 variables will be used to check for 3 in a row.
    const a = selectedSquares.includes(squareA);
    const b = selectedSquares.includes(squareB);
    const c = selectedSquares.includes(squareC);
    //If the 3 variables we pass are all included in our array then
    //true is returned and our else if condition executes the drawLine() function.
    if (a === true && b === true && c === true) { return true; }
}

//This function makes the body element temporarily unclickable.
function disableClick(){
    //Make the body unclickable.
    document.body.style.pointerEvents = 'none';
    //Make the body clickable again after 1 second.
    setTimeout(function(){
        document.body.style.pointerEvents = 'auto';
    }, 1000);
}

//This function takes a string parameter of the path set earlier for
//the placement sound (e.g., './media/place.mp3').
function playAudio(audioURL){
    //Create a new audio object and pass the path as a parameter.
    let sound = new Audio(audioURL);
    //Play the audio sound.
    sound.play();
}

//This function utilizes HTML canvas to draw win lines.
function drawWinLine(coordX1, coordY1, coordX2, coordY2) {
    //Access the HTML canvas element.
    const canvas = document.getElementById('win-lines');
    //Get the 2D context of the canvas.
    const c = canvas.getContext('2d');
    
    //Initial coordinates for the start and end of the line.
    let x1 = coordX1,
        y1 = coordY1,
        x2 = coordX2,
        y2 = coordY2,
        x = x1,
        y = y1;

    //This function animates the line drawing on the canvas.
    function animateLineDrawing() {
        //Create an animation loop.
        const animationLoop = requestAnimationFrame(animateLineDrawing);
        
        //Clear the previous frame.
        c.clearRect(0, 0, canvas.width, canvas.height);
        
        //Start a new path and draw the line.
        c.beginPath();
        c.moveTo(x1, y1);
        c.lineTo(x, y);
        c.lineWidth = 10;
        c.strokeStyle = 'rgba(70, 255, 33, 0.8)';
        c.stroke();

        //Increment x and y towards the target coordinates.
        if (x < x2) { x += 10; }
        if (y < y2) { y += 10; }
        if (x1 <= x2 && y1 >= y2) {
            if (y > y2) { y -= 10; }
        }

        //Stop the animation when the end coordinates are reached.
        if ((x >= x2 && y >= y2) || (x >= x2 && y <= y2)) {
            cancelAnimationFrame(animationLoop);
        }
    }

    //This function clears the canvas after the win line is drawn.
    function clearCanvas() {
        //Simply clear the canvas.
        c.clearRect(0, 0, canvas.width, canvas.height);
    }

    //Disable clicking during the win sequence.
    disableClick();

    //Play the win sound.
    audio('./media/winGame.mp3');

    //Start the animation loop for drawing the win line.
    animateLineDrawing();

    //After 1 second, clear the canvas, reset the game, and re-enable clicking.
    setTimeout(function () {
        clearCanvas();
        resetGame();
    }, 1000);
}

//This function resets the game in the event of a tie or a win.
function resetGame() {
    //This for loop iterates through each HTML square element.
    for (let i = 0; i < 9; i++) {
        //This variable gets the HTML element i.
        let square = document.getElementById(String(i));
        //This removes the element's backgroundImage.
        square.style.backgroundImage = '';
    }
    //This resets our array so it is empty and we can start over.
    selectedSquares = [];
}
