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
    $("Toggle").click(function() {
        $("#text-nav").css("display", "block")
    });
});