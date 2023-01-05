
let randomNum = Math.floor(Math.random()*100)+1;
let guessButton = document.getElementById("guess-button");
let userInput = document.getElementById("user-input");
let userResult = document.getElementById("user-result");
let resetButton = document.getElementById("reset-button");
let chanceLeft = document.getElementById("chance-left");
let guessedNumbers = document.getElementById("guessed-numbers");
let imagesArea = document.getElementById("images-area")
let theRandomNumber= document.getElementById("random-number")
let chances = 5;
let values=[];


guessButton.addEventListener("click",play);
resetButton.addEventListener("click",reset);
userInput.addEventListener("focus",function(){userInput.value=""});

console.log("정답",randomNum)

function play(){
    
    let userValue = userInput.value;
    chances--;
    
   

    for(let i=0; i<values.length; i++)
    {
        if(values[i]==userValue)
        {
            imagesArea.src="./images/miss.gif"
            userResult.textContent="You put previous number or numbers"
            chances++;
            
            return;
        }
    }
    if((userValue>100)||(userValue<0)||userValue=="")
    {
        imagesArea.src="./images/miss.gif"
        userResult.textContent = "Please put number between 100 to 1"
        if(chances<5)
        {
            chances++;
            
        }
        return;
    }

    chanceLeft.textContent = `Chance: ${chances}`
    
    

    if(chances==0)
    {
        imagesArea.src="./images/fail.gif"
        userResult.textContent = "WHAT A LOSER!! YOU LOST!"
        theRandomNumber.textContent = randomNum;
        guessButton.disabled=true;
        return;
    }
    else if(randomNum>userValue)
    {
        imagesArea.src="./images/up.gif"
        userResult.textContent = "UP!"
    }
    else if(randomNum<userValue)
    {
        imagesArea.src="./images/down.gif"
        userResult.textContent = "DOWN!"
    }
    else if(randomNum==userValue)
    {
        imagesArea.src="./images/win.gif"
        userResult.textContent = "YOU GOT IT MATE!"
        guessButton.disabled=true;
    }

    values.push(userValue);
    guessedNumbers.textContent=values
    
}
function reset()
{
    randomNum = Math.floor(Math.random()*100)+1;
    console.log("정답",randomNum)
    chances=5;
    guessButton.disabled=false;
    chanceLeft.textContent = `Chance: ${chances}`
    userResult.textContent = "Put any number please!"
    values=[];
    userInput.value=""
    guessedNumbers.textContent="Your numbers"
    imagesArea.src="./images/reset.gif"
    theRandomNumber.textContent = "the number will appear at here";
}
