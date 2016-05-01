jQuery(document).ready(function($){
	
	var $_GET = {};

	document.location.search.replace(/\??(?:([^=]+)=([^&]*)&?)/g, function () {
		function decode(s) {
			return decodeURIComponent(s.split("+").join(" "));
		}
	
		$_GET[decode(arguments[1])] = decode(arguments[2]);
	});
	
	var id = $_GET["id"];
		
	var etobicokeMap = '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11542.99422107041!2d-79.537069!3d43.674199!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xfb2e6909e5dbd7c1!2sSt.+George&#39;s+Golf+and+Country+Club!5e0!3m2!1szh-CN!2sca!4v1421616969606" width="900" height="300" frameborder="0" style="border:0"></iframe>';
	
	var hamiltonMap = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11629.587367496584!2d-79.97547911495671!3d43.22213872872349!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882c85a2ad672d85%3A0xddecd2a4f21f4248!2sHamilton+Golf+and+Country+Club!5e0!3m2!1szh-CN!2sca!4v1421617243123" width="900" height="300" frameborder="0" style="border:0"></iframe>';
	
	var kitchenerMap = '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11586.234962193414!2d-80.536308!3d43.44893099999999!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x5f5297d5c3b281!2sWestmount+Golf+and+County+Club!5e0!3m2!1szh-CN!2sca!4v1421617070024" width="900" height="300" frameborder="0" style="border:0"></iframe>';
	
	var woodbridgeMap = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11519.269004290189!2d-79.59712995000004!3d43.79740500000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b251bd3eb3bd9%3A0xbf915a33044144d3!2sThe+Country+Club!5e0!3m2!1szh-CN!2sca!4v1421617121400" width="900" height="300" frameborder="0" style="border:0"></iframe>';
	
	var moreMap = '';
	
	var tabItems = $('.cd-tabs-navigation a'),
		tabContentWrapper = $('.cd-tabs-content');
	
	if(id != undefined){
		var tab = $('#'+id);
		var content = tabContentWrapper.find('li[data-content="'+id+'"]');
	
		tabItems.removeClass('selected');
		tab.addClass('selected');
		content.addClass('selected').siblings('li').removeClass('selected');
		content.find('.map').html(eval(id+'Map'))
	}

	tabItems.on('click', function(event){
		event.preventDefault();
		var selectedItem = $(this);
		if(!selectedItem.hasClass('selected')) {
			var selectedTab = selectedItem.data('content'),
				selectedContent = tabContentWrapper.find('li[data-content="'+selectedTab+'"]');
			
			tabItems.removeClass('selected');
			selectedItem.addClass('selected');
			selectedContent.addClass('selected').siblings('li').removeClass('selected');
			
			selectedContent.find('.map').html(eval(selectedItem.attr('id')+'Map'));
			
			//animate tabContentWrapper height when 
			var	slectedContentHeight = selectedContent.innerHeight();
			tabContentWrapper.animate({
				'height': slectedContentHeight
			}, 200);
		}
	});

	//hide the .cd-tabs::after element when tabbed navigation has scrolled to the end (mobile version)
	checkScrolling($('.cd-tabs .nav'));
	$(window).on('resize', function(){
		checkScrolling($('.cd-tabs .nav'));
		tabContentWrapper.css('height', 'auto');
	});
	$('.cd-tabs .nav').on('scroll', function(){ 
		checkScrolling($(this));
	});

	function checkScrolling(tabs){
		var totalTabWidth = parseInt(tabs.children('.cd-tabs-navigation').width()),
		 	tabsViewport = parseInt(tabs.width());
		if( tabs.scrollLeft() >= totalTabWidth - tabsViewport) {
			tabs.parent('.cd-tabs').addClass('is-ended');
		} else {
			tabs.parent('.cd-tabs').removeClass('is-ended');
		}
	}
});