$(function() {
	
	var head = $("#head")
	var eyes = $("#eyes")
	var nose = $("#nose")
	var mouth = $("#mouth")
	var clix = [0,0,0,0]
	var current_position = clix[index];


	goLightning();

	window.onblur = stopLightning;
	window.onfocus = goLightning;
	var int1, int2, int3;
	function goLightning() {
		intl = setInterval( function() {
				lightning_one();
			}, 4000
		);
		intl = setInterval( function() {
				lightning_two();
			}, 5000
		);
		intl = setInterval( function() {
				lightning_three();
			}, 7000
		);
	}

	function stopLightning() {
		window.clearInterval(int1);
		window.clearInterval(int2);
		window.clearInterval(int3);
	}

	head.click(function() {
		moveMe(0, this)
	});

	eyes.click(function() {
		moveMe(1, this)
	});

	nose.click(function() {
		moveMe(2, this)
	});

	mouth.click(function() {
		moveMe(3, this)
	});

	function moveMe (i, obj) {
		if (clix[i] < 9) {
			$(obj).animate({left: "-=367px"}, 500);
			clix[i]++;
		}
		else {
			$(obj).animate({left: "0px"}, 500);
			clix[i] = 0;
		}
	};

	function getRandom(num) {
		var my_random_num = Math.floor(Math.random()*num);
		return my_random_num;
	};

});

function lightning_one() {
		$("#lightning1").fadeIn('250').fadeOut('250')
	};

	function lightning_two() {
		$("#lightning2").fadeIn('fast').fadeOut('fast');
	};

	function lightning_three() {
		$("#lightning3").fadeIn('fast').fadeOut('fast');
	};