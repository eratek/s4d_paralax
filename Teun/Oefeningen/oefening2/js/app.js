
$(function() {

	var vegOn = $("button#vegOn")
	vegOn.click(function() {
		/* Act on the event */
		console.log("button vegOn clicked")
		$f = $(".fish").parent().parent().detach();
		$hamB = $(".hamburger").replaceWith("<li class='portobello'><em>Portobello Mushroom</em></li>");
	});

	var restoreBtn = $("button#restoreMe")
	restoreBtn.click(function() {
		/* Act on the event */
		console.log("restore btn clicked");
	});

	
});