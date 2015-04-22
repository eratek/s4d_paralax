$(function () {
    var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', 'static/audio/bensound-funnysong.mp3');
    // audioElement.setAttribute('autoplay', 'autoplay');
    // audioElement.load()

    $.get();

    audioElement.addEventListener("load", function() {
        audioElement.play();
    }, true);

    var musicState = true;
    $('#music_btn').click(function() {
        if (musicState === true) {
            audioElement.pause();
            musicState = false;
            $(this).css('background', 'url("static/img/music_btn.png") no-repeat -47px 0');
        }
        else {
            audioElement.play();
            musicState = true;
            $(this).css('background', 'url("static/img/music_btn.png") no-repeat 0 0');
        }
    });


});