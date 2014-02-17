	
$(document).ready(function() {

	//Generate a random number between 1 and 100
	var randomNumber = Math.floor(Math.random() * 101);
    console.log(randomNumber);


        $('#submitButton').click(function(){
          var input = $('#guess').val();
          var guess= Math.abs(input);
          

          if ((input == '') || (isNaN(input)) || (input < 1) || (input > 100)) { 
                $('#message').html("Please put in a number bewteen 1 and 100");
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

	