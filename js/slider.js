$(function(){
	var width = 800;
	var animationSpeed = 1000;
	var pause = 3000;
	var $slider = $('#slider');
	var $slideContainer = $slider.find('.slides');
	var $slides = $slideContainer.find('.slide');
	var $prev = $('#slider-prev');
	var $next = $('#slider-next');
	var currentSlide = 1;
	var interval;
	
	$('#slider .slides').css('width', width * $slides.length + 'px');
	
	$prev.click(function(){
		if(currentSlide === 1){
				$slideContainer.animate({'margin-left': '-' + width * ($slides.length-1)}, animationSpeed);
				currentSlide = $slides.length;
			}else{
				$slideContainer.animate({'margin-left': '+=' + width}, animationSpeed)
				currentSlide--;
			}
	});
	
	$next.click(function(){
		if(currentSlide === $slides.length){
				$slideContainer.animate({'margin-left': 0}, animationSpeed);
				currentSlide = 1;
			}else{
				$slideContainer.animate({'margin-left': '-=' + width}, animationSpeed)
				currentSlide++;
			}
	});
	
	function startSlider(){
		interval = setInterval(function(){
		
			if(currentSlide === $slides.length){
				$slideContainer.animate({'margin-left': 0}, animationSpeed);
				currentSlide = 1;
			}else{
				$slideContainer.animate({'margin-left': '-=' + width}, animationSpeed)
				currentSlide++;
			}
		
		}, pause)
	}
	
	function pauseSlider(){
		clearInterval(interval);
	}
	
	$slider.on('mouseenter', pauseSlider).on('mouseleave', startSlider);
	$prev.on('mouseenter', pauseSlider).on('mouseleave', startSlider);
	$next.on('mouseenter', pauseSlider).on('mouseleave', startSlider);
	
	startSlider();

})