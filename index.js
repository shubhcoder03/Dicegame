var randomnum1 = Math.floor(Math.random()*6)+1;
var randomImage = "dice"+randomnum1+".png";
var source="images/"+randomImage;
var image = document.querySelectorAll("img")[0];
image.setAttribute("src",source);

var randomnum2 = Math.floor(Math.random()*6)+1;
var randomImage2="dice"+randomnum2+".png";
var source1 ="images/"+randomImage2;
var image1 = document.querySelectorAll("img")[1];
image1.setAttribute("src",source1)

if(randomnum1<randomnum2){
    document.querySelector("h1").innerHTML="Player 2 Wins👑";
}

else if(randomnum1>randomnum2){
    document.querySelector("h1").innerHTML= "👑Player 1 Wins";
}

else{
    document.querySelector("h1").innerHTML= "Draw !";
}

