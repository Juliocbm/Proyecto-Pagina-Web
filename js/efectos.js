
$(document).ready(function(){
 
	$(window).scroll(function(){
		var barra = $(window).scrollTop();
		var posicion =  (barra * 0.05);
		
		$('body').css({
			'background-position': '0 -' + posicion + 'px'
		});
 
	});
 
});


function load() {
	var element = document.getElementById("txt-banner");
  
	element.classList.add("animated","infinite","bounceInLeft","delay-0s");
	
	function quitClass(){
		
		element.classList.remove("animated","infinite","bounceInLeft","delay-0s");
	}
	
	setTimeout(quitClass, 1000)
}
      window.onload = load;