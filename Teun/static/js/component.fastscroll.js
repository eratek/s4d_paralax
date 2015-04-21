$("#btnScroll").click(function(event){
      event.preventDefault();
      $("body").animate({scrollTop: 2400},10000)
      $("#btnScroll").animate({ opacity: 0 });
 });