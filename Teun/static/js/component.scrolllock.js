var scrollPos = $("body").scrollTop();

function scrollLock() {
    if (scrollPos >= 0 && scrollPos < 200) {
        $("body").css("overflow", "hidden");
    } else {
        $(document).unbind('scroll');
        $("body").css("overflow", "visible");
    }
}





