	
$(document).ready(function() {

	//Generate a random number between 1 and 100
	var answer = Math.floor(Math.random() * 101);
    console.log(answer);
    
    $('#submitButton').click(function(){
          var input = $('#guess').val();
          var guess= Math.abs(input);
          
    
          //Check if the input is valid
          if ((guess == '') || (isNaN(guess)) || (guess < 1) || (guess > 100)) { 
                $('#message').html("Please put in a number between 1 and 100");

              //Reset Text Box
              $('#message').focus();
              //Return back to user to make proper guess!
              return;
            }

          //Check if the input is correct, hot, or cold  
          else if (guess == answer){
                $("#message").html("You guessed it right!!").effect("pulsate", {times:4}, 2000);;
                $("#congrats").show(1000);
              }

          else if (guess < (answer+10) && guess > (answer-10)){
                $("#message").html("Really Hot!");
              }

          else if (guess < (answer+20) && guess> (answer-20)){
                $("#message").html("Hot");
              }

          else {
                $("#message").html("Cold");
              }

    
        //List Guesses on the bottom
         if  ($("#prevGuess").html()==''){ 

         		$('#prevGuess').append(input)
         		$('#guess').val('');}
         else { 
         	    $('#prevGuess').append(', ').append(input);
                $('#guess').val('');
            }
                 
	});
    
    //Allows the enter key to be functional
    $('#guess').keypress(function (event) {
        if (event.keyCode == 13) {
            $("#submitButton").click();
           
            event.preventDefault();
        } 
    });


//Starts a New Game
$('#newGame').click(function(){
    answer = Math.floor(Math.random() * 101);
    console.log(answer);
    $("#congrats").hide();
    $('#message').html('');
    $('#prevGuess').html('');
    $('#guess').val('');
  });


});

	