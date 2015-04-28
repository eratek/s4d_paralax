$("#btnScroll").click(function(event){
      event.preventDefault();
      $("body").animate({scrollTop: 2400},6000, function(){
      	//animate complete
      	$("#charByte").animate({
      		left: 220
      	},1200)
      });
      $("#btnScroll").animate({ opacity: 0 });
 });