$("#btnScroll").click(function(event){
      event.preventDefault();
      $("body").animate({scrollTop: 2400},6000, function(){
      	//animate complete

      });
      $("#btnScroll").animate({ opacity: 0 });
 });