var location1;
var location2;
var location3;
var guess;
var hits = 0;
var guesses = 0;
var isSunk = false;


location1 = 3;
location2 = 4;
location3 = 5;

while (!isSunk) {
    guess = prompt("Ready, aim, fire! (enter a number from 0 - 6): ");
    
    if (guess > 6 || guess < 0) {
        guess = prompt("Enter a proper guess! (a number from 0 - 6): ");
    }        
    else {
        guesses = guesses + 1;
        
        if (guess == location1 || guess == location2 || guess == location3) {
            hits = hits + 1;
            alert("Hit!");
            if (hits == 3 )
            {
                alert("You sank my battleship!");
                isSunk = true;
            }
        } else {
            alert("Miss!");
        }
    }
}

alert("You guessed it in " + guesses + " guesses.");