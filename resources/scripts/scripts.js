$(document).ready(function() {
    $(window).scroll(function() {
        if ($(document).scrollTop() > 2) {
            $("#navbar").css("background-color", "white");
            $("#logo-bitlab").css("fill", "#4849b0")
            $("#text-nav").removeClass("text-white")
            $("#text-nav").addClass("text-black")
            $("#Toggle").find("span").css("background", "#4849b0")

        } else {
            $("#navbar").css("background-color", "transparent");
            $("#logo-bitlab").css("fill", "white")
            $("#text-nav").addClass("text-white")
            $("#text-nav").removeClass("text-black")
            $("#Toggle").find("span").css("background", "white")

        }
    });
    $("#Toggle").click(function() {
        $("#text-nav").removeClass("hidden")
        $("#text-nav").find("h3").removeClass("hidden")
        $("#navbar").css("background-color", "white");
        $("#logo-bitlab").css("fill", "#4849b0")
        $("#text-nav").removeClass("text-white")
        $("#text-nav").addClass("text-black")
        $("#Toggle").removeClass("md:hidden")
        $("#Toggle").addClass("hidden")
        $("#Toggle-Close").removeClass("hidden")
    });
    $("#Toggle-Close").click(function() {
        $("#text-nav").addClass("hidden")
        $("#text-nav").find("h3").addClass("hidden")
        $("#navbar").css("background-color", "transparent");
        $("#logo-bitlab").css("fill", "white")
        $("#text-nav").removeClass("text-black")
        $("#text-nav").addClass("text-white")
        $("#Toggle").addClass("md:hidden")
        $("#Toggle").removeClass("hidden")
        $("#Toggle-Close").addClass("hidden")
    });
});