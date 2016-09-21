$(document).ready(function() {
	$('.ryu').mouseenter(function() {
		$('.still').hide();
		$('.ready').show();
	})
	.mouseleave(function() {
		$('.ready').hide();
		$('.still').show();
	})
	
	.mousedown(function(){
		playHadouken();
		$('.ready').hide();
	 	$('.throwing').show();
	 	$('.flame').finish().show().animate(
	 		{'left': '1020px'},
	 		800,
	 		function(){
	 			$('.flame').hide();
	 			$('.flame').css('left','534px');
	 		});
	})
	.mouseup(function() {
	  	$('.throwing').hide();
	  	$('.ready').show();
	})
	$('body').keydown(function( event ) {
  		if (event.which == 88) {
  			$('.cool').show();
  			$('.ready').hide();
  			$('.still').hide();
  			$('.throwing').hide();
  		}
  	$('body').keyup(function() {
  		$('.cool').hide();
  		$('.ready').hide();
  		$('.still').show();
  		$('.throwing').hide();
  	})
  	});
});

function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}

// $(document).ready(function(){
// 	$('.ryu').keydown(['x'], ('.cool').show());
// });
