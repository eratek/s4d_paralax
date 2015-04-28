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

function mapParallax(x, in_min,  in_max,  out_min,  out_max){
   if( x < in_min) {
      return undefined;
   }
   if( x > in_max) {
      return undefined;
   }
    var waarde = (x - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
    return waarde;
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

        // charByte & Start
        if(scrollPos>=2390){
            $("#charByte").css({
                "background": "url(static/img/byteNormal.png)"

            });
        } else {
            $("#charByte").css({
                "background": "url(static/img/byteVal.png)"
            });
        }
        var fallChar = mapParallax(scrollPos, 0,2400, 200,2695);
        // var moveRightChar = mapParallax(scrollPos, 2400,2800,0,320);
        $("#charByte").css({ top: fallChar });
        
        // StartScene
        var moveStartSceneOut = mapParallax(scrollPos, 2400,4900,0,928);  //moving out
        $("#backgroundStartScene").css({ right: moveStartSceneOut });

        // SCENE 1:
        // Background
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
                top: 295,
                "position": "fixed",
                width: 180,
                height: 180
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
                width: 180,
                height: 180,
                "margin-left": 0
            });
        }

        var moveSceneOne =  mapParallax(scrollPos, 2400,4900, -928,0)   || //moving in
                            mapParallax(scrollPos, 4900,5000, 0,0)      || //quit
                            mapParallax(scrollPos, 5000,6000, 0,928)    ;  //moving out
        $("#backgroundScene1").css({ right: moveSceneOne });
        // introText
        var fadeInIntroText = mapParallax(scrollPos, 4900,5000, 0,1)    || //fade in
                              mapParallax(scrollPos, 5000,5100, 1,0)    || //fade out
                              mapParallax(scrollPos, 5100,10000, 0,0)   ;  //quit
        $("#introText").css({ opacity: fadeInIntroText });
        // schowOkbtn
        var schowOkbtn = mapParallax(scrollPos, 4900,5000, 0,1); //fade in
        $( "#okBtn" ).css({ opacity: schowOkbtn })
        $( "#okBtn" ).click(function() {
        $(this).css({opacity: 0})
            $("body").css({
                height: 6878 //+678 = scrollPos 8000
            })
        $("#textArea").text("Bedankt dat je me helpt scroll nu verder!");
        });

        //Fallback opacity bug
        if (scrollPos<4900) {
            $( "#okBtn" ).css({ opacity: 0 })
            $( "#introText" ).css({ opacity: 0 })
        };

        //Reset onder 5000
        if (scrollPos<=5000) {
            $("body").css({
                height: 5678 //+678 = scrollPos 5000
            })
            $("#textArea").text("Wil je me helpen de weg te vinden?");
        };

        // SCENE 2:
        // Background
        var moveSceneTwo =  mapParallax(scrollPos, 5000,6000, -928,0)   || //moving in
                            mapParallax(scrollPos, 6000,6200, 0,0)      || //quit
                            mapParallax(scrollPos, 6200,7200, 0,928)    ;  //moving out
        $("#backgroundScene2").css({ right: moveSceneTwo });

        //Chose
        var fadeInQuestionOne = mapParallax(scrollPos, 6000,6200, 0,1)  ||  //fade in
                                mapParallax(scrollPos, 6200,6300, 1,0)  ||  //fade out
                                mapParallax(scrollPos, 6300,10000, 0,0) ;   //quit
        $("#questionOne").css({ opacity: fadeInQuestionOne });

        //Fallback opacity bug
        if (scrollPos<6000) {
            $( "#questionOne" ).css({ opacity: 0 })
        };

        var moveSceneChose = mapParallax(scrollPos, 6200,7200, -928,0); //moving in
        $("#answerOneBtn").click(function(){
            console.log("answerOneBtn")
            $("body").css({
                height: 7878 //+678 = scrollPos 8000
            })
        });
        $("#answerTwoBtn").click(function(){
            console.log("answerTwoBtn")
            $("body").css({
                height: 7878 //+678 = scrollPos 8000
            })
        });
        $("#backgroundScene2_1").css({ right: moveSceneChose });

        //Reset onder 6200
        // if (scrollPos<=6200) {
        //     $("body").css({
        //         height: 6878 //+678 = scrollPos 5000
        //     })
        // };

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
