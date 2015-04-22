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
            cloud("small",2100,1040,100,120,190);
        }
        else if (randomN == 1) {
          cloud("medium",2100,930,100,200,300);
        }
        else {
          cloud("large",1900,730,100,300,500);
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

function mapPar(x, in_min,  in_max,  out_min,  out_max){
    if( x < in_min) {
        return out_min;
    }
    if( x > in_max) {
        return out_max;
    }
    return (x - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
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
        
        var lastScroll = 0
        if (scrollPos > lastScroll) {
            lastScroll = lastScroll + scrollPos;
        }
        else {
            lastScroll = lastScroll
        }

        console.log("lastScroll: "+lastScroll);
        console.log("scrollPos: "+scrollPos)

        function movePar(startValue, endValue, startResult, endResult) {
            if (scrollPos >= startValue) {
                return mapPar(scrollPos, startValue,endValue, startResult,endResult);
            }
        }
        // console.log(scrollPos);

        // charByte
        var fallChar = movePar(0,2400,200,2800);
        var moveRightChar = movePar(2400,2800,0,400);
        $("#charByte").css({ top: fallChar });
        
        // StartScene
        var moveStartSceneOut = movePar(3000,4000,0,928);
        $("#backgroundStartScene").css({ right: moveStartSceneOut });

        // scene1
        var moveSceneOne = movePar(3000,4000, -928,0);
        $("#backgroundScene1").css({ right: moveSceneOne });
        // var fadeInQuestionOneBg = mapPar(scrollPos, 4300,4600, 0,1);
        // var fadeInQuestionOne = mapPar(scrollPos, 4600,4700, 0,1);
        // var fadeInChooseOptions = mapPar(scrollPos, 4400,4600, 0,1);
        var moveSceneOneOut = movePar(5000,6000,0,928)
        $("#backgroundScene1").css({ right: moveSceneOneOut });

        // scene2
        var moveSceneTwo = movePar(5000,6000,-928,0);
        $("#backgroundScene2_1").css({ right: moveSceneTwo }); 
        // var fadeSceneOne = mapPar(scrollPos, 2725,2785, 0,1)


        // $("#backgroundScene2_2").css({
        //     left: moveSceneTwo
        //   }); 

        // $("#questionOne").css({
        //     "opacity": fadeInQuestionOneBg
        // });
        // $("#qOne").css({
        //     "opacity": fadeInQuestionOne
        // });

        // $("#chooseOptions").css({
        //     "opacity": fadeInChooseOptions
        // });

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
                "margin-left": -moveRightChar,
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

        // if (scrollPos >= 4300) {
        //     $("body").css({
        //         height: 8678 //+678 = scrollPos 7000
        //     })
        // };

        

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
