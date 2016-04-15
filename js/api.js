

$(document).ready(function(){

	function getVids(){
		$.get(
		"https://www.googleapis.com/youtube/v3/playlistItems",{
			part: 'snippet',
			maxResults: 10,
			order: 'date',
			playlistId: "UU8SnqExzYgo_rbZmxwvupww",
			key: 'AIzaSyBJax5posLI_66Sfy1RMnVE3_oT1xYg6gI'},

			function(data) {
				var output;
				$.each(data.items, function(i, item){
					
					videoTitle = item.snippet.title + '<br/>';
					videoId = item.snippet.resourceId.videoId ;
					description = item.snippet.description;
					output = '<li><iframe src=\"//www.youtube.com/embed/'+videoId+'\"></iframe></li>';

					$('#results').append(videoTitle, description, output, '<hr />');

				})

			}
		);


	}


// $('#nightFlights').click(function(){
// 						$('nfVideos:hidden').show();
// 						$('nfVideos:visible').hide();

// 					})


getVids();



});




