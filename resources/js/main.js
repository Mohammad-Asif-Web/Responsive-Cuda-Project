$(document).ready(function(){


	//STICKY MENU CODE
	$(".js--services-section").waypoint(function(direction){
		if (direction == "down"){
				$("nav").addClass("sticky");
			} else {
				$("nav").removeClass("sticky");
			}
	});


	//MIXITUP (PORTFOLIO SECTION) CODE
	var mixer = mixitup('.container');
});