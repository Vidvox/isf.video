$( function() {

	$('.info-blocks').masonry()

} )

$('.hamburger').click (function(){
  $(this).add('#nav nav').toggleClass('open');
});