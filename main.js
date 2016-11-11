/*
=======================================================

** Week 4 - Project 2**
*** jQuery Mania ***


=======================================================
*/

// Add your JS here.


$(document).ready(function() {


  $('.alertme').click(function(){
      alert('It seems so easy..')
    });


 //2.
 $('.clickme').click(function(){
   $('.clickme').text('I was clicked')
 })


//3.
$('.addStyle').click(function(){
  $('button').addClass("buttonStyle")

});

//4.
$('.addDifferentStyle').click(function(){
  $('.addDifferentStyle').addClass("addUniqueStyle")
})

//5.
$('.removeBtn').click(function(){
  $('button').removeClass()
})


//6.
$('.clickToggle').click(function(){
  $('button').toggleClass("buttonStyle")
})

//7.
$('.squareBtn').click(function(){
  $('.square').hide("slow")
})


//8.
$('.circle').click(function(){
  $('.circle').hide("slow")
})


//9.


$( ".toggleRedSquare" ).click(function() {
  $( ".redSquare" ).toggle( "slow", function() {
  });
});




});  // Close: $(document).ready(function() {
