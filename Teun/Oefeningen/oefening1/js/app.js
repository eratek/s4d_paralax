$(function () {

	var guestDisc = $("#main").children("div");

    guestDisc.click(checkForCode);

		function getRandom(num) {
			return Math.floor(Math.random() * num);
		}

		var hideCode = function() {
            guestDisc.each(function( index, value) {
				if (getRandom(4) == index) {
					$(this).append("<span id='hasDiscount'></span>");
					return false
				};
			});
		}
		hideCode();

        guestDisc.on("mouseenter", function() {
			$(this).addClass("my_hover");
		}).on("mouseleave", function() {
			$(this).removeClass("my_hover");
		});
			
		function checkForCode() {
			var discountNum;
			if($.contains(this, $("#hasDiscount") ) ) {
                discountNum = "<p>Your code: CODE"+ getRandom(100) +"</p>";
			}
			else {
                discountNum = "<p>Sorry, no discount this time!</p>";
			}

            guestDisc.each(function() {
				if($.contains(this, $("#hasDiscount") ) ) {
					$(this).css('border', '3px solid #0f0');
				}
				else {
					$(this).css('border', '3px solid #f00');
				}
				$(this).unbind('click');
			});
			$("#result").append(discountNum);
		}

	});