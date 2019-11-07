

var wordChoice = ["eleven", "upsidedownworld", "demagorgon", "mikebyers", "joycebyers"];
var choice = Math.floor(Math.random()*wordChoice.length);
var win = 0;
var loss = 0;
var guessesLeft = 10;
var underScores = [];
var userGuesses = [];
var randWord;
var wrongLetter = [];
var winCounter = 0;


function startGame () 
{
   randWord = wordChoice[choice];

   for(var i = 0; i < randWord.length; i++) 
   {
   underScores.push(" _ ");
   }
   document.getElementById('currentWord').textContent = underScores.join(" ");
   document.getElementById('guessesRemaining').textContent = guessesLeft;
}

function winOrLose() 
{
    if (winCounter === randWord.length)
    {
        document.getElementById("wins").innerHTML = win;
        function reloadPage(){
        window.location.reload();
        }
    }
    else if(guessesLeft === 0)
    {
        alert("You're a Poor Guesser.");
    }
}

function lettersGuessed()
{
    if (userGuesses != wrongLetter) 
        {
            document.getElementById("lettersAlreadyGuessed").innerHTML = wrongLetter;
        }
}


document.onkeyup = function(event)
{
    userGuesses = event.key;
    
    if(randWord.indexOf(userGuesses) > -1)
    {
        for(var i = 0; i < randWord.length; i++)
        {
            if(randWord[i] === userGuesses) 
            {
                underScores[i] = userGuesses;
                console.log(underScores);
                winCounter++;
                winOrLose();
                document.getElementById("currentWord").innerHTML = underScores.join("");
            }
        }
    }
    else
    {
        wrongLetter.push(userGuesses);
        guessesLeft--;
        document.getElementById("guessesRemaining").innerHTML = guessesLeft;
        winOrLose();
        lettersGuessed();
    }
    
}

document.getElementById("guess").onclick = function() {
    startGame();
}


    startGame();
  




