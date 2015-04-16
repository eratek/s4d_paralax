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

    return (x - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
    // var outputVoorEasing = (x - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
    // if(easeFunction !== undefined) {
    //     // t: current time, b: begInnIng value, c: change In value, d: duration
    //     return  easeFunction(0,easingInput,0,1,1) * outputVoorEasing;
    // } else {
    //     return outputVoorEasing;
    // }
}

$( function() {

    clouds();

    $(window).scroll( function( eventInfo ) {
        var scrollPos =  $("body").scrollTop();
        var fallChar    = mapPar(scrollPos, 0,2400, 200,3000);
        var moveSceneOne = mapPar(scrollPos, 3000,4000, -1130,211);
        var fadeInQuestionOneBg = mapPar(scrollPos, 4300,4600, 0,1);
        var fadeInQuestionOne = mapPar(scrollPos, 4600,4700, 0,1);

        var moveSceneTwo = mapPar(scrollPos, 4000,5500, -1130,211);
        // var fadeSceneOne = mapPar(scrollPos, 2725,2785, 0,1)
        var moveLeftChar = mapPar(scrollPos, 2400,2800, 0,400);
        var scaleCharHeight = mapPar(scrollPos, 2400,2800, 200,100);
        
        $("#charByte").css({top: fallChar});
        
        $("#backgroundScene1").css({
            left: moveSceneOne,
            top: scrollPos + 269,
            "display": "none"
            // opacity: fadeSceneOne
        });

        $("#questionOne").css({
            "opacity": fadeInQuestionOneBg
        });
        $("#qOne").css({
            "opacity": fadeInQuestionOne
        });

        var sceneBg
        if (true) {
            sceneBg = "#backgroundScene2_2" 
        }
        else {
          sceneBg = "#backgroundScene2_1"   
        }
        $(sceneBg).css({
            left: moveSceneTwo,
            top: scrollPos + 269,
            "display": "none"
            // opacity: fadeSceneOne
        });

        // console.log(scrollPos)

        // Scene 1
        if(scrollPos>=2400){
            $("#computerScreen").css({
                top: 0,
                "position": "fixed"
            });
            $("#charByte").css({
                top: 600,
                "position": "fixed",
                "margin-left": -moveLeftChar,
                width: scaleCharHeight/4*3,
                height: scaleCharHeight
            });
            $("#backgroundScene1").css({
                "display": "block"
            });
        }
        else {
            $("#computerScreen").css({
                top: 2400,
                "position": "absolute"
            });
            $("#charByte").css({
                top: fallChar,
                "position": "relative",
                left: "calc(50% 150px/2)",
                width: 150,
                height: 200,
                "margin-left": 0
            });
        }

        // Scene 2
        if (3885 < scrollPos) { //&& scrollPos < 5500
            // $(sceneBg).css({
            //     "display": "block"
            // });
            
            $("#backgroundScene1").css({
                // "display": "none"
                "position": "absolute"
            });
        }
    })
})


function getRandom(num) {
    var randomNum = Math.floor(Math.random() * num);
    return randomNum;
}

function randomIntFromInterval(min,max) {
    return Math.floor(Math.random()*(max-min+1)+min);
}


function clouds(){
    for (var i = getRandom(25) ; i >= 0; i--) {
        // console.log("plaats wolk")
        var randomN = getRandom(3);
        if (randomN == 0) {
            cloudSmall();
            console.log("cloudSmall")
        }
        else if (randomN == 1) {
          cloudMedium(); 
          console.log("cloudMedium")
        }
        else {
          cloudLarge();  
          console.log("cloudLarge")
        }
    };
}

function cloudSmall(){
    $("#clouds").append("<img src='static/img/cloud.png' class='cloud_small'/>");   
    $( ".cloud_small" ).each(function( index ) {
      // console.log( index );
      $(this).css({
            top: getRandom(2100),
            left: getRandom(1300),
            "z-index": getRandom(100),
            width: randomIntFromInterval(120, 190)
        });
    });
}

function cloudMedium(){
    $("#clouds").append("<img src='static/img/cloud.png' class='cloud_medium'/>");   
    $( ".cloud_medium" ).each(function( index ) {
      // console.log( index );
      $(this).css({
            top: getRandom(2100),
            left: getRandom(1000),
            "z-index": getRandom(100),
            width: randomIntFromInterval(200, 300)
        });
    });
}

function cloudLarge(){
    $("#clouds").append("<img src='static/img/cloud.png' class='cloud_large'/>");   
    $( ".cloud_large" ).each(function( index ) {
      // console.log( index );
      $(this).css({
            top: getRandom(1900),
            left: getRandom(700),
            "z-index": getRandom(100),
            width: randomIntFromInterval(300, 500)
        });
    });
}


