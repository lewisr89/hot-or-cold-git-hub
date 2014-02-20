	
$(document).ready(function() {

	//Generate a random number between 1 and 100
	var randomNumber = Math.floor(Math.random() * 101);
    console.log(randomNumber);
    
    $('#submitButton').click(function(){
          var input = $('#guess').val();
          var guess= Math.abs(input);
          
    

          if ((guess == '') || (isNaN(guess)) || (guess < 1) || (guess > 100)) { 
                $('#message').html("Please put in a number bewteen 1 and 100");

              //Reset Text Box
              $('#message').focus();
              //Return back to user to make proper guess!
              return;
            }

          else if (guess == randomNumber){
                $("#message").html("You guessed it right!!").effect("pulsate", {times:4}, 2000);;
                $("#congrats").show(1000);
              }

          else if (guess < (randomNumber+10) && guess > (randomNumber-10)){
                $("#message").html("Really Hot!");
              }

          else if (guess < (randomNumber+20) && guess> (randomNumber-20)){
                $("#message").html("Hot");
              }

          else {
                $("#message").html("Cold");
              }

              $('#prevGuess').append(input).append(', ');
              $('#guess').val('');
         
          //onkeydown="if (event.keyCode == 13) document.getElementById('submitButton').click()"

	});

    $('#guess').keypress(function (event) {
        if (event.keyCode == 13) {
            $("#submitButton").click();
           
            return false;
        } 
    });

$('#newGame').click(function(){
    randomNumber = Math.floor(Math.random() * 101);
    console.log(randomNumber);
    $("#congrats").hide();
    $('#message').html('');
    $('#prevGuess').html('');
    $('#guess').val('');
  });


});

	