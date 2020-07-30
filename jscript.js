new WOW().init();

$(".hero-image").css({ height: $(window).height() + "px" });

$(window).on("resize", function() {
  $(".hero-image").css({ height: $(window).height() + "px" });
});
