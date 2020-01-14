$(document).ready(function() {
	 //secon header
	  $(window).scroll(function(){
	  		var top=$(window).scrollTop();

	  		if(top>60)
	  		{
	  			$(".navbar-top").addClass('secondary');
	  		} 
	  		else if($(".navbar-top").hasClass('secondary')){
	  			$(".navbar-top").removeClass('secondary');
	  		}

	  });
	});

