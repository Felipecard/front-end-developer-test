

$(function() {
    function atualiazar() {
        $('#watch-name').text( $(".slick-center").data("name") );
    }

    $(".watch-slider").on('init', function(){
        atualiazar();
    });


    $(".watch-slider").slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        centerMode: true,
        prevArrow: $("#seta_ant"),
        nextArrow: $("#seta_prox"),

        responsive: [
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });

    $(".watch-slider").on('afterChange', function(){
        atualiazar();
    });
    
})



