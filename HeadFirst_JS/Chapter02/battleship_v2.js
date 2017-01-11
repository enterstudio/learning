var location1 = 3;
var location2 = 4;
var location3 = 5;

var guess;
var hits = 0;
var guesses = 0;
var isSunk = false;


while (!isSunk) {
    guess = prompt("Ready, aim, fire! (enter a number from 0 - 6): ");   
    
    if (guess == null) {
        alert("No game. Thanks.");
        break;
    }
    if (guess > 6 || guess < 0) {
        guess = prompt("Please enter a valid cell number!");
    }        
    else {
        reusedNum = false;
        guesses = guesses + 1;
        
        if (guess == location1 || guess == location2 || guess == location3) {
            

            if (hits  == 0) {
                prevHits [hits] = guess;        // If first hit, save #
            } 
            else if (hits == 1) {              
               // Check if the hit number was reused
               if (guess == prevHits [0] || guess == prevHits [1]) {
                    alert("You already used that number");
                    reusedNum = true;
                    }
               else
                    prevHits [hits] = guess;
            }

            // If it's a legit hit (not a reused hit number)
            if (!reusedNum) { 
                hits = hits + 1;
                alert("Hit!");
                if (hits == 3 )
                {
                    alert("You sank my battleship!");
                    isSunk = true;
                }
            }
        } else {
            alert("Miss!");
        }
    }
}

alert("You guessed it in " + guesses + " guesses.");