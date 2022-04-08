var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomDiceImage1 = "dice" + randomNumber1 + ".png";
var randomDiceSource1 = "/images/" + randomDiceImage1;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomDiceSource1);

var randomNumber2 = Math.floor(Math.random()*6)+1;
var randomDiceImage2 = "dice" + randomNumber2 + ".png";
var randomDiceSource2 = "/images/" + randomDiceImage2;
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomDiceSource2);
 

// var resultImage1 = "<img src = " + "/images" + "/i1.ico";
var resultImage1 = "<img "+"class = " + "'resultI'" +"src="+ "'https://gopalverma1303.github.io/IncredibleDice/images/i1.png'></img>";
var resultImage2 = "<img "+"class = " + "'resultI'" +"src="+ "'https://gopalverma1303.github.io/IncredibleDice/images/i2.png'></img>";
var resultImage3 = "<img "+"class = " + "'resultI'" +"src="+ "'https://gopalverma1303.github.io/IncredibleDice/images/i3.png'></img>";


if(randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = resultImage1 + " Bhai mai jeeta";    
}
else if(randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = resultImage2 + " Bhai tu jeeta";
}
else {
    document.querySelector("h1").innerHTML = resultImage3 + " Bhai dubara phekhde";
}
