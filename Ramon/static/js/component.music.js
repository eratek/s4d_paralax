var audio = document.createElement("audio");
audio.src = "files/windows%20default.mp3";

delay(500).audio.play();

$('#play_audio').click(function () {
    var audio = document.createElement("audio");
    audio.src = "files/windows%20default.mp3";

    audio.muted();

});