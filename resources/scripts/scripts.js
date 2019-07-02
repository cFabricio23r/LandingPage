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

    $("#Toggle-2").click(function() {
        $("#text-nav-2").removeClass("hidden")
        $("#text-nav-2").find("h3").removeClass("hidden")
        $("#navbar").css("background-color", "white");
        $("#Toggle-2").removeClass("md:hidden")
        $("#Toggle-2").addClass("hidden")
        $("#Toggle-Close-2").removeClass("hidden")
    });
    $("#Toggle-Close-2").click(function() {
        $("#text-nav-2").addClass("hidden")
        $("#text-nav-2").find("h3").addClass("hidden")
        $("#navbar").css("background-color", "transparent");
        $("#Toggle-2").addClass("md:hidden")
        $("#Toggle-2").removeClass("hidden")
        $("#Toggle-Close-2").addClass("hidden")
    });

    //Courses sort checbox
    $('input[name="gratis"]').click(function() {
        if ($('input[name="gratis"]').is(":checked")) {
            if ($('input[name="pagado"]').is(":checked")) {
                $(".gratis").show();
                $(".pagado").show();
            } else {
                $(".gratis").show();
                $(".pagado").hide();
            }
        } else if ($('input[name="gratis"]').prop("checked") == false) {
            if ($('input[name="pagado"]').prop("checked") == false) {
                $(".gratis").show();
                $(".pagado").show();
            } else {
                $(".gratis").hide();
            }
        }
    });
    $('input[name="pagado"]').click(function() {
        if ($('input[name="pagado"]').prop("checked") == true) {
            if ($('input[name="gratis"]').is(":checked")) {
                $(".gratis").show();
                $(".pagado").show();
            } else {
                $(".gratis").hide();
                $(".pagado").show();
            }
        } else if ($('input[name="pagado"]').prop("checked") == false) {
            if ($('input[name="gratis"]').prop("checked") == false) {
                $(".gratis").show();
                $(".pagado").show();
            } else {
                $(".pagado").hide();
            }
        }
    });

    //Courses sort checbox
    $("#ds-a").click(function() {
        $("#ds-a").addClass("active-click")
        $("#ed-a").removeClass("active-click")
        $("#d-a").removeClass("active-click")
        $("#e-a").removeClass("active-click")

        $(".DS").show();
        $(".ED").hide();
        $(".D").hide();
        $(".E").hide();

        $('input[name="pagado"]').prop("checked", false);
        $('input[name="gratis"]').prop("checked", false);
    });
    $("#ed-a").click(function() {
        $("#ed-a").addClass("active-click")
        $("#d-a").removeClass("active-click")
        $("#ds-a").removeClass("active-click")
        $("#d-a").removeClass("active-click")

        $(".DS").hide();
        $(".ED").show();
        $(".D").hide();
        $(".E").hide();

        $('input[name="pagado"]').prop("checked", false);
        $('input[name="gratis"]').prop("checked", false);
    });
    $("#d-a").click(function() {
        $("#d-a").addClass("active-click")
        $("#ds-a").removeClass("active-click")
        $("#ed-a").removeClass("active-click")
        $("#e-a").removeClass("active-click")

        $(".DS").hide();
        $(".ED").hide();
        $(".D").show();
        $(".E").hide();

        $('input[name="pagado"]').prop("checked", false);
        $('input[name="gratis"]').prop("checked", false);
    });
    $("#e-a").click(function() {
        $("#e-a").addClass("active-click")
        $("#ds-a").removeClass("active-click")
        $("#ed-a").removeClass("active-click")
        $("#d-a").removeClass("active-click")

        $(".DS").hide();
        $(".ED").hide();
        $(".D").hide();
        $(".E").show();

        $('input[name="pagado"]').prop("checked", false);
        $('input[name="gratis"]').prop("checked", false);
    });


    //Collapse List
    $(".toggle-hide").click(function() {
        if ($(this).find("div.hidden").hasClass("hidden")) {
            $(this).find("div.hidden").addClass("hidden-no");
            $(this).find("div.hidden").removeClass("hidden");
        } else {
            $(this).find("div.hidden-no").addClass("hidden");
            $(this).find("div.hidden").removeClass("hidden-no");
        }
    });
});