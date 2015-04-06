$("#go-to-page2").click(function(event){
    event.preventDefault();
    $("body").animate({"scrollTop": "1080px"}, 2000);
});

$(".go-to-page1").click(function(event){
    event.preventDefault();
    $("body").animate({"scrollTop": "0px"}, 1000);
});

$(".testclass").click(function(event){
        event.preventDefault();
        $("body").animate({"scrollTop": "300px"},1500)
    }
    )
