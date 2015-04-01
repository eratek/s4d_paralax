$(function () {
		$(".guest_box").click(checkForCode);

		function getRandom(num) {
			var my_num = Math.floor(Math.random() * num);
			return my_num;
		}

		var hideCode = function() {
			var numRand = getRandom(4);
			// console.log("Index:", numRand)
			$(".guest_box").each(function( index, value) {
				if (numRand == index) {
					$(this).append("<span id='has_discount'></span>");
					return false
				};
			});
		}
		hideCode();

		$(".guest_box").on("mouseenter", function() {
			// console.log("Hover");
			$(this).addClass('my_hover')
		}).on("mouseleave", function() {
			// console.log("Hover out");
			$(this).removeClass('my_hover')
		});
			
		function checkForCode() {
			var discount_num;
			if($.contains(this, document.getElementById("has_discount") ) ) {
				var my_num = getRandom(100);
				discount_num = "<p>Your code: CODE"+my_num+"</p>";
			}
			else {
				discount_num = "<p>Sorry, no discount this time!</p>";
			}

			$(".guest_box").each(function() {
				if($.contains(this, document.getElementById("has_discount") ) ) {
					$(this).addClass('discount');
				}
				else {
					$(this).addClass('no_discount');
				}
				$(this).unbind('click');
			});
			$("#result").append(discount_num)
		}

	});