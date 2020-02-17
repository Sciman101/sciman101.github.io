$(document).ready(function() {

	var format = '<div class="artwrapper" data-tags="TAGS"><img class="artwork" src="FNAME" alt="DESC"></div>';

	var activeTags = [];

	//Load art from JSON index
	$.getJSON("art/index.json", function(result) {

		var tags = [];

		//Run through each array result
		$.each(result,function(index,val) {

			//String containing a space-seperated list of all tags attached to the image
			var taglist = '';

			//Add each tag present on the image to the tag list at the top of the screen
			$.each(val.tags,function(index,tag) {
				//If not already present in the master taglist, add it
				if (tags.indexOf(tag) <= -1) {
					tags.push(tag);
				}
				//Add tag to individual tag list
				taglist += tag + ' ';
			});
			//Trim tag list length
			taglist = taglist.substring(0,taglist.length-1);

			//Append image to container
			$('#artcontainer').append(format.replace('FNAME','art/'+val.image).replace('DESC',val.name).replace('TAGS',taglist));
		});

		//Create tag list in page
		for (var i=0;i<tags.length;i++) {
			$('#tagcontainer').append('<button class=\'tagbutton\'>' + tags[i] + '</button>');
		}

		//Define function to run when the tag is clicked
		//This HAS to be done in this event so it immedietly follows the creation of the tag things
		$('.tagbutton').click(function() {
			
			var btn = $(this);
			btn.toggleClass('selected');

			var active = btn.hasClass('selected');
			var tag = btn.text();
			if (active) {
				//Add tag element
				activeTags.push(tag);
			}else{
				//Remove tag element
				var index = activeTags.indexOf(tag);
				if (index > -1) {
					activeTags.splice(index,1);
				}
			}

			if (activeTags.length == 0) {
				//Restore all images
				$('.artwrapper').show();
			}else{
				//Show all images
				$('.artwrapper').show();
				//Hide everything that doesn't have matching tags
				$.each(activeTags, function(index,tag) {
					$('.artwrapper').not('[data-tags~=' + tag + ']').hide();
				});
			}




		});

		//Listener to fullscreen image on click
		$('.artwork').click(function() {
			var art = $(this);
			var fs = $('#fullscreen');

			fs.show();
			fs.children(':first').attr('src',art.attr('src'));

			$('#fullscreen-caption').text(art.attr('alt'));
		});

		//Hide fullscreen display
		$('#fullscreen').click(function() {
			$(this).hide();
		});

	});

	//Function to fully clear tag selection
	$('#cleartags').click(function() {
		$('.tagbutton').removeClass('selected');
		//Clear array
		activeTags = [];
		//Show all
		$('.artwrapper').show();
	});

	//Function to toggle the display of tags
	$('#tagdisplaytoggle').click(function() {
		$('#tagcontainer').toggleClass('hidden');
	});

});