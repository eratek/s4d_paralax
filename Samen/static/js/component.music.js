$(function () {
 var audioElement = document.createElement('audio');
  audioElement.setAttribute('src', 'audio.mp3');
  audioElement.setAttribute('autoplay', 'autoplay');
  //audioElement.load()

  $.get();

  audioElement.addEventListener("load", function() {
      audioElement.play();
  }, true);

  $('.music_btn').toggle(function() {
      // audioElement.play();
      console.log("click1");
  }, function() {
	    // audioElement.pause();
	  	console.log("click2");
  });
});