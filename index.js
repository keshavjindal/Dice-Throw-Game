var randomNumber1 = getRandomNumber();
var randomImage1 = "images/dice" + randomNumber1 + ".png";
document.querySelectorAll("img")[0].setAttribute("src" , randomImage1);

var randomNumber2 = getRandomNumber();
var randomImage2 = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src" , randomImage2);

if(randomNumber1 > randomNumber2)
{
    document.querySelector("h1").innerHTML = "Player 1 wins!";
}
else if(randomNumber2 > randomNumber1)
{
    document.querySelector("h1").innerHTML = "Player 2 wins!";
}
else
{
    document.querySelector("h1").innerHTML = "Draw!";
}

function getRandomNumber(){
    
    var randomnumber1 = Math.random(); // [0 , 1)
    randomnumber1 = randomnumber1 * 6; // [0 , 6)
    randomnumber1 = Math.floor(randomnumber1); // {0 , 1 , 2 , 3 , 4 , 5}
    randomnumber1 = randomnumber1 + 1; // {1 , 2 , 3 , 4 , 5 , 6}
    
    return randomnumber1;
}
