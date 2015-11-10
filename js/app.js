$(document).ready(function(){
	var secretNumber = Math.floor((Math.random() * 100) + 1);
	newGame(secretNumber);
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});
});

//Start a New Game
function newGame (secretNumber){
	var x = 0;
	$("#guessButton").on("click", function(event){
		event.preventDefault();
		x++;
		$("#count").text(x);
		var userGuess = $("#userGuess").val();
		//alert("Hi" + userGuess + ":" + secretNumber);
  		console.log(userGuess);	
  		numberDistance(newGame);
	});

//compare user guess with secret number	
function numberDistance (newGame){
	if(secretNumber == userGuess) {
		setFeedback("You guessed the secret number!");
	}
	else if(Math.abs(secretNumber - userGuess) > 5 && Math.abs(secretNumber - userGuess)< 10){
		setFeedback("You are getting HOT");
	}
	else if(Math.abs(secretNumber - userGuess) > 10 && Math.abs(secretNumber - userGuess)< 20){
		setFeedback("You are getting warmer");
	}
	else if(Math.abs(secretNumber - userGuess) > 10 && Math.abs(secretNumber - userGuess)< 20){
		setFeedback("You are getting warm");
	}
	else if(Math.abs(secretNumber - userGuess) > 20 && Math.abs(secretNumber - userGuess)< 30){
		setFeedback("You are getting cool");
	}
	else if(Math.abs(secretNumber - userGuess) > 30 && Math.abs(secretNumber - userGuess)< 40){
		setFeedback("You are getting cooler");
	}
	else if(Math.abs(secretNumber - userGuess) > 40){
		setFeedback("You are cold, try again");
	}
	else{
		setFeedback("Are you sure we are playing the same game?");
	}
}
  function setFeedback(feedback) {
        $('#feedback').text(feedback);
    }
};