$(function(){var t=document.createElement("audio");t.setAttribute("src","static/audio/bensound-funnysong.mp3"),t.setAttribute("autoplay","autoplay"),t.load(),$.get(),t.addEventListener("load",function(){t.play()},!0);var n=!0;$("#music_btn").click(function(){n===!0?(t.pause(),n=!1,$(this).css("background",'url("static/img/music_btn.png") no-repeat -65px 0')):(t.play(),n=!0,$(this).css("background",'url("static/img/music_btn.png") no-repeat 0 0'))})});