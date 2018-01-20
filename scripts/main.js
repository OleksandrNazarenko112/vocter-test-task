$(document).ready(function() {

    var imagesPlansParts = [

        {
            carClass: 'mini',

            plan: ['images/cars/ситроен/минимальный.jpg', 'images/cars/ситроен/стандарт.jpg',
                'images/cars/ситроен/стандарт+.jpg', 'images/cars/ситроен/стандарт++.jpg',
                'images/cars/ситроен/стандарт+++.jpg', 'images/cars/ситроен/целиком.jpg'
            ],

            part: ['images/cars/ситроен/оптика.jpg', 'images/cars/ситроен/пороги-внутренние.jpg',
                'images/cars/ситроен/пороги-наружние.jpg', 'images/cars/ситроен/двери.jpg',
                'images/cars/ситроен/задние-крылья.jpg', 'images/cars/ситроен/капот.jpg',
                'images/cars/ситроен/передний-бампер.jpg', 'images/cars/ситроен/задний-бампер.jpg'
            ]
        },

        {
            carClass: 'middle',

            plan: ['images/cars/mazda/минимальный.jpg', 'images/cars/mazda/стандарт.jpg',
                'images/cars/mazda/стандарт+.jpg', 'images/cars/mazda/стандарт++.jpg',
                'images/cars/mazda/стандарт+++.jpg', 'images/cars/mazda/целиком.jpg'
            ],

            part: ['images/cars/mazda/оптика.jpg', 'images/cars/mazda/пороги-внутренние.jpg',
                'images/cars/mazda/пороги-наружние.jpg', 'images/cars/mazda/двери.jpg',
                'images/cars/mazda/заднее-крыло.jpg', 'images/cars/mazda/капот.jpg',
                'images/cars/mazda/передний-бампер.jpg', 'images/cars/mazda/задний-бампер.jpg'
            ]

        }, {
            carClass: 'premium',
            plan: ['images/cars/мерседес/минимальный.jpg', 'images/cars/мерседес/стандарт.jpg',
                'images/cars/мерседес/стандарт+.jpg', 'images/cars/мерседес/стандарт++.jpg',
                'images/cars/мерседес/стандарт+++.jpg', 'images/cars/мерседес/целиком.jpg'
            ],

            part: ['images/cars//мерседес/оптика.jpg', 'images/cars/мерседес/пороги-внутренние.jpg',
                'images/cars/мерседес/пороги-наружние.jpg', 'images/cars/мерседес/двери.jpg',
                'images/cars/мерседес/задние-крылья.jpg', 'images/cars/мерседес/капот.jpg',
                'images/cars/мерседес/передний-бампер.jpg', 'images/cars/мерседес/задний-бампер.jpg'
            ]
        }


    ];

    var defPlanIndex = $('.plans li .current-plan').parent().index();

    $(".partial-drp").click(function() {

        $(".partial").toggle(200);
        return false;
    });

    function curClassIndex() {
        var curClassIndex = $('.car-class.current-class').index();
        return curClassIndex;
    }

    function emptyImageWrapper() {
        $('.plans-container .image-wrapper').empty();
    }

    function defClassImg() {
        emptyImageWrapper()
        $('.plans-container .image-wrapper').append('<img src=' + imagesPlansParts[curClassIndex()].plan[defPlanIndex] + '>');
    }
    defClassImg();


    $('.plans li a').click(function() {
        return false;
    })


    $('.plans li').on('mouseover', function(event) {


        $('.plans li a').removeClass('current-plan');
        $(this).children().addClass('current-plan');


        $('.modules').css('display', 'block');


        var curPlanIndex = $(this).index();
        $('.modules-container .modules').css('display', 'none');
        $('.modules-container .modules:eq(' + curPlanIndex + ')').css('display', 'block');
        emptyImageWrapper()
        $('.plans-container .image-wrapper').append('<img src=' + imagesPlansParts[curClassIndex()].plan[curPlanIndex] + '>');

        return false;
    });


    $('.partial li').on('mouseover', function(event) {


        $('.modules').css('display', 'none');

        var curPartIndex = $(this).index();
        emptyImageWrapper()
        $('.plans-container .image-wrapper').append('<img src=' + imagesPlansParts[curClassIndex()].part[curPartIndex] + '>');

        return false;

    });


    $('.car-class a').on('click', function() {

        $(".cars-clases-container .car-class").removeClass('current-class');
        $('.modules').css('display', 'none');
        $(this).parent('.car-class').addClass('current-class');

        $('.plans li a').removeClass('current-plan');
        $('.plans li:eq(' + defPlanIndex + ') a').addClass('current-plan');

        defClassImg();
        return false;
    });


});