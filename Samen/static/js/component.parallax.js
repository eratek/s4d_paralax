var easingFunctions = {
        // no easing, no acceleration
        linear: function (t) { return t },
        // accelerating from zero velocity
        easeInQuad: function (t) { return t*t },
        // decelerating to zero velocity
        easeOutQuad: function (t) { return t*(2-t) },
        // acceleration until halfway, then deceleration
        easeInOutQuad: function (t) { return t<.5 ? 2*t*t : -1+(4-2*t)*t },
        // accelerating from zero velocity
        easeInCubic: function (t) { return t*t*t },
        // decelerating to zero velocity
        easeOutCubic: function (t) { return (--t)*t*t+1 },
        // acceleration until halfway, then deceleration
        easeInOutCubic: function (t) { return t<.5 ? 4*t*t*t : (t-1)*(2*t-2)*(2*t-2)+1 },
        // accelerating from zero velocity
        easeInQuart: function (t) { return t*t*t*t },
        // decelerating to zero velocity
        easeOutQuart: function (t) { return 1-(--t)*t*t*t },
        // acceleration until halfway, then deceleration
        easeInOutQuart: function (t) { return t<.5 ? 8*t*t*t*t : 1-8*(--t)*t*t*t },
        // accelerating from zero velocity
        easeInQuint: function (t) { return t*t*t*t*t },
        // decelerating to zero velocity
        easeOutQuint: function (t) { return 1+(--t)*t*t*t*t },
        // acceleration until halfway, then deceleration
        easeInOutQuint: function (t) { return t<.5 ? 16*t*t*t*t*t : 1+16*(--t)*t*t*t*t }
}


function mapPar(x, in_min,  in_max,  out_min,  out_max, easeFunction){
    if(x < in_min){
        return x = out_min;
    }
    if(x > in_max){
        return x = out_max;
    }

    easingInput = (x-in_min) / (in_max - in_min);

    var outputVoorEasing = (x - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
    if(easeFunction !== undefined) {
        return  easeFunction(easingInput) * outputVoorEasing;
    } else {
        return outputVoorEasing;
    }
}

$( function() {
    $(window).scroll( function( eventInfo ) {
        var scrollPos =  $("body").scrollTop();
        var topSide    = mapPar(scrollPos, 0,3300, 200,3700);
        $("#charByte").css("top", topSide);
    })
})


/*
$( function() {
    $(window).scroll( function( eventInfo ) {
        var scrollPos =  $("body").scrollTop();
        var topSide    = mapPar(scrollPos, 0,3300, 200,3700, easingFunctions.easeInOutQuad);
        $("#charByte").css("top", topSide);
    })
})

$("#btnLoadScroll").click(function(event){
        event.preventDefault();
        $("body").animate({"scrollTop": "3280px"}, 6000, "easeOutExpo" )
    }
)


$("#btnLoadScroll").click(function(){
    $('body').animate({
        scrollTop: "3280px"
    },500, 'easeOutBounce');

    return false;
});*/

function getRandom(num) {
    var randomNum = Math.floor(Math.random() * num);
    return randomNum;
}

function clouds(){


}

var pixelLocation =  $("startParallax").offset();

if(pixelLocation.top > 0 && pixelLocation.top > 960 ){
    clouds();
}



