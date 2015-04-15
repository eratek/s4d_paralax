$("#btnScroll").click(function(event){
      event.preventDefault();
      $("body").animate({scrollTop: 2400},6000)
 });

$("#btnScroll").click(function(){
    $("#btnScroll").animate({ opacity: 0 });
});