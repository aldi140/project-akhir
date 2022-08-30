var multipleCardCarousel = document.querySelector(
    "#carouselExampleControls"
);
if (window.matchMedia("(min-width: 768px)").matches) {
    var carousel = new bootstrap.Carousel(multipleCardCarousel, {
        interval: false,
    });
    var carouselWidth = $(".carousel-inner")[0].scrollWidth;
    var cardWidth = $(".carousel-item").width();
    var scrollPosition = 0;
    $("#carouselExampleControls .carousel-control-next").on("click", function() {
        if (scrollPosition < carouselWidth - cardWidth * 4) {
            scrollPosition += cardWidth;
            $("#carouselExampleControls .carousel-inner").animate({
                    scrollLeft: scrollPosition
                },
                600
            );
        }
    });
    $("#carouselExampleControls .carousel-control-prev").on("click", function() {
        if (scrollPosition > 0) {
            scrollPosition -= cardWidth;
            $("#carouselExampleControls .carousel-inner").animate({
                    scrollLeft: scrollPosition
                },
                600
            );
        }
    }, );
} else {
    $(multipleCardCarousel).addClass("slide");
}


var multipleCardCarousel2 = document.querySelector(
    "#carousel-slider"
);
if (window.matchMedia("(min-width: 768px)").matches) {
    var carousel = new bootstrap.Carousel(multipleCardCarousel2, {
        interval: false,
    });
    var carouselWidth = $(".carousel-inner")[0].scrollWidth;
    var cardWidth = $(".carousel-item").width();
    var scrollPosition = 0;
    $("#carousel-slider .carousel-control-next").on("click", function() {
        if (scrollPosition < carouselWidth - cardWidth * 4) {
            scrollPosition += cardWidth;
            $("#carousel-slider .carousel-inner").animate({
                    scrollLeft: scrollPosition
                },
                600
            );
        }
    });
    $("#carousel-slider .carousel-control-prev").on("click", function() {
        if (scrollPosition > 0) {
            scrollPosition -= cardWidth;
            $("#carousel-slider .carousel-inner").animate({
                    scrollLeft: scrollPosition
                },
                600
            );
        }
    }, );
} else {
    $(multipleCardCarousel2).addClass("slide");
}