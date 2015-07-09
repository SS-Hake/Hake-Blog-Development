$( document ).ready(function() {

  $('.river').flip({
  	axis: "y",
  	reverse: false,
  	trigger: "hover",
  	speed: 1000
  });

  $('#card-1').flip({
  	axis: "y", // y or x
    reverse: false, // true and false
    trigger: "hover", // click or hover
    speed: 1000
  })
});