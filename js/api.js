$(document).ready(function(){

	var input;
	var uploads = "UU8SnqExzYgo_rbZmxwvupww";
	var nightFlights = "PLX4zKNveXF_w9yYCUzOfnz99rhDmOxKRG";
	

	$(".nightFlights").on('click', function(){
					$('#results').empty();
					  input = nightFlights;
					  console.log(input);
					  getVids(input);

				});

	$(".allUploads").on('click', function(){
					$('#results').empty();
					input = uploads;
					console.log(input);
					getVids(input);
				});



	function getVids(input){
		$.get(
		"https://www.googleapis.com/youtube/v3/playlistItems",{
			part: 'snippet',
			maxResults: 10,
			// order: 'date',
			playlistId: input,
			key: 'AIzaSyBJax5posLI_66Sfy1RMnVE3_oT1xYg6gI'},

			function(data) {
				var output;
				$.each(data.items, function(i, item){
					
					videoTitle = '<h3>' + item.snippet.title + '</h3>';
					videoId = item.snippet.resourceId.videoId ;
					description = '<p>' + item.snippet.description + '</p>';
					output = '<div class= "api-video"><iframe src=\"//www.youtube.com/embed/'+videoId+'\"></iframe></div>';
					videoComplete = ' <div class=\"api-video-full\"> ' + videoTitle + description + output + '</div>';

					
				
					
				
					$('#results').append(videoComplete);
			

				})

			}

		);

			

			
		


	}






});




