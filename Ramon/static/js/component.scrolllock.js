var scrollPos = $("body").scrollTop();
console.log(scrollPos);

if(scrollPos >= 0 && scrollPos < 200){
    $("body").css("overflow", "hidden");
}else{
    $(document).unbind('scroll');
    $("body").css("overflow", "visible");
}