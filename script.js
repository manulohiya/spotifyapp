$(function() {

// submit event on form

var $track = $('#track');
var $form = $('#spotify-search');
var $results = $('#results');



  

// results template
  var _results = _.template($('#resultsTemplate').html());

//Returns the song and artist that the user searched for
$form.on('submit', function(){
 
 event.preventDefault();
 	$.get(
  'https://api.spotify.com/v1/search?type=track&q='+$track.val(),

  function(data) {
   	$results.empty();
    var i = 0;
    var max = 20;
    
    while (i< max){
    var trackName = data.tracks.items[i].name;
    var trackArtist = data.tracks.items[i].artists[0].name;
    var trackImage = data.tracks.items[i].album.images[1].url;
   	var trackPreview = data.tracks.items[i].preview_url;
    if(data.tracks.items[i].album.images[1].url !== null){
    	trackImage = data.tracks.items[i].album.images[1].url;
    	}
    else {
    	trackImage = '/Users/manulohiya/Downloads/rickroll.jpeg';
    	 }
    trackData = {trackName: trackName, trackArtist: trackArtist, trackImage: trackImage, trackPreview: trackPreview};
 	
 	
 	console.log(data);	
 
 //   console.log("song name: "+trackName);
 //   console.log("artist name: "+trackArtist);
 	console.log("preview: "+trackPreview);
 //   console.log("Song Data: "+ trackData);
 
    i = i+1;
	var $result = $(_results(trackData))
	$results.prepend($result);

	}


 
   // console.log(trackData);
  	
  	

  	});



});

});
