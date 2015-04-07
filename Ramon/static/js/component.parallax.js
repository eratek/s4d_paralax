function mapPar(x, in_min,  in_max,  out_min,  out_max){
    if(x < in_min){
        return x = out_min;
    }
    if(x > in_max){
        return x = out_max;
    }
    return (x - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

$( function() {
    $(window).scroll( function( eventInfo ) {
        var scrollPos =  $("body").scrollTop();
        var topSide    = mapPar(scrollPos, 0,3300, 200,3700);
        $("#charByte").css("top", topSide);
    })
})