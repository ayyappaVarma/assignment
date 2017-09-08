var secretNumber = 4;
var stringGuess = console.log("guess a number");
var guess = number(stringGuess);
if(number(guess)===secretNumber)
{
	console.log("you got it right");
}
else if(number(guess)>secretNumber)
{
	console.log("too high. guess again");
}
else
{
	console.log("too low. guess again");
}