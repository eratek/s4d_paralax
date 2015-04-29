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

    //Random generate clouds
    clouds();

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
        var moveRightChar = mapParallax(scrollPos, 2400,2800,0,300);
        $("#charByte").css({ top: fallChar });
        
        // StartScene
        var moveStartSceneOut = mapParallax(scrollPos, 2400,4900,0,928);  //moving out
        $("#backgroundStartScene").css({ right: moveStartSceneOut });

        // SCENE 1:
        // Background
        if(scrollPos>=2400){

            $("#computerScreenOutside").css({
                top: -70,
                "position": "fixed"
            });
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
                "margin-left": -moveRightChar,
                "position": "fixed",
                width: 180,
                height: 180
            });
        }
        else {
            $("#computerScreenOutside").css({
                top:2330,
                "position": "absolute"
            });
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
        $("#textArea").text("Dankjewel dat je me wil helpen. Scroll nu verder!");
        });

        //Fallback opacity bug
        if (scrollPos<4900) {
            $( "#okBtn" ).css({ opacity: 0 })
            $( "#introText" ).css({ opacity: 0 })
        };

        // SCENE 2:
        // Background
        var moveSceneTwo =  mapParallax(scrollPos, 5000,6000, -927,0)   || //moving in
                            mapParallax(scrollPos, 6000,6200, 0,0)      || //quit
                            mapParallax(scrollPos, 6200,7200, 0,927)    ;  //moving out
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
            $("body").css({
                height: 7878 //+678 = scrollPos 8000
            })
            $("#questionOne").css({ "display": "none" });
            $("#backgroundScene2_2").css({ "display": "none" });
            $("#backgroundScene2_1").css({ "display": "block" });
            $("#char2").css({ "display": "none"});
        });
        $("#answerTwoBtn").click(function(){
            $("body").css({
                height: 7878 //+678 = scrollPos 8000
            })
            $("#questionOne").css({ "display": "none" });
            $("#backgroundScene2_1").css({ "display": "none" });
            $("#backgroundScene2_2").css({ "display": "block" });
            $("#char2").css({ "display": "block"});
        });
        $("#backgroundScene2_1").css({ right: moveSceneChose });
        $("#backgroundScene2_2").css({ right: moveSceneChose });

        var showCharTwo =   mapParallax(scrollPos, 6400,7200, -170,0)  || //moving in
                            mapParallax(scrollPos, 7200,10000, 0,0)  ;  //quit
        $("#char2").css({ right: showCharTwo });

        // RESET BODY HIGH
        // reset < 5000
        if (scrollPos<=5000) {
            $("body").css({
                height: 5678 //+678 = scrollPos 5000
            })
            $("#textArea").text("Wil je me helpen de weg te vinden?");
        };
         //Reset 5000 - 6200
        if (5000<scrollPos && scrollPos<6200) {
            $("body").css({
                height: 6878 //+678 = scrollPos 5000
            })
            $("#questionOne").css({ "display": "block" });
        };

    })
})
