$(document).ready(function() {
    $("#hide").click(function() {
        $("#divOne").hide()
    });

    $("#show").click(function() {
        $("#divOne").show()
    })

    
    $("#FadeOut").click(function() {
        $("#divTwo").fadeOut("slow")
    });

    $("#FadeIn").click(function() {
        $("#divTwo").fadeIn("slow")
    })

    $("#slideleft").click(function() {
        $("#divThree").animate({left:"300px"});

    });

    $("#slideright").click(function() {
        $("#divThree").animate({left:"10"});

    });

    // $("#slideright").click(function() {
    //     $("#divThree").animate({right: "500px"})
    // });

})


// $(document).ready(function() {
//     $("#hide").click(function() {
//         $("#divTwo").hide()
//     });

//     $("#show").click(function() {
//         $("#divTwo").show()
//     })
// })