var randomvariable1=Math.random()*6+1;
randomvariable1=Math.floor(randomvariable1);
var randomvariable2=Math.random()*6;
randomvariable2=Math.floor(randomvariable2)+1;
var image1="dice"+randomvariable1+".png";
var image2="dice"+randomvariable2+".png";
document.querySelectorAll("img")[0].setAttribute("src",image1);
document.querySelectorAll("img")[1].setAttribute("src",image2);
if(randomvariable1>randomvariable2)
{
  document.querySelector("h1").innerHTML="Player 1 Wins";
}
else if(randomvariable1===randomvariable2)
{
  document.querySelector("h1").innerHTML="DRAW";
}
else
{
  document.querySelector("h1").innerHTML="Player 2 Wins";
}
