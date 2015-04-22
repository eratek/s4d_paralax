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

    // $("#optionOne").click(function(){
    //     $(this).data('clicked', true);
    // });
    // $("#optionTwo").click(function(){
    //     $(this).data('clicked', true);
    //     console.log("optionTwo button click")
    // });

    $(window).scroll( function( eventInfo ) {

        var scrollPos =  $("body").scrollTop();
        console.log(scrollPos);

        // charByte
        var fallChar    = mapPar(scrollPos, 0,2400, 200,2800);
        // var moveLeftChar = mapPar(scrollPos, 2400,2800, 0,400);
        // var scaleCharHeight = mapPar(scrollPos, 2400,2800, 200,100);

        // scene1
        var moveSceneOne = mapPar(scrollPos, 3000,4000, -928,0);
        // var fadeInQuestionOneBg = mapPar(scrollPos, 4300,4600, 0,1);
        // var fadeInQuestionOne = mapPar(scrollPos, 4600,4700, 0,1);
        // var fadeInChooseOptions = mapPar(scrollPos, 4400,4600, 0,1);

        // scene2
        var moveSceneOneOut = mapPar(scrollPos, 4000,5000, 0,928);
        var moveSceneTwo = mapPar(scrollPos, 4000,5000, -928,0);
        // var fadeSceneOne = mapPar(scrollPos, 2725,2785, 0,1)
        
        
        $("#charByte").css({top: fallChar});
        
        $("#backgroundScene1").css({
            left: moveSceneOne
        });

        $("#backgroundScene1").css({
            left: moveSceneOneOut
        });

        // $("#backgroundScene2_1").css({
        //     left: moveSceneTwo
        //   }); 

        $("#backgroundScene2_2").css({
            left: moveSceneTwo
          }); 

        // $("#questionOne").css({
        //     "opacity": fadeInQuestionOneBg
        // });
        // $("#qOne").css({
        //     "opacity": fadeInQuestionOne
        // });

        // $("#chooseOptions").css({
        //     "opacity": fadeInChooseOptions
        // });

        
        // console.log(scrollPos)
        // if (4650 <= scrollPos && scrollPos < 4700) {
        //   disable_scroll();
        // };

        // Scene 1
        if(scrollPos>=2400){
            $("#computerScreen").css({
                top: 20,
                "position": "fixed"
            });
            $("#computerScreenInside").css({
                top: 67,
                "position": "fixed"
            });
            $("#charByte").css({
                top: 400,
                "position": "fixed",
                // "margin-left": -moveLeftChar,
                // width: scaleCharHeight/4*3,
                // height: scaleCharHeight
                width: 75,
                height: 100
            });
        }
        else {
            $("#computerScreen").css({
                top: 2420,
                "position": "absolute"
            });
            $("#computerScreenInside").css({
                top: 2467,
                "position": "absolute"
            });
            $("#charByte").css({
                top: fallChar,
                "position": "relative",
                left: "calc(50% 150px/2)",
                width: 75,
                height: 100,
                "margin-left": 0
            });
        }

        

        // // Scene 2
        // if (4650 < scrollPos) { //&& scrollPos < 5500
        //     // disable_scroll();
        //   // console.log("scene 2")
        //   // $("#backgroundScene1").css({
        //   //   // "display": "none"
        //   //   "position": "absolute"
        //   // });
        //   $("#optionOne").click(function(){
        //     console.log("optionOne button cliked")
        //     $("#backgroundScene2_1").css({
        //         left: moveSceneTwo,
        //         top: scrollPos + 269,
        //         "display": "block"
        //       }); 
        //       $("#backgroundScene2_2").css({
        //         "display": "none"
        //       }); 
        //   });
        //   $("#optionTwo").click(function(){
        //     console.log("optionTwo button click")
        //     $("#backgroundScene2_2").css({
        //         left: moveSceneTwo,
        //         top: scrollPos + 269,
        //         "display": "block"
        //       }); 
        //       $("#backgroundScene2_1").css({
        //         "display": "none"
        //       });
        //   });
        // }
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
    for (var i = randomIntFromInterval(20, 35) ; i >= 0; i--) {
        var randomN = getRandom(3);
        if (randomN == 0) {
            cloud("small",2100,1058,100,120,190);
        }
        else if (randomN == 1) {
          cloud("medium",2100,948,100,200,300);
        }
        else {
          cloud("large",1900,748,100,300,500);
        }
    };
}

function cloud(size,t,l,z,min,max){
    $("#clouds").append("<img src='static/img/cloud.png' class='cloud_"+size+"'/>");   
    $( ".cloud_"+size ).each(function( index ) {
      $(this).css({
            top: getRandom(t),
            left: getRandom(l),
            "z-index": getRandom(z),
            width: randomIntFromInterval(min, max)
        });
    });
}

