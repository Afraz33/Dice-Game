var randomNumber = Math.floor(Math.random() * 6) + 1;
var randomDiceImage = "dice" + randomNumber + ".png";
var randomImageSource = "images/" + randomDiceImage;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);

// Player 2
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage2 = "dice" + randomNumber2 + ".png";
var randomImageSource2 = "images/" + randomDiceImage2;
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImageSource2);

var randomNumber3 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage3 = "dice" + randomNumber3 + ".png";
var randomImageSource3 = "images/" + randomDiceImage3;
var image2 = document.querySelectorAll("img")[2];
image2.setAttribute("src", randomImageSource3);

if(randomNumber > randomNumber2){
  document.querySelector("h1").innerHTML = "Player 1 Wins!";
}
else if(randomNumber2 > randomNumber){
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
    }

    