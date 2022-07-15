$("#car").on("click", function() {
    $("#car").animate({left: "690px"}, "fast")
    
    // $("#car").animate({left: "0"})
    
    // var p = $("#car").first();
    // var position = p.position();
})

$("#car").on("click", function() {
    // $("#putin").animate({top: "100px"}, "slow")
    console.log($("#car").position().left)
    if($("#car").position().left >= 8) {
        $("#putin").animate({left: "900px"}, "slow")
    }
})

$("#reload").on("click", function() {
    location.reload()
})

//$("#car").on("click", function() {
//    $("#car").fadeOut("slow")
    
    // $("#car").animate({left: "0"})
    
    // var p = $("#car").first();
    // var position = p.position();
//})

// console.log($("#car").offsetLeft)

// if ($("#car").offsetLeft() > 8.009375) {
//     $("#putin").animate({top: "-500px"});
// } 
