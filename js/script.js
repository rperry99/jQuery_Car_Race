//Script.js
$(function(){
  //Click the go button
  $('#go').click(function() {
      //Function that checks to see if a car has won the race
      function checkIfComplete(){
        //If no car has finished
        if(isComplete == false){
          isComplete = true;
        }else {
          place='second';
        }
      }

      //Get Width of cars
      var carWidth = $('#car1').width();

      //Get the width of the racetrack
      var raceTrackWidth = $(window).width() - carWidth;

      //Generate a random number between 1 & 5000
      var raceTime1 = Math.floor((Math.random() * 5000) + 1);
      var raceTime2 = Math.floor((Math.random() * 5000) + 1);

      //Set flag variable to false by defalt
      var isComplete = false;

      //Set a flag variable to first by default
      var place = 'first';

      //Animate Car 1
      $('#car1').animate({
        //Move the Car width of the racetrack
        left: raceTrackWidth
      }, raceTime1, function() {
        //Animation is Complete

        //Run a function
        checkIfComplete();

        //Give some text feedback in the race info box
        $('#raceInfo1 span').text('Finished in ' + place + ' place and clocked in at ' + raceTime1 + ' milliseconds!');
      });

        //Animate Car 2
        $('#car2').animate({
          //Move the Car width of the racetrack
          left: raceTrackWidth
        }, raceTime2, function() {
          //Animation is Complete

          //Run a function
          checkIfComplete();

          //Give some text feedback in the race info box
          $('#raceInfo2 span').text('Finished in ' + place + ' place and clocked in at ' + raceTime2 + ' milliseconds!');
        });
  });

  //Reset the race
  $('#reset').click(function() {
    $('.car').css('left', '0');
    $('.raceInfo span').text('');
  });
});
