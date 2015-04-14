var easingFunctions = {
    // x: optioneel t: current time, b: begInnIng value, c: change In value, d: duration
    easeInQuad: function (x, t, b, c, d) {
        return c*(t/=d)*t + b;
    },
    easeOutQuad: function (x, t, b, c, d) {
        return -c *(t/=d)*(t-2) + b;
    },
    easeInOutQuad: function (x, t, b, c, d) {
        if ((t/=d/2) < 1) return c/2*t*t + b;
        return -c/2 * ((--t)*(t-2) - 1) + b;
    },
    easeInCubic: function (x, t, b, c, d) {
        return c*(t/=d)*t*t + b;
    },
    easeOutCubic: function (x, t, b, c, d) {
        return c*((t=t/d-1)*t*t + 1) + b;
    },
    easeInOutCubic: function (x, t, b, c, d) {
        if ((t/=d/2) < 1) return c/2*t*t*t + b;
        return c/2*((t-=2)*t*t + 2) + b;
    },
    easeInQuart: function (x, t, b, c, d) {
        return c*(t/=d)*t*t*t + b;
    },
    easeOutQuart: function (x, t, b, c, d) {
        return -c * ((t=t/d-1)*t*t*t - 1) + b;
    },
    easeInOutQuart: function (x, t, b, c, d) {
        if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
        return -c/2 * ((t-=2)*t*t*t - 2) + b;
    },
    easeInQuint: function (x, t, b, c, d) {
        return c*(t/=d)*t*t*t*t + b;
    },
    easeOutQuint: function (x, t, b, c, d) {
        return c*((t=t/d-1)*t*t*t*t + 1) + b;
    },
    easeInOutQuint: function (x, t, b, c, d) {
        if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
        return c/2*((t-=2)*t*t*t*t + 2) + b;
    },
    easeInSine: function (x, t, b, c, d) {
        return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
    },
    easeOutSine: function (x, t, b, c, d) {
        return c * Math.sin(t/d * (Math.PI/2)) + b;
    },
    easeInOutSine: function (x, t, b, c, d) {
        return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
    },
    easeInExpo: function (x, t, b, c, d) {
        return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
    },
    easeOutExpo: function (x, t, b, c, d) {
        return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
    },
    easeInOutExpo: function (x, t, b, c, d) {
        if (t==0) return b;
        if (t==d) return b+c;
        if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
        return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
    },
    easeInCirc: function (x, t, b, c, d) {
        return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
    },
    easeOutCirc: function (x, t, b, c, d) {
        return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
    },
    easeInOutCirc: function (x, t, b, c, d) {
        if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
        return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
    },
    easeInElastic: function (x, t, b, c, d) {
        var s=1.70158;var p=0;var a=c;
        if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
        if (a < Math.abs(c)) { a=c; var s=p/4; }
        else var s = p/(2*Math.PI) * Math.asin (c/a);
        return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
    },
    easeOutElastic: function (x, t, b, c, d) {
        var s=1.70158;var p=0;var a=c;
        if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
        if (a < Math.abs(c)) { a=c; var s=p/4; }
        else var s = p/(2*Math.PI) * Math.asin (c/a);
        return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
    },
    easeInOutElastic: function (x, t, b, c, d) {
        var s=1.70158;var p=0;var a=c;
        if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
        if (a < Math.abs(c)) { a=c; var s=p/4; }
        else var s = p/(2*Math.PI) * Math.asin (c/a);
        if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
        return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
    },
    easeInBack: function (x, t, b, c, d, s) {
        if (s == undefined) s = 1.70158;
        return c*(t/=d)*t*((s+1)*t - s) + b;
    },
    easeOutBack: function (x, t, b, c, d, s) {
        if (s == undefined) s = 1.70158;
        return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
    },
    easeInOutBack: function (x, t, b, c, d, s) {
        if (s == undefined) s = 1.70158; 
        if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
        return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
    },
    easeInBounce: function (x, t, b, c, d) {
        return c - easingFunctions.easeOutBounce (x, d-t, 0, c, d) + b;
    },
    easeOutBounce: function (x, t, b, c, d) {
        if ((t/=d) < (1/2.75)) {
            return c*(7.5625*t*t) + b;
        } else if (t < (2/2.75)) {
            return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
        } else if (t < (2.5/2.75)) {
            return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
        } else {
            return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
        }
    },
    easeInOutBounce: function (x, t, b, c, d) {
        if (t < d/2) return easingFunctions.easeInBounce (x, t*2, 0, c, d) * .5 + b;
        return easingFunctions.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
    }
}


function mapPar(x, in_min,  in_max,  out_min,  out_max, easeFunction){
    if( x < in_min) {
        return out_min;
    }
    if( x > in_max) {
        return out_max;
    }

    var easingInput = (x-in_min) / (in_max - in_min);

    //return (x - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
    var outputVoorEasing = (x - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
    if(easeFunction !== undefined) {
        // t: current time, b: begInnIng value, c: change In value, d: duration
        return  easeFunction(0,easingInput,0,1,1) * outputVoorEasing;
    } else {
        return outputVoorEasing;
    }
}

$( function() {
    $(window).scroll( function( eventInfo ) {
        var scrollPos =  $("body").scrollTop();
        var topSide    = mapPar(scrollPos, 0,3300, 200,3700,easingFunctions.easeInOutBounce);
        $("#charByte").css("top", topSide);
        //$("#charByte").css("left", mapPar(scrollPos, 3300,4000, 200,500),"top", mapPar(scrollPos, 3300,6600, 3700,7900));


        // console.log(scrollPos);
        console.log(mapPar(scrollPos, 0,3300, 200,3700,easingFunctions.easeInOutBounce))
        if(scrollPos >= 2400){
            // console.log("if statement fixed");
            $("#computerScreen").css("position", "fixed");
            $("#computerScreen").css("top", "0");
        } else {
            // console.log("if statement absolute");
            $("#computerScreen").css("position", "absolute");
            $("#computerScreen").css("top", "2400px");
        }
       /* if (scrollPos >= 0 && scrollPos < 3250) {
            $("body").css("overflow", "hidden");
        } else {
            $(document).unbind('scroll');
            $("body").css("overflow", "visible");
            if(scrollPos > 3250){

            }
        }
*/
    })
})

$("#btnScroll").click(function(event){
      event.preventDefault();
      $("body").animate({"scrollTop": "3280px"},6000)
 });

$("#btnScroll").click(function(){
    $("#btnScroll").animate({ opacity: 0 });
});




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

// function getRandom(num) {
//     var randomNum = Math.floor(Math.random() * num);
//     return randomNum;
// }

/*function clouds(){


}

var pixelLocation =  $("startParallax").offset();

if(pixelLocation.top > 0 && pixelLocation.top > 960 ){
    clouds();
}*/



