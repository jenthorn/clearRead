$.fn.clearRead = function() {
		//this var stores the information that's returned from finding the id of clearRead and getting the html inside of that id
		var articleText = this.html();
		

		$('body').append('<div class="clearReadSwitch"></div>');

		//when the clearReadSwitch button is clicked this function will run
		$('.clearReadSwitch').on('click',function(){

			//this is an advanced css selector that gets all the child elements inside of body, .hide is a method that hides everything inside of the body tags. 
			$('body > *').hide();

			//this is building a place for articleText to go inside of
			var container = '<div class="clearReadContainer"> <div class="clearReadClose">Close</div> <div class="clearReadContrast">Low Contrast Mode</div> <div class="wrapper">' + articleText + '</div> </div>';

			//selecting the html on the page and adds a class of clearRead to show the styles from that sheet
			$('html').addClass('clearRead');

			//selecting the body and adding the variable container
			$('body').append(container);

			$('.clearReadContrast').on('click', function() {
				$('html').toggleClass('lowContrast');
				var text = $(this).text();
				if (text === 'Low Contrast Mode') {
					$(this).text('High Contrast Mode');
				} else if (text === 'High Contrast Mode') {
					$(this).text('Low Contrast Mode');
				}
			});

		});

	//after clicking the close button to bring you back to original page
		//selecting close button and undoing above to close reader view
		$('body').on('click','.clearReadClose',function(){
			//removing div with class of clearReadContainer from body
			$('.clearReadContainer').remove();
			//removing class of clearRead from html
			$('html').removeClass('clearRead lowContrast'); 	
			//selecting all child elements inside of body show them
			$('body > *').show();
		});
}