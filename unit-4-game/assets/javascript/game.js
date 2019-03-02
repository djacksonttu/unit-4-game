$(document).ready(function () {
    var Random = Math.floor(Math.random() * 69) + 30
   

    $('#randomNumber').text(Random);
  
    var num = Math.floor(Math.random() * 11 + 1)

    var userScore = 0;
    var wins = 0;
    var losses = 0;
    

    $('#wins').text(wins);
    $('#losses').text(losses);
   

    function startGame() {
    
        Random = Math.floor(Math.random() * 69) + 30;
        console.log(Random)
        $('#randomNumber').text(Random);
        num = Math.floor(Math.random() * 11 + 1);
        
        userScore = 0;
        $('#finalScore').text(userScore);
    }
  
    function winner() {
        wins++;
        $('#Wins').text(wins);
        startGame();
    }
    
    function loser() {
        losses++;
        $('#losses').text(losses);
        startGame()
    }
   
    $('#topaz').on('click', function () {
       
        userScore = userScore+ num;
        console.log("New userScore= " + userScore);
        $('#finalScore').text(userScore);
        

        if (userScore == Random) {
            winner();
        }
        else if (userScore > Random) {
            loser();
        }
    })
    $('#ruby').on('click', function () {
        userScore = userScore + num;
        console.log("New userScore= " + userScore);
        $('#finalScore').text(userScore);
        if (userScore == Random) {
            winner();
        }
        else if (userScore > Random) {
            loser();
        }
    })
    $('#emerald').on('click', function () {
        userScore = userScore + num;
        console.log("New userScore = " + userScore);
        $('#finalScore').text(userScore);
        
        if (userScore == Random) {
            winner();
        }
        else if (userScore > Random) {
            loser();
        }
    })
    $('#diamond').on('click', function () {
        userScore = userScore + num;
        console.log("New userScore= " + userScore);
        $('#finalTotal').text(userScore);

        if (userScore == Random) {
            winner();
        }
        else if (userScore > Random) {
            loser();
        }
    });
});

//PsuedoCode
// Game with 4 crystal and random results  
// Every crystal needs to have a random number between 1-12
// new number should be generated every single time we win or lose
// generate new number to the 4 crystal
// on click any CRYSTAL, it should be adding to the previous result
// until it hits the total score
// if it is not equal then we start over
// if it is greater than the random result, we add to the loss counter 
// if it is equal then we increase the win counter 