
$(function() {

	var vegOn = $("button#vegOn")
	vegOn.click(function() {
		// console.log("button vegOn clicked")
		
		//detach all fish meals
		$f = $(".fish").parent().parent().detach();
		//replace hamburger with Portobello Mushroom
		$(".hamburger").replaceWith("<li class='portobello'><em>Portobello Mushroom</em></li>");
		//replace meat with tofu
		$(".meat").after('<li class="tofu">Tofu</li>')
		$meat = $(".meat").detach();
		$(".tofu").parent().parent().addClass('veg_leaf');
	});

	var restoreBtn = $("button#restoreMe")
	restoreBtn.click(function() {
		// console.log("restore btn clicked");
		
		//put .fish back
		$(".menu_entrees li").first().before($f);
		//replace Portobello with hamburger
		$(".portobello").replaceWith("<li class='hamburger'>hamburger</li>");
		//loop true tofu and replace tofu[i] with meat[i]
		$(".tofu").each(function(i) {
			$(this).after( $meat[i] );
		});
		$(".tofu").remove();
		$(".veg_leaf").removeClass();
	});

	
});