jQuery(function($) {
    //
    // Header
    //
    // Touch-friendly navigation
    $( '#nav > li > ul').parent('li').doubleTapToGo();

	//Nav height
    $(window).scroll(function(){
        setNavActiveState();
    });
	
	$('.button.offerte').click(function(e) {
		if($(window).height() < 670){
			//go to destination
			$('html,body').animate({
				scrollTop: 0
			}, 800, 'swing');
		}
	});


    // Menu active
    var url = window.location.href;
    $('#nav a, #top-nav a').filter(function() {
        return this.href == url;
    }).parent('li').addClass('active');

    // Mobile nav show
    $('.navSlideToogle').click(function () {
        $('body').toggleClass('nav-open');
        return false;
    });






    if (!Modernizr.csscolumns) {
        $('.uitrusting ul, #uitrusting ul.double').cols(2);
    }


    //
    // offerte
    //
    $('#one-page-nav li.offerte a:not([href="geen-inruil.shtml"]),.button.offerte, p a:not([href="geen-inruil.shtml"]).offerte').click(function(){
        $('#one-page-nav').toggleClass('close open');
    });


    //
    // lightbox
    //
    $('#media li:not(.movie) a').magnificPopup({
        type: 'image',
        mainClass: 'mfp-with-zoom',
        tClose: 'Sluiten (Esc)',
        tLoading: 'Laden...',
        zoom: {
            enabled: true,
            duration: 300,
            easing: 'ease-in-out',
            opener: function(openerElement) {
                return openerElement.is('img') ? openerElement : openerElement.find('img');
            }
        },
        gallery:{
            enabled:true,
            tPrev: 'Vorige (Linker pijl toets)',
            tNext: 'Volgende (Rechter pijl toets)',
            tCounter: '%curr% van %total%'
        }
    });
    $('.open-popup-link').magnificPopup({
        type:'inline',
        midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
    });

    if($(window).width() < 481){
        $('#one-page-nav li.offerte a:not([href="geen-inruil.shtml"]),.button.offerte, p a:not([href="geen-inruil.shtml"]).offerte').magnificPopup({
            type: 'inline',


            closeBtnInside: true,
            preloader: true,

            midClick: true,
            removalDelay: 300,
            mainClass: 'my-mfp-zoom-in'
        });
    }else{
        $('#one-page-nav li.offerte a:not([href="geen-inruil.shtml"]),.button.offerte, p a.offerte').removeAttr("href");
    }


    // Scroll to div
    $('a[href*=#]:not([href=#]):not(.disableScroll):not(.offerte a):not(p a.offerte):not(a.open-popup-link)').click(function (event) {
        event.preventDefault();
        //calculate destination place
        var dest = 0;
        if ($(this.hash).offset().top > $(document).height() - $(window).height()) {
            dest = $(document).height() - $(window).height();
        } else {
            dest = $(this.hash).offset().top;
        }
        //go to destination
        $('html,body').animate({
            scrollTop: dest-60
        }, 800, 'swing');
    });

    //
    // form validate
    //
    $("form").each(function(){
        $(this).validate({
            errorPlacement: function(error, element) {
                if (element.attr("name") == "model"){
                    error.insertAfter("select[name='model'] + .custom.dropdown");
                } else if (element.attr("name") == "vestiging"){
                    error.insertAfter("select[name='vestiging'] + .custom.dropdown");
                } else if (element.attr("name") == "ik_wil_graag"){
                    error.insertAfter("select[name='ik_wil_graag'] + .custom.dropdown");
                }else {
                    error.insertAfter(element);
                }
            }
        });
        if (!Modernizr.touch) {
           $(document).foundation();
        }
    });

    //
    // Slider
    //
    $("#container #main > .bottom").each(function() {
        voorzienHeight = $('.info.c-entry').outerHeight();
        $(this).css({minHeight:voorzienHeight+"px"});
    });

    // Slider
    $('.slider > ul').after('<div id="slider-nav" class="cf"></div>').cycle({
        timeout: 120000//,
        //pager:  '#slider-nav'
    });
    //$("#slider-nav").css({float: 'none', width : $("#slider-nav").width()});

    //toggle menu
    var theToggle = document.getElementById('toggle');

// based on Todd Motto functions
// http://toddmotto.com/labs/reusable-js/

// hasClass
    function hasClass(elem, className) {
        return new RegExp(' ' + className + ' ').test(' ' + elem.className + ' ');
    }
// addClass
    function addClass(elem, className) {
        if (!hasClass(elem, className)) {
            elem.className += ' ' + className;
        }
    }
// removeClass
    function removeClass(elem, className) {
        var newClass = ' ' + elem.className.replace( /[\t\r\n]/g, ' ') + ' ';
        if (hasClass(elem, className)) {
            while (newClass.indexOf(' ' + className + ' ') >= 0 ) {
                newClass = newClass.replace(' ' + className + ' ', ' ');
            }
            elem.className = newClass.replace(/^\s+|\s+$/g, '');
        }
    }
// toggleClass
    function toggleClass(elem, className) {
        var newClass = ' ' + elem.className.replace( /[\t\r\n]/g, " " ) + ' ';
        if (hasClass(elem, className)) {
            while (newClass.indexOf(" " + className + " ") >= 0 ) {
                newClass = newClass.replace( " " + className + " " , " " );
            }
            elem.className = newClass.replace(/^\s+|\s+$/g, '');
        } else {
            elem.className += ' ' + className;
        }
    }

    theToggle.onclick = function() {
        toggleClass(this, 'on');
        return false;
    }
});